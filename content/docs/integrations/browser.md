---
section: integrations

order: 1

navigationTitle: Browser
navigationIconPath: '/images/browser.svg'

title: "Using Stylify CSS in browser"
description: "Learn how to use Stylify CSS directly in browser without installation and bundlers."
---

Stylify can be used directly in the browser using CDN or imported as a module.

<note><template>
Integration example for browser can be found in <a href="https://github.com/stylify/integrations-examples/tree/master/browser" target="_blank" rel="noopener">integrations examples repository</a>.
</template></note>

```html
<script src="https://cdn.jsdelivr.net/npm/@stylify/stylify@latest/dist/stylify.min.js"></script>

<script>
Stylify.configure({
	// Optional
	// If is dev environment
	dev: false,
	// Time in ms to reduce the amount of compilations when something changes
	repaintTimeout: 100,
	// https://stylifycss.com/docs/stylify/compiler#configuration
	compiler: {
		// https://stylifycss.com/docs/stylify/compiler#variables
		variables: {},
		// https://stylifycss.com/docs/stylify/compiler#components
		components: {},
		// https://stylifycss.com/docs/stylify/compiler#screens
		screens: {},
		// https://stylifycss.com/docs/stylify/compiler#macros
		macros: {}
		// ...
	}
});
</script>
```

With modules (config is the same as above):
```js
import { Runtime } from 'https://cdn.jsdelivr.net/npm/@stylify/stylify@latest/esm/index.min.js';

new Runtime({ /* Optional config */});
```

## s-cloak
To hide elements that have not been processed yet, you can use the `s-cloak` class. This class
is removed right after the element is processed by Stylify.

It can "help" to prevent layout shifts, implement some sort of loading screen or placeholder and hide page
without

```html
<style>
	.s-cloak {
		visibility: hidden;
		content-visibility: hidden;
	}
</style>
<div class="color:blue s-cloak">Text</div>
```

To achieve compatibility with reactive frameworks like React or Vue, there is a dom event triggered every time
the `s-cloak` is removed. The argument is the processed element.

```js
document.addEventListener('stylify:uncloak', (event) => {
	// Do something
	console.log(event)
});
```

<where-to-next package="null" />
