<template>
	<example-editor :layout="layout" :showHtml="true">
		{{ code }}
	</example-editor>
</template>

<!-- stylify-ignore -->
<script>
const code = `
<!--
stylify-customSelectors
	img: \`
		height:100px
		width:auto
		border-radius:4px
		transition:.3s
		hover:scale:1.1
	\`
/stylify-customSelectors
-->
<img src="/images/p3.jpg" class="[&+img]{margin-left:8px}">
<img src="/images/p4.jpg">
`;

export default {
	props: {
		layout: {
			type: String,
			default: "column",
		},
	},
	data: () => ({
		code: code,
	}),
};
</script>
<!-- /stylify-ignore -->
