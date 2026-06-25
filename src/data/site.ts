export const site = {
	name: 'Dilzeen Engineer',
	logo: {
		light: {
			src: '/images/dilzeen-full-logo-white-background.png',
			src2x: '/images/dilzeen-full-logo-white-background-2x.png',
		},
		dark: {
			src: '/images/dilzeen-full-logo-transparent.png',
			src2x: '/images/dilzeen-full-logo-transparent-2x.png',
		},
		alt: 'Dilzeen Engineer logo',
	},
	tagline: 'DFW Realtor with local expertise and a Vastu & Feng Shui home search perspective',
	affiliation: 'Keller Williams Southlake',
	defaultDescription:
		'Dilzeen Engineer is a DFW realtor with Keller Williams Southlake, helping buyers, sellers, and relocating families with relocation support, investments, and Vastu & Feng Shui home search across Dallas-Fort Worth.',
	url: 'https://www.example.com',
	locale: 'en_US',
	phone: '(949) 813-4699',
	email: 'DilzeenEngineer@KW.com',
	address: {
		street: '2106 E State Highway 114',
		suite: 'Ste 101',
		city: 'Southlake',
		state: 'TX',
		zip: '76092',
	},
	hours: 'Monday – Friday, 9:00 AM – 6:00 PM',
	license: 'Texas Real Estate License #0828341',
	// Replace with your Formspree form ID: https://formspree.io
	formspreeEndpoint: 'https://formspree.io/f/PLACEHOLDER',
	areaServed: ['Southlake', 'Grapevine', 'Colleyville', 'Keller', 'DFW Metroplex'],
	social: {
		facebook: '',
		instagram: '',
		linkedin: '',
	},
} as const;

export function formatTitle(pageTitle: string): string {
	return `${pageTitle} | ${site.name}`;
}

export function fullStreetAddress(): string {
	const { street, suite } = site.address;
	return suite ? `${street}, ${suite}` : street;
}
