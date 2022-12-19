<template>
	<example-editor :layout="layout" :showHtml="true" layout="column" class="min-height:478px">
		{{ code }}
	</example-editor>
</template>

<script>
const code = `
<!--
https://stylifycss.com/docs/get-started#quick-start

Write selectors as CSS property:value
Use _ for a space and ^ for a quote
-->
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
  Edit Me 🏝️!
</button>
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
