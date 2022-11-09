<template>
	<div class="lg:margin-right:34px lg:max-width:220px lg:width:100%">
		<aside
			@click="toggleSidebar"
			:class="[
				sidebarVisible ? 'transform:translateX(0)' : 'transform:translateX(-100%)',
				`width:100% max-height:100vh overflow:auto transition:transform_0.3s_ease-in-out
				position:fixed top:0 left:0 backdrop-filter:blur(12px) z-index:2 padding-right:8px
				lg:position:sticky lg:transition:none lg:transform:translateX(0)`
			]
		">
			<div class="background:$blue3 border-right:1px_solid_#666 max-width:240px padding:24px lg:padding:0 lg:border-right:0">
				<div class="text-align:right lg:display:none">
					<a role="button" class="cursor:pointer font-size:32px display:inline-block width:32px line-height:32px">
						<i class="icon icon-x color:$blue1 font-weight:bold"></i>
					</a>
				</div>
				<div>
					<a href="https://github.com/stylify/packages/releases" target="_blank" rel="noopener"><img alt="" width="146" height="28" src="https://img.shields.io/github/v/tag/stylify/packages?color=%2301befe&label=Version&style=for-the-badge"></a>
				</div>
				<section v-for="(sectionItems, sectionName) in items" :key="sectionName" class="margin-bottom:12px">
					<nuxt-link
						:to="sectionItems[0].dir"
						:class="[
							urlPath === sectionItems[0].slug ? 'color:$blue1' : 'color:$blue4',
							`display:block text-decoration:none position:sticky top:0 z-index:1 [&.nuxt-link-exact-active_h3]{color:#01befe!important}`
						]"
					>
						<h3 class="font-size:16px padding:8px_0 position:sticky margin:0 top:0 backdrop-filter:blur(12px) z-index:1">
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
								sectionItem.navigationIconPath ? 'padding:4px_4px_4px_38px' : 'padding:4px_8px',
								`docs__aside-link color:$blue4 font-size:16px text-decoration:none
								position:relative display:inline-flex align-items:center hover:background-color:lighten($blue3,20) border-radius:$radius1`
							]"
						>
							<img v-if="sectionItem.navigationIconPath" loading="lazy" :src="sectionItem.navigationIconPath" class="max-width:24px border-radius:4px padding:2px max-height:30px position:absolute left:4px top:50% transform:translateY(-50%) " />
							<span>{{ sectionItem.navigationTitle }}</span>
						</nuxt-link>
					</nav>
				</section>
			</div>
		</aside>
		<div class="background:lighten($blue3,20) backdrop-filter:blur(12px) z-index:1 top:0 padding:8px_0 position:sticky lg:display:none margin-top:-24px margin-bottom:24px text-align:center">
			<a role="button" @click="toggleSidebar" class="cursor:pointer display:inline-flex align-items:center">
				<i class="icon icon-menu margin-right:4px font-weight:bold color:$blue1"></i>
				<span>Show docs navigation</span>
			</a>
		</div>
	</div>
</template>

<script>

export default {
	props: {
		items: {},
		urlPath: String
	},
	data: () => ({
		sidebarVisible: false,
	}),
	methods: {
		toggleSidebar() {
			this.sidebarVisible = !this.sidebarVisible
		},
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
		}
	},
	mounted() {
		setTimeout(() => {
			this.scrollSelectedLinkIntoView();
		}, 100);
	}
}

</script>
