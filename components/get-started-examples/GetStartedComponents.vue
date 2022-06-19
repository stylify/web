<template>
	<example-editor :layout="layout" :showHtml="true">
		{{ code }}
	</example-editor>
</template>

<script>
const code = `
<!--
ATstylify-components
	'label-icon': 'lg:font-size:48px margin-left:8px',
	label: \`
		display:flex
		line-height:1.2
		font-size:32px
		align-items:center
	\`,
/ATstylify-components
-->
<span class="label">
	Components time!<span class="label-icon">🎉</span>
</span>
`.replace(/AT/g, '@');

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
