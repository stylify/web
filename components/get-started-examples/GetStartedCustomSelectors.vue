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
	'div': \`
		text-align:center
		line-height:1.2
		font-size:24px
		lg:font-size:34px
	\`
/stylify-customSelectors
-->
<div class="[&+div]{margin-top:8px}">Style anything easily</div>
<div>🏖️🍹🤟</div>
`;

export default {
	props: {
		layout: {
			type: String,
			default: "row",
		},
	},
	data: () => ({
		code: code,
	}),
};
</script>
<!-- /stylify-ignore -->
