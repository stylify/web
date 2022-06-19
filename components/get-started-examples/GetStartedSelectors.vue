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
	color:#bd0c65
	border-bottom:4px__solid__#fff
	transition:border-color__0.3s
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
