---
section: integrations

order: 1

navigationTitle: Browser
navigationIconPath: '/images/browser.svg'
image: '/integrations/browser/header.jpg'
ogImage: '/integrations/browser/og-image.jpg'

title: "Using Stylify CSS in browser"
description: "Learn how to use Stylify CSS directly in browser without installation and bundlers."
howToSchemaTitle: 'How to use Stylify CSS via CDN in browser.'
howToSchemaSteps: [
	{
		"name": "Installation & Configuration",
		"text": "Copy&Paste Stylify CSS CDN script into the page.",
		"url": "#installation--configuration",
	},
	{
		"name": "Installation & Configuration - Modules",
		"text": "Copy&Paste Stylify CSS CDN script into the page. Use script type module.",
		"url": "#installation--configuration---modules",
	},
	{
		"name": "Configuration",
		"text": "Extend Stylify CSS configuration however you need. Configure variables, components, custom selectors and a lot more.",
		"url": "#configuration",
	},
]
---

Stylify can be used directly in the browser using CDN or imported as a module.

<note><template>
Integration example for browser can be found in <a href="https://github.com/stylify/integrations-examples/tree/master/browser" target="_blank" rel="noopener">integrations examples repository</a>.
</template></note>

## Installation & Configuraton
```html
<script src="https://cdn.jsdelivr.net/npm/@stylify/stylify@latest/dist/stylify.min.js"></script>

<script>
// Optional - https://stylifycss.com/docs/stylify/runtime
Stylify.configure({ });
</script>
```

## Installation & Configuration - modules
With modules (config is the same as above):
```js
<script type="module">
import { Runtime } from 'https://cdn.jsdelivr.net/npm/@stylify/stylify@latest/esm/index.min.js';

// Optional - https://stylifycss.com/docs/stylify/runtime
new Runtime({ });
</script>
```

## Advanced configuration
Go and check out the [Runtime docs](/docs/stylify/runtime).

<where-to-next package="null" />
