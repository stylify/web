---
title: Utility-First CSS in Nuxt.js with Stylify
image: '/images/blog/stylify-nuxt/stylify-nuxt.jpg'
ogImage: '/images/blog/stylify-nuxt/stylify-nuxt-og-image.jpg'
author: 'Vladimír Macháček'
annotation: 'Utility-First CSS using pure CSS selectors. Style your Nuxt.js app quickly, seamlessly and without thinking.'
createdAt: February 12, 2022
---

Nuxt.js is an amazing tool to build SPA and SSR applications using Vue.js.
When you want to style it, you can use various frameworks and preprocessors.

I personally prefer pure CSS or SCSS instead of utility-first frameworks. Even though the syntax is a bit longer than, somehow named and shortened selectors.

The problem with writing CSS manually is that it is slow. It's also easy to end up with duplicate CSS `property:value` in various selectors which causes the CSS size to grow.

Because of this I have created the [stylifycss.com](https://stylifycss.com):
- It generates utility-first CSS dynamicly based on what I write
- The selectors are the same like like in pure CSS
- There are just two rules. `_` instead of a space and `^` instead of a quote.
- And there are multiple other features like code splitting, selectors minification, dynamic screens, on demand generated CSS and etc. Feel free to checkout the [Stylify docs](https://stylifycss.com)

In this Article I will show you how to use it in the Nuxt.js 🤟.

## Installation

This article is for Nuxt V2. If you use Nuxt 3, [check guide for Nuxt 3](https://stylifycss.com/docs/integrations/nuxtjs#how-to-integrate-stylify-css-into-the-nuxtjs-v3).

Stylify provides [@stylify/nuxt-module](https://stylifycss.com/docs/nuxt-module) that symplifies the integration process to minimum:

```
yarn add @stylify/nuxt-module

npm i @stylify/nuxt-module
```

When the Stylify CSS is installed add the Nuxt Module into the `buildModules` section in `nuxt.config.js`.
```js
buildModules: [
	'@stylify/nuxt-module'
]
```

And that's it. Now you can start using the [Stylify](https://stylifycss.com) to style your Nuxt.js app 🤩.

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

When the amount of selectors in utility-first approach starts to increase, it can turn into an enormous, unreadable mess from which the backend engineers cries by day and night when they see it.

Therefore we have components. Components can be defined on three places:
- In a file where they are used
- In the `stylify.config.js` file
- Inside a `nuxt.config.js` in the Stylify section

Let's define add the title component into the index.vue as it is used only here.

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

Sometime it is necessary to style elements globally. It can be done using **plainSelectors**:

```js
export default {
	compiler: {
		// ...
		plainSelectors: {
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
<div class="_7tcrv">
	<h1 class="_88io">Hello World 🥳!</h1>
</div>
```

**Generated CSS**
```css
:root {
--titleColor: steelblue;
}
*,
.font-family\:arial{
	font-family:arial
}
*,
.font-size\:16px{
	font-size:16px
}
.max-width\:1024px,
.container{
	max-width:1024px
}
.margin\:0_auto,
.container{
	margin:0 auto
}
.color\:\$titleColor,
.title{
	color:steelblue
}
.font-size\:24px,
.title{
	font-size:24px
}
.text-align\:center,
.title{
	text-align:center
}

@media (min-width: 1024px) {
.lg\:font-size\:32px,
.title{
	font-size:32px
}
}
```

**Mangled CSS**
```css
:root {
	--titleColor: steelblue;
}
*,
._1go3 {
	font-family: arial
}
*,
._h0jma {
	font-size: 16px
}
._0plj4,
._7tcrv {
	max-width: 1024px
}
._m0vnad,
._7tcrv {
	margin: 0 auto
}
._emdk,
._88io {
	color: steelblue
}
._h1et7,
._88io {
	font-size: 24px
}
._1vegb8,
._88io {
	text-align: center
}

@media (min-width: 1024px) {
	._rorab,
	._88io {
		font-size: 32px
	}
}
```
