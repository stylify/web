<template>
	<div class="docs container display:flex flex-direction:column justify-content:center margin-top:48px margin-bottom:48px lg:flex-direction:row">
		<aside @click="toggleSidebar" :class="[
				sidebarVisible ? 'transform:translateX(0)' : 'transform:translateX(-100%)',
				`width:100% margin-right:34px max-height:100vh overflow:auto transition:transform__0.3s__ease-in-out
				position:fixed top:0 left:0 background:rgba(255,255,255,0.8) backdrop-filter:blur(12px) z-index:2 padding-right:8px
				lg:position:sticky lg:transition:none lg:transform:translateX(0) lg:top:0 lg:max-width:220px`
			]
			"
		>
			<div class="background:#fff border-right:1px__solid__$grey3 max-width:240px padding:24px lg:padding:0 lg:border-right:0">
				<div class="text-align:right lg:display:none">
					<a role="button" class="cursor:pointer font-size:32px display:inline-block width:32px line-height:32px">
						<i class="icon icon-x color:$blue1 font-weight:bold"></i>
					</a>
				</div>
				<section v-for="(sectionItems, sectionName) in navigationItems" :key="sectionName" class="margin-bottom:12px">
					<nuxt-link
						:to="sectionItems[0].dir"
						:class="[
							urlPath === sectionItems[0].slug ? 'color:$blue1' : 'color:black',
							`display:block text-decoration:none`
						]"
					>
						<h3 class="font-size:16px padding:12px__0 position:sticky margin:0 top:0 background:rgba(255,255,255,0.8) backdrop-filter:blur(12px) z-index:1">
							{{ sectionItems[0].navigationTitle }}
						</h3>
					</nuxt-link>
					<nav class="display:flex flex-direction:column">
						<nuxt-link
							v-for="(sectionItem, key) in sectionItems.slice(1)"
							:key="key"
							:to="sectionItem.path"
							:data-super="key"
							:class="[
								sectionItem.navigationIconPath ? 'padding:4px__4px__4px__38px' : 'padding:4px__12px',
								`docs__aside-link color:#000 font-size:16px margin-bottom:4px text-decoration:none
								position:relative display:inline-flex align-items:center hover:background-color:$blue2 border-radius:$radius1`
							]"
						>
	 						<img v-if="sectionItem.navigationIconPath" loading="lazy" :src="sectionItem.navigationIconPath" class="max-width:24px max-height:30px position:absolute left:4px top:50% transform:translateY(-50%) " />
	 						<span>{{ sectionItem.navigationTitle }}</span>
						</nuxt-link>
					</nav>
				</section>
			</div>
		</aside>
		<div class="background-color:rgba(255,255,255,0.8) backdrop-filter:blur(12px) z-index:1 top:0 padding:12px__0 position:sticky lg:display:none margin-top:-24px margin-bottom:24px text-align:center">
			<a role="button" @click="toggleSidebar" class="cursor:pointer display:inline-flex align-items:center">
				<i class="icon icon-menu margin-right:4px font-weight:bold color:$blue1"></i>
				<span>Show docs navigation</span>
			</a>
		</div>
		<section class="width:100% max-width:800px padding:0__14px margin-left:auto margin-right:auto lg:padding:0 lg:margin-left:0 margin-right:0">
 			<article class="margin-bottom:24px">
				<h1>{{ pageContent.title }}</h1>
				<nuxt-content :document="pageContent" />
			</article>
			<div class="display:flex justify-content:space-between margin-bottom:24px">
  				<div>
					<nuxt-link
						v-if="previousPage"
						:to="previousPage.slug === pageContent.section ? previousPage.dir : previousPage.path"
						class="color:$blue1 text-decoration:none display:inline-flex align-items:center line-height:1"
					>
						<i class="icon icon-arrow-down-circle display:inline-block margin-right:8px transform:rotate(90deg)"></i>
						<span>{{ previousPage.navigationTitle }} </span>
					</nuxt-link>
				</div>
				<div>
					<nuxt-link
						v-if="nextPage"
						:to="nextPage.slug === pageContent.section ? nextPage.dir : nextPage.path"
						class="color:$blue1 text-decoration:none display:inline-flex align-items:center line-height:1"
					>
						<span>{{ nextPage.navigationTitle }}</span>
						<i class="icon icon-arrow-down-circle display:inline-block margin-left:8px transform:rotate(-90deg)"></i>
					</nuxt-link>
				</div>
			</div>
			<hr class="margin-bottom:24px">
			<div class="text-align:center">
				<a
					:href="`${project.config.websiteRepositoryUrl}/edit/master/content${pageContent.path}${pageContent.extension}`"
					target="_blank"
					rel="noopener"
					class="color:$blue1 text-decoration:none display:inline-flex align-items:center line-height:1"
				>
					<i class="icon icon-edit margin-right:8px"></i>
					<span>Edit this page on Github</span>
				</a>
			</div>
		</section>
	</div>
</template>

<script>
import { DocsRepository } from '~/services/model';

export default {
	data: () => ({
		sidebarVisible: false
	}),
	methods: {
		scrollSelectedLinkIntoView() {
			if (typeof document === 'undefined') {
				return;
			}

			const element = document.querySelector('aside .nuxt-link-exact-active');

			if (!element) {
				return;
			}

			const elementOffsetTop = element.offsetTop + 200;

			if (elementOffsetTop <= (document.body.scrollTop + window.innerHeight)) {
				return;
			}

			document.querySelector('aside').scrollTop = element.offsetTop - 50;
		},
		toggleSidebar() {
			this.sidebarVisible = !this.sidebarVisible
		}
	},
 	asyncData: async ({ $content, params, route, redirect }) => {
		if (route.path.replace(/\/+$/, '') === '/docs') {
			redirect('/docs/get-started');
			return;
		}

		const getNavigationSectionItems = async (section, config) => {
			const docsRepository = new DocsRepository($content);
			return docsRepository.findBySection({
				section: section,
				only: ['navigationTitle', 'slug', 'dir', 'section', 'navigationIconPath', 'path']
			})
		};

		let urlPath = params.pathMatch || params.slug || 'get-started';
		let urlPathToArray = urlPath.split('/');

		const navigationItems = {};
		const navigationSectionsConfig = {
			'get-started': {
				sort: ['order', 'asc']
			},
			'integration': {},
			'stylify': {},
			'bundler': {},
			'profiler': {},
			'nuxt-module': {},
			'autoprefixer': {}
		}

		for (const section of Object.keys(navigationSectionsConfig)) {
			navigationItems[section] = await getNavigationSectionItems(section, navigationSectionsConfig[section]);
		}

		const whereConditionKey = urlPathToArray.length >= 2 ? 'path' : 'slug';
		let pageContent = await $content('docs', { deep: true})
			.where({
				[whereConditionKey]: urlPathToArray.length >= 2 ? `/docs/${urlPath}` : urlPath
			})
			.fetch();

		pageContent = pageContent[0];

		let pageIndexInNavigation = pageContent[whereConditionKey] in navigationItems ? 0 : null;

		if (pageIndexInNavigation === null) {
			navigationItems[pageContent.section].find((navigationItem, key) => {
				if (navigationItem[whereConditionKey] === pageContent[whereConditionKey]) {
					pageIndexInNavigation = key;
					return true
				}
				return false
			});
		}

		return {
			urlPath: urlPath,
 			pageContent: pageContent || null,
			previousPage: pageIndexInNavigation > 0
				? navigationItems[pageContent.section][(pageIndexInNavigation - 1)]
				: null,
			nextPage: navigationItems[pageContent.section][(pageIndexInNavigation + 1)] || null,
			navigationItems: navigationItems
		}
	},
	watch: {
		$route: {
			immediate: true,
			handler() {
				setTimeout(() => {
					this.scrollSelectedLinkIntoView();
				}, 100);
			}
		}
	},
	head() {
		if (!this.pageContent) {
			return;
		}

		const pageTitle = this.pageContent.title + ' | Stylify';

		return {
			title: pageTitle,
			meta: [
				{ hid: 'description', name: 'description', content: this.pageContent.description },
				// Open Graph
				{ hid: 'og:title', property: 'og:title', content: pageTitle },
				{ hid: 'og:description', property: 'og:description', content: this.pageContent.description },
				// Twitter Card
				{ hid: 'twitter:title', name: 'twitter:title', content: pageTitle },
				{ hid: 'twitter:description', name: 'twitter:description', content: this.pageContent.description }
			]
		}
  	}
}
</script>
