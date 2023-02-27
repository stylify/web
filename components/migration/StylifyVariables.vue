<template>
	<div>
		<p>
			In Stylify, there is nothing like a "theme", neither extend section in config. There are only variables.
		</p>

		<p>
			<nuxt-link to="/docs/get-started#adding-a-variable">Variables</nuxt-link> can be defined in two ways in Stylify. In a global config or within a file where they are used via <nuxt-link to="/docs/stylify/compiler#contentoptionsprocessors">content options</nuxt-link>.
		</p>

		<p>Example with global config:</p>
		<example-code-editor readonly lang="js" :defaultCode="globalConfig" />

		<p>Variables can also be defined based on media query:</p>
		<example-code-editor readonly lang="js" :defaultCode="globalConfigMediaQuery" />


		<p>Example with content options:</p>
		<example-code-editor readonly lang="html" :defaultCode="contentOptions" />
	</div>
</template>

<script>
const contentOptions = `
<!--
stylify-variables
	primary: '#000',
	secondary: '#eee'
	titleFontSize: '24px',
	shadow: '0 2px 3px #000'
/stylify-variables
-->
<div class="color:$primary"></div>
`.trim();


const globalConfig = `
const compilerConfig = {
	variables: {
		primary: '#000',
		secondary: '#eee',
		titleFontSize: '24px',
		shadow: '0 2px 3px #000'
	}
}
`.trim();

const globalConfigMediaQuery = `
const compilerConfig = {
	variables: {
		dark: { blue: 'lightblue' },
		md: { fontSize: 24px },
		'minw640px': { fontSize: 32px },
		// When screen is not found, it falls back to a random custom selector
		'.dark': { blue: 'lightblue' },
		':root[data-theme="dark"]': { blue: 'lightblue' }
	}
}
`.trim();

export default {
	data: () => ({
		contentOptions,
		globalConfig,
		globalConfigMediaQuery
	})
}

</script>
