---
title: 'Code your Angular website faster with Stylify CSS'
image: '/images/blog/stylify-angular/header.jpg'
ogImage: '/images/blog/stylify-angular/og-image.jpg'
author: 'Vladimír Macháček'
annotation: 'Code your Angular website faster with Stylify CSS'
createdAt: 'November 28, 2022'
---

Style your Angular app quickly and easily with [Stylify CSS](https://stylifycss.com). Split CSS for large pages or create one bundle for a whole app and get extremely small CSS.

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

First install the [@stylify/bundler](/docs/bundler) package using NPM or Yarn:

```
npm i -D @stylify/bundler
yarn add -D @stylify/bundler
```

Also for the watch mode, we need to run two paralel tasks. This can be solved using concurrently:
```
yarn add -D concurrently
npm i concurrently
```

Next, create a file, for example `stylify.js`:

```js
const { Bundler } = require('@stylify/bundler');

const isDev = process.argv[process.argv.length - 1] === '--w';
const bundler = new Bundler({
  watchFiles: isDev,
  // Optional
  compiler: {
    mangleSelectors: !isDev,
    // https://stylifycss.com/docs/stylify/compiler#variables
    variables: {},
    // https://stylifycss.com/docs/stylify/compiler#macros
    macros: {},
    // https://stylifycss.com/docs/stylify/compiler#components
    components: {},
    // ...
  },
});

// This bundles all CSS into one file
// You can configure the Bundler to bundle CSS for each page separately
// See bundler link bellow
bundler.bundle([
	{
		files: ['./src/**/*.html', './src/**/*.ts'],
		outputFile: './src/styles.css',
	},

	// You can also split css for each component
	// You can map files within the components using content comment option
	// https://stylifycss.com/docs/bundler#files-content-option
	// Stylify takes that option and searches for defined files. If defined file
	// also has an option, id check also those files and so long.
	// This way it maps all files and all dependencies.
	/*
	{
		files: ['./src/app/app.component.*'],
		outputFile: './src/app/app.component.css',
	},
	*/
]);

```

If you don't use splitting and everything will not bundled into the `styles.css`, then don't forget to add paths to css files.

The last step is to add scripts into the `package.json`:

```json
"scripts": {
	"dev": "concurrently 'yarn stylify.dev' 'ng serve -c development'",
	"prod": "yarn stylify.build & ng serve",
	"stylify.build": "node stylify.js",
	"stylify.dev": "node stylify.js --w"
}
```

In production, you will get optimized CSS and mangled html:
```html
<h1 class="font-size:24px color:#dd0031 font-family:arial">
Hello World!
</h1>
```

```css
.a{font-size:24px}
.b{color:#dd0031}
.c{font-family:arial}
```

## Stackblitz Playground
Go ahead and try [Stylify CSS + Angular on Stackblitz](https://stackblitz.com/edit/stylifycss-angular-example?file=src%2Fapp%2Fapp.component.html).

## Configuration
The examples above doesn't include everything Stylify can do:
- Define [components](https://stylifycss.com/docs/stylify/compiler#components)
- Add [custom selectors](https://stylifycss.com/docs/stylify/compiler#customselectors)
- Configure [own macros](https://stylifycss.com/docs/stylify/compiler#macros) like `ml:20px` for margin-left
- Define [custom screens](https://stylifycss.com/docs/stylify/compiler#screens)
- You can map [nested files](https://stylifycss.com/docs/bundler#files-content-option) in the template
- And a lot more

Feel free to [checkout the docs](https://stylifycss.com/docs/get-started) to learn more 💎.
