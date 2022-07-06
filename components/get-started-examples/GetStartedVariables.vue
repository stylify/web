<template>
	<example-editor :layout="layout" :showHtml="true">
		{{ code }}
	</example-editor>
</template>

<script>
const code = `
<!--
stylify-variables
	fontSize: '24px',
	fontSizeLg: '32px',
	textShadow: '0 4px 8px #379adf'
/stylify-variables
-->
<div class="
	font-size:$fontSize
	lg:font-size:$fontSizeLg
	text-shadow:$textShadow
">
	Seamless coding 🏄‍♀️
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
