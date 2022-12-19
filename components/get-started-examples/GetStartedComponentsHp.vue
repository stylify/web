<template>
	<example-editor :layout="layout" :showHtml="true" class="min-height:366px">
		{{ code }}
	</example-editor>
</template>

<!-- stylify-ignore -->
<script>
const code = `
<!--
https://stylifycss.com/docs/get-started#defining-a-component

stylify-components
	label: \`
		display:flex
		line-height:1.2
		font-size:32px
		align-items:center
	\`,
	'label-icon': 'lg:font-size:48px margin-left:8px',
/stylify-components
-->
<span class="label">
	Components time!<span class="label-icon">🎉</span>
</span>
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
