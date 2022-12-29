---
title: 'Code your Astro.build website faster with Stylify CSS'
image: '/images/blog/stylify-astro/header.jpg'
ogImage: '/images/blog/stylify-astro/og-image.jpg'
author: 'Vladimír Macháček'
annotation: "Code your Astro.build website faster with Stylify CSS. Use CSS-like utilities. Don't study CSS framework."
createdAt: 'December 3, 2022'
---

Style your Astro.build website quickly and easily with [Stylify CSS](https://stylifycss.com) CSS-like utilities.

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
Install Stylify using CLI:

```
yarn add @stylify/astro
```

Add a buildModule into the `astro.config.mjs`:

```js
import { defineConfig } from 'astro/config';
import stylify from '@stylify/astro';

export default defineConfig({
	integrations: [stylify()]
});
```

## Usage
Stylify syntax is similar to CSS. You just write `_` instead of a space and `^` instead of a quote.

So if we edit the `src/pages/index.astro`:
```html
<h1 class="font-size:24px margin:12px_24px">
	Hello World!
</h1>
```

In production, you will get optimized CSS and mangled HTML:
```html
<h1 class="a b">Hello World!</h1>
```

```css
.a{font-size: 24px}
.b{margin: 12px 24px}
```

## Stackblitz Playground
Go ahead and try [Stylify CSS + Astro.build on Stackblitz](https://stackblitz.com/edit/stylify-astro-example?file=src%2Fpages%2Findex.astro).

## Configuration
The examples above don't include everything Stylify can do:
- Define [components](https://stylifycss.com/docs/stylify/compiler#components)
- Add [custom selectors](https://stylifycss.com/docs/stylify/compiler#customselectors)
- Configure [your macros](https://stylifycss.com/docs/stylify/compiler#macros) like `ml:20px` for margin-left
- Define [custom screens](https://stylifycss.com/docs/stylify/compiler#screens)
- You can map [nested files](https://stylifycss.com/docs/bundler#files-content-option) in the template
- And a lot more

Feel free to [check out the docs](https://stylifycss.com/docs/get-started) to learn more 💎.
