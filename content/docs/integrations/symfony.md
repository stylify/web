---
section: integrations

order: 1

navigationTitle: "Symfony"
navigationIconPath: '/images/brands/symfony-icon.svg'

title: Symfony Framework integration
description: "Learn how to integrate the Stylify utilify-first CSS generator into the Symfony Framework."
---

<note><template>
Integration example for the Symfony framework can be found in <a href="https://github.com/stylify/integrations-examples/tree/master/symfony" target="_blank" rel="noopener">integrations examples repository</a>.
</template></note>

## How to integrate the Stylify into the Symfony Framework

The example bellow uses `symfony/skeleton` and ads a few composer packages according to the getting started tutorial: `twig, annotations, @symfony/webpack-encore`.

First install the [@stylify/bundler](/docs/bundler) package using NPM or Yarn:

```
npm i -D @stylify/bundler

yarn add -D @stylify/bundler
```

Now add the following configuration into the webpack.config.js:

```js
const Encore = require('@symfony/webpack-encore');
const { nativePreset } = require('@stylify/stylify');
const { Bundler } = require('@stylify/bundler');
const path = require('path');

const layoutCssPath = './assets/styles/layout.css';
const homepageCssPath = './assets/styles/homepage.css';
class StylifyPlugin {
	apply(compiler) {
		// Disable variables file.
		// Use the variables files instead created by the Bundler
        nativePreset.compiler.injectVariablesIntoCss = false;
		// Optional configuration
		nativePreset.compiler.variables = {
			blue: 'steelblue'
		};

		// Create a new Bundler instance.
		const bundler = new Bundler({
			compiler: nativePreset.compiler,
            cssVarsDirPath: './assets/styles',
			watchFiles: compiler.options.watch || false
		});

		// Customize bundles however you want.
		bundler.bundle([
			{
				outputFile: layoutCssPath,
				files: ['./templates/base.html.twig']
			},
            {
                outputFile: homepageCssPath,
                files: ['./templates/homepage/homepage.html.twig']
            }
		]);

		// You can change these hooks.
		// Just remember, the Stylify must be initialized before the build.
		compiler.hooks.beforeRun.tapPromise(StylifyPlugin.name, () => {
			return bundler.waitOnBundlesProcessed();
		});
		compiler.hooks.beforeRun.tapPromise(StylifyPlugin.name, () => {
			return bundler.waitOnBundlesProcessed();
		});
	}
}

// ...

Encore
	// ...
	// Use the Stylify plugin
    .addPlugin(new StylifyPlugin())
    .addStyleEntry('layout', [
        './assets/styles/stylify-variables.css',
        layoutCssPath
    ])
	.addStyleEntry('homepage', homepageCssPath)
    // ...

module.exports = Encore.getWebpackConfig();
```

Now you can use the generated bundles in the symfony app:
```
{{ encore_entry_link_tags('layout') }}

{{ encore_entry_link_tags('homepage') }}
```

## Configuration

The example above uses the [@stylify/bundler](/docs/bundler) package and the configuration can be found inside that package documentation.
For the Compiler config, checkout the [Compiler documentation](/docs/stylify/compiler).
