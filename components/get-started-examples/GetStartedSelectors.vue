<template>
	<example-editor :layout="layout" :showHtml="true" layout="column" class="min-height:400px">
		{{ code }}
	</example-editor>
</template>

<script>
const code = `
<!--
Edit Me 😎!
Write selectors as CSS property:value
Use _ for a space and ^ for a quote
-->
<img src="/images/p1.jpg" class="
	height:120px
	width:auto
	border-radius:4px
	transition:.3s
	hover:scale:1.1
">
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
