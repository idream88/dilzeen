import { copyFile, readFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';

const source = 'dist/sitemap-0.xml';
const target = 'dist/sitemap.xml';

if (!existsSync(source)) {
	console.error('Expected dist/sitemap-0.xml from @astrojs/sitemap.');
	process.exit(1);
}

const xml = await readFile(source, 'utf8');

if (xml.includes('example.com')) {
	console.error('Sitemap still contains example.com.');
	process.exit(1);
}

if (!xml.includes('https://dilzeen.com/')) {
	console.error('Sitemap is missing https://dilzeen.com/.');
	process.exit(1);
}

await copyFile(source, target);
console.log('Wrote dist/sitemap.xml');
