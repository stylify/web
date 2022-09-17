---
section: integrations

order: 1

navigationTitle: "Nette"
navigationIconPath: '/images/brands/nette.png'

title: Using Stylify CSS in Nette Framework
description: "Learn how to integrate the Stylify CSS into the Nette Framework."
---

Since Nette Framework doesn't use any bundler by default. Therefore you an use onl the [Bundler](/docs/bundler) or configure bundler and use Stylify with [Webpack](/docs/integrations/webpack) or [Rollup.js](/docs/integrations/rollupjs) and etc.
´
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

const bundler = new Bundler({
	watchFiles: process.argv[process.argv.length - 1] === '--w',
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

Now you can add a link for generated css into the `@layout.latte`:

```html
<link rel="stylesheet" href="/static/css/index.css">
```

You can customize the build above however you want.

<where-to-next package="bundler" />
