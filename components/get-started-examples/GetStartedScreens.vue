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
