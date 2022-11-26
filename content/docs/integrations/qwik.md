---
section: integrations

order: 1

navigationTitle: Qwik
navigationIconPath: '/images/brands/qwik.svg'
image: '/integrations/qwik/header.jpg'
ogImage: '/integrations/qwik/og-image.jpg'

title: "Using Stylify CSS in Qwik Framework"
description: "Learn how to use Stylify CSS with the Qwik Framework. Code your Qwik website faster with Stylify CSS."
howToSchemaTitle: 'How to use Stylify CSS in Qwik.'
howToSchemaSteps: [
	{
		"name": "Installation",
		"text": "Install @stylify/unplugin package using CLI like YARN or NPM.",
		"url": "#installation",
	},
	{
		"name": "Usage",
		"text": "Add Stylify CSS build module into astro.config.mjs.",
		"url": "#usage",
	},
	{
		"name": "Configuration",
		"text": "Extend Stylify CSS configuration however you need. Configure variables, components, custom selectors and a lot more.",
		"url": "#configuration",
	},
]
---

Qwik is reimagined JavaScript framework for the edge. No hydration, auto lazy-loading, edge-optimized.

Stylify can be used within the Qwik Framework using the Stylify CSS Vite plugin.

<stack-blitz-link link="stylify-qwik-example"></stack-blitz-link>

## Installation

Integration can be installed only via CLI like NPM or Yarn:
```
yarn add @stylify/unplugin
npm i @stylify/unplugin
```

## Usage

Edit the `vite.config.js`.

```js
import { defineConfig } from 'vite';
import { stylifyVite } from '@stylify/unplugin';

const stylifyPlugin = stylifyVite({
	bundles: [
		{ files: ['src/**/*.tsx'], outputFile: 'src/global.css' }
	],
	// Optional - https://stylifycss.com/docs/unplugin
	compiler: {},
});

export default defineConfig({
	plugins: [stylifyPlugin]
});
```

Import `global.css` in `src/root.tsx`:

```js
import './global.css';
```

## Split bundles for each page
Bundles can be also configured for each page separately. With this approach, you can get the smallest css possible. For example:

```js
bundles: [
	// Layout
	{ files: ['src/root.tsx', 'src/routes/layout.tsx'], outputFile: 'src/assets/css/layout.css'},
	// Index page
	{ files: ['src/routes/index.tsx'], outputFile: 'src/assets/css/index.css'},
],
```

In `src/routes/index.tsx` the following:

```js
import { useStyles$ } from '@builder.io/qwik';
import indexCss from '../assets/css/index.css';
// ...

export default component$(() => {
	useStyles$(indexCss);
	// ...
})
```

And add the layout import `import './assets/css/layout.css'` in `src/root.tsx`.

## Configuration
There is a lot of options you can configure:
- [@stylify/unplugin](/docs/unplugin)
- [Compiler config](/docs/stylify/compiler)

<where-to-next />
