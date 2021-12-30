---
section: integrations

order: 1

navigationTitle: "Webpack"
navigationIconPath: '/images/brands/webpack-icon.svg'

title: Webpack integration
description: "Learn how to use the Stylify utilify-first CSS generator along with Webpack."
---

<note><template>
Integration example for the Webpack can be found in <a href="https://github.com/stylify/integrations-examples/tree/master/webpack" target="_blank" rel="noopener">integrations examples repository</a>.
</template></note>

## How to integrate the Stylify into the Webpack

First install the [@stylify/bundler](/docs/bundler) package using NPM or Yarn:

```
npm i -D @stylify/bundler

yarn add -D @stylify/bundler
```

Next, add the following configuration into the `webpack.config.js` file:

```js
const { nativePreset } = require('@stylify/stylify');
const { Bundler } = require('@stylify/bundler');
const path = require('path');

class StylifyPlugin {
	apply(compiler) {
		// Optional configuration.
		nativePreset.compiler.variables = {
			blue: 'steelblue'
		};

		// Create a new Bundler instance.
		const bundler = new Bundler({
			compiler: nativePreset.compiler,
			watchFiles: compiler.options.watch || false
		});

		// Customize bundles however you want.
		bundler.bundle([
			{
				outputFile: './index.css',
				files: ['./index.html']
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

module.exports = {
	entry: './input.js',
	// ...
	plugins: [
		new StylifyPlugin()
	],
	// ...
	output: {
		path: path.resolve(__dirname),
		filename: 'index.js',
		libraryTarget: 'umd'
	}
};
```

Now add the generated `index.css` file into the `index.js` entry file.

If you run webpack after the step above, you should trigger the Stylify Bundler and get the CSS generated according to configuration.

## Configuration

The example above uses the [@stylify/bundler](/docs/bundler) package and the configuration can be found inside that package documentation.
For the Compiler config, checkout the [Compiler documentation](/docs/stylify/compiler).
