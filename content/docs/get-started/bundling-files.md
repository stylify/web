---
section: get-started

order: 3

navigationTitle: "Bundling files"

title: "Bundling files"
description: "How to bundle CSS files for any web project you want."
---

[@stylify/bundler](/docs/bundler) package allows you to generate CSS files for your project. You can bundle any file format. The easiest way is to generate all CSS into one file. However the amount of bundles is not limited.

```js
import { nativePreset } from '@stylify/stylify';
import { Bundler } from '@stylify/bundler';

const bundler = new Bundler({
	// Optional
	compiler: {
		variables: {},
		macros: {},
		components: {}
		// If you want to mangle selectors
		mangleSelectors: true
		// ...
	}
})

bundler.bundle([
	{ outputFile: 'path/to/output.css', files: ['path/to/layout.html', 'path/to/page.html'] }
	// Bundler uses https://npmjs.com/package/fast-glob
	// You can use its glob syntax
	{ outputFile: 'path/to/another.css', files: ['path/**/*.html'] }
]);

await bundler.waitOnBundlesProcessed();
```
