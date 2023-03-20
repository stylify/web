---
section: integrations

order: 1

navigationTitle: "Nette"
navigationIconPath: '/images/brands/nette.png'
image: '/integrations/nette/header.jpg'
ogImage: '/integrations/nette/og-image.jpg'

title: Using Stylify CSS in Nette Framework
description: "Learn how to integrate the Stylify CSS into the Nette Framework. Code your Nette website faster with Stylify CSS."
howToSchemaTitle: 'How to use Stylify CSS in Nette.'
howToSchemaSteps: [
	{
		"name": "Stylify CSS installatiom",
		"text": "Install @stylify/bundler package using CLI like YARN or NPM.",
		"url": "#installation",
	},
	{
		"name": "Usage",
		"text": "Next, create a file, for example bundles.js.",
		"url": "#usage",
	},
	{
		"name": "Configuration",
		"text": "Extend Stylify CSS configuration however you need. Configure variables, components, custom selectors and a lot more.",
		"url": "#configuration",
	},
]
---

Nette is a PHP web framework made in Czech Republic focused on fast and rapid web development.

Nette Framework doesn't use any bundler by default. Therefore you can use the Stylify [Bundler](/docs/bundler) directly or use Stylify through [Webpack](/docs/integrations/webpack), [Rollup.js](/docs/integrations/rollupjs), [Vite](/docs/integrations/vitejs), etc.
´
<note><template>
Integration example for the Nette framework can be found in <a href="https://github.com/stylify/integrations-examples/tree/master/nette" target="_blank" rel="noopener">integrations examples repository</a>.
</template></note>

## How to integrate the Stylify CSS into the Nette Framework

In the example below we will use the Bundler package on its own.

First install the [@stylify/bundler](/docs/bundler) package using NPM or Yarn:

```
npm i -D @stylify/bundler
yarn add -D @stylify/bundler
```

Next, create a file, for example `bundles.js`:

```js
const { Bundler } = require('@stylify/bundler');

const bundler = new Bundler({
	watchFiles: process.argv[process.argv.length - 1] === '--w',
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

bundler.bundle([{
	files: ['./app/Presenters/templates/**/*.latte'], outputFile: './www/static/css/index.css'
}]);
```

And the last step is to add scripts into the `package.json`:

```json
"scripts": {
	"build": "node bundles.js",
	"watch": "node bundles.js --w"
}
```

Now you can add a link for generated CSS into the `@layout.latte`:

```html
<link rel="stylesheet" href="/static/css/index.css">
```

You can customize the build above however you want.

<where-to-next package="bundler" />

## Trade Offs
If you use custom selector in Nette class attribute like the one below, you will probably need to wrap it into the `n:class="''"`. It is, because Nette matches the custom selectors as Macro. Single quotes prevents that.

```html
<div n:class="'[div]{width:240px}'"></div>
<div n:class="'md:{width:320px}'"></div>
```
