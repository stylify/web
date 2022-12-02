<template>
	<example-editor :layout="layout" :showHtml="true" class="min-height:340px">
		{{ code }}
	</example-editor>
</template>

<script>
const code = `
<div class="
	font-size:32px
	minw1280px:font-size:48px
	color:#f1f1f1
	padding:4px_8px
	transition:.3s
	hover:transform:scale(1.5)
">
	Edit me 😎!
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
