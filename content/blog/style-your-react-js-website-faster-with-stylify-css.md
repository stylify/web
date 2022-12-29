---
title: 🚀 Style your React.js website faster with Stylify CSS
image: '/images/blog/stylify-reactjs/header.jpg'
ogImage: '/images/blog/stylify-reactjs/og-image.jpg'
author: 'Vladimír Macháček'
annotation: "Style your React.js website faster and intuitively with Stylify."
createdAt: 'July 6, 2022'
---
[Stylify](https://stylifycss.com) + React.js + Vite.js. Style your React.js website faster with Stylify. Don't study selectors and syntax. Use pure CSS syntax and get generated CSS with advanced optimization for production.

For easier start, you can check out the [Stylify Stackblitz playground](https://stackblitz.com/edit/stylify-react-vite?file=src%2FApp.jsx) 🎮.

## 💎 Stylify CSS Introduction
[Stylify](https://stylifycss.com) is a library that uses CSS-like selectors to generate optimized utility-first CSS based on what you write.

- ✅ CSS-like selectors
- ✅ No framework to study
- ✅ Less time spent in docs
- ✅ Mangled & Extremely small CSS
- ✅ No CSS purge needed
- ✅ Components, Variables, Custom selectors
- ✅ It can generate multiple CSS bundles

Also we have a page about <nuxt-link to="/docs/get-started/why-stylify-css">what problems Stylify CSS solves and why you should give it a try!</nuxt-link>

## 🚀 React.js Setup
The easiest way to Setup the React.js is using CLI:
- Run `yarn create vite app`
- Select `react` or `react-ts`
- Then `cd app`

This way you will get the default React.js application skeleton.

## 🔌 Stylify CSS Integration
Install the [@stylify/unplugin](https://stylifycss.com/docs/unplugin) package using NPM or Yarn:

```bash
yarn add @stylify/unplugin
npm i @stylify/unplugin
```

Open the `vite.config.js` and copy the following content into it:

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { stylifyVite } from '@stylify/unplugin';

const stylifyPlugin = stylifyVite({
    bundles: [{
		// Create only one bundle for whole project => stylify.css
        outputFile: './src/stylify.css',
        files: ['./src/**/*.js', './src/**/*.ts', './src/**/*.jsx', './src/**/*.tsx'],
    }]
});

export default defineConfig({
	plugins: [stylifyPlugin, react()]
});
```

The last step, open the `src/main.jsx` and add the path to `stylify.css`:

```jsx
// ...
import './stylify.css'
```

## Styling the website
If you copy the code below into the `src/App.jsx` and run `yarn dev` you will get a styled `Hello World! 🎉` text:

```jsx
export default function App() {
	return (
		<div className="text-align:center margin-top:100px font-size:42px">
			Hello World! 🎉
		</div>
	);
}
```

Stylify watches any change in the files that matches mask in the bundle files and generates CSS into the `src/stylify.css`.

If you add for example `color:blue` the CSS will be automatically updated 🎉.

Go ahead and try Stylify CSS directly on [Stackblitz.com](https://stackblitz.com/edit/stylify-react-vite?file=src%2FApp.jsx) 💡.

### Components
To avoid bloated templates with utilities, you can use
components directly in files, where they are used through [content options](https://stylifycss.com/docs/get-started#defining-a-component) (expects javascript object without brackets) or in the [compiler config](https://stylifycss.com/docs/get-started#defining-a-component).

```jsx
/*
stylify-components
  container: 'max-width:800px margin:0_auto',
  title: 'text-align:center margin-top:100px font-size:42px'
/stylify-components
*/
export default function App() {
	return (
		<div class="container">
			<div className="title">Hello World! 🎉</div>
		</div>
	);
}
```

### Variables
If you like clean code, you also want to avoid hardcoded values in selectors. [Variables](https://stylifycss.com/docs/get-started#adding-a-variable) can be defined in the same way as components:

```jsx
/*
stylify-variables
  titleFontSize: '42px',
  containerWidth: '800px'
/stylify-variables

stylify-components
  container: 'max-width:$containerWidth margin:0_auto',
  title: 'text-align:center margin-top:100px font-size:$titleFontSize'
/stylify-components
*/
export default function App() {
	return (
		<div class="container">
			<div className="title">Hello World! 🎉</div>
		</div>
	);
}

```

## Building for production
If you run `yarn build` + `yarn preview`, the JSX markup will be mangled into this:

```jsx
export default function App() {
	return (
		<div class="_7tcrv">
			<div className="_88io">Hello World! 🎉</div>
		</div>
	);
}
```

The CSS is shortened too:
```css
:root {--titleFontSize: 42px;--containerWidth: 800px;}
._bcda8,._7tcrv{max-width:800px}
._m0vnad,._7tcrv{margin:0 auto}
._1vegb8,._88io{text-align:center}
._jimir,._88io{margin-top:100px}
._qe393,._88io{font-size:42px}
```

## Configure anything you need
The examples above don't include everything Stylify CSS can do:
- You can map [nested files](https://stylifycss.com/docs/bundler#files-content-option) in the template
- Style [global selectors](https://stylifycss.com/docs/stylify/compiler#customselectors)
- Define [custom screens](https://stylifycss.com/docs/stylify/compiler#screens)
- Add [your macros](https://stylifycss.com/docs/stylify/compiler#macros) like `ml:20px` for margin-left
- And a lot more

Feel free to [check out the docs](https://stylifycss.com/docs/get-started) to learn more 💎.
