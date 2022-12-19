<template>
	<example-code-editor
		class="hp__code-editor"
		:defaultCode="code"
		lang="html"
		readonly
	/>
</template>

<script>

const code = `
<!--
https://stylifycss.com/docs/get-started#screens-usage

Screens can be static: sm, lg, md
Dynamic: miw640px, rng400px-800px
Combined using logical operands
- lg&&landscape
- sm||lg
-->
<div class="
	lg:font-size:24px
	tolg:margin-left:12px
	sm&&tolg:font-size:32px
	lg&&dark:color:#fff
	rng640px-1024px:padding:48px
	mw450px:overflow:auto
">
</div>`.trim();

export default {
	data: () => ({
		code
	})
}
</script>
