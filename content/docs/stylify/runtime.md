---
section: stylify

order: 1

navigationTitle: Runtime

title: "Runtime"
description: "Learn how to use the @stylify/stylify runtime and start using the Stylify in no time."
---

Runtime is ment to be used in a browser. Under the hood it uses Compiler. It generates CSS from any added or changed element.

## Configuration

```js
import { Runtime } from '@stylify/stylify/esm/index.min.js';

const config = {
	// Dev is passed into the Compiler too
	// so it is not neccessary to define it there
	dev: false,
	// https://stylifycss.com/docs/stylify/compiler#configuration
	compiler: {},
	// Default is 10 ms. This reduces the amount of compilations
	// when page loads or when something changes
	repaintTimeout: null
}

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

Every time CSS is injected into the page, Stylify searches for `.s-cloak` class and removes it.

This can prevent elements without generated css to be visible.

You must add the CSS bellow into the page first:

```css
.s-cloak {
	visibility: hidden;
	content-visibility: hidden;
}
```

Then use it like this:

```html
<div class="s-cloak"></div>
```

## Caveats
Even though using the Runtime as a default setup is easier, it is recommended to generate CSS on the backend side or during a build and then import the generated CSS. This decreases the page loading time and size.

Also when the Runtime is used on its own without previous template processing by compiler, you cannot rewrite (mangle) selectors.

### Solution
In case you want to use only the Runtime and in the same time keep the website fast, you can do the following:

1. Style your page with Stylify imported from CDN
2. Copy the content of style element with id `stylify-css`
3. Paste the copied CSS directly into the html file into the style element
3. Comment or remove runtime import
5. In case you need to prefix the CSS, you can use the [online autoprefixer](https://autoprefixer.github.io)

This approach allows you to generate all the necessary CSS without using any bundler or Node.js and also doesn't slow down the page because the Runtime is not loaded.
