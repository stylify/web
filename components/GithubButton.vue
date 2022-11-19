<!--
stylify-components
	badge: `
		display:inline-flex align-items:center white-space:nowrap padding:4px font-size:14px line-height:24px
		color:#fff border:1px_solid_#f1f1f1 border-radius:4px text-decoration:none transition:background_0.3s hover:background:rgba(255,255,255,0.2)
	`
/stylify-components
stylify-keyframes
	rotate: `
		 from { transform: rotate(0); }
		 to { transform: rotate(-360deg); }
	`
/stylify-keyframes
-->
<template>
	<div class="display:inline-flex">
		<a v-if="type === 'stars'" href="https://github.com/stylify/packages" class="badge" rel="noopener" target="_blank">
			<img src="/images/brands/github-icon.svg" class="margin-right:4px" width="24" height="24" loading="lazy" />
			<strong>
				<span class="min-width:24px display:inline-flex justify-content:center align-items:center">
					<span v-if="stars">{{ stars }}</span>
					<i v-else class="icon icon-refresh-ccw display:inline-flex animation:rotate_4s_linear_infinite"></i>
				</span>&nbsp;⭐
			</strong>
		</a>
		<a v-if="type === 'sponsor'" href="https://github.com/sponsors/Machy8" class="badge" rel="noopener" target="_blank">
			<strong><span class="margin-right:4px">Sponsor</span>&nbsp;❤️</strong>
		</a>
	</div>
</template>

<script>

const triggerCustomEvent = (eventName, eventData) => {
	const event = typeof eventData !== 'undefined'
		? new window.CustomEvent(eventName, {detail: eventData})
		: new window.CustomEvent(eventName);
	document.dispatchEvent(event);
}

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
			const stylifyGithubStarsType = typeof window.stylifyGithubStars;

			if (stylifyGithubStarsType === 'undefined') {
				window.stylifyGithubStars = fetch('https://api.github.com/repos/stylify/packages').then(async (response) => {
					const starsCount = (await response.json()).stargazers_count;
					triggerCustomEvent('stylify:githubStarsLoaded', starsCount);
					window.stylifyGithubStars = starsCount;
					self.stars = starsCount;
				});
			} else if (typeof stylifyGithubStarsType === 'number') {
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
