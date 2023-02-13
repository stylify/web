---
slug: get-started
section: get-started

order: 0

navigationTitle: Get Started

title: "Get Started"
description: "Stylify generates CSS dynamically based on what you write. Learn how to use it!"
---

Stylify is a library that uses CSS-like selectors to generate optimized utility-first CSS on demand.
Stylify processes content (of a file for example), finds class selectors and generates CSS for them. Then it does some optimization and generates CSS files.

All you have to do in order to start using Stylify is to install it and write CSS-like selectors into class attributes. No configuration required. You don't have to create any CSS files, add any configuration or study anything. If you know CSS a bit, you already know, how to use Stylify.

However, if you want, you can use other features like Variables, Components, Macros and Custom selectors. More about them below.

Stylify CSS doesn't ship with any "Fancy Pants" shortcuts, color themes and predefined typography. You might be asking why, so here are a few explanations for start:
- **Shortcuts**: They are hard to remember and impractical. Yes, using them means less typing and shorter class attributes for the cost of studying syntax (which is easy to forget) and increased complexity.
- **Color palettes**: Stylify doesn't provide any because they doesn't match design needs in most cases. When working on a project, you will also have to get them from project designer, downloaded theme or generate them on your own using some tool like <nuxt-link to="/snippets/snippets/material-theme">Material Theme Builder</nuxt-link>.
- **Typography**: The same as color palettes. You can find some <nuxt-link to="/snippets/assets/fonts">typography tools and assets</nuxt-link> and <nuxt-link to="/snippets/snippets/stylify#variables">typography snippets</nuxt-link> in Stlyify docs.
- To sum it up, the goal is to stick as much as possible with the native CSS syntax without unnecessary predefined configuration that is practically useless and overvalued.

## Installation

Stylify can work with any tool. For some of them it have its own integration. If you havent found your favorite let us know.

<integration-blocks></integration-blocks>

## Quick Start
The easiest way to start is to play within the editors below or copy the examples and test it within the <a href="https://codepen.io/Machy8/pen/Bawpvdy?editors=1010" target="blank" rel="noopener nofollow">Codepen Playground</a>.

<nuxt-link to="/docs/stylify/compiler#syntax">Syntax</nuxt-link> is similar to CSS `property:value` with a few differences:
- Use `_` (one underscore) for a space and `^` (a hat) for a quote
- To preserver underscore or a hat character, use `\` (backslash) => `\_`
- The default syntax pattern is `<screen>:<pseudo classes>:<property>:<value>`. Sceens and pseudo classes are optional.

```html
color:blue => blue color
hover:color:blue => blue color after hover
lg:color:blue => blue color for from selected screen
lg:hover:color:blue => blue color after hover from selected screen
```

When a lot of properties repeats for the same screen or pseudo class, you can group them like in the example below. The syntax is `<screen>:<pseudo classes>:{stylify selectors split by ;}`

```
hover:{color:blue;font-weight:bold} # Shortcut for multiple selectors
lg:hover:{color:blue;font-weight:bold} # The same but also for screen
```

<!-- stylify-ignore -->
<get-started-selectors layout="column"></get-started-selectors>
<!-- /stylify-ignore -->

## Screens Usage
Stylify has predefined shortcuts like `sm`, `md`, `lg` and dynamic screens such as `minw`, `maxw`, `rng`. <nuxt-link to="/docs/stylify/compiler#screens">Dynamic screens</nuxt-link> are flexible and the generated media query depends on the value you choose when using them.
Check out the [full list](/docs/stylify/native-preset#screens). All generated screens are [automaticaly sorted](/docs/stylify/compiler#logical-operands-in-screens).


<!-- stylify-ignore -->
<example-editor layout="column" class="min-height:220px">
<div class="font-size:12px minw768px:font-size:32px lg:font-size:24px">
	Screens
</div>
</example-editor>
<!-- /stylify-ignore -->

Screens can also be combined using logical operands: **Logical AND**: `&&`, **Logical OR**: `||`

<!-- stylify-ignore -->
<example-editor layout="column" class="min-height:220px">
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
It's not a good practice to have hardcoded values in the code. Therefore you can <nuxt-link to="/docs/stylify/compiler#variables">define variables</nuxt-link>.

Variable can be defined in a content (expects an object without surounding brackets) when used localy or in a compiler config, when used globally.

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
When we want to reuse a piece of code, for example for a button without duplicating classes, we can <nuxt-link to="/docs/stylify/compiler#components">define a component</nuxt-link>. Component can be defined in a content (expects an object without surounding brackets) when used localy (one file / a few pages) or in a compiler config, when used globally.

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

<note>
When you define a component or macro like <code>link</code> this selector can have a collision in production with selector like <code>sidebar-link</code>, when mangling selectors. Check out components documentation for <nuxt-link to="/docs/stylify/compiler#components">more info</nuxt-link>.
</note>


## Adding Macros
In case you want to add for example a shorter variant for `margin-left` like `ml`, you can <nuxt-link to="/docs/stylify/compiler#macros">add macro</nuxt-link> as in the example below.

```js
const compilerConfig = {
	macros: {
		'ml:(\\S+?)': ({macroMatch, selectorProperties}) => {
			// ml:24px => will create => margin-left: 24px
			selectorProperties.add('margin-left', macroMatch.getCapture(0));
		}
	}
};
```

## Custom selectors
Styling elements globally can be done using <nuxt-link to="/docs/stylify/compiler#customselectors">custom selectors</nuxt-link>.
Syntax is folllowing `[css selectors]{stylify selectors split by ;}`.
The `&` character always reffers to current element like in SCSS.
For a space use the `_` (underscore) and for a quote `^` a hat character.

```html
<!-- Every <a> is going to have blue color -->
<div class="[a]{color:blue}">
	<!-- When the cursor is over the link, only the label is going to be underlined -->
	<a href="#" class="
		hover:text-decoration:none
		[&:hover_.label]{text-decoration:underline;font-weight:bold}
	">
		<span class="icon">&plus;</span>
		<span class="label">Blue link</span>
	</a>
</div>
```

## Prepared Components
Are you looking for some prearanged components? We have you covered!

<ComponentsPreviewGrid></ComponentsPreviewGrid>

## Material Theme Integration guide
If you are looking for some color palettes, <nuxt-link to="/snippets/snippets/material-theme">there is a guide</nuxt-link> on how to use Material Theme Builder to easily generate Material Theme for your next project.

<video autoplay muted loop class="width:100% height:auto border-radius:8px">
	<source src="/videos/material-theme-builder.mp4" type="video/mp4" />
</video>

## Advanced Configuration
Check out the [compiler](/docs/stylify/compiler) for more configuration options. The Compiler Config is reusable and the same for all packages listed below.

## Stylify CSS Packages
Stylify ships with multiple packages. All of them can be installed using NPM or YARN. Stylify CSS and Profiler can also be used directly through CDN:

- [@stylify/astro](/docs/astro) - Integration module for Astro.build
- [@stylify/stylify](/docs/stylify) - The core. Generates CSS. Rewrites (mangles) selectors
- [@stylify/bundler](/docs/bundler) - For generating CSS bundles
- [@stylify/unplugin](/docs/unplugin) - Universal plugin for Rollup, Webpack, Vite and Esbuild
- [@stylify/nuxt](/docs/nuxt) - A module for Nuxt.js v3
- [@stylify/nuxt-module](/docs/nuxt-module) - A module for Nuxt.js v2 < v3

## Try Stylify CSS with your favorite tool!

For easier start with your favorite tool check out the [integration examples](/docs/integrations).

<integration-blocks />
