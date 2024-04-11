import { siteUrl, defaultLang, supportedLanguages } from './src/config.ts';
import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";

const host = '0.0.0.0';
const sitemapLocales = {};

for (const lang of Object.keys(supportedLanguages)) {
	sitemapLocales[lang] = lang;
}

// https://astro.build/config
export default defineConfig({
	integrations: [
		sitemap({
			i18n: {
				defaultLocale: defaultLang,
				locales: sitemapLocales
			}
		}),
		mdx()
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
