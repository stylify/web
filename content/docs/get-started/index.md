---
slug: get-started
section: get-started

order: 0

navigationTitle: Get Started

title: "Get Started"
description: "Stylify generates CSS dynamically based on what you write. Learn how to use it!"
---

Stylify generates CSS dynamically based on what you write.
It can be used directly in the browser or in a Node.js environment. It is inspired by Tailwind and Tachynos.

Unlike these CSS frameworks, Stylify uses native syntax like CSS `property:value` as selectors. Therefore, you don't have to study or remember the selectors because they are almost the same like pure CSS. In case you want shorter or completely different selectors you can configure them or create a whole new preset.

## Quick Start
The easiest way to start is to use Stylify through CDN.
Create an index.html file and copy the code bellow into it (you can also try our <a href="https://codepen.io/Machy8/pen/Bawpvdy?editors=1010" target="blank" rel="noopener nofollow">Codepen Playground</a>).

### Writting first CSS
Before you start writting selectors, there are few rules you need to know:
- By default, selectors are almost the same like when writting CSS
- Use `__` (two underscores) for a space and `^` (a hat) for a quote
- The default syntax pattern is `<screens and pseudo classes>:?<customSelector>`
- If you decide to use the [Native Preset](/docs/stylify/native-preset), the syntax is then extended to this: `<screens and pseudo classes>:?<property>:<value>`

<!-- <stylify-ignore> -->
<example-editor layout="column">
<strong class="color:steelblue font-size:24px">Hello World 🤩!</strong>
<script src="https://cdn.jsdelivr.net/npm/@stylify/stylify@latest/dist/stylify.native.min.js"></script>
</example-editor>
<!-- </stylify-ignore> -->

Configuration for browser environment above is done like this:
```html
<script>
const compilerConfig = {};
Stylify.runtime.configure({
	compiler: compilerConfig
})
</script>
```

Configuration for Node.js, Bundler or other plugins mentiones bellow is different based on what you choose.

### How to use Screens
In the Native Preset there are predefined shortcuts like `sm, md, lg` you may know from Tailwind or Bootstrap and dynamic screens such as `minw, maxw, rng` (see [screens](/docs/stylify/compiler#screens)). Dynamic screens are flexible and the generated media query depends on the value you choose when using them.

When not using the Native Preset, you have to define your own screens as shown bellow in the [configuration](#configuration) section.

<!-- <stylify-ignore> -->
<example-editor layout="column">
<div class="font-size:12px minw768px:font-size:32px lg:font-size:24px">
	Screens
</div>
</example-editor>
<!-- </stylify-ignore> -->

Screens can also be randomly combined by using logical operands. There is a **logical AND** `&&` and a **logical OR** `||`.
Don't worry about the screens order. They are sorted before the CSS is generated (see [screens documentation](/docs/stylify/compiler#logical-operands-in-screens)).

<!-- <stylify-ignore> -->
<example-editor layout="column">
<div class="lg||landscape:color:darkred sm&&dark:color:grey lg&&dark:color:white">
	Combined screens
</div>
</example-editor>
<!-- </stylify-ignore> -->

If you want to add a custom screen, you can do that like this:
```js
const compilerConfig = {
	screens: {
		'xs': '(min-width: 400px)',
		// Screens can also be functions
		// That allows you to make as flexible screen as possible
		'minw\\w+': (screen) => `(min-width: ${screen.replace('minw', '')})`
	}
};
```

### How to add a Variable
It's not a good practice to have hardcoded variables in the code. Therefore you can define Variables.

```js
const compilerConfig = {
	compiler: {
		variables: {
			blue: steelblue
		}
	}
};
```

Usage:
<!-- <stylify-ignore> -->
```html
<div class="color:$blue"></div>
```
<!-- </stylify-ignore> -->

### How to define a Component
When we want to reuse a piece of code, for example for a button without duplicating classes, we can define a component like this:

```js
const compilerConfig = {
	components: {
		button: `
			font-size:14px
			color:#fff
			background:#steelblue
			padding:24px
		`
	}
};
```

Usage:
```html
<a role="button" class="button">Button</a>
```

### How to add custom a Selector
In case you want to add a custom selector, for example a shorter variant for `margin-left` like `ml`, you can do that as follows:
```js
const compilerConfig = {
	macros: {
		'ml:(\\S+?)': function (macroMatch, cssProperties): void {
			// ml:24px => will create => margin-left: 24px
			cssProperties.add('margin-left', macroMatch.getCapture(0));
		}
	}
};
```

## Stylify Packages

Stylify ships with multiple packages. All of them can be installed using NPM or YARN. Stylify and Profiler can also be used directly through CDN:

- [@stylify/stylify](/docs/stylify) - For generating CSS
- [@stylify/bundler](/docs/bundler) - Creates CSS bundles for your project and minifies selectors
- [@stylify/unplugin](/docs/unplugin) - Universal plugin for Rollup, Webpack, Vite and Esbuild
- [@stylify/nuxt](/docs/nuxt) - A module for Nuxt.js v3
- [@stylify/nuxt-module](/docs/nuxt-module) - A module for Nuxt.js v2 < v3
- [@stylify/profiler](/docs/profiler) - This package shows you what is happening under the hood
- [@stylify/autoprefixer](/docs/autoprefixer) - Autoprefixer can be used to generate prefixes that are later used during on demand CSS generating for example in SSR, PHP or Python applications

## Go ahead and try Stylify with your favorite tool!

For easier start with your favorite tool checkout the [integration examples](/docs/integrations).

<note>If you haven't found your favorite tool let us know and we will add it.</note>

<integration-blocks />

