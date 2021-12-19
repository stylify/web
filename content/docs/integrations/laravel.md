---
section: integrations

order: 1

navigationTitle: "Laravel"
navigationIconPath: '/images/brands/laravel.svg'

title: Laravel Framework integration
description: ""
---

Laravel uses internally its own integration of Webpack. Thanks to that the Stylif integration and configuration is similar to the [Webpack](/docs/integrations/webpack) configuration.

<note><template>
Integration example for the Laravel framework can be found in <a href="https://github.com/stylify/integrations-examples/tree/master/laravel" target="_blank" rel="noopener">integrations examples repository</a>.
</template></note>

## How to integrate the Stylify into the Laravel Framework

First install the [@stylify/bundler](/docs/bundler) package using NPM or Yarn:

```
npm i -D @stylify/bundler

yarn add -D @stylify/bundler
```

Next add Stylify plugin into the `webpack.mix.js`:

```js
const { nativePreset } = require('@stylify/stylify');
const { Bundler } = require('@stylify/bundler');

class StylifyPlugin {
	apply(compiler) {
		// Optional configuration.
		nativePreset.compiler.variables = {
			blue: 'steelblue'
		};

		// Create a new Bundler instance.
		const bundler = new Bundler({
			compilerConfig: nativePreset.compiler,
			injectVariablesIntoCss: false,
			watchFiles: compiler.options.watch || false
		});

		// Customize bundles however you want.
		bundler.bundle([
			{
				outputFile: './resources/css/homepage.css',
				files: ['./resources/views/welcome.blade.php']
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
};

// ...

mix
	// ...
    .webpackConfig({
        plugins: [new StylifyPlugin()]
    })
	// ...
```

Now you can use the commands for laravel mix. It will also trigger the Stylify Bundler.

## Configuration

The example above uses the [@stylify/bundler](/docs/bundler) package and the configuration can be found inside that package documentation.
For the Compiler config, checkout the [Compiler documentation](/docs/stylify/compiler).
