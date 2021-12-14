---
#section: integration

order: 1

navigationTitle: "Symfony"
navigationIconPath: '/images/brands/symfony-icon.svg'

title: Symfony Framework integration
---

```js
import { nativePreset } from '@stylify/stylify';
import { Bunndler } from '@stylify/bundler';

const bundler = new Bundler({
	compolerConfig: nativePreset.compiler
});

// Generate CSS for layout
bundler.bundle([
	{
		outputFile: 'public/static/css/layout.css',
		files: [ 'path/to/base.html.twig' ]
	}
]);

// Generate CSS for each page separately
bundler.bundle([
	{
		outputFile: 'public/static/css/page.css',
		files: [ 'path/to/homepage/page.css' ]
	}
]);
```
