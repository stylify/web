import { highlightCode } from "./services";
import path from 'path';
import fg from 'fast-glob';

const defaultPageTitle = 'Write CSS Faster and Efficiently. Write HTML. Get CSS.';
const defaultPageDescription = 'Stylify generates optimized utility-first CSS dynamicly based on what you write. Write HTML. Get CSS. No more unwanted CSS. No more unnecessary configuration.';
const isProduction = process.env.NODE_ENV === 'production';

export default {
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
			{ hid: 'og:image', property: 'og:image', content: '/images/og-image-v2.jpg' },
			{ hid: 'og:description', property: 'og:description', content: defaultPageDescription },
			// Twitter Card
			{ hid: 'twitter:title', name: 'twitter:title', content: defaultPageTitle },
			{ hid: 'twitter:description', name: 'twitter:description', content: defaultPageDescription }
		],
		link: [
			{ rel: 'apple-touch-icon', sizes: "180x180", href: '/images/favicon/apple-touch-icon.png?v2' },
			{ rel: 'icon', type: "image/png", size: "32x32", href: '/images/favicon/favicon-32x32.png?v2' },
			{ rel: 'icon', type: 'image/png', size: "16x16", href: '/images/favicon/favicon-16x16.png?v2' },
			{ rel: 'manifest', href: '/site.webmanifest' },
			{ rel: 'mask-icon', href: '/images/favicon/safari-pinned-tab.svg', color: "#01befe" },
			{ rel: 'shortcut icon', href: "/images/favicon/favicon.ico?v2"},
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
		'@nuxtjs/google-analytics',
		'@stylify/nuxt-module'
	],

	build: {
		transpile: [
			'@stylify/stylify/lib/index.cjs',
			'@stylify/stylify/esm/index.js'
		]
	},

	modules: [
		'@nuxt/content',
		'@nuxtjs/sitemap'
	],

	stylelint: {
		allowEmptyInput: true
	},

	sitemap: {
		hostname: 'https://stylifycss.com',
	},

	plugins: [
		'~plugins/index.ts'
	],

	// gtag("consent","default",{ad_storage:"denied",analytics_storage:"denied"})
	googleAnalytics: {
		id: isProduction ? 'UA-215428942-1' : null,
		storage: 'none'
	}

}
