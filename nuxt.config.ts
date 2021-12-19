import { highlightCode } from "./services";
import path from 'path';
import fg from 'fast-glob';

const defaultPageTitle = 'Stylify. Dynamic CSS Generator. Write HTML. Get CSS.';
const defaultPageDescription = 'Stylify is a library that generates CSS dynamicly based on what you write.';

export default {
	// Global page headers: https://go.nuxtjs.dev/config-head
	server: {
		host: '0.0.0.0'
	},

	target: 'static',

	head: {
		title: defaultPageTitle,
		htmlAttrs: {
			lang: 'en'
		},
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: defaultPageDescription },
			{ name: 'format-detection', content: 'telephone=no' },
			{ name: 'msapplication-TileColor', content: '#01befe' },
			{ name: 'theme-color', content: '#01befe' },
			// Open Graph
			{ hid: 'og:title', property: 'og:title', content: 'Stylify' },
			{ hid: 'og:image', property: 'og:image', content: '/images/og-image.jpg' },
			{ hid: 'og:description', property: 'og:description', content: defaultPageDescription },
			// Twitter Card
			{ hid: 'twitter:title', name: 'twitter:title', content: defaultPageTitle },
			{ hid: 'twitter:description', name: 'twitter:description', content: defaultPageDescription }
		],
		link: [
			{ rel: 'apple-touch-icon', sizes: "180x180", href: '/images/favicon/apple-touch-icon.png' },
			{ rel: 'icon', type: "image/png", size: "32x32", href: '/images/favicon/favicon-32x32.png' },
			{ rel: 'icon', type: 'image/png', size: "16x16", href: '/images/favicon/favicon-16x16.png' },
			{ rel: 'manifest', href: '/site.webmanifest' },
			{ rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: "#5bbad5" }
		]
	},

	css: [
		'~/assets/fonts/icons/style.css',
		'normalize.css/normalize.css'
	],

	generate: {
		fallback: '404.html',
		routes() {
			const actualPath = __dirname;
			const contentPath = path.join(actualPath, 'content');
			let files = fg.sync(path.join(contentPath, 'docs', '**', '*.md'));

			return files.map((file) => {
				return file.replace(contentPath, '').replace('index.md', '').replace('.md', '');
			});
		}
	},

	components: true,

	content: {
		markdown: {
			highlighter(code: string, lang: string) {
				return `<pre class="line-numbers language-${lang}"><code>${highlightCode(code, lang)}</code></pre>`;
			}
		}
	},

	buildModules: [
		'@nuxt/typescript-build',
		'@nuxtjs/stylelint-module',
		'@nuxtjs/google-analytics',
		'@stylify/nuxt-module'
	],

	modules: [
		'@nuxt/content',
		'@nuxtjs/sitemap'
	],

	sitemap: {
		hostname: 'https://stylify.dev',
	},

	plugins: [
		'~plugins/index.ts'
	],

	googleAnalytics: {
		id: 'UA-215428942-1'
	}

}
