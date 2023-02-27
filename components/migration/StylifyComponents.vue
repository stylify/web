<template>
	<div>

		<p>Stylify doesn't provide any predefined CSS <nuxt-link to="/docs/stylify/compiler/#components">Components</nuxt-link> by default. However, it provides two ways to define them and there is a set of copy&paste <nuxt-link to="/snippets/components">Headless Components</nuxt-link> you can use in your project.</p>

		<p>Components can be configured in a file (using <nuxt-link to="/docs/stylify/compiler/#contentoptionsprocessors">content options</nuxt-link>), where they are used, or globally within a config.</p>

		<p>Example with the configuration within a file. The content between <code>stylify-components</code> expects javascript object without surrounding brackets:</p>

		<example-code-editor readonly lang="html" :defaultCode="contentOptions" />

		<p>Example in a global compiler config:</p>
		<example-code-editor readonly lang="js" :defaultCode="globalConfig" />

		<p>Usage:</p>
		<example-code-editor readonly lang="html" :defaultCode="globalConfigUsage" />

		<p>When defining component, you can also use nesting syntax like in SCSS. This works in a global config and also in the content options:</p>
		<example-code-editor readonly lang="js" :defaultCode="globalConfigNesting" />

	</div>
</template>

<script>
const contentOptions = `
<!--
stylify-components
	title: 'color:blue font-weight:bold md:color:red'
/stylify-components
-->
<h1 class="title"></h1>
`.trim();

const globalConfig = `
const compilerConfig = {
	components: {
		title: 'color:blue font-weight:bold md:color:red'
	}
};
`.trim();

const globalConfigNesting = `
const compilerConfig = {
	components: {
		button: \`
			color:black font-weight:bold
			&:hover { color:grey }
			&--red {
				color:red
				&:hover { color: darkred }
			}
		\`
	}
};
`.trim();

const globalConfigUsage = '<h1 class="title"></h1>';

export default {
	data: () => ({
		contentOptions,
		globalConfig,
		globalConfigNesting,
		globalConfigUsage
	})
}

</script>
