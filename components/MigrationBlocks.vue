<template>
	<BrandLinkBlocks :items="items" />
</template>

<script>
export default {
	data: () => ({
		items: [
			{
				slug: 'migration/tailwind',
				image: 'brands/tailwind.svg',
				label: 'Tailwind'
			},
			{
				slug: 'migration/bootstrap',
				image: 'brands/bootstrap.svg',
				label: 'Bootstrap'
			},
			{
				slug: 'migration/bulma',
				image: 'brands/bulma.svg',
				label: 'Bulma'
			},
			{
				slug: 'migration/foundation',
				image: 'brands/foundation.png',
				label: 'Foundation'
			},
			{
				slug: 'migration/windi',
				image: 'brands/windi.svg',
				label: 'Windi'
			},
			{
				slug: 'migration/tachyons',
				image: 'brands/tachyons.svg',
				label: 'Tachyons'
			},
			{
				slug: 'migration/pure-css',
				image: 'brands/pure-css.png',
				label: 'Pure CSS'
			},
			{
				slug: 'migration/materialize',
				image: 'brands/materialize.svg',
				label: 'Materialize'
			},
			{
				slug: 'migration/uikit',
				image: 'brands/uikit.svg',
				label: 'UIkit'
			},
			{
				slug: 'migration/styled-components',
				image: 'brands/styled-components.png',
				label: 'Styled Components'
			},
			{
				slug: 'migration/emotion',
				image: 'brands/emotion.png',
				label: 'Emotion'
			},
			{
				slug: 'migration/stitches',
				image: 'brands/stitches.svg',
				label: 'Stitches'
			},
		]
	})
}
</script>
