export interface ClosingPhoto {
	src: string;
	caption: string;
	alt: string;
}

const STREET_SUFFIXES = new Set(['dr', 'st', 'rd', 'ln', 'ct', 'ave', 'blvd', 'hwy']);

function titleCaseWord(word: string): string {
	const lower = word.toLowerCase();
	if (STREET_SUFFIXES.has(lower)) {
		return lower.charAt(0).toUpperCase() + lower.slice(1);
	}
	return lower.charAt(0).toUpperCase() + lower.slice(1);
}

function titleCaseSegment(segment: string): string {
	return segment
		.split(/\s+/)
		.filter(Boolean)
		.map(titleCaseWord)
		.join(' ');
}

/** Turn a slug like `820-deer-hollow-southlake` into a readable address caption. */
export function formatClosingCaption(slug: string): string {
	const cleaned = slug.replace(/\.+/g, '').replace(/-+/g, '-').replace(/^-|-$/g, '');
	const parts = cleaned.split('-');

	if (parts.length < 2) {
		return titleCaseSegment(cleaned.replace(/-/g, ' '));
	}

	const number = parts[0];
	if (!/^\d+$/.test(number)) {
		return `${titleCaseSegment(cleaned.replace(/-/g, ' '))}, TX`;
	}

	const cities = [
		'southlake',
		'hurst',
		'flower mound',
		'fort worth',
		'dallas',
		'grapevine',
		'colleyville',
		'keller',
	];

	let cityStart = parts.length;
	for (let size = 2; size >= 1; size--) {
		for (let i = 1; i <= parts.length - size; i++) {
			const candidate = parts.slice(i, i + size).join(' ');
			if (cities.includes(candidate)) {
				cityStart = i;
				break;
			}
		}
		if (cityStart < parts.length) break;
	}

	const street = titleCaseSegment(parts.slice(1, cityStart).join(' '));
	const city = titleCaseSegment(parts.slice(cityStart).join(' '));

	return `${number} ${street}, ${city}, TX`;
}

function closingPhoto(slug: string, altPrefix = 'Successfully closed home at'): ClosingPhoto {
	const caption = formatClosingCaption(slug.replace(/-interior$/, ''));
	return {
		src: `/images/closings/${slug}.png`,
		caption,
		alt: `${altPrefix} ${caption}`,
	};
}

export const closingsPage = {
	seo: {
		title: 'Past Closings',
		description:
			'Explore homes Dilzeen Engineer has helped clients successfully close across Dallas, Fort Worth, Southlake, and the greater DFW area.',
	},
	hero: {
		eyebrow: 'Success Stories',
		title: 'Past Closings',
		subtitle: 'Homes, milestones, and new beginnings I\'ve helped make possible.',
		intro: [
			'Every closing is more than a completed transaction. It\'s a new chapter, a fresh beginning, and a place where memories will be made. Here are a few of the homes I\'ve helped clients close with care, guidance, and attention to detail.',
			'From first conversations to final signatures, I bring a calm, thoughtful approach to each real estate journey.',
		],
	},
	galleryIntro:
		'Each home tells a story. These past closings reflect the trust clients have placed in me to guide them through one of life\'s most meaningful decisions.',
	cta: {
		title: 'Ready for Your Next Chapter?',
		body: 'Whether you\'re preparing to buy, sell, relocate, or invest, I\'m ready to help you move forward with confidence.',
		button: {
			text: 'Start Your Home Journey',
			href: '/contact',
		},
	},
};

export const closingPhotos: ClosingPhoto[] = [
	closingPhoto('820-deer-hollow-southlake'),
	closingPhoto('121-corinna-ct-hurst'),
	closingPhoto('219-canyon-lake-dr-southlake'),
	closingPhoto('1633-mocking-bird-lane-southlake'),
	closingPhoto('2800-serenity-grove-fort-worth'),
	closingPhoto('1615-lopo-rd-flower-mound'),
	closingPhoto('2816-serenity-grove-ln-fort-worth'),
	closingPhoto('3008-tooley-dr-fort-worth'),
	closingPhoto('3009-tooley-dr-fort-worth'),
	closingPhoto('3016-tooley-dr-fort-worth'),
	closingPhoto('3016-tooley-dr-fort-worth-interior', 'Successfully rented home at'),
	closingPhoto('3017-tooley-dr-fort-worth'),
	closingPhoto('3108-lynmar-ln-fort-worth'),
	closingPhoto('9113-schram-rd-fort-worth'),
	closingPhoto('6108-abrams-rd-dallas', 'Successfully rented home at'),
	closingPhoto('9928-voyager-ln-fort-worth', 'Successfully rented home at'),
];
