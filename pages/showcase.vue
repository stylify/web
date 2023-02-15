<template>
	<section class="container margin-top:24px margin-bottom:48px md:margin-top:48px">
		<h1 class="font-size:48px text-align:center margin:0">Showcase</h1>
		<p class="margin-bottom:42px margin-top:0 font-size:20px text-align:center">Check out projects that uses Stylify CSS.</p>
		<ShowcaseList />
		<div class="margin-top:42px text-align:center">
			<a href="https://github.com/stylify/web/blob/master/components/ShowcaseList.vue" target="_blank" rel="noopener nofollow" class="btn btn--hp">
				Add your project
				<i class="icon icon-arrow-down-circle display:inline-block margin-left:8px transform:rotate(-90deg)"></i>
			</a>
		</div>
	</section>
</template>

<script>
export default {
	head() {
		const pageDescription = 'Check out projects that uses Stylify CSS.';
		const pageTitle = 'Showcase | Stylify CSS';

		return {
			title: pageTitle,
			meta: [
				{ hid: 'description', name: 'description', content: pageDescription },
				{ hid: 'og:title', property: 'og:title', content: pageTitle },
				{ hid: 'og:description', property: 'og:description', content: pageDescription },
				// Twitter Card
				{ hid: 'twitter:title', name: 'twitter:title', content: pageTitle },
				{ hid: 'twitter:description', name: 'twitter:description', content: pageDescription }
			]
		}
	}
}
</script>
