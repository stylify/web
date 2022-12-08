---
title: 'Code your Laravel website faster with Stylify CSS'
image: '/images/blog/stylify-laravel/header.jpg'
ogImage: '/images/blog/stylify-laravel/og-image.jpg'
author: 'Vladimír Macháček'
annotation: "Code your Laravel website faster with Stylify CSS-like utilities. Don't study CSS framework. Focus on coding."
createdAt: 'December 8, 2022'
---

## Introduction
[Stylify](https://stylifycss.com) is a library that uses CSS-like selectors to generate optimized utility-first CSS based on what you write.

- ✨ CSS-like selectors
- 💎 No framework to study
- 💡 Less time spent in docs
- 🧰 Mangled & Extremely small CSS
- 🤘 No purge needed
- 🚀 Components, Variables, Custom selectors
- 📦 It can generate multiple CSS bundles

## Installation
This article uses Laravel with Vite. For older versions with Webpack, check out <nuxt-link to="/docs/integrations/laravel#for-older-vesions-of-laravel-with-webpack">this guide</nuxt-link>.

Install Stylify using CLI:
```
npm i -D @stylify/unplugin
yarn add -D @stylify/unplugin
```

Add the following configuration into `vite.config.js`:
```js
import { defineConfig } from 'vite';
import { stylifyVite } from '@stylify/unplugin';

const stylifyPlugin = stylifyVite({
	// You can define multiple bundles, This example uses only one for simplicity
	bundles: [{ files: ['resources/views/**/*.blade.php'], outputFile: 'resources/css/stylify.css' }],
	// Optional - https://stylifycss.com/docs/unplugin
	compiler: {
		// https://stylifycss.com/docs/stylify/compiler#variables
		variables: {},
		// https://stylifycss.com/docs/stylify/compiler#macros
		macros: {},
		// https://stylifycss.com/docs/stylify/compiler#components
		components: {},
		// ...
	}
});

export default defineConfig(() => ({
	plugins: [
		stylifyPlugin,
		laravel({
			// Add path to generated files
            input: ['resources/js/app.js', 'resources/css/stylify.css'],
            refresh: true,
        }),
	],
}));
```

Add the path to `resources/css/stylify.css` into the template:

```html
<head>
	@vite('resources/css/stylify.css')
</head>
```

In case you define more than one bundle in `stylifyVite` plugin, make sure to import generated CSS files on correct pages.

## Usage
Stylify syntax is similar to CSS. You just write `_` instead of a space and `^` instead of a quote.

So if we edit the `resources/views/welcome.blade.php`:
```jsx
<div class="text-align:center font-size:48px color:blue">Stylify + Laravel = 🚀</div>
```

In production, you will get optimized CSS and mangled HTML:
```html
<div class="a b c">Stylify + Laravel = 🚀</div>
```

```css
.a{text-align:center}
.b{font-size:48px}
.c{color:blue}
```

## Integration example
You can also check out our <a href="https://github.com/stylify/integrations-examples/tree/master/laravel" target="_blank" rel="noopener">Laravel integration example</a> on Github.

## Configuration
The examples above don't include everything Stylify can do:
- Define [components](https://stylifycss.com/docs/stylify/compiler#components)
- Add [custom selectors](https://stylifycss.com/docs/stylify/compiler#customselectors)
- Configure [your macros](https://stylifycss.com/docs/stylify/compiler#macros) like `ml:20px` for margin-left
- Define [custom screens](https://stylifycss.com/docs/stylify/compiler#screens)
- You can map [nested files](https://stylifycss.com/docs/bundler#files-content-option) in the template
- And a lot more

Feel free to [check out the docs](https://stylifycss.com/docs/get-started) to learn more 💎.
