---
slug: get-started
section: get-started

order: 0

navigationTitle: Get Started

title: "Get Started"
description: "Stylify generates CSS dynamically based on what you write. Learn how to use it!"
---

Stylify generates CSS dynamically based on what you write. It can be used directly in the browser or in a Node.js environment. It is inspired by Tailwind and Tachynos.

Unlike these CSS frameworks, Stylify uses CSS-like selectors `color:blue`, `font-weight:bold`, `border:2px_solid_blue`.
Thanks to that, you don't have to study any framework, remember shortcuts and think about how to use which feature.
In case you want shorter or completely different selectors like `ml-2` (margin) or `font-2xl` you can easily configure them.

## Installation

Stylify can work with any tool. For some of them it have its own integration. If you havent found your favorite let us know.

<integration-blocks></integration-blocks>

## Quick start
The easiest way to start is to try our the <a href="https://codepen.io/Machy8/pen/Bawpvdy?editors=1010" target="blank" rel="noopener nofollow">Codepen Playground</a>.

Syntax is similar to CSS `property:value` with a few differences:
- Use `_` (one underscore) for a space and `^` (a hat) for a quote
- The default syntax pattern is `<screen>:<pseudo classes>:<property>:<value>`. Sceens and pseudo classes are optional.

```html
color:blue => blue color
hover:color:blue => blue color after hover
lg:color:blue => blue color for from selected screen
lg:hover:color:blue => blue color after hover from selected screen
```

<!-- stylify-ignore -->
<get-started-selectors layout="column"></get-started-selectors>
<!-- /stylify-ignore -->

## Screens usage
Stylify has predefined shortcuts like `sm`, `md`, `lg` and dynamic screens such as `minw`, `maxw`, `rng`. Dynamic screens are flexible and the generated media query depends on the value you choose when using them.
Checkout the [full list](/docs/stylify/native-preset#screens). All generated screens are [automaticaly sorted](/docs/stylify/compiler#logical-operands-in-screens).


<!-- stylify-ignore -->
<example-editor layout="column">
<div class="font-size:12px minw768px:font-size:32px lg:font-size:24px">
	Screens
</div>
</example-editor>
<!-- /stylify-ignore -->

Screens can also be combined using logical operands: **Logical AND**: `&&`, **Logical OR**: `||`

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
		// Screens can also be functions => dynamic screens
		'customScreen\\w+': (screen) => `(min-width: ${screen.replace('customScreen', '')})`
	}
};
```

## Adding a Variable
It's not a good practice to have hardcoded values in the code. Therefore you can define Variables.

Variable can be defined in a content (expects an object without surounding brackets) when used localy where it is used or in a compiler config, when used globally.

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
		label: `
			display:flex
			line-height:1.2
			font-size:32px
			align-items:center
		`,
	}
};
```

## Custom selectors
In case you want to add a custom selector, for example a shorter variant for `margin-left` like `ml`, you can do that as follows:
```js
const compilerConfig = {
	macros: {
		'ml:(\\S+?)': (macroMatch, cssProperties) => {
			// ml:24px => will create => margin-left: 24px
			cssProperties.add('margin-left', macroMatch.getCapture(0));
		}
	}
};
```

## More Configuration
Checkout the [compiler](/docs/stylify/compiler) for more configuration options.

## Stylify Packages
Stylify ships with multiple packages. All of them can be installed using NPM or YARN. Stylify and Profiler can also be used directly through CDN:

- [@stylify/astro](/docs/astro) - Integration module for Astro.build
- [@stylify/stylify](/docs/stylify) - The core. Generates CSS. Rewrites (mangles) selectors
- [@stylify/bundler](/docs/bundler) - For generating CSS bundles
- [@stylify/unplugin](/docs/unplugin) - Universal plugin for Rollup, Webpack, Vite and Esbuild
- [@stylify/nuxt](/docs/nuxt) - A module for Nuxt.js v3
- [@stylify/nuxt-module](/docs/nuxt-module) - A module for Nuxt.js v2 < v3

## Try Stylify with your favorite tool!

For easier start with your favorite tool checkout the [integration examples](/docs/integrations).

<integration-blocks />
