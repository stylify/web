---
title: 'Code your SolidJS website faster with Stylify CSS'
image: '/images/blog/stylify-solidjs/header.jpg'
ogImage: '/images/blog/stylify-solidjs/og-image.jpg'
author: 'Vladimír Macháček'
annotation: 'Code your SolidJS website faster with Stylify CSS'
createdAt: 'November 22, 2022'
---

Style your SolidJS app quickly and easily without CSS-in-JS using [Stylify CSS](https://stylifycss.com) CSS-like utilities.

## Introduction
[Stylify](https://stylifycss.com) is a library that uses CSS-like selectors to generate optimized utility-first CSS based on what you write.

✨CSS-like selectors
💎No framework to study
💡Less time spent in docs
🧰Mangled & Extremely small CSS
🤘No purge needed
🚀Components, Variables, Custom selectors
📦It can generate multiple CSS bundles

## Installation
Install Stylify using CLI:
```
npm i -D @stylify/unplugin
yarn add -D @stylify/unplugin
```

Add the following configuration into `vite.config.js`:
```js
import { defineConfig } from 'vite';
import { stylifyVite } from '@stylify/unplugin';
import solidPlugin from 'vite-plugin-solid';

const stylifyPlugin = stylifyVite({
    bundles: [{ outputFile: './src/stylify.css', files: ['./src/**/*.jsx'] }],
    // Optional
    compiler: {
        // https://stylifycss.com/docs/stylify/compiler#variables
        variables: {},
        // https://stylifycss.com/docs/stylify/compiler#macros
        macros: {},
        // https://stylifycss.com/docs/stylify/compiler#components
        components: {},
        // ...
    },
});

export default defineConfig({
    plugins: [stylifyPlugin, solidPlugin()],
    server: {
        port: 3000,
    },
    build: {
        target: 'esnext',
    },
});
```

Add Stylify CSS in `src/index.js`:
```js
import './stylify.css';
```

## Usage
Stylify syntax is similar to CSS. You just write `_` instead of a space and `^` instead of a quote.

So if we edit the `src/App.jsx`:
```jsx
function App() {
  return (
    <h1 class="font-size:24px margin:12px_24px">
      Hello World!
    </h1>
  );
}

export default App;
```

In production, you will get optimized CSS and mangled HTML:
```html
<h1 class="p u">Hello World!</h1>
```

```css
.p{font-size: 24px}
.u{margin: 12px 24px}
```

## Stackblitz Playground
Go ahead and try [Stylify CSS + SolidJS on Stackblitz](https://stackblitz.com/edit/stylifycss-solidjs-vite?file=src%2FApp.jsx).

## Configuration
The examples above don't include everything Stylify can do:
- Define [components](https://stylifycss.com/docs/stylify/compiler#components)
- Add [custom selectors](https://stylifycss.com/docs/stylify/compiler#customselectors)
- Configure [your macros](https://stylifycss.com/docs/stylify/compiler#macros) like `ml:20px` for margin-left
- Define [custom screens](https://stylifycss.com/docs/stylify/compiler#screens)
- You can map [nested files](https://stylifycss.com/docs/bundler#files-content-option) in the template
- And a lot more

Feel free to [check out the docs](https://stylifycss.com/docs/get-started) to learn more 💎.
