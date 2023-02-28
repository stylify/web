<template>
	<div>
		<h2 id="production-build-and-selectors-mangling">
			<DocsTitleLink href="production-build-and-selectors-mangling" />
			Production Build and Selectors Mangling
		</h2>
		<p>When you run <span v-html="devCommands"></span> during a development, selector are going to be generated in the same way as they are written in the class attributes.</p>
		<p>In production build, that is executed by <span v-html="prodCommands"></span>, selectors are minified from long <code>color:blue</code> to short <code>a</code>.</p>
		<p>Selectors are rewritten directly within files/templates. This is because Stylify matches selectors only in selected areas (to prevent unwanted characters to be matched) like <code>class</code>, <code>className</code>, <code>:class</code>. However, frameworks compiles these attributes like <code>class="color:blue"</code> to something like <code>add_attribute(button, "class", "color:blue")</code> under the hood.</p>
		<p>This can cause, that some original selectors will not be rewritten because they are not matched. Stylify could have matching areas defined for frameworks' compiled output, but this could break with any release. Therefore is safer to rewrite them directly within templates during a production build, where it takes no effect on development environment because this command is mostly executed in build pipeline in Github/Gitlab or during a Vercel/Netlify build and deploy.</p>

		<h3>How to disable mangling and selectors rewritting</h3>
		<p>If you want to disable mangling, for example for testing production build locally or even in production build, just add the following into the config:</p>
		<example-code-editor readonly lang="js" :defaultCode="mangling" />

		<p>Sometime, the class attribute can be consistent during the build within the bundler (it's random). You may try to disable rewriting selectors within files like this:</p>
		<example-code-editor readonly lang="js" :defaultCode="rewriting" />
		<p>If selectors are rewritten correctly even after this configuration, you can keep it that way. Otherwise, if you still want the rewriting to be disabled, you will have to dig into Stylify Compiler <code>rewriteSelectors</code> method and see what comes as an input into this method and configure a correct selectorsArea, so Stylify can process it correctly.</code></p>
		<note>Selectors mangling in files cannot be disabled in frameworks that are not based on Javascript (PHP, C#, Java), because their templates are not compiled by Vite/Webpack/Rollup/ESbuild.</note>

	</div>
</template>

<script>

const viteRewriting = `
const stylifyPlugin = stylifyVite({
	bundles: [
		{
			// ...
			rewriteSelectorsInFiles: false
		}
	]
});
`.trim();

const viteMangling = `
const stylifyPlugin = stylifyVite({
	// ...
	bundles: [ /* */ ],
	compiler: {
		mangleSelectors: false
	}
});
`.trim();


const webpackRewriting = `
const stylifyPlugin = stylifyWebpack({
	bundles: [
		{
			// ...
			rewriteSelectorsInFiles: false
		}
	]
});
`.trim();

const webpackMangling = `
const stylifyPlugin = stylifyWebpack({
	// ...
	bundles: [ /* */ ],
	compiler: {
		mangleSelectors: false
	}
});
`.trim();

const bundlerNotes = {
	'Vite': {
		devCommands: '<code>yarn dev</code>/<code>npm run dev</code> (which often runs <code>vite dev</code>)',
		prodCommands: '<code>yarn build</code>/<code>npm run build</code> (which often runs <code>vite build</code>)',
		mangling: viteMangling,
		rewriting: viteRewriting
	},
	'Webpack': {
		devCommands: '<code>yarn dev</code>/<code>npm run dev</code> (which often runs <code>webpack --watch</code>)',
		prodCommands: '<code>yarn build</code>/<code>npm run build</code> (which often runs <code>webpack</code>)',
		mangling: webpackMangling,
		rewriting: webpackRewriting
	},
	'Next': {
		devCommands: '<code>yarn dev</code>/<code>npm run dev</code> (which often runs <code>next dev</code>)',
		prodCommands: '<code>yarn build</code>/<code>npm run build</code> (which often runs <code>next build</code>)',
		mangling: webpackMangling,
		rewriting: webpackRewriting
	}
}

export default {
	props: {
		bundler: {
			type: String,
			default: 'Vite'
		}
	},
	data() {
		const { prodCommands, devCommands, mangling, rewriting } = bundlerNotes[this.bundler];
		return {
			prodCommands,
			devCommands,
			mangling,
			rewriting
		}
	}
}

</script>
