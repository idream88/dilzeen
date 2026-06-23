export interface NavLink {
	label: string;
	href: string;
}

export interface NavItem {
	label: string;
	href?: string;
	children?: NavLink[];
}

export const nav: NavItem[] = [
	{ label: 'Home', href: '/' },
	{ label: 'About', href: '/about' },
	{
		label: 'Services',
		children: [
			{ label: 'Relocation Services', href: '/relocation-services' },
			{ label: 'Buyers & Investors', href: '/buyers-investors' },
			{ label: 'Sellers', href: '/sellers' },
			{ label: 'Leasing / Rentals', href: '/leasing-rentals' },
			{ label: 'Builders', href: '/builders' },
			{ label: 'Past Closings', href: '/closings' },
		],
	},
	{ label: 'Vastu & Feng Shui', href: '/vastu-feng-shui-home-search' },
	{ label: 'Reviews', href: '/reviews' },
];

export const contactHref = '/contact';

export function flattenNavLinks(): NavLink[] {
	const links: NavLink[] = [];

	for (const item of nav) {
		if (item.href) {
			links.push({ label: item.label, href: item.href });
		}
		if (item.children) {
			links.push(...item.children);
		}
	}

	links.push({ label: 'Contact', href: contactHref });

	return links;
}

export function isActive(pathname: string, href: string): boolean {
	if (href === '/') return pathname === '/';
	return pathname === href || pathname.startsWith(`${href}/`);
}

export function isNavItemActive(pathname: string, item: NavItem): boolean {
	if (item.href && isActive(pathname, item.href)) return true;
	if (item.children) {
		return item.children.some((child) => isActive(pathname, child.href));
	}
	return false;
}
