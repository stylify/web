import { highlightCode } from "./services";

export default {
	// Global page headers: https://go.nuxtjs.dev/config-head
	server: {
		host: '0.0.0.0'
	},

	target: 'static',
	ssr: false,

	head: {
		title: 'Stylify',
		htmlAttrs: {
			lang: 'en'
		},
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: '' },
			{ name: 'format-detection', content: 'telephone=no' },
			{ name: 'msapplication-TileColor', content: '#01befe' },
			{ name: 'theme-color', content: '#01befe' }
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

	router: {
		extendRoutes(routes: any[], resolve: any) {
			routes.push({
				name: 'docs',
				path: '/docs',
				component: resolve(__dirname, 'pages/docs/_.vue')
			})
		}
	},

	document: {
		loaders: {
			vue: {
				compilerOptions: {
				preserveWhitespace: true
				}
			}
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
		"@stylify/nuxt-module"
	],

	modules: [
		'@nuxt/content',
		'@nuxt/image',
		'@nuxtjs/sitemap'
	],

	sitemap: {
		hostname: 'https://stylify.dev',
	},

	plugins: [
		'~plugins/index.ts'
	],

	googleAnalytics: {
		id: 'UA-XXX-X'
	}

}
