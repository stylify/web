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
	dev: true,
	transformIncludeFilter: (id) => id.endsWith('html'),
	bundles: [{
		files: ['./index.html'],
		outputFile: './index.css'
	}]
});

export default {
  input: 'input.js',
  plugins: [stylifyPlugin, postcss()],
  output: { file: 'index.js', format: 'umd' }
};
```

Now you can run build command. This will generate the `stylify.css` and mangle selectors in files, if selected.

<where-to-next />
