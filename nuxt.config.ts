import { highlightCode } from "./services";
import { BlogRepository } from './services/model/BlogRepository';
import path from 'path';
import fg from 'fast-glob';
import fs from 'fs';

const defaultPageTitle = 'Code your website faster with CSS-like utilities | Stylify CSS';
const defaultPageDescription = 'Stylify CSS uses CSS-like selectors to generate optimized utility-first CSS. Code your website faster. Don\'t study CSS framework. Focus on coding.';
const isProduction = process.env.NODE_ENV === 'production';

const excludedRoutes = [
	'/docs/autoprefixer',
	'/docs/autoprefixer/',
	'/404',
	'/404/',
	'/docs/profiler',
	'/docs/profiler/'
];

const domain = 'https://stylifycss.com';
const defaultOgImage = `${domain}/images/og-image-v2.jpg`;

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
			{ hid: 'description', name: 'description', content: defaultPageDescription },
			{ hid: 'robots', name: "robots", content: 'index, follow'},
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ name: 'format-detection', content: 'telephone=no' },
			{ name: 'msapplication-TileColor', content: '#01befe' },
			{ name: 'theme-color', content: '#01befe' },
			// Open Graph
			{ hid: 'og:title', property: 'og:title', content: defaultPageTitle },
			{ hid: 'og:image', property: 'og:image', content: defaultOgImage },
			{ hid: 'og:description', property: 'og:description', content: defaultPageDescription },
			// Twitter Card
			{ hid: 'twitter:image:src', name: 'twitter:image:src', content: defaultOgImage },
			{ hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
			{ hid: 'twitter:title', name: 'twitter:title', content: defaultPageTitle },
			{ hid: 'twitter:description', name: 'twitter:description', content: defaultPageDescription },
			{ hid: 'twitter:site', name: 'twitter:site', content: '@stylifycss' },
		],
		link: [
			{ rel: 'apple-touch-icon', sizes: "180x180", href: '/images/favicon/apple-touch-icon.png?v2' },
			{ rel: 'icon', type: "image/png", size: "32x32", href: '/images/favicon/favicon-32x32.png?v2' },
			{ rel: 'icon', type: 'image/png', size: "16x16", href: '/images/favicon/favicon-16x16.png?v2' },
			{ rel: 'manifest', href: '/site.webmanifest' },
			{ rel: 'mask-icon', href: '/images/favicon/safari-pinned-tab.svg', color: "#01befe" },
			{ rel: 'shortcut icon', href: "/images/favicon/favicon.ico?v2"},
			{ rel: 'preconnect', href: 'https://api.github.com'},
			{ rel: 'dns-prefetch', href: 'https://api.github.com'},
			{ rel: 'alternate', type: 'application/rss+xml', title: 'Stylify CSS blog posts RSS feed.', href: '/rss/blog.rss'}
		],
		script: [
			{
				innerHTML: `{
					"@context": "https://schema.org",
					"@type": "Organization",
					"url": "https://www.example.com",
					"logo": "${domain}/images/logo/vertical.png"
				}`,
				type: 'application/ld+json'
			},
			{
				innerHTML: `{
					"@context": "https://schema.org",
					"@type": "WebSite",
					"url": "${domain}",
					"potentialAction": {
						"@type": "SearchAction",
						"target": {
							"@type": "EntryPoint",
							"urlTemplate": "${domain}/?search={search_term_string}"
						},
						"query-input": "required name=search_term_string"
					}
				}`,
				type: 'application/ld+json'
			},
		],
		__dangerouslyDisableSanitizers: ['script']
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

	hooks: {
		'generate:before': async () => {
			const { $content } = require("@nuxt/content");
			const blogRepository = new BlogRepository($content);
			const files = await blogRepository.createQueryBuilder().sortBy("createdAt", "desc")
				.only(["path", "annotation", "title"])
				.fetch();

			const postItems: string[] = [];

			files.forEach((file: any) => {
				let { path, title, annotation }  = file;
				path = path.replace(/\/index$/, '');
				path = path.replace('\/$', '');

				const item = `
					<item>
						<title>${title}</title>
						<link>${domain}/${path}</link>
						<guid>${domain}/${path}</guid>
						<description>${annotation}</description>
					</item>
				`.trim();

				postItems.push(item);
			});

			const postsXml = `
				<?xml version="1.0" encoding="UTF-8" ?>
				<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
					<channel>
						<title>Stylify CSS</title>
						<link>${domain}</link>
						<atom:link href="${domain}/rss/blog.rss" rel="self" type="application/rss+xml"/>
						<description>Stylify is a library that CSS uses CSS-like selectors to generate optimized utility-first CSS. Code your website faster. Don't study CSS framework. Focus on coding.</description>
						<image>
							<url>${domain}/images/og-image-v2.jpg</url>
							<link>${domain}</link>
							<title>Stylify CSS</title>
						</image>
						${postItems.join('\n')}
					</channel>
				</rss>
			`.trim();

			fs.writeFileSync('static/rss/blog.rss', postsXml);
		}
	},

	trailingSlash: false,
	sitemap: {
		hostname: domain,
		exclude: excludedRoutes,
		routes: async () => {
			const { $content } = require("@nuxt/content");
			const files = await $content({ deep: true }).only(["path"]).fetch();

			const routes = files
				.map((file: any) => {
					let path  = file.path;
					path = path.replace(/\/index$/, '');
					path = path.replace('\/$', '');

					return path;
				})
				.filter((path: any) => {
					return !excludedRoutes.includes(path);
				});

			return routes;
		}
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
