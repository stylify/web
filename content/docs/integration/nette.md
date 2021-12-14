---
#section: integration

order: 1

navigationTitle: "Nette"
navigationIconPath: '/images/brands/nette.png'

title: Nette Framework integration
---

Since Nette Framework doesn't have any native integration of own CSS loader, you have to build your own. The easiest way is to use Stylify along with the Nette Framework is to use [Bundler](/docs/bundler), [Webpack](/docs/integration/webpack) or [Rollup.js](/docs/integration/rollupjs).

## Integration with Bundler

If you choose using the Stylify Bundler, create a bundle.js file in the project root or in you CLI dir. Then add bundles as you want.

The recommended way is to generate bundle for layout and bundles for each page separately.

<note>
You can use [file content options](/docs/bundler/installation-and-usage#files-content-option) to map files into bundles more easily.
</note>

```js
import { nativePreset } from '@stylify/stylify';
import { Bunndler } from '@stylify/bundler';

const bundler = new Bundler({
	compolerConfig: nativePreset.compiler
});

// Generate CSS for layout
bundler.bundle([
	{
		outputFile: 'www/static/css/layout.css',
		files: [ 'path/to/@layout.latte' ]
	}
]);

// Generate CSS for each page separately
bundler.bundle([
	{
		outputFile: 'www/static/css/homepage/default.css',
		files: [ 'path/to/homepage/default.latte' ]
	}
]);
```
