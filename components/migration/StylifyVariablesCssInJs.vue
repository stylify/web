<template>
	<div class="margin-top:20px">
		<p>When you need to pass a color into the component using props, use native CSS variables:</p>
		<example-code-editor readonly lang="html" :defaultCode="localVariable" />

		<p>We just need to tell Stylify to replace variables with CSS variables instead of their value and that the <code>localTextColor</code> is external:</p>
		<example-code-editor readonly lang="js" :defaultCode="compilerConfig" />

		<p>The external variable can also be defined only in the file where it is used:</p>
		<example-code-editor readonly lang="html" :defaultCode="externalVariable" />
	</div>
</template>

<script>
const localVariable = `
<div
	style={{ '--localTextColor': props.textColor }}
	className="title color:$localTextColor"
">
</div>
`.trim();

const compilerConfig = `
const compilerConfig = {
	replaceVariablesByCssVariables: true,
	externalVariables: ['localTextColor']
}
`.trim();

const externalVariable = `
<!--
stylify-externalVariables
	localTextColor
/stylify-externalVariables
-->
<div
	style={{ '--localTextColor': props.textColor }}
	className="title color:$localTextColor"
">
</div>
`.trim()

export default {
	data: () => ({
		localVariable,
		compilerConfig,
		externalVariable
	})
}

</script>
