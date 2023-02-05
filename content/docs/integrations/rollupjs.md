---
section: integrations

order: 1

navigationTitle: "Rollup.js"
navigationIconPath: '/images/brands/rollupjs.svg'
image: '/integrations/rollupjs/header.jpg'
ogImage: '/integrations/rollupjs/og-image.jpg'

title: Using Stylify CSS with Rollup.js
description: "Learn how to use the Stylify CSS along with the Rollup.js. Code your website faster with Stylify CSS and Rollup.js."
howToSchemaTitle: 'How to use Stylify CSS in Rollup.js.'
howToSchemaSteps: [
	{
		"name": "Installation",
		"text": "Install @stylify/unplugin package using CLI like YARN or NPM.",
		"url": "#installation",
	},
	{
		"name": "Usage",
		"text": "Add Stylify CSS build module into rollup.config.mjs.",
		"url": "#usage",
	},
	{
		"name": "Configuration",
		"text": "Extend Stylify CSS configuration however you need. Configure variables, components, custom selectors and a lot more.",
		"url": "#configuration",
	},
]
---

Rollup.js is a module bundler for JavaScript which compiles small pieces of code into something larger and more complex, such as a library or application.

<note><template>
Integration example for the Rollup.js can be found in <a href="https://github.com/stylify/integrations-examples/tree/master/rollupjs" target="_blank" rel="noopener">integrations examples repository</a>.
</template></note>

## How to integrate the Stylify CSS into the Rollup.js

First install the [@stylify/unplugin](/docs/unplugin) package using NPM or Yarn:

```
npm i -D @stylify/unplugin
yarn add -D @stylify/unplugin
```

Next, add create a configuration file `rollup.config.js`:

```js
const { stylifyRollup } = require('@stylify/unplugin');
const postcss = require('rollup-plugin-postcss');

const stylifyPlugin = stylifyRollup({
	bundles: [{ files: ['./index.html'], outputFile: './index.css' }],
	// Optional
	// Compiler config info https://stylifycss.com/docs/stylify/compiler#configuration
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

Now you can run build command. This will generate the `stylify.css` and mangle selectors in files, if configured.

<where-to-next />
