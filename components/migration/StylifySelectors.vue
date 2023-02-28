<template>
	<div>
		<p>Stylify uses CSS-like utilities, that can be used directly within the class attribute. There are no shortcuts by default and selectors cannot contain a space because of the further optimization:</p>

		<example-code-editor readonly lang="html" :defaultCode="selectors" />

		<p>When some selectors have the same pseudo-class or even media query, you can group them like this:</p>

		<example-code-editor readonly lang="html" :defaultCode="selectorsGroup" />

	</div>
</template>

<script>
const selectors = `
<div class="
	color:blue
	font-weight:bold
	md:color:red
	md&&landscape:font-size:32px
	minw123px:font-size:123px
"></div>
`.trim();

const selectorsGroup = `
<div class="
	hover:{color:blue;text-decoration:underline}
	md:hover:{transform:scale(1.1);left:4px}
"></div>
`.trim();

export default {
	data: () => ({
		selectors,
		selectorsGroup
	})
}
</script>
