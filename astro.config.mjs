// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	site: 'https://dilzeen.com',
	trailingSlash: 'always',
	integrations: [
		sitemap({
			filter: (page) => !page.includes('/404') && !page.includes('/thank-you'),
		}),
	],
	vite: {
		plugins: [tailwindcss()],
	},
});
