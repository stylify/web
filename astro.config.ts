import { siteUrl, defaultLang, supportedLanguages } from './src/config.ts';
import { stylify } from '@stylify/astro';
import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import image from "@astrojs/image";

const host = '0.0.0.0';
const sitemapLocales = {};

for (const lang of Object.keys(supportedLanguages)) {
	sitemapLocales[lang] = lang;
}

// https://astro.build/config
export default defineConfig({
	integrations: [
		stylify({
			compiler: {
				mangleSelectors: typeof process.env.STYLIFY_MANGLE_SELECTORS !== 'undefined'
			},
			bundles: [{
				files: ['./src/**/*.{astro,ts,js,tsx,mdx}'],
				outputFile: './src/assets/styles/stylify.css'
			}],
			importDefaultBundle: false
		}),
		sitemap({
			i18n: {
				defaultLocale: defaultLang,
				locales: sitemapLocales
			}
		}),
		mdx(),
		image({
			serviceEntryPoint: '@astrojs/image/sharp'
		})
	],
	markdown: {
		syntaxHighlight: 'prism',
	},
	server: {
		host,
		port: 3000
	},
	site: siteUrl,
	vite: {
		server: {
			hmr: {
				protocol: 'ws',
				host
			}
		}
	}
});
