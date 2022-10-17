---
section: integrations

order: 1

navigationTitle: "Svelte"
navigationIconPath: '/images/brands/svelte.svg'

title: Using Stylify CSS in Svelte
description: "Learn how to use the Stylify CSS with the Svelte."
---

<stack-blitz-link link="stylify-svelte-vite"></stack-blitz-link>

## How to integrate the Stylify with Svelte and Vite.js

The example bellow works with the Vite - Svelte template. You can however use the example bellow and configure it for React.js, Vue and any other framework you use.

First install the [@stylify/unplugin](/docs/unplugin) package using NPM or Yarn:

```
npm i -D @stylify/unplugin
yarn add -D @stylify/unplugin
```

Next add the following configuration into the `vite.config.js`:

```js
import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { stylifyVite } from '@stylify/unplugin';

const stylifyPlugin = stylifyVite({
	bundles: [{ outputFile: './src/stylify.css', files: ['./src/**/*.svelte'] }],
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

export default defineConfig({
	plugins: [stylifyPlugin, svelte()]
});
```

Now you can add the path of the generated `src/stylify.css` into `src/main.js` file:

```js
import './assets/stylify.css';
```

Now run `yarn dev`. The `src/stylify.css` file will be generated.

## Configuration
There is a lot of options you can configure:
- [@stylify/unplugin](/docs/unplugin)
- [Compiler config](/docs/stylify/compiler)

<where-to-next />
