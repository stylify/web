<template>
	<section id="features" class="container">
		<div class="
			md:display:grid gap:24px md:grid-template-columns:repeat(2,calc(50%_-_12px))
			[section]{tomd:margin-bottom:24px}
			[p]{text-align:center}
			[p:first-of-type]{margin-top:0}
		">
			<section id="installation">
				<h2 class="hp-section-title">Almost Zero Learning Curve</h2>
				<div class="max-width:600px margin-left:auto margin-right:auto">
					<p>
						If you know CSS, you already know, how to use Stylify&nbsp;CSS.
						Use <code>_</code> (instead of a space) and <code>^</code> (for a quote).
					</p>
					<example-code-editor readonly :defaultCode="selectorsExampleSnippet" />
					<p>
						Global selectors are similar to <code>h1 { color:blue }</code>.
					</p>
					<example-code-editor readonly :defaultCode="globalSelectorsExampleSnippet" />
				</div>
			</section>

			<section id="configuration">
				<h2 class="hp-section-title">Easily Configurable and Extensible</h2>
				<div class="max-width:600px margin-left:auto margin-right:auto">
					<p>
						Intuitive configuration without unnecessary nesting.
					</p>
					<example-code-editor readonly lang="javascript" :defaultCode="configurationExampleSnippet" />
				</div>
			</section>

			<section id="bundles-splitting">
				<h2 class="hp-section-title">Simple CSS Bundles Splitting</h2>
				<div class="max-width:600px margin-left:auto margin-right:auto">
					<p>
						You can configure how many bundles you need.
						Only used CSS is generated.
					</p>
					<example-code-editor readonly lang="javascript" :defaultCode="bundlesSplittingExampleSnippet" />
				</div>
			</section>

			<section id="optimization">
				<h2 class="hp-section-title">Extreme Output Optimization</h2>
				<div class="max-width:600px margin-left:auto margin-right:auto">
					<p class="text-align:center">
						Stylify combines and mangles selectors to achieve minimum CSS size.
					</p>
					<example-code-editor readonly :defaultCode="htmlOptimizationExampleSnippet" />
					<example-code-editor class="margin-top:12px" readonly lang="css" :defaultCode="cssOptimizationExampleSnippet" />
				</div>
			</section>
		</div>
		<div class="text-align:center margin-top:24px">
			<nuxt-link to="/docs/get-started/why-stylify-css" class="btn btn--hp margin-top:12px">
				Learn more about features
				<i class="icon icon-arrow-down-circle display:inline-block margin-left:8px transform:rotate(-90deg)"></i>
			</nuxt-link>
		</div>
	</section>
</template>

<script>

const selectorsExampleSnippet = `
color:blue
hover:color:blue
lg:hover:color:blue

margin:0_24px
color:$primary
hover:color:lighten($primary,10)
`.trim();

const globalSelectorsExampleSnippet = `
<!--
[css selectors]{stylify selectors split by ';'}
Selectors are applied to inner elements
& => refers to current element
-->

[a]{color:blue;hover:color:lightblue}
[h1,h2,h3]{margin-top:0}
[p:first-of-type]{margin-top:0}
[&+div]{margin-left:24px}
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
	{ files: [ 'templates/**/*.html', outputFile: 'global.css']},

	{ files: [ 'layout.html' ], outputFile: 'layout.css' },
	{ files: [ 'index.html' ], outputFile: 'index.css' }
];
`.trim();

const htmlOptimizationExampleSnippet = `
<!-- This -->
<button class="color:#fff background:blue">Button</button>

<!-- Become this in production -->
<button class="a b">Button</button>
`.trim();

const cssOptimizationExampleSnippet = `
/* This */
.color\\:#fff { color: #fff }
.background\\:blue { background: blue }

/* Become this in production */
.a { color: #fff }
.b { background: blue }
`.trim();

export default {
	data: () => ({
		selectorsExampleSnippet,
		globalSelectorsExampleSnippet,
		configurationExampleSnippet,
		bundlesSplittingExampleSnippet,

		htmlOptimizationExampleSnippet,
		cssOptimizationExampleSnippet
	}),
}
</script>
