<!--
stylify-components
	navigation__link: 'margin-left:24px color:#fefefe text-decoration:none hover:color:$blue1'
/stylify-components
-->
<template>
	<div>
		<header class="
			background:rgba(10,16,29,0.8) backdrop-filter:blur(8px) border-bottom:1px_solid_transparent
			border-color:$blue5 position:sticky top:-110px z-index:3
			sm:top:-55px minw1500px:top:0
		">
			<div class="
				display:flex flex-direction:column justify-content:center padding-top:8px padding-bottom:8px
				justify-content:space-between align-items:center container container-lg
				minw1500px:flex-direction:row
				lg:padding-top:8px
			">
				<div class="display:flex flex-direction:column sm:flex-direction:row align-items:center margin-bottom:12px width:100% minw1500px:width:auto minw1500px:margin-bottom:0 justify-content:space-between">
					<section class="display:flex minw1500px:min-width:300px align-items:center margin-bottom:12px sm:margin-bottom:0">
						<nuxt-link to="/" class="text-decoration:none display:flex maxw400px:width:112px maxw400px:height:auto" aria-label="Homepage">
							<svg width="150" height="45" viewBox="0 0 661 202" fill="none">
								<path d="M233.975 136.98C223.335 136.98 214.655 134.693 207.935 130.12C201.308 125.453 197.995 118.873 197.995 110.38C197.995 109.54 198.088 108.28 198.275 106.6H223.195C222.915 110.147 223.755 112.947 225.715 115C227.675 117.053 230.662 118.08 234.675 118.08C238.315 118.08 241.162 117.287 243.215 115.7C245.362 114.113 246.435 111.873 246.435 108.98C246.435 105.993 245.082 103.567 242.375 101.7C239.762 99.8333 235.655 97.7333 230.055 95.4C224.642 93.16 220.208 91.06 216.755 89.1C213.395 87.0467 210.455 84.2933 207.935 80.84C205.415 77.3867 204.155 73.0467 204.155 67.82C204.062 61.38 205.648 55.78 208.915 51.02C212.182 46.26 216.708 42.62 222.495 40.1C228.282 37.58 234.908 36.32 242.375 36.32C249.095 36.32 255.068 37.3933 260.295 39.54C265.522 41.5933 269.582 44.6267 272.475 48.64C275.368 52.56 276.815 57.2267 276.815 62.64C276.815 64.04 276.768 65.0667 276.675 65.72H251.195C251.288 65.3467 251.335 64.7867 251.335 64.04C251.335 61.4267 250.402 59.3267 248.535 57.74C246.762 56.06 244.288 55.22 241.115 55.22C237.755 55.22 235.002 56.06 232.855 57.74C230.802 59.3267 229.775 61.52 229.775 64.32C229.775 67.12 231.082 69.5 233.695 71.46C236.308 73.3267 240.368 75.52 245.875 78.04C251.382 80.56 255.862 82.8933 259.315 85.04C262.862 87.1867 265.895 90.08 268.415 93.72C270.935 97.2667 272.195 101.653 272.195 106.88C272.195 112.667 270.655 117.847 267.575 122.42C264.495 126.993 260.062 130.587 254.275 133.2C248.488 135.72 241.722 136.98 233.975 136.98ZM315.485 109.12C315.392 109.587 315.345 110.193 315.345 110.94C315.345 112.62 315.812 113.833 316.745 114.58C317.772 115.327 319.405 115.7 321.645 115.7H330.185L326.545 136H314.365C298.685 136 290.845 129.42 290.845 116.26C290.845 114.3 291.078 111.827 291.545 108.84L297.145 77.76H287.625L291.125 57.88H300.645L304.005 38.84H327.945L324.585 57.88H340.265L336.765 77.76H321.085L315.485 109.12ZM372.52 57.88L382.04 106.74L408.64 57.88H434.54L365.24 173.1H339.48L364.4 133.34L345.92 57.88H372.52ZM472.617 32.4L454.277 136H430.337L448.677 32.4H472.617ZM499.926 49.76C496.193 49.76 493.206 48.78 490.966 46.82C488.819 44.7667 487.746 42.2 487.746 39.12C487.746 34.92 489.379 31.3267 492.646 28.34C495.913 25.3533 499.879 23.86 504.546 23.86C508.279 23.86 511.219 24.8867 513.366 26.94C515.513 28.9 516.586 31.4667 516.586 34.64C516.586 38.7467 514.953 42.2933 511.686 45.28C508.419 48.2667 504.499 49.76 499.926 49.76ZM510.286 57.88L496.566 136H472.626L486.346 57.88H510.286ZM569.515 46.68C564.942 46.4 561.582 47.0533 559.435 48.64C557.382 50.2267 555.982 53.0733 555.235 57.18L555.095 57.88H567.975L564.475 77.76H551.595L541.375 136H517.295L527.515 77.76H518.835L522.335 57.88H531.015L531.435 55.64C533.208 46.0267 537.268 38.7467 543.615 33.8C550.055 28.76 558.595 26.24 569.235 26.24C570.915 26.24 572.175 26.2867 573.015 26.38L569.515 46.68ZM598.004 57.88L607.524 106.74L634.124 57.88H660.024L590.724 173.1H564.964L589.884 133.34L571.404 57.88H598.004Z" fill="white"/>
								<rect width="180" height="180" rx="90" fill="#01BEFE"/>
								<path d="M128.99 80.4432C127.57 80.4432 126.344 81.4391 126.053 82.8292L123.458 95.2401C123.069 97.1036 124.491 98.8541 126.395 98.8541H136.201C137.858 98.8541 139.201 100.197 139.201 101.854V117.497C139.201 119.154 137.858 120.497 136.201 120.497H120.599C119.181 120.497 117.956 121.49 117.663 122.878L114.131 139.619C113.838 141.007 112.614 142 111.196 142H95.3301C93.424 142 92.0012 140.246 92.3947 138.381L95.4044 124.117C95.7979 122.252 94.3751 120.497 92.469 120.497H75.7785C74.3604 120.497 73.1359 121.49 72.8432 122.878L69.3108 139.619C69.018 141.007 67.7936 142 66.3754 142H50.5099C48.6038 142 47.181 140.246 47.5745 138.381L50.5842 124.117C50.9777 122.252 49.5549 120.497 47.6488 120.497H34C32.3431 120.497 31 119.154 31 117.497V101.854C31 100.197 32.3431 98.8541 34 98.8541H53.4472C54.8674 98.8541 56.0931 97.8582 56.3837 96.4681L58.9788 84.0572C59.3684 82.1937 57.9461 80.4432 56.0423 80.4432H42.7991C41.1422 80.4432 39.7991 79.1001 39.7991 77.4432V61.8C39.7991 60.1431 41.1422 58.8 42.7991 58.8H61.7021C63.1197 58.8 64.3438 57.8077 64.6372 56.4208L68.0303 40.3792C68.3236 38.9923 69.5477 38 70.9653 38H86.8302C88.7369 38 90.1598 39.7554 89.7653 41.6208L86.8975 55.1792C86.5029 57.0446 87.9259 58.8 89.8325 58.8H106.522C107.94 58.8 109.164 57.8077 109.457 56.4208L112.85 40.3792C113.144 38.9923 114.368 38 115.786 38H131.65C133.557 38 134.98 39.7554 134.585 41.6208L131.718 55.1792C131.323 57.0446 132.746 58.8 134.653 58.8H145C146.657 58.8 148 60.1431 148 61.8V77.4432C148 79.1001 146.657 80.4432 145 80.4432H128.99ZM103.799 84.0572C104.189 82.1937 102.766 80.4432 100.862 80.4432H84.1697C82.7495 80.4432 81.5239 81.4391 81.2332 82.8292L78.6382 95.2401C78.2485 97.1036 79.6708 98.8541 81.5747 98.8541H98.2675C99.6877 98.8541 100.913 97.8582 101.204 96.4681L103.799 84.0572Z" fill="white"/>
								<path d="M87.6288 117C81.8242 117 77.0888 115.751 73.4227 113.252C69.8076 110.702 68 107.107 68 102.466C68 102.007 68.0509 101.318 68.1528 100.401H81.7478C81.595 102.338 82.0533 103.868 83.1226 104.99C84.1918 106.112 85.8212 106.673 88.0107 106.673C89.9964 106.673 91.5494 106.24 92.6696 105.373C93.8407 104.506 94.4263 103.282 94.4263 101.701C94.4263 100.069 93.688 98.7432 92.2114 97.7232C90.7857 96.7033 88.5453 95.5559 85.4902 94.2809C82.537 93.057 80.1184 91.9096 78.2345 90.8387C76.4014 89.7167 74.7975 88.2123 73.4227 86.3255C72.048 84.4386 71.3606 82.0672 71.3606 79.2114C71.3097 75.6926 72.1753 72.6328 73.9574 70.032C75.7395 67.4312 78.209 65.4423 81.3659 64.0654C84.5228 62.6885 88.138 62 92.2114 62C95.8774 62 99.1362 62.5865 101.988 63.7594C104.839 64.8813 107.054 66.5387 108.632 68.7316C110.211 70.8734 111 73.4233 111 76.3811C111 77.146 110.975 77.707 110.924 78.064H97.0231C97.074 77.86 97.0995 77.554 97.0995 77.146C97.0995 75.7181 96.5903 74.5707 95.5719 73.7038C94.6045 72.7858 93.2552 72.3268 91.524 72.3268C89.6909 72.3268 88.1889 72.7858 87.0178 73.7038C85.8976 74.5707 85.3375 75.7691 85.3375 77.299C85.3375 78.8289 86.0503 80.1293 87.476 81.2003C88.9017 82.2202 91.1166 83.4186 94.1208 84.7955C97.1249 86.1725 99.569 87.4474 101.453 88.6203C103.388 89.7932 105.043 91.3741 106.417 93.363C107.792 95.3009 108.48 97.6977 108.48 100.554C108.48 103.715 107.639 106.546 105.959 109.045C104.279 111.543 101.86 113.507 98.7034 114.935C95.5465 116.312 91.8549 117 87.6288 117Z" fill="black"/>
							</svg>
						</nuxt-link>
					</section>
					<section class="display:inline-flex justify-content:flex-end min-width:150px transform:scale(0.9) minw1500px:display:none">
						<LayoutHeaderSocialIcons />
					</section>
				</div>
				<div class="flex:1 overflow:auto width:calc(100%_+_16px) justify-content:center margin-left:-8px margin-right:-8px display:inline-flex position:relative">
					<div class="justify-content:flex-start display:flex max-width:100%">
						<nav class="display:flex flex-wrap:nowrap white-space:nowrap margin-left:-24px padding:0_8px font-weight:bold align-items:center lg:padding:0" role="navigation">
							<nuxt-link to="/docs/get-started" class="js-main-nav-link navigation__link">Docs</nuxt-link>
							<nuxt-link to="/snippets/components" class="js-main-nav-link navigation__link">Components & Snippets</nuxt-link>
							<nuxt-link to="/docs/get-started/why-stylify-css" class="js-main-nav-link navigation__link">Why Stylify?</nuxt-link>
							<nuxt-link to="/blog" class="js-main-nav-link navigation__link">Blog</nuxt-link>
							<a href="https://codepen.io/Machy8/pen/Bawpvdy?editors=1010" target="_blank" rel="noopener" class="navigation__link">Playground</a>
							<nuxt-link to="/faq" class="js-main-nav-link navigation__link">FAQ</nuxt-link>
							<div id="docsearch" class="[.DocSearch-Button]{margin-left:0;margin-right:0} [.DocSearch-Button-Keys]{display:none} margin-left:24px minw769px:width:104px width:36px height:36px"></div>
						</nav>
						<span class="minw1500px:display:none">&nbsp;</span>
					</div>
				</div>
				<section class="display:none minw1500px:display:inline-flex minw1500px:min-width:300px justify-content:flex-end min-width:150px">
					<LayoutHeaderSocialIcons />
				</section>
			</div>
		</header>
		<main role="main">
			<Nuxt />
		</main>
		<footer class="background:lighten($blue3,20) padding:24px_0" role="contentinfo">
			<div class="container">
				<div class="display:flex align-items:flex-start flex-direction:column margin-bottom:12px">
					<footer-docs-links :links="getStartedLinks" />
					<footer-docs-links :links="integrationLinks" />
					<footer-docs-links :links="componentsLinks" />
					<footer-docs-links :links="packagesLinks" :titleLinkEnabled="false" title="Packages" />
					<section class="footer-docs-section">
						<h3 class="footer-docs-section__title">Community</h3>
						<div class="margin-left:-24px">
							<a
								v-for="(communityLink, key) in communityLinks"
								:key="key"
								:href="communityLink.path"
								target="_blank"
								rel="noopener"
								class="footer-docs-section__link"
							>{{ communityLink.navigationTitle }}</a>
						</div>
					</section>
					<section class="footer-docs-section">
						<h3 class="footer-docs-section__title">Other</h3>
						<div class="margin-left:-24px">
							<a
								v-for="(otherLink, key) in otherLinks"
								:key="key"
								:href="otherLink.path"
								target="_blank"
								rel="noopener"
								class="footer-docs-section__link"
							>{{ otherLink.navigationTitle }}</a>
						</div>
					</section>
				</div>
				<hr class="margin-bottom:12px">
				<section class="display:flex flex-direction:column justify-content:center align-items:center md:flex-direction:row md:justify-content:space-between">
					<LayoutLogoLink />
					<div class="text-align:center color:lighten($blue4,20) md:text-align:left">
						<GithubButton />
						<br>
						Released under the MIT license
						<br>
						Copyright @ {{ new Date().getFullYear() }} Vladimír Macháček
					</div>
				</section>
			</div>
		</footer>
		<div :class="`position:fixed bottom:-50px [&.s-visible]{bottom:12px} transition:.3s will-change:bottom display:flex align-items:center gap:8px z-index:1 right:12px lg:display:none ${stickyLinksVisible ? 's-visible' : ''}`">
			<GithubButton type="sponsor" />
			<GithubButton :class="`${stickyLinksVisible ? 'bounce-animation' : ''}`" />
		</div>
	</div>
</template>

<script>
import docsearch from '@docsearch/js';
import { dispatchEvent } from '~/services/customEvent';
import { DocsRepository } from '~/services/model/DocsRepository';
import { SnippetsRepository } from '~/services/model/SnippetsRepository';

const triggerCustomEvent = (eventName, eventData) => {
	const event = typeof eventData !== 'undefined'
		? new window.CustomEvent(eventName, {detail: eventData})
		: new window.CustomEvent(eventName);
	document.dispatchEvent(event);
}

if (process.client) {
	window.stylifyGithubStars = fetch('https://api.github.com/repos/stylify/packages').then(async (response) => {
		const starsCount = (await response.json()).stargazers_count;

		if (typeof starsCount === 'undefined') {
			return;
		}

		triggerCustomEvent('stylify:githubStarsLoaded', starsCount);
		window.stylifyGithubStars = starsCount;
	});
}

export default {
	fetch: async function () {
		const linksRequiredData = ['navigationTitle', 'path', 'dir'];
		const docsRepository = new DocsRepository(this.$root.context.$content);
		const snippetsRepository = new SnippetsRepository(this.$root.context.$content);

		const getStartedLinks = await docsRepository.findBySection({ section: 'get-started', only: linksRequiredData });
		const integrationLinks = await docsRepository.findBySection({ section: 'integrations', only: linksRequiredData });
		const componentsLinks = await snippetsRepository .findBySection({ section: 'components', only: linksRequiredData });

		this.getStartedLinks = getStartedLinks;
		this.integrationLinks = integrationLinks;
		this.componentsLinks = componentsLinks
	},
	mounted() {
		const initDocSearch = (query) => {
			docsearch({
				appId: 'MIG46WYBYC',
				apiKey: 'b169a688c1cb51a5a1d3358ab91424d5',
				indexName: 'stylifycss',
				container: '#docsearch',
				debug: false,
				initialQuery: query ?? ''
			});

		};

		const checkStickyLinksVisibility = () => {
			this.stickyLinksVisible = document.documentElement.scrollTop >= 200;
		};

		checkStickyLinksVisibility();

		document.addEventListener('scroll', function(e) {
			checkStickyLinksVisibility();
		}, {passive: true});

		const searchParams = (new URL(window.location)).searchParams;
		const searchParam = searchParams.get('search') ?? undefined;

		if (typeof searchParam !== 'undefined') {
			initDocSearch(searchParam);
			setTimeout(() => {
				document.querySelector('#docsearch button')?.click();
			}, 100);
		} else {
			initDocSearch()
		}

		const scrollNavElementIntoView = (event) => {
			let previousScrollTopPosition = document.documentElement.scrollTop;
			setTimeout(() => {
				if (document.documentElement.scrollTop !== previousScrollTopPosition) {
					scrollNavElementIntoView(event);
					return;
				}

				event.target.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
			}, 200);
		}

		document.querySelectorAll('.js-main-nav-link').forEach((link) => {
			link.addEventListener('click', (event) => {
				scrollNavElementIntoView(event);
			})
		});
	},
	watch: {
		$route: {
			immediate: true,
			handler() {
				if (typeof document === 'undefined') {
					return;
				}

				dispatchEvent('route:changed');
			}
		}
	},
	data() {
		return {
			stickyLinksVisible: false,
			getStartedLinks: [],
			integrationLinks: [],
			componentsLinks: [],
			packagesLinks: [
				{},
				{
					navigationTitle: '@stylify/astro',
					path: '/docs/astro'
				},
				{
					navigationTitle: '@stylify/bundler',
					path: '/docs/bundler'
				},
				{
					navigationTitle: '@stylify/nuxt',
					path: '/docs/nuxt'
				},
				{
					navigationTitle: '@stylify/nuxt-module',
					path: '/docs/nuxt-module'
				},
				{
					navigationTitle: '@stylify/stylify',
					path: '/docs/stylify'
				},
				{
					navigationTitle: '@stylify/unplugin',
					path: '/docs/unplugin'
				},
			],

			communityLinks: [
				{
					navigationTitle: 'Github',
					path: this.project.config.githubUrl
				},
				{
					navigationTitle: 'Discord',
					path: this.project.config.discordUrl
				},
				{
					navigationTitle: 'Twitter',
					path: this.project.config.twitterUrl
				},
				{
					navigationTitle: 'Reddit',
					path: this.project.config.redditUrl
				},
				{
					navigationTitle: 'Youtube',
					path: this.project.config.youtubeUrl
				}
			],

			otherLinks: [
				{
					navigationTitle: 'Media & Logo',
					path: '/media'
				},
				{
					navigationTitle: 'Mail: dev@stylifycss.com',
					path: 'mailto:dev@stylifycss.com'
				}
			]
		}
	}
}
</script>

<style>
@import '@docsearch/css';

html {
	font-size: 62.5%;
}

body {
	font-family: -apple-system, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
	font-size: 16px;
	-webkit-font-smoothing: antialiased;
}

</style>
