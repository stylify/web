<template>
	<example-editor :layout="layout" :showHtml="true" class="min-height:400px">
		{{ code }}
	</example-editor>
</template>

<!-- stylify-ignore -->
<script>
const code = `
<!--
stylify-components
	'image': \`
		height:100px
		width:auto
		border-radius:4px
		transition:.3s
		margin:0_8px
		hover:scale:1.1
	\`
/stylify-components
-->
<img src="/images/p1.jpg" class="image">
<img src="/images/p2.jpg" class="image">
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
