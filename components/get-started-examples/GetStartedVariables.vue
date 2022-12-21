<template>
	<example-editor :layout="layout" :showHtml="true" layout="column" class="min-height:395px">
		{{ code }}
	</example-editor>
</template>

<script>
const code = `
<!--
stylify-variables
	height: '120px',
	radius: '4px',
	scale: '1.1'
/stylify-variables
-->
<img src="/images/p3.jpg" class="
	width:auto
	transition:.3s
	height:$height
	border-radius:$radius
	hover:scale:$scale
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
