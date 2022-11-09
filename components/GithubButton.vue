<!--
stylify-components
	badge: `
		display:inline-flex align-items:center white-space:nowrap padding:4px font-size:14px line-height:24px
		color:#fff border:1px_solid_#f1f1f1 border-radius:4px text-decoration:none transition:background_0.3s hover:background:rgba(255,255,255,0.2)
	`
/stylify-components
-->
<template>
	<div>
		<a v-if="type === 'stars'" href="https://github.com/stylify/packages" class="badge" rel="noopener" target="_blank">
			<img src="/images/brands/github-icon.svg" class="margin-right:4px" width="24" height="24" loading="lazy" />
			<strong>
				<span class="min-width:18px display:inline-flex">{{ stars }}</span>&nbsp;⭐
			</strong>
		</a>
		<a v-if="type === 'sponsor'" href="https://github.com/sponsors/Machy8" class="badge" rel="noopener" target="_blank">
			<strong><span class="margin-right:4px">Sponsor</span>&nbsp;❤️</strong>
		</a>
	</div>
</template>

<script>
export default {
	data: () => ({
		stars: 0
	}),
	props: {
		type: {
			type: String,
			default: 'stars'
		}
	},
	mounted() {
		if (typeof document !== 'undefined' && this.type === 'stars') {
			const self = this;
			fetch('https://api.github.com/repos/stylify/packages').then(async (response) => {
				self.stars = (await response.json()).stargazers_count;
			});
		}
	},
}
</script>
