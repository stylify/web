---
section: integrations

order: 1

navigationTitle: "Laravel"
navigationIconPath: '/images/brands/laravel.svg'

title: Using Stylify CSS in Laravel Framework
description: "Learn how to integrate he Stylify utilify-first CSS generator into the Laravel Framework."
---

Laravel uses internally its own integration of Webpack. Thanks to that the Stylif integration and configuration is similar to the [Webpack](/docs/integrations/webpack) configuration.

<note><template>
Integration example for the Laravel framework can be found in <a href="https://github.com/stylify/integrations-examples/tree/master/laravel" target="_blank" rel="noopener">integrations examples repository</a>.
</template></note>

## How to integrate the Stylify into the Laravel Framework

First install the [@stylify/unplugin](/docs/unplugin) package using NPM or Yarn:

```
npm i -D @stylify/unplugin
yarn add -D @stylify/unplugin
```

Next add Stylify plugin into the `webpack.mix.js`:

```js
const { webpackPlugin } = require('@stylify/unplugin');

// ...

const mode = 'development';
const stylifyPlugin = webpackPlugin({
	transformIncludeFilter: (id) => id.endsWith('php'),
	bundles: [{
		outputFile: './resources/css/homepage.css',
		files: ['./resources/views/welcome.blade.php']
	}],
	// Optional
	extend: {
		bundler: {
			compiler: {
				// https://stylifycss.com/docs/stylify/compiler#variables
				variables: {},
				// https://stylifycss.com/docs/stylify/compiler#macros
				macros: {},
				// https://stylifycss.com/docs/stylify/compiler#components
				components: {},
				// ...
			}
		}
	}
});

mix
	// ...
    .webpackConfig({
		mode: mode,
        plugins: [stylifyPlugin]
    })
	// ...
```

Now you can use the commands for laravel mix.

<where-to-next />
