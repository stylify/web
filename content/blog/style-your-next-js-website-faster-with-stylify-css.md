---
title: 🚀 Style your Next.js website faster with Stylify CSS
image: '/images/blog/stylify-next/header.jpg'
ogImage: '/images/blog/stylify-next/og-image.jpg'
author: 'Vladimír Macháček'
annotation: "Style your Next.js website faster, more efficiently and intuitively with Stylify."
createdAt: 'June 28, 2022'
---

Style your Next.js website faster, more efficiently and intuitively with [Stylify](https://stylifycss.com). Don't study selectors and syntax. Use pure CSS syntax and get automatically generated CSS with advanced optimization for production.

For an easier start, you can check out the [Stylify Stackblitz playground](https://stackblitz.com/edit/stylify-nextjs-template?devtoolsheight=33&file=pages%2Findex.js) 🎮.

## Introduction
[Stylify](https://stylifycss.com) generates CSS dynamically based on what you write. The syntax is similar to CSS `property:value`. Defined utilities are combined with components selectors and in production minified to the bare minimum like `.color\:red,.button {color:red}` to `.a,.b{color:red}`.

With Stylify, you can get very small bundles, generate additional lazyloaded CSS chunks and style the page by writing HTML and selectors 🤟.

## Next.js setup
The easiest way to Setup the Next.js is using CLI:
- Run `yarn create next-app`
- Select your project name

This way you will get the default Next.js application skeleton.

## Stylify CSS integration
Install the [@stylify/unplugin](https://stylifycss.com/docs/unplugin) package using NPM or Yarn:

```bash
yarn add @stylify/unplugin
npm i @stylify/unplugin
```

Open the `next.config.js` and copy the following content into it:

```js
const { stylifyWebpack } = require('@stylify/unplugin');

const stylifyPlugin = (dev) => stylifyWebpack({
	dev: dev,
	bundles: [{
		// Generate CSS from all js files
		files: ['./pages/**/*.js'],
		outputFile: './styles/stylify.css',
	}]
});

module.exports = {
	reactStrictMode: true,
	webpack: (config, { dev }) => {
		// Add Stylify CSS Webpack plugin
		config.plugins.push(stylifyPlugin(dev));
		return config;
	}
}
```

The last step, open the `pages/_app.js` and add the path to `stylify.css`:

```jsx
// ...
import '../styles/stylify.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp;
```

## Styling the website
If you copy the code below into the `pages/index.js` and run `yarn dev` you will get a styled `Hello World!` text:

```jsx
export default function Home() {
  return <div className="color:blue">Hello World!</div>;
}
```

Stylify watches any change in the `js` files and generates CSS into the `styles/stylify.css`.
If you add a selector like `font-size:24px` the CSS will be automatically updated 🎉.

Go ahead and try Stylify CSS directly on [Stackblitz.com](https://stackblitz.com/edit/stylify-nextjs-template?devtoolsheight=33&file=pages%2Findex.js) 💡.

### Components
Templates bloated with utility selectors are hard to read. Stylify allows you to define components directly in files, where they are used through [content options](https://stylifycss.com/docs/get-started#defining-a-component) (expects javascript object without brackets) or in the [compiler config](https://stylifycss.com/docs/get-started#defining-a-component).

```jsx
/*
stylify-components
  container: 'max-width:800px margin:0_auto'
/stylify-components
*/
export default function Home() {
  return (
    <div className="container">
      <div className="color:blue">Hello World!</div>
    </div>
  )
}
```

### Variables
It's a good practice to avoid hardcoded values in the selectors. [Variables](https://stylifycss.com/docs/get-started#adding-a-variable) can be defined in the same way as components:

```jsx
/*
stylify-variables
  blue: 'steelblue',
  containerWidth: '800px'
/stylify-variables

stylify-components
  container: 'max-width:$containerWidth margin:0_auto'
/stylify-components
*/
export default function Home() {
  return (
    <div className="container">
      <div className="color:$blue">Hello World!</div>
    </div>
  )
}
```

## The production build
When we run the production build using `yarn build` + `yarn start`, the JSX markup will be mangled into this:

```jsx
export default function Home() {
  return (
    <div className="a">
      <div className="b">Hello World!</div>
    </div>
  )
}
```

The CSS is shortened too:
```css
:root {
    --blue: #4682b4;
    --containerWidth: 800px
}
.b {color: #4682b4}
.a,.c { max-width: 800px }
.a,.d { margin: 0 auto }
```

## Configure anything you need
The examples above don't include everything Stylify CSS can do:
- You can map [nested files](https://stylifycss.com/docs/bundler#files-content-option) in the template
- Style [custom selectors](https://stylifycss.com/docs/stylify/compiler#customselectors)
- Define [custom screens](https://stylifycss.com/docs/stylify/compiler#screens)
- Add [your macros](https://stylifycss.com/docs/stylify/compiler#macros) like `ml:20px` for `margin-left`

Feel free to [check out the docs](https://stylifycss.com/docs/get-started) to learn more 💎.
