---
section: integrations

order: 1

navigationTitle: "Svelte"
navigationIconPath: '/images/brands/svelte.svg'
image: '/integrations/svelte/header.jpg'
ogImage: '/integrations/svelte/og-image.jpg'

title: Using Stylify CSS in Svelte
description: "Learn how to use the Stylify CSS with the Svelte. Code your Svelte website faster with Stylify CSS."
howToSchemaTitle: 'How to use Stylify CSS in Svelte.'
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

Svelte is a radical new approach to building user interfaces. Whereas traditional frameworks like React and Vue do the bulk of their work in the browser, Svelte shifts that work into a compile step that happens when you build your app.

You can use Stylify CSS with SvelteKit or with Vite + Svelte App. Below are guides for both scenarios.

## How to integrate the Stylify CSS with SvelteKit


<stack-blitz-link link="stylify-sveltekit-example"></stack-blitz-link>

First install the [@stylify/unplugin](/docs/unplugin) package using NPM or Yarn:

```
npm i -D @stylify/unplugin
yarn add -D @stylify/unplugin
```

Next add the following configuration into the `vite.config.js`:

```js
import { sveltekit } from '@sveltejs/kit/vite';
import { stylifyVite } from '@stylify/unplugin';

const stylifyPlugin = stylifyVite({
	bundles: [{
		outputFile: './src/stylify.css',
		files: ['./src/**/*.svelte'],
	}]
});

const config = {
	plugins: [
		stylifyPlugin,
		sveltekit(),
	]
};

export default config;
```

The last step, create `src/routes/+layout.svelte` with the following content `stylify.css`:

```html
<script>
	import '../stylify.css';
</script>

<slot />
```

In case, you have created more bundles, for example for pages, you have to add paths to those generated CSS files into correct Svelte files.

Now run `yarn dev`. The `src/stylify.css` file will be generated.

## How to integrate the Stylify CSS with Svelte and Vite.js

<stack-blitz-link link="stylify-svelte-vite"></stack-blitz-link>

The example below works with the Vite - Svelte template. You can however use the example below and configure it for React.js, Vue and any other framework you use.

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
import './stylify.css';
```

Now run `yarn dev`. The `src/stylify.css` file will be generated.

## Configuration
There is a lot of options you can configure:
- [@stylify/unplugin](/docs/unplugin)
- [Compiler config](/docs/stylify/compiler)

<where-to-next />
