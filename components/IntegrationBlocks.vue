<template>
	<BrandLinkBlocks :items="items" />
</template>

<script>
export default {
	data: () => ({
		items: [
			{
				slug: 'integrations/browser',
				image: 'brands/browser.svg',
				label: 'Browser'
			},
			{
				slug: 'integrations/nextjs',
				image: 'brands/nextjs.svg',
				label: 'Next.js'
			},
			{
				slug: 'integrations/nuxtjs',
				image: 'brands/nuxtjs.svg',
				label: 'Nuxt.js'
			},
			{
				slug: 'integrations/reactjs',
				image: 'brands/react.png',
				label: 'React'
			},
			{
				slug: 'integrations/vuejs',
				image: 'brands/vuejs.svg',
				label: 'Vuejs'
			},
			{
				slug: 'integrations/angular',
				image: 'brands/angular.svg',
				label: 'Angular'
			},
			{
				slug: 'integrations/svelte',
				image: 'brands/svelte.svg',
				label: 'Svelte'
			},
			{
				slug: 'integrations/astro',
				image: 'brands/astro.svg',
				label: 'Astro'
			},
			{
				slug: 'integrations/remix',
				image: 'brands/remix.svg',
				label: 'Remix'
			},
			{
				slug: 'integrations/solidjs',
				image: 'brands/solidjs.svg',
				label: 'SolidJS'
			},
			{
				slug: 'integrations/qwik',
				image: 'brands/qwik.svg',
				label: 'Qwik'
			},
			{
				slug: 'integrations/vitejs',
				image: 'brands/vitejs.svg',
				label: 'ViteJS'
			},
			{
				slug: 'integrations/webpack',
				image: 'brands/webpack.svg',
				label: 'Webpack'
			},
			{
				slug: 'integrations/rollupjs',
				image: 'brands/rollupjs.svg',
				label: 'Rollup'
			},
			{
				slug: 'integrations/esbuild',
				image: 'brands/esbuild.svg',
				label: 'Esbuild'
			},
			{
				slug: 'integrations/nodejs',
				image: 'brands/nodejs.svg',
				label: 'NodeJS'
			},
			{
				slug: 'integrations/symfony',
				image: 'brands/symfony.png',
				label: 'NodeJS'
			},
			{
				slug: 'integrations/laravel',
				image: 'brands/laravel.svg',
				label: 'Laravel'
			},
			{
				slug: 'integrations/nette',
				image: 'brands/nette.png',
				label: 'Nette'
			},
			{
				slug: 'integrations/cakephp',
				image: 'brands/cakephp.png',
				label: 'Cake PHP'
			},
		]
	})
}
</script>
