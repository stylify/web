---
section: integrations

order: 1

navigationTitle: Browser
navigationIconPath: '/images/browser.svg'

title: "Browser integration"
description: "Learn how to use the Stylify utilify-first CSS generator in a browser directly without the Node.js and bundlers."
---

Stylify can be used directly in the browser using CDN or imported as a module.

This setup is great for a quick setup when you want for example to build a single page or dont want to use bundlers or node at all.

<note><template>
Integration example for browser can be found in <a href="https://github.com/stylify/integrations-examples/tree/master/browser" target="_blank" rel="noopener">integrations examples repository</a>.
</template></note>

For production purposes, use correct version instead of the latest. Otherwise, during the request for the file, there will be an internal redirect in the CDN in order to get the correct version which will increase the page loading time.

```js
<script src="https://cdn.jsdelivr.net/npm/@stylify/stylify@latest/dist/stylify.native.min.js"></script>

<script>
Stylify.configure({
	// ...
	compiler: {
		// ...
	}
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

## Configuration
The example above uses the [@stylify/stylify](/docs/stylify) package. More precisely its [Runtime](/docs/stylify/runtime) component.
The configuration for the Stylify can be found on the [Compiler](/docs/stylify/compiler) and the [Runtime](/docs/stylify/runtime) documenation pages.
