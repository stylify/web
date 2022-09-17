---
section: integrations

order: 1

navigationTitle: "Rollup.js"
navigationIconPath: '/images/brands/rollupjs.svg'

title: Using Stylify CSS with Rollup.js
description: "Learn how to use the Stylify CSS along with the Rollup.js."
---

<note><template>
Integration example for the Rollup.js can be found in <a href="https://github.com/stylify/integrations-examples/tree/master/rollupjs" target="_blank" rel="noopener">integrations examples repository</a>.
</template></note>

## How to integrate the Stylify into the Rollup.js

First install the [@stylify/unplugin](/docs/unplugin) package using NPM or Yarn:

```
npm i -D @stylify/unplugin
yarn add -D @stylify/unplugin
```

Next, add create a configuration file `rollup.config.js`:

```js
const { rollupPlugin } = require('@stylify/unplugin');
const postcss = require('rollup-plugin-postcss');

const stylifyPlugin = rollupPlugin({
	bundles: [{ files: ['./index.html'], outputFile: './index.css' }],
	// Optional
	compiler: {
		// https://stylifycss.com/docs/stylify/compiler#variables
		variables: {},
		// https://stylifycss.com/docs/stylify/compiler#macros
		macros: {},
		// https://stylifycss.com/docs/stylify/compiler#components
		components: {},
		// ...
	}
});

export default {
  input: 'input.js',
  plugins: [stylifyPlugin, postcss()],
  output: { file: 'index.js', format: 'umd' }
};
```

Now you can run build command. This will generate the `stylify.css` and mangle selectors in files, if selected.

<where-to-next />
