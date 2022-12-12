<template>
	<example-editor :layout="layout" :showHtml="true" class="min-height:340px">
		{{ code }}
	</example-editor>
</template>

<script>
const code = `
<button class="
  background:none
  padding:12px
  font-weight:bold
  border-radius:4px
  font-size:32px
  transition:.3s
  cursor:pointer
  border:1px_solid_#01befe
  hover:background:#01befe
  hover:border-color:darken(#01befe,30)
  md:padding:18px_24px
  lg:font-size:48px
">
  Edit Me 😎!
</button>
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
