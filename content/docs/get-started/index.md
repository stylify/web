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

```html
<script src="https://cdn.jsdelivr.net/npm/@stylify/stylify@latest/dist/stylify.native.min.js"></script>
<script>
const compilerConfig = {
	// https://stylifycss.com/docs/stylify/compiler#variables
	variables: {},
	// https://stylifycss.com/docs/stylify/compiler#components
	components: {},
	// https://stylifycss.com/docs/stylify/compiler#screens
	screens: {},
	// https://stylifycss.com/docs/stylify/compiler#macros
	macros: {}
};
Stylify.runtime.configure({ compiler: compilerConfig });
</script>
```

<note>
Configuration varries based on where the Stylify is used. Checkout <nuxt-link to="/docs/integrations">integration examples</nuxt-link> to find the tutorial for your favorite tool.
</note>

## Writting first CSS
Before you start writting selectors, there are few rules you need to know:
- Selectors are almost the same like css `property:value`
- Use `__` (two underscores) for a space and `^` (a hat) for a quote
- The default syntax pattern is `<screen>:<pseudo classes>:<property>:<value>`

<note>
The <code>property:value</code> syntax comems from the <nuxt-link to="/docs/stylify/native-preset">Native Preset</nuxt-link> that is a default config for browser environment. You can define custom selectors and presets if you like. You can find more about that in the content bellow.
</note>

<!-- stylify-ignore -->
<get-started-selectors layout="column"></get-started-selectors>
<!-- /stylify-ignore -->

## Screens usage
In the Native Preset there are predefined shortcuts like `sm, md, lg` you may know from Tailwind or Bootstrap and dynamic screens such as `minw, maxw, rng`. Dynamic screens are flexible and the generated media query depends on the value you choose when using them.
Checkout the [full list](/docs/stylify/native-preset#screens).

When not using the Native Preset, you have to define your own screens as shown bellow in the [configuration](#configuration) section.

<!-- stylify-ignore -->
<example-editor layout="column">
<div class="font-size:12px minw768px:font-size:32px lg:font-size:24px">
	Screens
</div>
</example-editor>
<!-- /stylify-ignore -->

Screens can also be randomly combined by using logical operands. There is a **logical AND** `&&` and a **logical OR** `||`.
Don't worry about the screens order. They are sorted before the CSS is generated (see [screens documentation](/docs/stylify/compiler#logical-operands-in-screens)).

<!-- stylify-ignore -->
<example-editor layout="column">
<div class="lg||landscape:color:orange sm&&dark:color:grey lg&&dark:color:white">
	Combined screens
</div>
</example-editor>
<!-- /stylify-ignore -->

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

## Adding a Variable
It's not a good practice to have hardcoded variables in the code. Therefore you can define Variables.

Variable can be defined in a content (expects an object without surounding brackets) when used localy (one file / a few pages) or in a compiler config, when used globally.

<get-started-variables layout="column"></get-started-variables>

In a compiler config:
```js
const compilerConfig = {
	variables: {
		fontSize: '24px',
		fontSizeLg: '32px',
		textShadow: '0 4px 8px #379adf'
	}
};
```

## Defining a Component
When we want to reuse a piece of code, for example for a button without duplicating classes, we can define a component like this:

Variable can be defined in a content (expects an object without surounding brackets) when used localy (one file / a few pages) or in a compiler config, when used globally.

<get-started-components layout="column"></get-started-components>

In a compiler config:
```js
const compilerConfig = {
	components: {
		'label-icon': 'lg:font-size:48px margin-left:8px',
		label: \`
			display:flex
			line-height:1.2
			font-size:32px
			align-items:center
		\`,
	}
};
```

## Custom selectors
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

## More Configuration
Checkout the [compiler](/docs/stylify/compiler) documentation to learn, how to configure Stylify even more.

The way to pass the configuration depends on how and where you use the Stylify. Make shure to checkout our guides bellow on how to integrate the Stylify into various tools.

## Stylify Packages

Stylify ships with multiple packages. All of them can be installed using NPM or YARN. Stylify and Profiler can also be used directly through CDN:

- [@stylify/stylify](/docs/stylify) - For generating CSS
- [@stylify/bundler](/docs/bundler) - Generates CSS bundles for your project
- [@stylify/unplugin](/docs/unplugin) - Universal plugin for Rollup, Webpack, Vite and Esbuild
- [@stylify/nuxt](/docs/nuxt) - A module for Nuxt.js v3
- [@stylify/nuxt-module](/docs/nuxt-module) - A module for Nuxt.js v2 < v3
- [@stylify/profiler](/docs/profiler) - This package shows you what is happening under the hood
- [@stylify/autoprefixer](/docs/autoprefixer) - Autoprefixer for dynamic prefixing in SSR apps

## Try Stylify with your favorite tool!

For easier start with your favorite tool checkout the [integration examples](/docs/integrations).

<note>If you haven't found your favorite tool let us know and we will add it.</note>

<integration-blocks />

