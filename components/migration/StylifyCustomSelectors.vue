<template>
	<div>
		<p class="margin-top:0">Stylify provides <nuxt-link to="/docs/get-started#custom-selectors">custom selectors</nuxt-link> with which you can style elements globally. These selectors can be defined directly within the class attribute or in the global config or in a file where they are used using <nuxt-link to="/docs/stylify/compiler#contentoptionsprocessors">content options</nuxt-link>.</p>

		<p>Example with the class attribute:</p>
		<example-code-editor readonly lang="html" :defaultCode="customSelectorsExample" />

		<p>The syntax pattern in the class attribute looks like this:</p>

		<example-code-editor readonly lang="html" :defaultCode="syntaxPattern" />

		<p>The <code>_</code> (underscore) is used instead of space in both CSS and Stylify selectors and the <code>&</code> character always refers to the current element.</p>

		<p>The same code but in the global config would look like this:</p>
		<example-code-editor readonly lang="js" :defaultCode="globalConfig" />

		<p>When defining `customSelectors` in the global config on through <nuxt-link to="/docs/stylify/compiler#contentoptionsprocessors">content options</nuxt-link>, the syntax lets you use a <nuxt-link to="/docs/stylify/compiler#nested-syntax-for-custom-selectors">nesting feature</nuxt-link>. The <code>&</code> characters refers to the upper level like in the SCSS.</p>

		<p>Usage of the global config:</p>
		<example-code-editor readonly lang="html" :defaultCode="globalConfigUsage" />
	</div>
</template>

<script>
const customSelectorsExample = `
<div className="[.button_.icon]{font-size:14px}">
	<button className="
		[.icon]{color:#fff;border-radius:12px}
		[&+button]{margin-left:24px}
	">
		<i className="icon"></i>
	</button>
	<button></button>
<div>
`.trim();

const syntaxPattern = `[css selectors]{stylify selectors split by ;}`;

const globalConfig = `
const compilerConfig = {
	customSelectors: {
		'.buttons-wrapper .button .icon': 'font-size:14px',
		'.button': \`
			.icon { color:#fff border-radius:12px }
			& + button { margin-left:24px }
		\`,
	}
}
`.trim();

const globalConfigUsage = `
<div className="buttons-wrapper">
	<button className="button">
		<i className="icon"></i>
	</button>
	<button></button>
<div>
`.trim();

export default {
	data: () => ({
		customSelectorsExample,
		syntaxPattern,
		globalConfig,
		globalConfigUsage
	})
}

</script>
