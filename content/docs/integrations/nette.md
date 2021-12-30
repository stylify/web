---
section: integrations

order: 1

navigationTitle: "Nette"
navigationIconPath: '/images/brands/nette.png'

title: Nette Framework integration
description: "Learn how to integrate the Stylify utilify-first CSS generator into the Nette Framework."
---

Since Nette Framework doesn't have any native integration of own CSS loader, you have to build your own. The easiest way is to use Stylify along with the Nette Framework is to use the [Bundler](/docs/bundler), [Webpack](/docs/integrations/webpack) or [Rollup.js](/docs/integrations/rollupjs).
You can also easily combine the Bundler with these loaders. Just checkout their documentation pages.

<note><template>
Integration example for the Nette framework can be found in <a href="https://github.com/stylify/integrations-examples/tree/master/nette" target="_blank" rel="noopener">integrations examples repository</a>.
</template></note>

## How to integrate the Stylify into the Nette Framework

In the example bellow we will use the Bundler package on its own.

First install the [@stylify/bundler](/docs/bundler) package using NPM or Yarn:

```
npm i -D @stylify/bundler

yarn add -D @stylify/bundler
```

Next, create a file, for example `bundles.js`:

```js
const { nativePreset } = require('@stylify/stylify');
const { Bundler } = require('@stylify/bundler');

const watchFiles = process.argv[process.argv.length - 1] === '--w';

// Optional configuration.
nativePreset.compiler.variables = {
	blue: 'steelblue'
}

// Create a new Bundler instance.
const bundler = new Bundler({
	compiler: nativePreset.compiler,
	watchFiles: watchFiles
});

// You can customize bundles however you want.
bundler.bundle([
	{
		files: ['./app/Presenters/templates/@layout.latte'],
		outputFile: './www/static/css/layout.css'
	},
	{
		files: ['./app/Presenters/templates/Homepage/default.latte'],
		outputFile: './www/static/css/homepage.css'
	}
]);
```

And the last step is to add scripts into the `package.json`:

```json
{
	"scripts": {
		"build": "node bundles.js",
		"watch": "node bundles.js --w"
	}
}
```

Now you can add a link for generated css into the `@layout.latte` and `homepage/default.latte`:

```html
<link rel="stylesheet" href="/static/css/layout.css">

<link rel="stylesheet" href="/static/css/homepage.css">
```

You can customize the build above however you want.

## Configuration

The example above uses the [@stylify/bundler](/docs/bundler) package and the configuration can be found inside that package documentation.
For the Compiler config, checkout the [Compiler documentation](/docs/stylify/compiler).

In case you will want to mangle selectors, you will need to add the `n:class` attribute into the [selectorsAreas](/docs/stylify/compiler#rewriteselectorsareas) in the Compiler config if you use this attribute.

```js
nativePreset.compiler.selectorsAreas = [
	'(?:^|\\s+)n:class="([^"]+)"',
	'(?:^|\\s+)n:class=\'([^\']+)\''
];
```
