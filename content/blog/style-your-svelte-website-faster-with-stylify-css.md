---
title: 🚀 Style your Svelte website faster with Stylify CSS
image: '/images/blog/stylify-svelte/header.jpg'
ogImage: '/images/blog/stylify-svelte/og-image-v2.jpg'
author: 'Vladimír Macháček'
annotation: "Style your Svelte website faster and intuitively with Stylify."
createdAt: 'July 11, 2022'
---
<nuxt-link to="/">Stylify</nuxt-link> + Svelte + Vite. Style your Svelte website faster with Stylify. Don't study selectors and syntax. Use pure CSS syntax and get generated CSS with advanced optimization for production.

For easier start, you can check out the [Stylify Stackblitz playground](https://stackblitz.com/edit/stylify-svelte-vite?file=README.md,src%2FApp.svelte) 🎮.

## 💎 Stylify CSS Introduction
<nuxt-link to="/">Stylify</nuxt-link> is a library that uses CSS-like selectors to generate optimized utility-first CSS based on what you write.

- ✅ CSS-like selectors
- ✅ No framework to study
- ✅ Less time spent in docs
- ✅ Mangled & Extremely small CSS
- ✅ No CSS purge needed
- ✅ Components, Variables, Custom selectors
- ✅ It can generate multiple CSS bundles

Also we have a page about <nuxt-link to="/docs/get-started/why-stylify-css">what problems Stylify CSS solves and why you should give it a try!</nuxt-link>

## 🚀 Svelte Setup
The easiest way to Setup the Svelte is using CLI:
- Run `yarn create vite app`
- Select `svelte` or `svelte-ts`
- Then `cd app`

This way you will get the default Svelte application skeleton.

## 🔌 Stylify CSS Integration
Install the <nuxt-link to="/docs/unplugin">@stylify/unplugin</nuxt-link> package using NPM or Yarn:

```bash
yarn add @stylify/unplugin
npm i @stylify/unplugin
```

Open the `vite.config.js` and copy the following content into it:

```js
import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { stylifyVite } from '@stylify/unplugin';

const stylifyPlugin = stylifyVite({
	bundles: [{
		outputFile: './src/stylify.css',
		files: ['./src/**/*.svelte'],
	}]
});

export default defineConfig({
	plugins: [stylifyPlugin, svelte()]
});
```

The last step, open the `src/main.js` and add the path to `stylify.css`:

```js
// ...
import './stylify.css'
```

## Styling the website
If you copy the code below into the `src/App.svelte` and run `yarn dev` you will get a styled `Hello World! 🎉` text:

```html
<main class="max-width:800px margin:0_auto">
	<h1 class="text-align:center margin-top:100px font-size:42px">
		Hello World! 🎉
	</h1>
</main>
```

Stylify watches any change in the files that matches the mask in the bundle files and generates CSS into the `src/stylify.css`.

If you add for example `color:blue` the CSS will be automatically updated 🎉.

Go ahead and try Stylify CSS directly on [Stackblitz.com](https://stackblitz.com/edit/stylify-svelte-vite?file=README.md,src%2FApp.svelte) 💡.

### Components
To avoid bloated templates with utilities, you can use
components directly in files, where they are used through <nuxt-link to="/docs/get-started#defining-a-component">content options</nuxt-link> (expects javascript object without brackets) or in the <nuxt-link to="/docs/get-started#defining-a-component">compiler config</nuxt-link>.

```html
<!--
stylify-components
  container: 'max-width:800px margin:0_auto',
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
If you like clean code, you also want to avoid hardcoded values in selectors. <nuxt-link to="/docs/get-started#adding-a-variable">Variables</nuxt-link> can be defined in the same way as components:

```html
<!--
stylify-variables
  titleFontSize: '42px',
  containerWidth: '800px'
/stylify-variables

stylify-components
  container: 'max-width:$containerWidth margin:0_auto',
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
If you run `yarn build` + `yarn preview`, the svelte markup will be mangled into this:

```html
<main class="a">
	<h1 class="b">
		Hello World! 🎉
	</h1>
</main>
```

The CSS is shortened too:
```css
:root {--titleFontSize: 42px;--containerWidth: 800px;}
.c,.a{max-width:800px}
.d,.a{margin:0 auto}
.e,.b{text-align:center}
.f,.b{margin-top:100px}
.g,.b{font-size:42px}
```

## Configure anything you need
The examples above don't include everything Stylify can do:
- You can map <nuxt-link to="/docs/bundler#files-content-option">nested files</nuxt-link> in the template
- Style <nuxt-link to="/docs/stylify/compiler#customselectors">global selectors</nuxt-link>
- Define <nuxt-link to="/docs/stylify/compiler#screens">custom screens</nuxt-link>
- Add <nuxt-link to="/docs/stylify/compiler#macros">your macros</nuxt-link> like `ml:20px` for margin-left
- And a lot more

Feel free to <nuxt-link to="/docs/get-started">check out the docs</nuxt-link> to learn more 💎.
