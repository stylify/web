<template>
	<div class="sm:margin-left:-24px display:flex flex-wrap:wrap">
		<nuxt-link v-for="component in componentsList" :key="component.docsUrl" :to="`/snippets/${component.docsUrl}`" class="text-decoration:none width:100% sm:width:calc(100%_*_1/2_-_24px) lg:width:calc(100%_*_1/3_-_24px) lg:width:calc(100%_*_1/4_-_24px) display:inline-flex flex-direction:column sm:margin-left:24px margin-bottom:24px border-radius:8px [&:hover_h3]{color:$blue1}">
			<iframe :src="`/content/snippets/${component.previewUrl}`" class="width:100% overflow:hidden border-radius:4px" frameBorder="0" loading="lazy" fetchpriority="low"></iframe>
			<h3 class="margin:8px_0_0_0 font-size:18px line-height:1!important transition:.3s">{{ component.title }}</h3>
		</nuxt-link>
	</div>
</template>

<script>
export default {
	data: () => ({
		componentsList: [
			{
				previewUrl: 'components/buttons.html',
				docsUrl: 'components/buttons',
				title: 'Buttons'
			},
			{
				previewUrl: 'components/badges.html',
				docsUrl: 'components/badges',
				title: 'Badges'
			},
			{
				previewUrl: 'components/switches.html',
				docsUrl: 'components/switches',
				title: 'Switches'
			},
			{
				previewUrl: 'components/text-fields.html',
				docsUrl: 'components/text-fields',
				title: 'Text Fields'
			},
			{
				previewUrl: 'components/shadows.html',
				docsUrl: 'components/shadows',
				title: 'Shadows'
			},
			{
				previewUrl: 'components/animations.html',
				docsUrl: 'components/animations',
				title: 'Animations'
			},
			{
				previewUrl: 'components/grids-columns.html',
				docsUrl: 'components/grids',
				title: 'Grids'
			},
			{
				previewUrl: 'components/messages.html',
				docsUrl: 'components/messages',
				title: 'Messages'
			},
		],
	})
}
</script>
