<template>
	<section id="features" class="container">
		<h2 id="why-stylify" class="hp-section-title">Why Stylify instead of CSS or inline styles?</h2>
		<p class="margin-top:0 margin-bottom:32px text-align:center [a]{color:$blue1}">
			Because of <nuxt-link to="/docs/get-started/why-stylify-css#problems-stylify-css-tries-to-solve">fewer CSS headaches</nuxt-link>, <nuxt-link to="/docs/get-started/why-stylify-css#faster-coding">faster coding</nuxt-link>, and&nbsp;<nuxt-link to="/docs/get-started/why-stylify-css#output-optimization">extremely optimized output</nuxt-link>&nbsp;💎.
		</p>

		<div class="
			row-gap:48px display:grid grid-template-columns:100%
			justify-content:center
			md:column-gap:24px md:grid-template-columns:repeat(auto-fit,minmax(300px,1fr)) md:row-gap:64px
			[p:first-of-type]{margin-top:0;md:min-height:82px}
		">
			<div id="zero-learning-curve">
				<p>Instead of writing CSS, use CSS-like selectors. The <nuxt-link to="/docs/get-started#quick-start" class="link">syntax is similar to CSS</nuxt-link>. Use <code>_</code>&nbsp;instead of space and <code>^</code>&nbsp;for a quote.</p>
				<example-code-editor readonly :defaultCode="selectorsExampleSnippet" />
			</div>

			<div id="optimization">
				<p>CSS is dynamically generated into CSS files, it is optimized and HTML is mangled. No unused CSS is generated. No CSS purge is needed.</p>
				<example-code-editor readonly :defaultCode="htmlOutputExampleSnippet" />
				<br><example-code-editor readonly lang="css" :defaultCode="cssOutputExampleSnippet" />
			</div>

			<div id="bundles-splitting">
				<p>CSS bundles can be split into multiple files. It's more efficient than combining CSS manually and it also makes the CSS output smaller.</p>
				<example-code-editor readonly lang="javascript" :defaultCode="bundlesSplittingExampleSnippet" />
			</div>

			<div id="configuration">
				<p>Define reusable <nuxt-link to="/docs/get-started#adding-a-variable" class="link font-family:monospace">variables</nuxt-link>, <nuxt-link to="/docs/get-started#defining-a-component" class="link font-family:monospace">components</nuxt-link> and <nuxt-link to="/docs/get-started#custom-selectors" class="link font-family:monospace">custom selectors</nuxt-link> to simplify the development.</p>
				<example-code-editor readonly lang="javascript" :defaultCode="configurationExampleSnippet" />
			</div>

			<div id="content-options">
				<p>Components, Variables and Global Selectors can be defined within a file, where they are used. This encapsulates component CSS and HTML into one file.</p>
				<example-code-editor readonly lang="html" :defaultCode="contentOptionsExampleSnippet" />
			</div>

			<div id="hooks">
				<p>Hooks can be used extend functionality and modify the output during compilation. There are hooks for <nuxt-link to="/docs/stylify/compiler#hooks" class="link">Compiler</nuxt-link>, <nuxt-link to="/docs/bundler#hooks" class="link">Bundler</nuxt-link> and in browser for <nuxt-link to="/docs/stylify/runtime#hooks" class="link">Runtime</nuxt-link>.</p>
				<example-code-editor readonly lang="javascript" :defaultCode="hooksOptionsExampleSnippet" />
			</div>
		</div>
		<div class="text-align:center margin-top:24px">
			<nuxt-link to="/docs/get-started" class="btn btn--hp margin-top:12px">
				Get Started
				<i class="icon icon-arrow-down-circle display:inline-block margin-left:8px transform:rotate(-90deg)"></i>
			</nuxt-link>
		</div>
	</section>
</template>

<script>

const selectorsExampleSnippet = `
<h1 class="
	font-size:24px
	color:blue
	hover:color:lightblue
	lg:font-size:32px
">
	Hello World!🎉
</h1>
`.trim();

const htmlOutputExampleSnippet = `
<!-- Production HTML -->
<h1 class="a b c d">
	Hello World!🎉
</h1>
`.trim();

const cssOutputExampleSnippet = `
/* Production CSS */
.a {font-size:24px}
.b {color:blue}
.c:hover {color:lightblue}

@media (min-width: 1024px) {
  .d{ font-size: 32px }
}
`.trim();

const configurationExampleSnippet = `
const config = {
	variables: {
		primary: '#01befe',
		titleFontSize: '24px',
		dark: {
			primary: '#fff'
		},
		'minw640px': {
			titleFontSize: 38px
		}
	},
	components: {
		'title': 'font-size:24px margin-bottom:12px'
	},
	customSelectors: {
		'*': 'box-sizing:border-box'
	},
	macros: {
		'ml:(\\S+?)': ({macroMatch, cssProperties}) => {
            // ml:24px => will create => margin-left: 24px
            cssProperties.add('margin-left', macroMatch.getCapture(0));
        }
	},
}
`.trim();

const bundlesSplittingExampleSnippet = `
const bundles = [
	{
		// Use Glob syntax to map files
		files: [ 'templates/**/*.html' ],
		outputFile: 'global.css'
	},
	{
		// Split CSS for layouts
		files: [ 'layout.html' ],
		outputFile: 'layout.css'
	},
	{
		// And for pages
		files: [ 'index.html' ],
		outputFile: 'index.css'
	}
];
`.trim();

const contentOptionsExampleSnippet = `
<!--
stylify-variables
	blue: '#01befe'
/stylify-variables

stylify-components
	subtitle: \`
		font-size:24px
		margin-bottom:12px
		color:$blue
	\`
/stylify-components
-->
<h2 class="subtitle">Subtitle 1</h1>
<h2 class="subtitle">Subtitle 2</h1>
`.trim();

const hooksOptionsExampleSnippet = `
// This hook example converts px font size
// to REM and automatically calculates line height.

import {hooks} from '@stylify/stylify';

hooks.addListener('compiler:newMacroMatch', ({selectorProperties}) => {
	const pixelUnit = selectorProperties.properties['font-size'];

	if (typeof pixelUnit === 'undefined' || !pixelUnit.endsWith('px')) {
		return;
	}

	const pixelFontSize = Number(pixelUnit.slice(0,-2));
	const remFontSize = pixelFontSize / 10;

	selectorProperties.addMultiple({
		'font-size': \`\${remFontSize}rem\`,
		'line-height': \`\${remFontSize * (pixelFontSize >= 28 ? 1.2 : 1.7)}rem\`
	});
});
`.trim();

export default {
	data: () => ({
		selectorsExampleSnippet,
		htmlOutputExampleSnippet,
		cssOutputExampleSnippet,

		configurationExampleSnippet,
		bundlesSplittingExampleSnippet,
		contentOptionsExampleSnippet,
		hooksOptionsExampleSnippet
	}),
}
</script>
