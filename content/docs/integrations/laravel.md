---
section: integrations

order: 1

navigationTitle: "Laravel"
navigationIconPath: '/images/brands/laravel.svg'
image: '/integrations/laravel/header.jpg'
ogImage: '/integrations/laravel/og-image.jpg'

title: Using Stylify CSS in Laravel Framework
description: "Learn how to use Stylify CSS with the Laravel Framework. Code your Laravel website faster with Stylify CSS."
howToSchemaTitle: 'How to use Stylify CSS in Laravel.'
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

Laravel is a PHP web application framework with expressive, elegant syntax.

Stylify can be integrated into the Laravel using the Stylify CSS Vite plugin.

<note><template>
Integration example for the Laravel framework can be found in <a href="https://github.com/stylify/integrations-examples/tree/master/laravel" target="_blank" rel="noopener">integrations examples repository</a>.
</template></note>

## How to integrate the Stylify CSS into the Laravel Framework

First install [Stylify unplugin](/docs/unplugin):
```
npm i -D @stylify/unplugin
yarn add -D @stylify/unplugin
```

Open the `vite.config.js` and add the Stylify CSS Plugin:
```js
import { defineConfig } from 'vite';
import { stylifyVite } from '@stylify/unplugin';

const stylifyPlugin = stylifyVite({
  bundles: [{ files: ['resources/views/**/*.blade.php'], outputFile: 'resources/css/stylify.css' }],
  // Optional - https://stylifycss.com/docs/unplugin
  compiler: {},
});

export default defineConfig(({ mode }) => ({
	plugins: [
		stylifyPlugin,
		laravel({
			// Add path to generated files
            input: ['resources/js/app.js', 'resources/css/stylify.css'],
            refresh: true,
        }),
	],
}));
```

Add the path to `resources/css/stylify.css` into the template:

```html
<head>
	@vite('resources/css/stylify.css')
</head>
```

Now when you run `dev` command in `package.json`, the CSS will be generated. When you run `build`, the CSS will also be mangled.

## For older vesions of Laravel with Webpack

First, install the [@stylify/unplugin](/docs/unplugin) package using NPM or Yarn:

```
npm i -D @stylify/unplugin
yarn add -D @stylify/unplugin
```

Next add Stylify CSS plugin into the `webpack.mix.js`:

```js
const { stylifyWebpack } = require('@stylify/unplugin');

const stylifyPlugin = stylifyWebpack({
	bundles: [{
		outputFile: './resources/css/homepage.css',
		files: ['./resources/views/welcome.blade.php']
	}],
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

mix.webpackConfig({
	mode: 'development',
	plugins: [stylifyPlugin]
});
```

Now you can use the commands for laravel mix.

<docs-unplugin-build-info></docs-unplugin-build-info>

<where-to-next />
