---
title: 🚀 Style your Svelte website faster with Stylify CSS
image: '/images/blog/stylify-svelte/header.jpg'
ogImage: '/images/blog/stylify-svelte/og-image-v2.jpg'
author: 'Vladimír Macháček'
annotation: "Style your Svelte website faster and intuitively with Stylify."
createdAt: 'July 11, 2022'
---
[Stylify](https://stylifycss.com) + Svelte + Vite. Style your Svelte website faster with Stylify. Don't study selectors and syntax. Use pure CSS syntax and get generated CSS with advanced optimization for production.

For easier start, you can checkout the [Stylify Stackblitz playground](https://stackblitz.com/edit/stylify-svelte-vite?file=README.md,src%2FApp.svelte) 🎮.

## 💎 Stylify CSS Introduction
[Stylify](https://stylifycss.com) generates CSS dynamically based on what you write. The syntax is similar to css `property:value`. Defined utilities are combined with components selectors and in production minified to bare minimum like `.color\:red,.button {color:red}` to `._zx, ._ga{color:red}`.

Stylify allows you to get very small bundles, generate additional lazyloaded CSS chunks and style the page by writting HTML and selectors 🤟.

## 🚀 Svelte Setup
The easiest way to Setup the Svelte is using cli:
- Run `yarn create vite app`
- Select `svelte` or `svelte-ts`
- Then `cd app`

This way you will get the default Svelte application skeleton.

## 🔌 Stylify CSS Integration
Install the [@stylify/unplugin](https://stylifycss.com/docs/unplugin) package using NPM or Yarn:

```bash
yarn add @stylify/unplugin
npm i @stylify/unplugin
```

Open the `vite.config.js` and copy the following content into it:

```js
import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { vitePlugin } from '@stylify/unplugin';

const stylifyPlugin = vitePlugin({
	transformIncludeFilter: (id) => {
		return id.endsWith('svelte');
	},
	bundles: [{
		outputFile: './src/stylify.css',
		files: ['./src/**/*.svelte'],
	}]
});

export default defineConfig({
	plugins: [stylifyPlugin, svelte()]
});
```

The last step, open the `src/main.js` and add path to `stylify.css`:

```js
// ...
import './stylify.css'
```

## Styling the website
If yout copy the code bellow into the `src/App.svelte` and run `yarn dev` you will get a styled `Hello World! 🎉` text:

```html
<main class="max-width:800px margin:0__auto">
	<h1 class="text-align:center margin-top:100px font-size:42px">
		Hello World! 🎉
	</h1>
</main>
```

Stylify watches any change in the files that matches mask in the bundle files and generates css into the `src/stylify.css`.

If you add for example `color:blue` the CSS will be automatically updated 🎉.

Go ahead and try Stylify CSS directly on [Stackblitz.com](https://stackblitz.com/edit/stylify-svelte-vite?file=README.md,src%2FApp.svelte) 💡.

### Components
To avoid bloated templates with utilities, you can use
components directly in files, where they are used through [content options](https://stylifycss.com/docs/get-started#defining-a-component) (expects javascript object without brackets) or in the [compiler config](https://stylifycss.com/docs/get-started#defining-a-component).

```html
<!--
stylify-components
  container: 'max-width:800px margin:0__auto',
  title: 'text-align:center margin-top:100px font-size:42px'
/stylify-components
-->
<main class="container">
	<h1 class="title">
		Hello World! 🎉
	</h1>
</main>
```

### Variables
If you like clean code, you also want avoid hardcoded values in selectors. [Variables](https://stylifycss.com/docs/get-started#adding-a-variable) can be defined the same way as components:

```html
<!--
stylify-variables
  titleFontSize: '42px',
  containerWidth: '800px'
/stylify-variables

stylify-components
  container: 'max-width:$containerWidth margin:0__auto',
  title: 'text-align:center margin-top:100px font-size:$titleFontSize'
/stylify-components
-->
<main class="container">
	<h1 class="title">
		Hello World! 🎉
	</h1>
</main>
```

## Building for production
If you run `yarn build` + `yarn preview`, the svelte markup will be mangled to this:

```html
<main class="_7tcrv">
	<h1 class="_88io">
		Hello World! 🎉
	</h1>
</main>
```

The css is shortened too:
```css
:root {--titleFontSize: 42px;--containerWidth: 800px;}
._bcda8,._7tcrv{max-width:800px}
._m0vnad,._7tcrv{margin:0 auto}
._1vegb8,._88io{text-align:center}
._jimir,._88io{margin-top:100px}
._qe393,._88io{font-size:42px}
```

## Configure anything you need
The examples above doesn't include everything Stylify can do:
- You can map [nested files](https://stylifycss.com/docs/bundler#files-content-option) in the template
- Style [global selectors](https://stylifycss.com/docs/stylify/compiler#plainselectors)
- Define [custom screens](https://stylifycss.com/docs/stylify/compiler#screens)
- Add [own macros](https://stylifycss.com/docs/stylify/compiler#macros) like `ml:20px` for margin-left
- And a lot more

Feel free to [checkout the docs](https://stylifycss.com/docs/get-started) to learn more 💎.
