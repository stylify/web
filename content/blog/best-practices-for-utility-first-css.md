---
title: 'Best practices for utility-first CSS'
image: '/images/blog/best-practices/header-v2.jpg'
ogImage: '/images/blog/best-practices/og-image-v2.jpg'
author: 'Vladimír Macháček'
annotation: 'Learn how to use Utility-First CSS effectively to style your website while avoiding bloated templates and maintenance difficulties.'
createdAt: 'February 2, 2023'
---

Utility-First CSS is a modern and flexible approach to styling website.

However, it temps developers to "step on the gas", turn on the heavy metal and write literally everything into class attributes in completely random order. This ends up with a class long like Route 50 and coding turns into a "Sherlock Holmes experience".

This guide is a list of useful lessons learned while working and testing utility-first CSS. Its goal is to help you use utility-first CSS effectively while eliminating the issues mentioned below.

Even though this guide is focused primarily on Stylify CSS, there are links to Tailwind documentation for similar technology/approach and all tips explained in this guide can be used within any other utility-first CSS framework that supports similar features.

## Utility-First CSS Pros and Cons
Below is a list of a few pros and cons you will probably encounter, when working with Stylify CSS or Tailwind CSS. I have explained them more in a detail in <nuxt-link to="/docs/get-started/why-stylify-css">why Stylify post</nuxt-link>.

Pros:
- It allows you to atomically style every element on the page exactly how you need
- You don't have create weird selector names, switch between files, clean unused CSS etc.
- There are fewer duplicated `property:values` and `at rules` in the CSS
- The CSS is often smaller than with manually written CSS or with component frameworks

Cons:
- Class attributes in templates can get easily "unreadable"
- Some elements that should work as components (buttons for example) are defined as elements with duplicated class attributes, which can cause harder maintenance
- Values for properties like `color`, `border` and `margin` are often hardcoded within the template

Now when we know at least some positives/negatives while using utility-first CSS, let's take a look at the negatives and let's try to solve them.

## How to align and sort selectors
To improve class attribute readability, order your selectors from the smallest media query/screen/container, to largest:

```html
<!-- Min width -->
<button class="font-size:14px sm:font-size:24px lg:font-size:32px"></button>
<!-- Max width -->
<button class="maxw640px:margin-top:24px tomd:flex-direction:column"></button>
```

In case the class attribute is long and you have multiple media queries within the attribute, put each media query on a separate line. This way you can easily see, which line is responsible for each media/container query and what changed in the pull request.
```html
<div class="
	width:240px height:240px margin-bottom:24px
	md:margin-bottom:32px md:width:320px
	xl:width:100%
"></div>
```

If there are multiple attributes on an element and a class attribute with a lot of utilities, put the class attribute on the end and break it into multiple lines. This will keep the element more readable:

```html
<div id="" aria-label="" data-my-custom-data class="
	width:240px height:240px margin-bottom:24px
	md:margin-bottom:32px md:width:320px
	xl:width:100%
"></div>
```

When it comes to selectors that are "related" to each other like `font-size`/`line-height` and `width`/`height`, put them right next to each other. This way it is easier to find related selectors.

```html
<button class="font-size:18px line-height:24px width:100% height:24px"></button>
<button class="
	display:flex flex-direction:column align-items:center
	font-size:18px line-height:24px
	md:flex-direction:row md:font-size:20px
"></button>
```

If you use Tailwind, you might want to check their [Prettier Plugin](https://tailwindcss.com/blog/automatic-class-sorting-with-prettier) which can sort your classes automatically.

To decrease the number of classes, you can also use shortcuts and modern CSS features to avoid unnecessary classes.
```html
<div class="margin-top:12px margin-right:24px font-size:16px md:font-size:24px xl:font-size:32px"></div>
<div class="margin:12px_24px_0_0 font-size:clamp(16px,10vh,32px)"></div>
```

## Cleaning bloated templates and duplicated class attributes
Because of the simplicity of utilities usage, it's easy to forget to split the code into reusable parts. Unfortunately, we cannot avoid this, if we don't want to have unreadable templates:
- We can style elements globally, for which we can use <nuxt-link to="/docs/stylify/compiler#customselectors">global custom selectors</nuxt-link>, or <nuxt-link to="/docs/stylify/compiler#components">components</nuxt-link>.
- When using frameworks like React, Vue, Svelte or Angular, we can easily create framework-based components with slots.
- In Stylify case, we can also define components within a config file or within a file (template) where they are used.
- If you use Tailwind, you can configure components within CSS files with the `@apply` rule. They have their guide about [reusing styles](https://tailwindcss.com/docs/reusing-styles), [adding custom styles](https://tailwindcss.com/docs/adding-custom-styles) and [extending configuration](https://tailwindcss.com/docs/configuration).

Each of these approaches has its purpose which is explained below.

### Creating reusable Components

In case you work with frameworks like Nuxt, Next, Vue, React, Svelte or Lit, you can define components and reuse them.
This way, you have styles for such components only in one place and it doesn't bloat your HTML elsewhere.

Also, you can restrict the amount of possible component style variants by rendering the component based on passed props.

```html
// MyButton.vue
<template>
	<button class="color:red font-size:24px">
		<slot></slot>
	</button>
</template>

// Page.vue
<template>
	<MyButton>Click me!</MyButton>
</template>
```

Similar approach can also be used within PHP frameworks like [Symfony](https://twig.symfony.com/doc/2.x/tags/include.html), [Laravel](https://laravel.com/docs/9.x/blade#components) or [Nette](https://latte.nette.org/en/template-inheritance#toc-horizontal-reuse). It might not be as flexible as React or Vue components, but you can create a lot of reusable blocks.

### Styling elements globally
Sometimes it's necessary to style elements globally. Such as styling nested elements within an article or adding some CSS reset.

In Stylify, this can be done in various ways using <nuxt-link to="/docs/stylify/compiler#customselectors">custom selectors</nuxt-link>.

If you use Tailwind, there are [arbitrary variants](https://tailwindcss.com/docs/adding-custom-styles#arbitrary-variants) for this.

When you have only a small amount of selectors and elements to modify, it's ok to style it directly through the class attribute.

```html
<nav class="
display:flex flex-direction:column

[a]{display:inline-flex;align-items:center;text-decoration:none}
[a_.icon]{margin-right:4px;line-height:1}
[a_span]{font-size:16px}
[a:hover_span]{text-decoration:underline}
">
	<a href="#">
		<i class="icon"></i>
		<span>Link</span>
	</a>
</nav>
```

When the style you have to add to inner/global elements starts to grow, it's better to move it outside of the class attribute.
In <nuxt-link to="/">Stylify CSS</nuxt-link> you can define these selectors within the config file or in a template where they are used.

In case, the style is applied only in one template, we can define it within the template. The custom selectors can be defined within a comment in the `stylify-customSelectors` section. It expects a javascript object without surrounding brackets. The syntax within the template literals is similar to SCSS. However, to keep things simple, it only supports nesting and chaining. Custom selectors content options expects javascript object without surrounding brackets:
```html
<!--
stylify-customSelectors
	'.navigation': `
		display:flex flex-direction:column

		a {
			display:inline-flex align-items:center text-decoration:none
			.icon { margin-right:4px line-height:1 }
			span { font-size:16px }
			&:hover span { text-decoration:underline }
		}
	`
/stylify-customSelectors
-->
<nav class="navigation">
	<a href="#">
		<i class="icon"></i>
		<span>Link</span>
	</a>
</nav>
```

The config from template can also be moved into the <nuxt-link to="/docs/stylify/compiler#customselectors">config file</nuxt-link>:
```js
const compilerConfig = {
	customSelectors: {
		'.navigation': `
			display:flex flex-direction:column

			a {
				display:inline-flex align-items:center text-decoration:none
				.icon { margin-right:4px line-height:1 }
				span { font-size:16px }
				&:hover span { text-decoration:underline }
			}
		`
	}
}
```

## Eliminating Hardcoded Values by Variables
At first, it seems ok to write selector like `color:#000` or `box-shadow:0_4px_8px_rgba(0,0,0,.16)`. However, what if we want to use the same shadow across the web or somewhere in the future, we will want to support a light/dark mode. This will simply not work and it will complicate the maintenance and refactoring.

If you use Tailwind, they have an [extensive guide](https://tailwindcss.com/docs/configuration) on how to configure each part of the framework.

In the case of Stylify, there is nothing like a "theme". There are only variables that can be defined in two ways. If variable is used globally, put it in the <nuxt-link to="/docs/stylify/compiler#variables">global config</nuxt-link>:
```js
const compilerConfig = {
	variables: {
		textColor: '#000',
		shadow: '0 4px 8px rgba(0,0,0,.16)'
	}
}
```

If it is used locally, configure it within a comment in a file where it is used using <nuxt-link to="/docs/stylify/compiler#contentoptionsprocessors">content options</nuxt-link>. It expects javascript object without surrounding brackets:

```html
<!--
stylify-variables
	textColor: '#000',
	shadow: '0 4px 8px rgba(0,0,0,.16)'
/stylify-variables
-->
```

You can reuse these variables in multiple places like this:
```html
<span class="color:$textColor box-shadow:$shadow">Hello World!</span>
```

When you need to modify the font or color based on screen or color theme preference, use CSS variables to flexibly change colors, font sizes, background and other properties, based on screen and media query. This will decrease the number of selectors and will simplify the refactoring.
```js
const compilerConfig = {
	// CSS variables are note enabled by default in Stylify
	replaceVariablesByCssVariables: true,
	// https://stylifycss.com/docs/stylify/compiler#variables
	variabels: {
		textFontSize: '12px',
		textColor: '#000',
		// Tries to match a screen, can be sm, md, lg...
		minw400px: {
			textFontSize: '18px'
		},
		// For a @media (prefer-color-scheme: dark)
		dark: {
			textColor: '#fff'
		},
		// When screen is not found,
		// it falls back to a custom selector
		// in this case element with the ".dark" class
		// which will very probably be the root (html el)
		'.dark': {
			textColor: '#fff'
		},
	}
};
```

And in HTML:
```html
<span class="font-size:$textFontSize color:$textColor"></span>
```

Tailwind has a [Dark Mode guide](https://tailwindcss.com/docs/dark-mode) in their docs, so make sure to check it out. In their case, you can use for example a class to switch themes.

## Simplifying development using hooks
To eliminate some repetitive tasks, you can use the Stylify CSS Hooks system. Stylify provides various hooks within the <nuxt-link to="/docs/stylify/compiler#hooks">Compiler</nuxt-link>, <nuxt-link to="/docs/bundler#hooks">Bundler</nuxt-link> and <nuxt-link to="/docs/stylify/runtime#hooks">Runtime</nuxt-link>.

These hooks can be used to attach listeners, with which you can for example:
- Dynamically generate a style guide
- Modify/Convert/Extend values of new selector matches
- Modify bundler output
- Trigger some callback within a browser, when Stylify generates initial CSS
- Etc...

Below is an example of a hook, that listens to a new macro match for `font-size`. This hook checks, whether the font size value is in the allowed range and converts `px` units to `REM`. It also attaches correct line height so we don't have to add `line-height` selector every time we want to use `font-size` selector:

```js
import { hooks } from '@stylify/stylify';

// 1. Create a function, that will work with font-size property
const fontSizeHandler = ({ selectorProperties }) => {
	const propertyValue = selectorProperties.properties['font-size'];

	// If value of the font is for example a default reset to REM, do nothing
	// Or, if the unit are not pixels for example
	if (propertyValue === '62.5%' || !propertyValue.endsWith('px')) {
		return;
	}

	const numberValue = Number(propertyValue.match(/^\d+/));
	// Let's create allowed font sizes
	const allowedFontSizes = {
		'Small text': 12,
		'Regular text': 16,
		'Large text': 20,
		'Subtitle': 24,
		'Title': 32,
		'Large title': 42,
		'Extra large title': 64
	}

	// If developer tries to use for example font-size:13px, it will throw an error
	if (!Object.values(allowedFontSizes).includes(numberValue)) {
		throw new Error(`Font size "${propertyValue}" is not allowed. Available values are "${JSON.stringify(allowedFontSizes)}".`);
	}

	const pixelFontSize = Number(pixelUnit.slice(0,-2));
	const remFontSize = pixelFontSize / 10;

	// Also, recalculate px to rem and add a correct line height
	// So we don't have to add it manually each time
	selectorProperties.addMultiple({
		'font-size': `${remFontSize}rem`,
		'line-height': `${remFontSize * (pixelFontSize >= 28 ? 1.2 : 1.7)}rem`
	});
}

// 2. Add it into the handlers
const newMacroMatchHandlers = {
	'font-size': fontSizeHandler
};

// 3. Add a hook that listens to new macro match, get's appropriate handler and calls it
hooks.addListener('compiler:newMacroMatch', ({ macroMatch, selectorProperties }) => {
	const selectorProperties = Object.keys(data.selectorProperties.properties);
	for (const selectorProperty of selectorProperties) {
		const handler = newMacroMatchHandlers[selectorProperty] ?? undefined;

		if (handler === undefined) {
			continue;
		}

		handler(data);
	}
});
```

## Splitting CSS
<nuxt-link to="/">Stylify CSS</nuxt-link> allows you to split CSS bundles basically for each file separately.
This feature brings increases the level of CSS optimization to the next level as the bundles can get very small.

### Split CSS for App sections
Let's say, you have 2 app sections. One for the front of the website and another for admin/user dashboard.
For 2 sections, only 2 CSS files will be generated. The CSS for the frontend will not be loaded into admin and vice versa.

### Split CSS for Layouts and pages
This way you have one CSS import for the layout and one for the page. When you load a page, the layout and page CSS will be loaded. This happens for every other page except the layout CSS is now cached.

### CSS Layers and Scopes
If you decide to split CSS into multiple files for layouts/pages you might encounter a problem with overridden CSS selectors.

Luckily this problem has an easy solution. We use CSS layers and Scope to correct the specificity.

Tailwind has it's own solution for CSS layers so make sure to check [their guide](https://tailwindcss.com/docs/adding-custom-styles#using-css-and-layer).

Stylify CSS provides CSS layers support within bundle configuration. This configuration can be used within Stylify Unplugin (for Next, React, Vue, Vite, SvelteKit, Symfony, Laravel, Nette and etc.) and Stylify Astro (Astro.build). Both of these packages use Stylify Bundler package under the hood.

Common configuration for Stylify Unplugin, Astro integration and Bundler:
```js
const bundlerConfig = {
	cssLayersOrder: {
		// This will generate @layer layout,page;
		order: 'layout, page',
		// This tells Stylify to export the above layers order
		// only into bundles, that has layout CSS layer
		exportLayer: ['layout']
	},
};

const layoutBundle = {
	files: ['path/to/layout.html'],
	outputFile: 'path/to/layout.css',
	cssLayer: 'layout'
};

const pageBundle = {
	files: ['path/to/page.html'],
	outputFile: 'path/to/page.css',
	cssLayer: 'page'
};

const config = {
	bundler: bundlerConfig,
	bundles: [ layoutBundle, pageBundle ]
};
```

Usage of this configuration with unplugin:
```js
import { stylifyVite, stylifyWebpack, stylifyEsbuild, stylifyRollup } from '@stylify/unplugin';

stylifyVite(config);
stylifyWebpack(config);
stylifyEsbuild(config);
stylifyRollup(config);
```

Example with Astro.build integration:
```js
import stylify from '@stylify/astro';

export default {
    integrations: [stylify(config)]
}
```

Example with direct bundler usage:
```js
import { Bundler } from '@stylify/bundler';

const bundler = new Bundler(config)
bundler.bundle();

await bundler.waitOnBundlesProcessed();
```

## Let us know what you think!
Do you have any other best practices you use? Is there anything missing in the docs? Doe's anything need more explanation?

Also, a big thanks go to [Posandu Mapa](https://twitter.com/Posandu) for his cooperation on this article!
