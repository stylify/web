---
title: 🚀 Style your Next.js website faster with Stylify CSS
image: '/images/blog/stylify-next/header.jpg'
ogImage: '/images/blog/stylify-next/og-image.jpg'
author: 'Vladimír Macháček'
annotation: "Style your Next.js website faster, more efficiently and intuitively with Stylify."
createdAt: 'June 28, 2022'
---

Style your Next.js website faster, more efficiently and intuitively with [Stylify](https://stylifycss.com). Don't study selectors and syntax. Use pure CSS syntax and get automatically generated CSS with advanced optimization for production.

For easier start, you can checkout the [Stylify Stackblitz playground](https://stackblitz.com/edit/stylify-nextjs-template?devtoolsheight=33&file=pages%2Findex.js) 🎮.

## Introduction
[Stylify](https://stylifycss.com) generates CSS dynamically based on what you write. The syntax is similar to css `property:value`. Defined utilities are combined with components selectors and in production minified to bare minimum like `.color\:red,.button {color:red}` to `_zx, _ga{color:red}`.

With Stylify, you can get very small bundles, generate additional lazyloaded CSS chunks and style the page by writting HTML and selectors 🤟.

## Next.js setup
The easiest way to Setup the Next.js is using cli:
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
const { webpackPlugin } = require('@stylify/unplugin');

const stylifyPlugin = (dev) => webpackPlugin({
    dev: dev,
    transformIncludeFilter: (id) => id.endsWith('js'),
    bundles: [{
        outputFile: './styles/stylify.css',
        // Generate CSS from all js files
        files: ['./pages/**/*.js'],
    }],
    extend: {
        bundler: {
            compiler: {
                selectorsAreas: [
                    // For selecting className="selector"
                    '(?:^|\\s+)className="([^"]+)"',
                    '(?:^|\\s+)className=\'([^\']+)\'',
                    '(?:^|\\s+)className=\\{`((?:.|\n)+)`\\}'
                ]
            }
        }
    }
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

The last step, open the `pages/_app.js` and add path to `stylify.css`:

```jsx
// ...
import '../styles/stylify.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp;
```

## Styling the website
If yout copy the code bellow into the `pages/index.js` and run `yarn dev` you will get a styled `Hello World!` text:

```jsx
export default function Home() {
  return <div className="color:blue">Hello World!</div>;
}
```
Stylify watches any change in the `js` files and generates css into the `styles/stylify.css`.
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
It's a good practice to avoid hardcoded values in the selectors. [Variables](https://stylifycss.com/docs/get-started#adding-a-variable) can be defined the same way as components:

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
When we run the production build using `yarn build` + `yarn start`, the jsx markup will be mangled to this:

```jsx
export default function Home() {
  return (
    <div className="_7tcrv">
      <div className="_ro073">Hello World!</div>
    </div>
  )
}
```

The css is shortened too:
```css
:root {
    --blue: #4682b4;
    --containerWidth: 800px
}
._ro073 {color: #4682b4}
._7tcrv,._bcda8 { max-width: 800px }
._7tcrv,._m0vnad { margin: 0 auto }
```

## Configure anything you need
The examples above doesn't include everything Stylify CSS can do:
- You can map [nested files](https://stylifycss.com/docs/bundler#files-content-option) in the template
- Style [global selectors](https://stylifycss.com/docs/stylify/compiler#plainselectors)
- Define [custom screens](https://stylifycss.com/docs/stylify/compiler#screens)
- Add [own macros](https://stylifycss.com/docs/stylify/compiler#macros) like `ml:20px` for margin-left
- And a lot more

Feel free to [checkout the docs](https://stylifycss.com/docs/get-started) to learn more 💎.
