---
section: integrations

order: 1

navigationTitle: "Webpack"
navigationIconPath: '/images/brands/webpack-icon.svg'

title: Using Stylify CSS with Webpack
description: "Learn how to use the Stylify utilify-first CSS generator along with Webpack."
---

<note><template>
Integration example for the Webpack can be found in <a href="https://github.com/stylify/integrations-examples/tree/master/webpack" target="_blank" rel="noopener">integrations examples repository</a>.
</template></note>

## How to integrate the Stylify into the Webpack

First install the [@stylify/unplugin](/docs/unplugin) package using NPM or Yarn:

```
npm i -D @stylify/unplugin
yarn add -D @stylify/unplugin
```

Next, add the following configuration into the `webpack.config.js` file:

```js
const path = require('path');
const { webpackPlugin } = require('@stylify/unplugin');

const mode = 'development';
const stylifyPlugin = webpackPlugin({
	transformIncludeFilter: (id) => id.endsWith('html'),
	bundles: [{
		outputFile: './index.css',
		files: ['./index.html'],
		rewriteSelectorsInFiles: mode === 'production'
	}],
	// Optional
	extend: {
		bundler: {
			compiler: {
				// https://stylifycss.com/docs/stylify/compiler#variables
				variables: {},
				// https://stylifycss.com/docs/stylify/compiler#macros
				macros: {},
				// https://stylifycss.com/docs/stylify/compiler#components
				components: {},
				// ...
			}
		}
	}
});

module.exports = {
	entry: './input.js',
	mode: mode,
	plugins: [ stylifyPlugin ],
	module: {
		rules: [{
			test: /\.css$/i,
			use: ["style-loader", "css-loader", "postcss-loader"]
		}],
	},
	output: {
		path: path.resolve(__dirname),
		filename: 'index.js',
		libraryTarget: 'umd'
	}
};
```

Now add the generated `index.css` file into the `index.js` entry file.

<where-to-next />
