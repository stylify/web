---
section: integration

order: 1

navigationTitle: Browser
navigationIconPath: '/images/browser.svg'

title: "Browser integration"
description: "Learn how to use Stylify in a browser directly without Node.js and bundlers."
---

Stylify can be used directly in the browser using CDN or imported as a module.

This setup is great for a quick setup when you want for example to build a single page or dont want to use bundlers or node at all.

```js
<script src="https://unpkg.com/@stylify/stylify@0.0.2/dist/stylify.native.min.js"></script>
<script>
Stylify.configure({
	// ...
})
</script>
```

```js
import { Runtime, nativePreset } from '@stylify/stylify';

// Optional configuration
nativePreset.compiler.variables = {
	blue: 'steelblue'
}
// ...

new Runtime(nativePreset);
```

