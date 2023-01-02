---
section: get-started

order: 3

navigationTitle: "Bundling files"

title: "Bundling files"
description: "How to bundle CSS files for any web project you want."
---

In case you don't plan to use any integration like <nuxt-link to="/docs/unplugin">@stylify/unplugin</nuxt-link> or <nuxt-link to="/docs/astro">@stylify/astro</nuxt-link>, you can use <nuxt-link to="/docs/bundler">@stylify/bundler</nuxt-link> directly.

Stylify Bundler is a package that allows you to generate CSS files for your project. You can bundle any file format. The easiest way is to generate all CSS into one file. However the amount of bundles is not limited.

```js
import { Bundler } from '@stylify/bundler';

// http://stylifycss.com/docs/bundler#configuration
const bundler = new Bundler({
	// Optional
	compiler: {
		variables: {},
		macros: {},
		components: {},
		// If you want to mangle selectors
		mangleSelectors: true
		// ...
	}
})

bundler.bundle([
	{ outputFile: 'path/to/output.css', files: ['path/to/layout.html', 'path/to/page.html'] },
	// Bundler uses https://npmjs.com/package/fast-glob
	// You can use its glob syntax
	{ outputFile: 'path/to/another.css', files: ['path/**/*.html'] }
]);

await bundler.waitOnBundlesProcessed();
```
