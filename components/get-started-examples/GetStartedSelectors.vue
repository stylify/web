<template>
	<example-editor :layout="layout" :showHtml="true">
		{{ code }}
	</example-editor>
</template>

<script>
const code = `
<span class="
	font-size:32px
	lg:font-size:48px
	color:#fff
	border-bottom:4px_solid_transparent
	transition:border-color_0.3s
	hover:border-color:#bd0c65
">
	Edit me 🤩!
</span>
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
