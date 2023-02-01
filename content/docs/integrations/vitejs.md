---
section: integrations

order: 1

navigationTitle: "Vite.js"
navigationIconPath: '/images/brands/vitejs.svg'
image: '/integrations/vitejs/header.jpg'
ogImage: '/integrations/vitejs/og-image.jpg'

title: Using Stylify CSS with Vite.js
description: "Learn how to use the Stylify CSS with the Vite.js. Code your website faster with Stylify CSS and Vite.js."
howToSchemaTitle: 'How to use Stylify CSS in Vite.js.'
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

Vite.js is next Generation Frontend Tooling and Assets Bundler.

Stylify can be integrated into the Vite.js using @stylify/bundler.

<stack-blitz-link link="stylify-vite-example"></stack-blitz-link>

## How to integrate the Stylify CSS into the Vite.js

The example below works with the Vite template. You can however use the example below and configure it for Svelte, React, Vue, Angular, Lit and any other framework you want.

First install the [@stylify/unplugin](/docs/unplugin) package using NPM or Yarn:

```
npm i -D @stylify/unplugin
yarn add -D @stylify/unplugin
```

Next add the following configuration into the `vite.config.js`:

```js
import { defineConfig } from 'vite';
import { stylifyVite } from '@stylify/unplugin';

const stylifyPlugin = stylifyVite({
  bundles: [{ files: ['./*'], outputFile: './stylify.css' }],
  // Optional - https://stylifycss.com/docs/unplugin
  compiler: {},
});

export default defineConfig(({ mode }) => ({
  plugins: [stylifyPlugin],
}));
```

Now you can add the path of the generated `stylify.css` into `main.js` file:

```js
import './stylify.css';
```

If you use the Vite.js commands now you will get the `stylify.css` file generated.

<where-to-next />
