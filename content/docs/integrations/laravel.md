---
section: integrations

order: 1

navigationTitle: "Laravel"
navigationIconPath: '/images/brands/laravel.svg'

title: Using Stylify CSS in Laravel Framework
description: "Learn how to use Stylify CSS with the Laravel Framework."
---

Laravel integration is similar to [Webpack](/docs/integrations/webpack) configuration.

<note><template>
Integration example for the Laravel framework can be found in <a href="https://github.com/stylify/integrations-examples/tree/master/laravel" target="_blank" rel="noopener">integrations examples repository</a>.
</template></note>

## How to integrate the Stylify into the Laravel Framework

First install [Stylify unplugin](/docs/unplugin):
```
npm i -D @stylify/unplugin
yarn add -D @stylify/unplugin
```

Open the `vite.config.js` and add the Stylify Plugin:
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

First install the [@stylify/unplugin](/docs/unplugin) package using NPM or Yarn:

```
npm i -D @stylify/unplugin
yarn add -D @stylify/unplugin
```

Next add Stylify plugin into the `webpack.mix.js`:

```js
const { stylifyWebpack } = require('@stylify/unplugin');

const stylifyPlugin = stylifyWebpack({
	bundles: [{
		outputFile: './resources/css/homepage.css',
		files: ['./resources/views/welcome.blade.php']
	}],
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

mix.webpackConfig({
	mode: 'development',
	plugins: [stylifyPlugin]
});
```

Now you can use the commands for laravel mix.

<where-to-next />
