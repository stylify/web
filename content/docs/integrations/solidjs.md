---
section: integrations

order: 1

navigationTitle: "SolidJS"
navigationIconPath: '/images/brands/solidjs.svg'
image: '/integrations/solidjs/header.jpg'
ogImage: '/integrations/solidjs/og-image.jpg'

title: Using Stylify CSS in SolidJS
description: "Learn how to use the Stylify CSS with the SolidJS. Code your SolidJS website faster with Stylify CSS."
howToSchemaTitle: 'How to use Stylify CSS in SolidJS.'
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

SolidJS is a framework for simple and performant reactivity for building user interfaces.

<stack-blitz-link link="stylifycss-solidjs-vite"></stack-blitz-link>

## How to integrate the Stylify CSS with SolidJS and Vite.js

The example below works with the Vite - SolidJS template. You can however use the example below and configure it for React.js, Vue and any other framework you use.

First install the [@stylify/unplugin](/docs/unplugin) package using NPM or Yarn:

```
npm i -D @stylify/unplugin
yarn add -D @stylify/unplugin
```

Next add the following configuration into the `vite.config.js`:

```js
import { defineConfig } from 'vite';
import { stylifyVite } from '@stylify/unplugin';
import solidPlugin from 'vite-plugin-solid';

const stylifyPlugin = stylifyVite({
	bundles: [{ outputFile: './src/stylify.css', files: ['./src/**/*.jsx'] }],
	// Optional
	compiler: {
		// https://stylifycss.com/docs/stylify/compiler#variables
		variables: {},
		// https://stylifycss.com/docs/stylify/compiler#macros
		macros: {},
		// https://stylifycss.com/docs/stylify/compiler#components
		components: {},
		// ...
	},
});

export default defineConfig({
	plugins: [stylifyPlugin, solidPlugin()],
	server: {
		port: 3000,
	},
	build: {
		target: 'esnext',
	},
});
```

Now you can add the path of the generated `src/stylify.css` into `src/index.js` file:

```js
import './stylify.css';
```

Now run `yarn dev`. The `src/stylify.css` file will be generated.

## Configuration
There is a lot of options you can configure:
- [@stylify/unplugin](/docs/unplugin)
- [Compiler config](/docs/stylify/compiler)

<where-to-next />
