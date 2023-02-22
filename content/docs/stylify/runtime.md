---
section: stylify

order: 1

navigationTitle: Runtime

title: "Runtime"
description: "Learn how to use the @stylify/stylify runtime and start using the Stylify CSS in no time."
---

Runtime is meant to be used in a browser. Under the hood it uses Compiler. It generates CSS from any added or changed element. It's a good and quick way to create small and simple websites or prototypes.

## Installation
There are two ways to use the Runtime. One way is to load it as a module and the other as a classic script.

Example with a script:
```html
<script src="https://cdn.jsdelivr.net/npm/@stylify/stylify@latest/dist/stylify.min.js"></script>

<script>
// Optional - if you want to configure something
Stylify.configure(config);
</script>
```

Example with modules:
```js
import { Runtime } from '@stylify/stylify/esm/index.min.js';

const runtime = new Runtime();

// Optional - if you want to configure something
// The config can also be passed into the constructor Runtime(config)
runtime.configure(config);
```

## Configuration
The config object below serves as an example that can be used in the scripts above. All configuration options are optional.
```js
const config = {
	// Optional
	// If is dev environment - it's passed into the compiler too
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
}
```

The recommended way to define a reusable Stylify config is to create a file for example `stylify.config.js` and link it in the page. This way you can reuse it across all pages:

Example for a classic script:
```html
<script src="https://cdn.jsdelivr.net/npm/@stylify/stylify@latest/dist/stylify.min.js"></script>
<script src="/path/to/stylify.config.js"></script>
```

Example for esm module:
```js
import { Runtime } from '@stylify/stylify/esm/index.min.js';
import config from '/path/to/stylify.config.js';

const runtime = new Runtime(config);
```

## Hooks

Stylify Runtime triggers 4 hooks when used:

- **stylify:ready**: Triggered when the Runtime instance is created and configured but no compilation was done yet.
- **stylify:configured**: Triggered when Runtime is configured.
- **stylify:repainted**: Triggered when the CSS was generated.
- **stylify:uncloak**: Triggered when a cloak class is removed from an element. You can use this listener to change state in for example a Vue.js component.

You can listen to these hooks like this:

```js
runtime.hooks.addListener('stylify:ready', (event) => {
	console.log(event);
});
```

## Cloak
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

## Trade Offs
Even though using the Runtime as a default setup is easier, it is recommended to generate CSS on the backend side or during a build and then import the generated CSS. This decreases the page loading time and size.

Also when the Runtime is used on its own without previous template processing by compiler, you cannot rewrite (mangle) selectors.

### Solution
In case you want to use only the Runtime and in the same time keep the website fast, you can do the following:

1. Style your page with Stylify CSS imported from CDN
2. Copy the content of style element with id `stylify-css`
3. Paste the copied CSS directly into the HTML file into the style element
3. Comment or remove runtime import
5. In case you need to prefix the CSS, you can use the [online autoprefixer](https://autoprefixer.github.io)

This approach allows you to generate all the necessary CSS without using any bundler or Node.js and also doesn't slow down the page because the Runtime is not loaded.
