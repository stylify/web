<template>
	<example-code-editor
		class="hp__code-editor"
		:defaultCode="code"
		lang="js"
		readonly
	/>
</template>

<script>

const code = `
new Compiler({
	helpers: {
		textPropertyType(value) {
			if (value === 'bold') {
				return 'font-weight';
			} else if (value === 'italic') {
				return 'font-style'
			} else if (value.includes('$')) {
				return 'color';
			}
		},
	},
	macros: {
		'text:(\\\\S+)': ({macroMatch, selectorProperties}) => {
			const property = helpers.textPropertyType(
				macroMatch.getCapture(0)
			);
			selectorProperties.add(
				property, macroMatch.getCapture(0)
			);
		}
	}
});`.trim();

export default {
	data: () => ({
		code
	})
}

</script>
