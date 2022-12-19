<template>
	<example-editor :layout="layout" :showHtml="true" class="min-height:366px">
		{{ code }}
	</example-editor>
</template>

<script>
const code = `
<!--
https://stylifycss.com/docs/get-started#adding-a-variable

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
			default: "column",
		}
	},
	data: () => ({
		code: code
	})
}
</script>
