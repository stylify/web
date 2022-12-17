<template>
	<example-editor :layout="layout" :showHtml="true" layout="column" class="min-height:450px">
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
  md:padding:12px_24px
">
  <!--
  	Write selectors as CSS property:value
  	Use _ for a space and ^ for a quote
  -->
  Edit Me 🏝️!
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
