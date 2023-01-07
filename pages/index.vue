<!--
stylify-components
	'btn--hp': `
		&.btn {
			justify-content:center font-size:16px padding:12px
			sm:font-size:18px
			md:min-width:230px
		}
	`,
	'hp-section-title': `
		font-size:28px text-align:center margin-top:0 margin-bottom:8px
		md:font-size:32px
	`
/stylify-components
-->
<template>
	<div class="[section]{scroll-margin-top:50px} [>_section]{margin-top:48px;margin-bottom:48px;md:margin-top:64px;md:margin-bottom:64px;lg:margin-top:84px;lg:margin-bottom:84px}">
		<hp-header />

		<section id="why-stylify" class="container text-align:center">
			<h2 class="hp-section-title">
				Why Stylify instead of CSS or inline styles?
			</h2>
			<div class="md:font-size:20px [a]{color:$blue1}">Because of <nuxt-link to="/docs/get-started/why-stylify-css#problems-stylify-css-tries-to-solve">fewer CSS headaches</nuxt-link>, <nuxt-link to="/docs/get-started/why-stylify-css#faster-coding">faster coding</nuxt-link>, and <nuxt-link to="/docs/get-started/why-stylify-css#output-optimization">extremely optimized output</nuxt-link>&nbsp;💎.</div>
		</section>

		<section class="max-width:100% overflow:hidden">
			<h2 class="visually-hidden">They talked about Stylify CSS</h2>
			<HpFansCarousel />
		</section>

		<hp-features />

		<section id="installation" class="container">
			<h2 class="hp-section-title">
				Start using Stylify CSS with your favorite tool in a minute.
			</h2>
			<div class="margin-top:12px">
				<integration-blocks />
			</div>
			<div class="text-align:center margin-top:24px">
				<nuxt-link to="/docs/integrations" class="btn btn--hp margin-top:12px">
					Check out integrations
					<i class="icon icon-arrow-down-circle display:inline-block margin-left:8px transform:rotate(-90deg)"></i>
				</nuxt-link>
			</div>
		</section>

		<hp-components />

		<hp-quote />

	</div>
</template>

<script>
export default {
	head() {
		return {
			link: [
				{ rel: 'canonical', href: "https://stylifycss.com"}
			],
			script: [
				{
					innerHTML: `{
						"@context": "http://schema.org",
						"@type": "VideoObject",
						"name": "Style your website faster with Stylify CSS | Stylify introduction in 8 minutes | #webdevelopment",
						"description": "Learn how to style your website faster with Stylify CSS and CSS-like utilities.  Learn how to use variables, components, custom selectors and a lot more.",
						"thumbnailUrl": "https://i.ytimg.com/vi/GRwtXDnm5gE/default.jpg",
						"uploadDate": "2022-11-09T12:12:45Z",
						"duration": "PT8M5S",
						"embedUrl": "https://www.youtube.com/embed/GRwtXDnm5gE"
					}`,
					type: 'application/ld+json'
				}
			],
			__dangerouslyDisableSanitizers: ['script']
		}
	},
}
</script>
