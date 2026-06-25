import { stockImages, type StockImage } from './images';

export interface PagePortrait {
	src: string;
	alt: string;
	name: string;
	title: string;
}

export interface PageAccentSection {
	eyebrow: string;
	title: string;
	description: string;
	image: StockImage;
}

export interface PageCredentials {
	eyebrow: string;
	title: string;
	description: string;
	designation: string;
	certificate: {
		src: string;
		alt: string;
	};
	logo: {
		src: string;
		alt: string;
	};
}

export interface PageContent {
	title: string;
	subtitle: string;
	description: string;
	intro: string[];
	features: { title: string; description: string }[];
	steps?: { title: string; description: string }[];
	portrait?: PagePortrait;
	heroImage?: StockImage;
	introImage?: StockImage;
	supportingImages?: StockImage[];
	accentSection?: PageAccentSection;
	credentials?: PageCredentials;
}

export const pages: Record<string, PageContent> = {
	about: {
		title: 'About Dilzeen',
		subtitle: 'Local real estate guidance with a warm, personal approach to finding home.',
		description:
			'Learn about Dilzeen Engineer, a DFW realtor with Keller Williams Southlake, offering relocation support, investor guidance, and Vastu & Feng Shui home search.',
		heroImage: stockImages.elegantDining,
		supportingImages: [stockImages.stylishInterior],
		portrait: {
			src: '/images/dilzeen-engineer-about.png',
			alt: 'Dilzeen Engineer, DFW realtor, seated and smiling warmly',
			name: 'Dilzeen Engineer',
			title: 'Realtor® & Feng Shui Master',
		},
		intro: [
			'I\'m Dilzeen Engineer, a realtor serving the Dallas-Fort Worth area through Keller Williams Southlake. I take a warm, client-first approach with buyers, sellers, investors, and relocating families who want to make confident decisions during one of life\'s most important transitions.',
			'With more than a decade of experience in Vastu and Feng Shui, I look at each home with both practical real estate insight and a deeper understanding of balance, layout, and energy. Since 2012, I\'ve advised friends and family on property decisions and living spaces, helping them think about location, layout, and investment value, as well as harmony, flow, and long-term comfort.',
			'I know how overwhelming a move can feel. I\'ve moved across state lines and internationally, so I understand how important it is to find a home that feels right, not just on paper, but in everyday life. My goal is to make each step of the process feel clear, supported, and manageable, from our first conversation to closing day.',
			'Not every client is looking for Vastu or Feng Shui guidance, and that\'s okay. For the clients who do want that perspective, I can help them look at a home\'s layout, flow, direction, and overall feel before they make a decision. Whether you\'re searching for your first home, investing in property, relocating to DFW, or planning a space that better supports your lifestyle, I\'m here to help you find more than a property. I\'m here to help you find home.',
		],
		features: [
			{
				title: 'Dallas-Fort Worth Market Guidance',
				description:
					'Local insight into neighborhoods, schools, lifestyle fit, and market opportunities throughout DFW, including Southlake, Grapevine, Colleyville, Keller, and surrounding communities.',
			},
			{
				title: 'Relocation Support',
				description:
					'Thoughtful guidance for families and professionals moving across town, across state lines, or from another country.',
			},
			{
				title: 'Vastu & Feng Shui Perspective',
				description:
					'A balanced, non-dogmatic approach to evaluating homes, layouts, energy flow, and long-term comfort.',
			},
		],
		credentials: {
			eyebrow: 'Professional Credential',
			title: 'Certified Staging Advocate',
			description:
				'I\'m a RESA® Certified Staging Advocate™, having completed the Staging to Sell, What Every Agent Should Know™ course through the Real Estate Staging Association. For sellers, that means practical guidance on how to present a home so it shows at its best, from first impressions to listing photos and showings. Staging insight works alongside market strategy, helping properties feel inviting, well cared for, and ready for buyers without unnecessary expense or stress.',
			designation: 'RESA® Certified Staging Advocate™ Designation',
			certificate: {
				src: '/images/dilzeen-resa-certificate.png',
				alt: 'Certificate of Completion for Dilzeen Engineer as a RESA Certified Staging Advocate',
			},
			logo: {
				src: '/images/resa-pro-logo.png',
				alt: 'RESA-PRO Real Estate Staging Association logo',
			},
		},
		steps: [
			{
				title: 'Listen & Understand',
				description:
					'Every relationship begins with understanding your priorities, timeline, lifestyle, and what home truly means to you.',
			},
			{
				title: 'Strategize Together',
				description:
					'I\'ll help you create a clear plan for buying, selling, investing, relocating, or evaluating a home with both practical and intentional criteria in mind.',
			},
			{
				title: 'Guide to Closing',
				description:
					'From showings and offers to negotiations and closing, you stay supported with clear communication and steady guidance.',
			},
		],
	},
	'relocation-services': {
		title: 'Relocation Services',
		subtitle: 'Moving to the Dallas-Fort Worth area? I\'ll help make your transition smoother.',
		description:
			'Relocation services for families and professionals moving to the Dallas-Fort Worth metroplex. Area orientation, home search, and closing support.',
		heroImage: stockImages.coupleDreamHome,
		supportingImages: [stockImages.suburbanRedRoof],
		intro: [
			'Relocating to a new city is exciting, and it can also feel overwhelming. I provide hands-on relocation support for families, executives, and professionals moving to the Dallas-Fort Worth area.',
			'From virtual introductions and neighborhood tours to school district overviews and commute planning, you\'ll receive practical, local insight at every step. I coordinate closely with your timeline so you can focus on settling in, not stressing out.',
			'Whether your employer is sponsoring a move or you\'re relocating on your own, you\'ll have someone on the ground who knows the area and is ready to advocate for you before you arrive.',
		],
		features: [
			{
				title: 'Area Orientation',
				description: 'Neighborhood tours, community highlights, and honest guidance on where to focus your search.',
			},
			{
				title: 'Timeline Coordination',
				description: 'Structured planning aligned with your move date, lease end, or corporate relocation schedule.',
			},
			{
				title: 'End-to-End Support',
				description: 'From first virtual call through closing and move-in, one consistent point of contact.',
			},
		],
		steps: [
			{
				title: 'Discovery Call',
				description: 'Discuss your move timeline, must-haves, budget, and family needs.',
			},
			{
				title: 'Area & Home Search',
				description: 'Tour neighborhoods and properties in person or virtually, with local context.',
			},
			{
				title: 'Close & Settle In',
				description: 'Navigate offers, inspections, and closing, then connect with local resources.',
			},
		],
	},
	'vastu-feng-shui-home-search': {
		title: 'Vastu & Feng Shui Home Search',
		subtitle: 'Find a home that supports harmony, flow, and intentional living.',
		description:
			'Vastu and Feng Shui home search services in the Dallas-Fort Worth area. Practical layout, orientation, and flow guidance alongside traditional real estate criteria.',
		intro: [
			'I combine real estate guidance with Vastu and Feng Shui awareness to help clients evaluate homes with both practical insight and attention to how a space actually feels.',
		],
		features: [
			{
				title: 'Layout & Flow Assessment',
				description: 'Evaluate floor plans, entry points, and room relationships for comfort and balance.',
			},
			{
				title: 'Orientation & Light',
				description: 'Consider how a home sits on its lot, natural light patterns, and outdoor connections.',
			},
			{
				title: 'Integrated Search Strategy',
				description: 'Combine layout and flow criteria with location, value, schools, and investment potential.',
			},
		],
	},
	'buyers-investors': {
		title: 'Buyers & Investors',
		subtitle: 'Confident decisions for first-time buyers and seasoned investors alike.',
		description:
			'Buyer and investor real estate services in the Dallas-Fort Worth area. First-time buyer guidance, market analysis, and ROI-focused investment support.',
		heroImage: stockImages.coupleDreamHome,
		supportingImages: [stockImages.modernKitchen, stockImages.elegantDining],
		accentSection: {
			eyebrow: 'Investor Guidance',
			title: 'Clear, Property-Focused Analysis',
			description:
				'For investors, I bring a data-driven market perspective, evaluating rental yield, appreciation trends, and neighborhood growth with the same attention to detail I apply to every property review.',
			image: stockImages.grayModernExterior,
		},
		intro: [
			'Whether you\'re purchasing your first home or adding to an investment portfolio, I provide clear, data-informed guidance shaped around your goals. The Dallas-Fort Worth market offers strong opportunities, and navigating it well takes local expertise.',
			'For buyers, I simplify the process: pre-approval coordination, targeted home searches, offer strategy, inspection guidance, and closing support. For investors, the focus shifts to cash flow, appreciation potential, tenant demand, and long-term portfolio strategy.',
			'Every client receives honest market perspective, not hype, so you can move forward with confidence.',
		],
		features: [
			{
				title: 'First-Time Buyer Guidance',
				description: 'Patient, step-by-step education on financing, offers, inspections, and closing.',
			},
			{
				title: 'Investment Analysis',
				description: 'Evaluate rental yield, appreciation trends, and neighborhood growth potential.',
			},
			{
				title: 'Negotiation & Advocacy',
				description: 'Skilled representation to protect your interests from offer through closing.',
			},
		],
	},
	sellers: {
		title: 'Sellers',
		subtitle: 'Position your home to sell with strategy, presentation, and market insight.',
		description:
			'Seller representation in the Dallas-Fort Worth area. Pricing strategy, staging guidance, marketing, and skilled negotiation to maximize your home\'s value.',
		heroImage: stockImages.grayModernExterior,
		supportingImages: [stockImages.luxuryGardenExterior, stockImages.suburbanRedRoof],
		intro: [
			'Selling a home is both a financial decision and an emotional one. I help sellers across DFW navigate the process with a clear pricing strategy, professional marketing, and skilled negotiation, all designed to achieve the best possible outcome.',
			'From initial consultation through closing, you\'ll receive honest feedback on pricing, staging, and timing. I use Keller Williams\' marketing resources alongside personalized outreach to ensure your home reaches qualified buyers.',
			'The goal is not just to sell. It\'s to sell well, on your timeline, with as little stress as possible.',
		],
		features: [
			{
				title: 'Pricing Strategy',
				description: 'Data-driven comparative market analysis to position your home competitively.',
			},
			{
				title: 'Presentation & Staging',
				description: 'Practical recommendations to showcase your home\'s best features.',
			},
			{
				title: 'Marketing & Exposure',
				description: 'Professional photography, MLS listing, and targeted promotion to reach buyers.',
			},
		],
	},
	'leasing-rentals': {
		title: 'Leasing & Rentals',
		subtitle: 'Tenant and landlord representation with clarity and professionalism.',
		description:
			'Leasing and rental services in the Dallas-Fort Worth area. Tenant search, lease negotiation, and landlord guidance for residential rentals.',
		heroImage: stockImages.luxuryRentalHome,
		introImage: stockImages.luxuryRentalHome,
		intro: [
			'Whether you\'re searching for a rental home or leasing out a property you own, I provide straightforward, professional leasing support across the Dallas-Fort Worth area.',
			'For tenants, I help identify properties that match your lifestyle, commute, and budget, with clear guidance on lease terms and application processes. For landlords, my services include market-rate analysis, tenant placement support, and lease coordination.',
			'Property management referrals are available for owners who prefer hands-off oversight.',
		],
		features: [
			{
				title: 'Tenant Placement',
				description: 'Market your rental effectively and connect with qualified tenants.',
			},
			{
				title: 'Lease Guidance',
				description: 'Clear explanation of lease terms, deposits, and tenant/landlord responsibilities.',
			},
			{
				title: 'Rental Market Insight',
				description: 'Current rental rates and demand trends for informed pricing decisions.',
			},
		],
	},
	builders: {
		title: 'Builders',
		subtitle: 'Feng Shui & Vastu floor plan consulting for custom home builders.',
		description:
			'Custom home floor plan review and builder floor plan consulting. Practical Feng Shui for builders and balanced home design before construction begins.',
		intro: [
			'I work with custom home builders, residential developers, and design/build teams to review floor plans using Feng Shui and Vastu principles before construction begins.',
		],
		features: [
			{
				title: 'Pre-Construction Review',
				description: 'Floor plan guidance on room placement, entry flow, and directional layout.',
			},
			{
				title: 'Practical Recommendations',
				description: 'Clear feedback that respects your plans, budget, and construction process.',
			},
			{
				title: 'Builder Collaboration',
				description: 'Work alongside architects, designers, and clients on balanced home design.',
			},
		],
	},
	closings: {
		title: 'Past Closings',
		subtitle: 'Homes, milestones, and new beginnings I\'ve helped make possible.',
		description:
			'Explore past closings and success stories from Dilzeen Engineer. Homes successfully bought, sold, and rented across Dallas, Fort Worth, Southlake, and the greater DFW area.',
		intro: [
			'Every closing is more than a completed transaction. It\'s a new chapter, a fresh beginning, and a place where memories will be made.',
		],
		features: [],
	},
	reviews: {
		title: 'Client Reviews',
		subtitle: 'Hear from clients who worked with me on their real estate journey.',
		description:
			'Client reviews and testimonials for Dilzeen Engineer, DFW realtor with Keller Williams Southlake.',
		heroImage: stockImages.elegantDining,
		intro: [
			'Nothing speaks louder than the experience of clients I\'ve had the privilege to work with. From first-time buyers to relocating families and seasoned investors, clients often mention my warmth, responsiveness, and deep local knowledge.',
			'Read what past clients have shared about their experience. When you\'re ready, reach out to start your own journey.',
		],
		features: [],
	},
	contact: {
		title: 'Contact',
		subtitle: 'Ready to take the next step? Let\'s start the conversation.',
		description:
			'Contact Dilzeen Engineer, DFW realtor with Keller Williams Southlake. Schedule a consultation for buying, selling, relocation, or Vastu & Feng Shui home search.',
		intro: [
			'Whether you have a specific property in mind or are just beginning to explore your options, I\'m here to help. Reach out by phone, email, or the form below, and expect a prompt, personal response.',
		],
		features: [],
	},
};

export const testimonials = [
	{
		quote:
			'Dilzeen made our relocation from California feel effortless. She knew exactly which neighborhoods to show us and helped us close in under 30 days.',
		name: 'Priya M.',
		location: 'Southlake',
	},
	{
		quote:
			'As an investor, I appreciated Dilzeen\'s honest market analysis. No pressure, just solid data and great negotiation on our behalf.',
		name: 'James T.',
		location: 'Grapevine',
	},
	{
		quote:
			'The Vastu perspective was exactly what we were looking for. Dilzeen found us a home with beautiful natural light and a layout that just feels right.',
		name: 'Anita & Raj K.',
		location: 'Colleyville',
	},
	{
		quote:
			'We sold our home above asking thanks to Dilzeen\'s pricing strategy and staging advice. Professional, warm, and always available.',
		name: 'Michelle R.',
		location: 'Southlake',
	},
	{
		quote:
			'First-time buyers and we had no idea where to start. Dilzeen walked us through every step with patience and clarity.',
		name: 'David & Lauren S.',
		location: 'Keller',
	},
	{
		quote:
			'Our new construction build had a few bumps, but Dilzeen handled every issue with the builder. We couldn\'t have done it without her.',
		name: 'Robert H.',
		location: 'Southlake',
	},
];

export const whyChoose = [
	{
		title: 'Local DFW Expertise',
		description: 'Deep knowledge of Dallas-Fort Worth neighborhoods, schools, and market trends, including Southlake and surrounding communities.',
		icon: 'local' as const,
	},
	{
		title: 'Relocation Support',
		description: 'Structured guidance for families and professionals moving to the DFW area.',
		icon: 'relocation' as const,
	},
	{
		title: 'Investor Guidance',
		description: 'Data-driven analysis for buyers building long-term real estate portfolios.',
		icon: 'investor' as const,
	},
	{
		title: 'Vastu & Feng Shui Home Search',
		description: 'Layout, orientation, and energy-flow perspective for clients who value intentional living.',
		icon: 'holistic' as const,
	},
];

export const services = [
	{
		title: 'Relocation Services',
		description: 'Thoughtful support for moves to the Dallas-Fort Worth metroplex.',
		href: '/relocation-services',
	},
	{
		title: 'Buyers & Investors',
		description: 'Clear guidance for first-time buyers and seasoned investors.',
		href: '/buyers-investors',
	},
	{
		title: 'Sellers',
		description: 'Strategic pricing, marketing, and negotiation.',
		href: '/sellers',
	},
	{
		title: 'Leasing / Rentals',
		description: 'Tenant and landlord representation.',
		href: '/leasing-rentals',
	},
	{
		title: 'Builders',
		description: 'Feng Shui & Vastu floor plan consulting for builders.',
		href: '/builders',
	},
	{
		title: 'Past Closings',
		description: 'Homes successfully closed across DFW.',
		href: '/closings',
	},
];
