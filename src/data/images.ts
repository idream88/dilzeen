export interface StockImage {
	src: string;
	alt: string;
	objectPosition?: string;
}

const stock = '/images/stock';

export const stockImages = {
	coupleDreamHome: {
		src: `${stock}/rear-view-of-couple-looking-at-modern-luxury-house.jpg`,
		alt: 'A couple viewed from behind standing on a lush lawn, looking at a modern white luxury home with a swimming pool and large glass windows',
		objectPosition: 'center 40%',
	},
	blueprintPlanning: {
		src: `${stock}/architects-discussing-blueprint-plans-in-office-meeting.jpg`,
		alt: 'Two professionals reviewing architectural floor plans with sticky notes on a bright office desk',
		objectPosition: 'center center',
	},
	grayModernExterior: {
		src: `${stock}/gray-modern-house-exterior-with-lush-greenery.jpg`,
		alt: 'Exterior of a large modern luxury home with dark gray siding, white stone accents, and lush green landscaping, beautifully illuminated at dusk',
		objectPosition: 'center center',
	},
	suburbanRedRoof: {
		src: `${stock}/suburban-home-with-red-tiled-roof-and-landscaping.jpg`,
		alt: 'A welcoming suburban home with a red clay tile roof, brick exterior, and manicured front landscaping',
		objectPosition: 'center center',
	},
	luxuryGardenExterior: {
		src: `${stock}/view-of-luxurious-modern-house-exterior-with-garden.jpg`,
		alt: 'A luxurious modern white house with a dark gabled roof and large glass windows, featuring a swimming pool reflecting the architecture at golden hour',
		objectPosition: 'center center',
	},
	stylishInterior: {
		src: `${stock}/stylish-home-interior-with-modern-decor-and-stairs.jpg`,
		alt: 'A luxurious modern home interior featuring a glass-railed staircase, a plush cream sofa, gray velvet armchairs, and elegant gold accents in a bright open-concept living room',
		objectPosition: 'center center',
	},
	spaBathroom: {
		src: `${stock}/bathtub-in-a-bright-stylish-bathroom-setting.jpg`,
		alt: 'A serene spa-like bathroom and lounge with a freestanding soaking tub, warm natural light, and neutral tones',
		objectPosition: 'center center',
	},
	elegantDining: {
		src: `${stock}/elegant-dining-room-interior-with-large-window-view.jpg`,
		alt: 'An elegant dining room with a stone fireplace, chandelier, and floor-to-ceiling windows overlooking a lush garden',
		objectPosition: 'center center',
	},
	modernKitchen: {
		src: `${stock}/modern-kitchen-interior-with-island-and-natural-light.jpg`,
		alt: 'A warm, sun-drenched modern kitchen with a large island and pendant lighting, creating an inviting premium home atmosphere',
		objectPosition: 'center center',
	},
	luxuryRentalHome: {
		src: `${stock}/luxury-rental-home.jpg`,
		alt: 'Modern suburban luxury home with stone exterior, manicured green lawn, and a clear blue sky, representing high-end leasing and rental opportunities',
		objectPosition: 'center center',
	},
} as const satisfies Record<string, StockImage>;
