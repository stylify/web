<template>
	<example-editor :layout="layout" :showHtml="true" layout="column" class="min-height:395px">
		{{ code }}
	</example-editor>
</template>

<script>
const code = `
<!--
	Screens can be static: sm, lg, md
	Dynamic: miw640px, rng400px-800px
	Combined using logical operands
	- lg&&landscape
	- sm||lg
-->

<img src="/images/p2.jpg" width="120" height="120" class="
	object-fit:cover

	border-radius:4px
	sm:border-radius:12px
	minw600px:border-radius:24px
	lg||landscape:border-radius:120px
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
