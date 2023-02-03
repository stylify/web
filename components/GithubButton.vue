<!--
stylify-keyframes
	rotate: `
		 from { transform: rotate(0); }
		 to { transform: rotate(-360deg); }
	`
/stylify-keyframes
-->
<template>
	<div class="display:inline-flex">
		<a v-if="type === 'stars'" href="https://github.com/stylify/packages" class="badge min-width:84px" rel="noopener" target="_blank">
			<img src="/images/brands/github-icon.svg" class="margin-right:4px" width="24" height="24" loading="lazy" alt="" />
			<strong>
				<span class="min-width:24px display:inline-flex justify-content:center align-items:center">{{ stars }}</span>&nbsp;⭐
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
		stars: process.client && typeof window?.stylifyGithubStars === 'number' ? window.stylifyGithubStars : '316'
	}),
	props: {
		type: {
			type: String,
			default: 'stars'
		}
	},
	created() {
		if (typeof document !== 'undefined' && this.type === 'stars') {
			const self = this;
			const stylifyGithubStarsType = typeof window.stylifyGithubStars;

			if (stylifyGithubStarsType === 'number') {
				self.stars = window.stylifyGithubStars;
			} else {
				document.addEventListener('stylify:githubStarsLoaded', (event) => {
					self.stars = event.detail;
				});
			}
		}
	},
}
</script>
