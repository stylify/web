---
section: integrations

order: 1

navigationTitle: "Rollup.js"
navigationIconPath: '/images/brands/rollupjs.svg'

title: Rollup.js integration
description: "Learn how to use the Stylify utilify-first CSS generator along with the Rollup.js."
---

<note><template>
Integration example for the Rollup.js can be found in <a href="https://github.com/stylify/integrations-examples/tree/master/rollupjs" target="_blank" rel="noopener">integrations examples repository</a>.
</template></note>

## How to integrate the Stylify into the Rollup.js

First install the [@stylify/bundler](/docs/bundler) package using NPM or Yarn:

```
npm i -D @stylify/bundler

yarn add -D @stylify/bundler
```

Next, add create a configuration file `rollup.config.js`:

```js
const { nativePreset } = require('@stylify/stylify');
const { Bundler } = require('@stylify/bundler');
const postcss = require('rollup-plugin-postcss');

// Optional configuration.
nativePreset.compiler.variables = {
	blue: 'stelblue'
};

// Create a new Bundler instance.
const bundler = new Bundler({
	compilerConfig: nativePreset.compiler,
	watchFiles: process.env.ROLLUP_WATCH || false
});

// You can customize bundles however you want.
const bundle = async () => {
	bundler.bundle([
		{
			files: ['./index.html'],
			outputFile: './index.css'
		}
	]);
	return bundler.waitOnBundlesProcessed();
};

const stylifyBundlerPlugin = () => {
	return {
		name: 'stylify',
		options: bundle
	}
};

export default {
  input: 'input.js',
  plugins: [
	stylifyBundlerPlugin(),
	postcss()
  ],
  output: {
    file: 'index.js',
    format: 'umd',
  }
};
```

## Configuration

The example above uses the [@stylify/bundler](/docs/bundler) package and the configuration can be found inside that package documentation.
For the Compiler config, checkout the [Compiler documentation](/docs/stylify/compiler).
