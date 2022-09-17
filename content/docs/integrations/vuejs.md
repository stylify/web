---
section: integrations

order: 1

navigationTitle: "Vue"
navigationIconPath: '/images/brands/vuejs.svg'

title: Using Stylify CSS in Vue.js
description: "Learn how to use the Stylify CSS with the Vue.js"
---

<stack-blitz-link link="https://stackblitz.com/edit/stylify-vue-vite"></stack-blitz-link>

## How to integrate the Stylify with Vue.js and Vite.js

The example bellow works with the Vite - Vue template. You can however use the example bellow and configure it for React.js, Vue and any other framework you use.

First install the [@stylify/unplugin](/docs/unplugin) package using NPM or Yarn:

```
npm i -D @stylify/unplugin
yarn add -D @stylify/unplugin
```

Next add the following configuration into the `vite.config.js`:

```js
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { vitePlugin } from '@stylify/unplugin';

const stylifyPlugin = vitePlugin({
    bundles: [{ files: ['./src/**'], outputFile: './src/stylify.css' }],
    // Optional - https://stylifycss.com/docs/unplugin
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

<where-to-next />
