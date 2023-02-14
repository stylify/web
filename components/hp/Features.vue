<!--
stylify-components
	'features-section': `
		scroll-margin-top:100px display:grid grid-template-columns:100% md:grid-template-columns:calc(50%_-_12px)_calc(50%_-_12px) gap:24px align-items:center
		h2 { text-align:center font-size:32px margin-top:0 margin-bottom:8px md:text-align:left }
		p { text-align:center margin-bottom:0 md:text-align:left }
	`
/stylify-components
-->
<template>
	<div id="features" class="container">
		<div class="[section]{margin-bottom:64px}">
			<section id="zero-learning-curve" class="features-section">
				<div>
					<h2>Zero Learning Curve and Faster Coding</h2>
					<p>Instead of writing CSS and switching between HTML and CSS files use CSS-like selectors. The <nuxt-link to="/docs/get-started#quick-start" class="link">syntax is similar to CSS</nuxt-link>. Use <code>_</code>&nbsp;instead of space and <code>^</code>&nbsp;for a quote.</p>
				</div>
				<example-code-editor readonly :defaultCode="selectorsExampleSnippet" />
			</section>

			<section id="optimization" class="features-section">
				<div>
					<h2>Automatic and Extremely Tunned CSS and HTML Optimization</h2>
					<p>CSS is dynamically generated into CSS files, it is optimized and HTML is mangled. No unused CSS is generated. No CSS purge is needed. No CSS files have to be created. Thanks to inner algorithm for joining selectors, almost no duplicates are generated.</p>
				</div>
				<div>
					<example-code-editor readonly :defaultCode="htmlOutputExampleSnippet" />
					<br><example-code-editor readonly lang="css" :defaultCode="cssOutputExampleSnippet" />
				</div>
			</section>

			<section id="bundles-splitting" class="features-section">
				<div>
					<h2>Simple CSS Bundles Splitting</h2>
					<p>CSS bundles can be split into multiple files. It's more efficient than combining CSS manually and it also makes the CSS output smaller.</p>
				</div>
				<example-code-editor readonly lang="javascript" :defaultCode="bundlesSplittingExampleSnippet" />
			</section>

			<section id="configuration" class="features-section">
				<div>
					<h2>Intuitive Configuration</h2>
					<p>Define reusable <nuxt-link to="/docs/get-started#adding-a-variable" class="link font-family:monospace">variables</nuxt-link>, <nuxt-link to="/docs/get-started#defining-a-component" class="link font-family:monospace">components</nuxt-link> and <nuxt-link to="/docs/get-started#custom-selectors" class="link font-family:monospace">custom selectors</nuxt-link> to simplify the development. Variables values can be different for each screen. This allows you to change it for dark mode/light mode and desktop/mobile.</p>
				</div>
				<example-code-editor readonly lang="javascript" :defaultCode="configurationExampleSnippet" />
			</section>

			<section id="content-options" class="features-section">
				<div>
					<h2>Configure Variables, Components and Global Selectors in files, where they are used</h2>
					<p>Components, Variables and Global Selectors can be defined within a file, where they are used. This encapsulates component CSS and HTML into one file.</p>
				</div>
				<example-code-editor readonly lang="html" :defaultCode="contentOptionsExampleSnippet" />
			</section>

			<section id="hooks" class="features-section">
				<div>
					<h2>Extend Functionality with Hooks</h2>
					<p>Hooks can be used extend functionality and modify the output during compilation. There are hooks for <nuxt-link to="/docs/stylify/compiler#hooks" class="link">Compiler</nuxt-link>, <nuxt-link to="/docs/bundler#hooks" class="link">Bundler</nuxt-link> and in browser for <nuxt-link to="/docs/stylify/runtime#hooks" class="link">Runtime</nuxt-link>.</p>
				</div>
				<example-code-editor readonly lang="javascript" :defaultCode="hooksOptionsExampleSnippet" />
			</section>
		</div>
		<div class="text-align:center margin-top:24px">
			<nuxt-link to="/docs/get-started" class="btn btn--hp margin-top:12px">
				Get Started
				<i class="icon icon-arrow-down-circle display:inline-block margin-left:8px transform:rotate(-90deg)"></i>
			</nuxt-link>
		</div>
	</div>
</template>

<script>

const selectorsExampleSnippet = `
<h1 class="font-size:24px color:blue hover:color:lightblue lg:font-size:32px">
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
		// Variables based on color scheme dark/light
		dark: {
			primary: '#fff'
		},
		// Variables based on screen size
		'minw640px': {
			titleFontSize: 38px
		}
	},
	components: {
		'section': 'max-width:1240px margin:0_auto_24px_auto',
		// Dynamic components
		'title(?:--(\\\\S+))?': ({ matches, variables, helpers, dev }) => {
			const color = matches[1] ?? '#000';
			return \`font-size:24px\${color ? \` color:\${color}\` : ''}\`;
		},
	},
	customSelectors: {
		'*': 'box-sizing:border-box',
		'h1,h2': 'margin-top:0 margin-bottom:12px md:margin-bottom:24px'
	},
	macros: {
		'ml:(\\S+?)': ({macroMatch, selectorProperties}) => {
			// ml:24px => will create => margin-left: 24px
			selectorProperties.add('margin-left', macroMatch.getCapture(0));
		}
	},
}
`.trim();

const bundlesSplittingExampleSnippet = `
const bundles = [
	// Use Glob syntax to map files
	{ files: [ 'templates/**/*.html' ], outputFile: 'global.css },
	// Split CSS for layouts
	{ files: [ 'layout.html' ], outputFile: 'layout.css' },
	// And for pages
	{ files: [ 'index.html' ], outputFile: 'index.css' }
];
`.trim();

const contentOptionsExampleSnippet = `
<!--
stylify-variables
	blue: '#01befe'
/stylify-variables

stylify-components
	subtitle: 'font-size:24px margin-bottom:12px color:$blue'
/stylify-components
-->
<h2 class="subtitle">Subtitle 1</h2>
<h2 class="subtitle">Subtitle 2</h2>
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
