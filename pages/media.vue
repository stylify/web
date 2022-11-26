<template>
	<section class="container margin-bottom:48px">
		<h1 class="font-size:48px">Stylify logo</h1>
		<p class="margin-bottom:42px max-width:800px">The following are asstets that represent the Stylify CSS brand. All assets are considered open-source contributions and should be used according to open standards and licensing rules. In case of any question about usage, alignment, editing, feel free to contact us via e-mail <a href="mailto:dev@stylifycss.com" class="color:$blue1">dev@stylifycss.com</a> or through Discord.</p>
		<div class="display:grid md:grid-template-columns:50%_50% gap:24px">
			<div v-for="logo in logos" :key="logo.name">
				<h2 class="margin-top:0 margin-bottom:8px">{{ logo.label }}</h2>
				<div :class="`${logo.type === 'light' ? 'background:#f1f1f1' : 'background:#1e2431'} padding:24px border-radius:4px`">
					<img :src="`/images/logo/${logo.imageName}.svg`" class="width:100% max-height:100px" width="1000" height="273">
				</div>
				<div class="display:flex flex-wrap:wrap margin-left:-12px margin-top:4px">
					<a v-for="format in formats" :href="`/images/logo/${logo.imageName}.${format}`" :download="`${logo.imageName}.${format}`" class="color:$blue1 margin-left:12px display:inline-flex">{{ format.toUpperCase() }}</a>
				</div>
			</div>
		</div>
	</section>
</template>
<script>
export default {
	data: () => ({
		formats: ['svg', 'png', 'eps'],
		logos: [
			{
				imageName: 'horizontal',
				type: 'light',
				label: 'Preferred - Horizontal'
			},
			{
				imageName: 'vertical',
				type: 'light',
				label: 'Vertical alternative'
			},
			{
				imageName: 'horizontal-dark',
				type: 'dark',
				label: 'Preferred - Horizontal (dark)'
			},
			{
				imageName: 'vertical-dark',
				type: 'dark',
				label: 'Vertical alternative (dark)'
			}
		]
	}),
	head() {
		const pageDescription = 'Asstets that represent the Stylify CSS brand.';
		const pageTitle = 'Logo & Assets | Stylify CSS';

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
