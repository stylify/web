---
title: Style your Nuxt.js faster with Stylify CSS
image: '/images/blog/stylify-nuxt/stylify-nuxt.jpg'
ogImage: '/images/blog/stylify-nuxt/stylify-nuxt-og-image.jpg'
author: 'Vladimír Macháček'
annotation: 'Style your Nuxt.js website faster, with Stylify CSS-like utilities.'
createdAt: February 12, 2022
---

Style your Nuxt.JS app quickly and easily with [Stylify](https://stylifycss.com) CSS-like utilities and avoid studying a framework or switching between tags using.

## Introduction
[Stylify](https://stylifycss.com) is a library that uses CSS-like selectors to generate optimized utility-first CSS based on what you write.

- ✅ CSS-like selectors
- ✅ No framework to study
- ✅ Less time spent in docs
- ✅ Mangled & Extremely small CSS
- ✅ No CSS purge needed
- ✅ Components, Variables, Custom selectors
- ✅ It can generate multiple CSS bundles

Also we have a page about <nuxt-link to="/docs/get-started/why-stylify-css">what problems Stylify CSS solves and why you should give it a try!</nuxt-link>

## Installation
For an easier start, you can check out the [Stylify Stackblitz playground](https://stackblitz.com/edit/stylify-nuxtjs-template?file=pages%2Findex.vue) 🎮.

Stylify provides [@stylify/nuxt-module](https://stylifycss.com/docs/nuxt-module) that simplifies the integration process to a minimum:

For Nuxt v3
```
yarn add @stylify/nuxt
```

For Nuxt v2
```
yarn add @stylify/nuxt-module
```

When the Stylify CSS is installed add the Nuxt Module into the `buildModules` section in `nuxt.config.js`.
```js
buildModules: [
	// For Nuxt v3
	'@stylify/nuxt'
	// For Nuxt v2
	'@stylify/nuxt-module'
]
```

And that's it. Now you can start using [Stylify](https://stylifycss.com) to style your Nuxt.js app 🤩.

## First CSS

Open the `pages/index.vue` directory and copy the following content into it.

```html
<template>
	<div class="max-width:1024px margin:0_auto">
		<h1 class="font-size:24px lg:font-size:32px text-align:center">
			Hello World 🥳!
		</h1>
	</div>
</template>
```

Congratulations, you have styled your first page!

## Cleanup and Configuration

When the amount of selectors in the utility-first approach starts to increase, it can turn into an enormous, unreadable mess from which the backend engineers cries by day and night when they see it.

Therefore we have components. Components can be defined in three places:
- In a file where they are used
- In the `stylify.config.js` file
- Inside a `nuxt.config.js` in the Stylify section

Let's define the title component into the index.vue as it is used only here.

```html
<!--
stylify-components
	title: `
		font-size:24px lg:font-size:32px
		text-align:center
	`
/stylify-components
-->
<template>
	<div class="container">
		<h1 class="title">Hello World 🥳!</h1>
	</div>
</template>
```

Now, let's add a container component in `stylify.config.js`, because it is going to probably be used in a whole project.

Create the `stylify.config.js`:

```js
export default {
	compiler: {
		components: {
			container: 'max-width:1024px margin:0_auto',
		}
	}
};
```

Sometimes it is necessary to style elements globally. It can be done using **customSelectors**:

```js
export default {
	compiler: {
		// ...
		customSelectors: {
			'*': 'font-family:arial font-size:16px'
		}
	}
};
```

Variables are used almost in every code. In CSS it is not different. So lets add a variable:

```js
export default {
	compiler: {
		// ...
		variables: {
			'titleColor': 'steelblue'
		}
	}
};
```

Now we can use the variable in our selectors in a whole project:

```html
<!--
stylify-components
	"title": "color:$titleColor ..."
/stylify-components
-->
```

## The Result

Stylify generates stylify.css into the assets directory. The CSS reuses each selector as much as possible to avoid duplicated `properties:values`.


**Mangled HTML**
```html
<div class="a">
	<h1 class="b">Hello World 🥳!</h1>
</div>
```

**Generated CSS**
```css
:root {--titleColor: steelblue;}
*,.font-family\:arial{ font-family:arial }
*, .font-size\:16px{ font-size:16px }
.max-width\:1024px, .container{ max-width:1024px }
.margin\:0_auto, .container{ margin:0 auto }
.color\:\$titleColor,
.title{ color:steelblue }
.font-size\:24px, .title{ font-size:24px }
.text-align\:center, .title{ text-align:center }

@media (min-width: 1024px) {
.lg\:font-size\:32px,.title{ font-size:32px }
}
```

**Mangled CSS**
```css
:root { --titleColor: steelblue; }*,
.c { font-family: arial }
*, .d { font-size: 16px }
.e,.a { max-width: 1024px }
.f,.a { margin: 0 auto }
.g,.b { color: steelblue }
.h,.b { font-size: 24px }
.i,.b { text-align: center }

@media (min-width: 1024px) {
.j,.b {font-size: 32px}
}
```

## Configure anything you need
The examples above don't include everything Stylify CSS can do:
- You can map [nested files](https://stylifycss.com/docs/bundler#files-content-option) in the template
- Style [custom selectors](https://stylifycss.com/docs/stylify/compiler#customselectors)
- Define [custom screens](https://stylifycss.com/docs/stylify/compiler#screens)
- Add [your macros](https://stylifycss.com/docs/stylify/compiler#macros) like `ml:20px` for `margin-left`

Feel free to [check out the docs](https://stylifycss.com/docs/get-started) to learn more 💎.
