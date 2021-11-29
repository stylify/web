---
section: stylify

order: 1

navigationTitle: Runtime

title: "Learn how to use the @stylify/stylify runtime and start using the Stylify in no time."
---

Runtime is ment to be used in a browser. Under the hood it uses Compiler. It generates CSS from any added or changed element.

## Configuration

```js
const config = {
	// Dev is passed into the Compiler too
	// so it is not neccessary to define it there too
	dev: false,
	// Default is 5 ms. This reduces the amount of compilation
	// when page loads or when something changes
	repaintTimeout: null,
	compiler: { /* Compiler config... */ }
}

new Runtime(config);
```

## Hooks

Stylify Runtime triggers 4 hooks when used:

- **stylify:ready**: Triggered when the Runtime instance is created and configured but no compilation was done yet.
- **stylify:configured**: Triggered when Runtime is configured.
- **stylify:repainted**: Triggered when the CSS was generated.
- **stylify:uncloak**: Triggered when a cloak class is removed from an element. You can use this listener to change state in for example a Vue.js component.

You can listen to these hooks like this:

```js
document.addEventListener('stylify:ready', (event) => {
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

### Caveats solution
In case you want to use only the Runtime and in the same time keep the website fast, you can do the following:

1. Import the Runtime and the [Profiler](/docs/profiler) during development through CDN or module import.
2. When you are ready to publish the page, export the page CSS using the Profiler. Optinally you can copy the content of the CSS file and prefix it in the [online autoprefixer](https://autoprefixer.github.io/).
3. Remove, disable or comment the Runtime import in the page and add a path to the CSS file or its content into the page.

This approach allows you to generate all the necessary CSS without using any bundler or Node.js and also doesn't slow down the page because the Runtime is not loaded..
