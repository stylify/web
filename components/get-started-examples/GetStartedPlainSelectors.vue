<template>
	<example-editor :layout="layout" :showHtml="true">
		{{ code }}
	</example-editor>
</template>

<script>
const code = `
<!--
ATstylify-plainSelectors
	'div': \`
		text-align:center
		line-height:1.2
		font-size:24px
		lg:font-size:34px
	\`,
	'div + div': 'margin-top:8px'
/ATstylify-plainSelectors
-->
<div>Style anything easily</div>
<div>🏖️🍹🤟</div>
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
