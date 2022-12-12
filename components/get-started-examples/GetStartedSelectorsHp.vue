<template>
	<example-editor :layout="layout" :showHtml="true" layout="column" class="min-height:400px lg:min-height:498px">
		{{ code }}
	</example-editor>
</template>

<script>
const code = `
<!--
	Edit me 🤩!
	Write selectors as CSS property:value
	Use _ for a space and ^ for a quote
-->
<div class="
	display:grid
	gap:12px
	grid-template-columns:repeat(auto-fit,minmax(50px,1fr))
	[img]{border-radius:8px;object-fit:cover;transition:.3s}
">
	<img src="/images/hp/mountains.jpg" class="hover:border-radius:24px">
	<img src="/images/hp/maldives.jpg" class="hover:border-radius:24px_82px">
</div>
`;

export default {
	props: {
		layout: {
			type: String,
			default: 'row'
		}
	},
	data: () => ({
		code: code
	})
}
</script>
