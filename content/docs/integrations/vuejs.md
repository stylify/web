---
section: integrations

order: 1

navigationTitle: "Vue"
navigationIconPath: '/images/brands/vuejs.svg'
image: '/integrations/vuejs/header.jpg'
ogImage: '/integrations/vuejs/og-image.jpg'

title: Using Stylify CSS in Vue.js
description: "Learn how to use the Stylify CSS with the Vue.js. Code your Vue.js website faster with Stylify CSS."
howToSchemaTitle: 'How to use Stylify CSS in Vue.js.'
howToSchemaSteps: [
	{
		"name": "Installation",
		"text": "Install @stylify/unplugin package using CLI like YARN or NPM.",
		"url": "#installation",
	},
	{
		"name": "Usage",
		"text": "Add Stylify CSS build module into vite.config.js.",
		"url": "#usage",
	},
	{
		"name": "Configuration",
		"text": "Extend Stylify CSS configuration however you need. Configure variables, components, custom selectors and a lot more.",
		"url": "#configuration",
	},
]
---

Vue.js is Progressive JavaScript Framework.

<stack-blitz-link link="stylify-vue-vite"></stack-blitz-link>

## How to integrate the Stylify CSS with Vue.js and Vite.js

The example below works with the Vite - Vue template. You can however use the example below and configure it for React.js, Vue and any other framework you use.

First, install the [@stylify/unplugin](/docs/unplugin) package using NPM or Yarn:

```
npm i -D @stylify/unplugin
yarn add -D @stylify/unplugin
```

Next add the following configuration into the `vite.config.js`:

```js
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { stylifyVite } from '@stylify/unplugin';

const stylifyPlugin = stylifyVite({
	bundles: [{ files: ['./src/**'], outputFile: './src/stylify.css' }],
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

export default defineConfig(({ mode}) => ({
    plugins: [stylifyPlugin, vue()]
}));
```

Now you can add the path of the generated `src/stylify.css` into `src/main.js` file:

```js
import './stylify.css';
```

Now run `yarn dev`. The `src/stylify.css` file will be generated.

## Configuration
There is a lot of options you can configure:
- [@stylify/unplugin](/docs/unplugin)
- [Compiler config](/docs/stylify/compiler)

<docs-unplugin-build-info></docs-unplugin-build-info>

<where-to-next />
