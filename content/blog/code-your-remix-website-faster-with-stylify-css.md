---
title: 'Code your Remix website faster with Stylify CSS'
image: '/images/blog/stylify-remix/header.jpg'
ogImage: '/images/blog/stylify-remix/og-image.jpg'
author: 'Vladimír Macháček'
annotation: 'Style your Remix app quickly and easily with Stylify CSS. Split CSS for large pages, define CSS Components and Variables and get extremely small CSS.'
createdAt: 'December 29, 2022'
---

## Introduction
<nuxt-link to="/">Stylify</nuxt-link> is a library that uses CSS-like selectors to generate optimized utility-first CSS based on what you write.

- ✅ CSS-like selectors
- ✅ No framework to study
- ✅ Less time spent in docs
- ✅ Mangled & Extremely small CSS
- ✅ No CSS purge needed
- ✅ Components, Variables, Custom selectors
- ✅ It can generate multiple CSS bundles

Also we have a page about <nuxt-link to="/docs/get-started/why-stylify-css">what problems Stylify CSS solves and why you should give it a try!</nuxt-link>

## Installation
Because Remix doesn't have any plugins support yet (2022), we need to use <nuxt-link to="/docs/bundler">Stylify CSS Bundler</nuxt-link> directly. First, install the [@stylify/bundler](/docs/bundler) package using NPM or Yarn:

```
npm i -D @stylify/bundler
yarn add -D @stylify/bundler
```

Also for the watch mode, we need to run two parallel tasks. This can be solved using concurrently:
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
	}
});

// This bundles all CSS into one file
// You can configure the Bundler to bundle CSS for each page separately
// See bundler link below
bundler.bundle([
  { files: ['./app/**/*.tsx'], outputFile: './app/styles/stylify.css' },
]);
```

When the bundler is configured, add the path to Stylify CSS in the `app/root.tsx`:

```jsx
import styles from '~/styles/stylify.css';

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}
```

And the last step is to add scripts into the `package.json`:

```json
"scripts": {
	"build": "yarn stylify:build & cross-env NODE_ENV=production remix build",
    "dev": "concurrently 'yarn stylify:dev' 'cross-env NODE_ENV=development remix dev'",
	"stylify:build": "node stylify.js",
    "stylify:dev": "node stylify.js --w"
}
```

## Styling first page
If we now edit the `app/routes/index.tsx` and run the `yarn dev` command, the CSS will be generated:

```js
export default function Index() {
	return (
		<h1 className="font-size:48px font-family:arial color:steelblue">
			Stylify + Remix = 🚀
		</h1>
	);
}
```

## Defining Components and Variables
We can also define <nuxt-link to="/docs/get-started#defining-a-component">Components</nuxt-link> and <nuxt-link to="/docs/get-started#adding-a-variable">Variables</nuxt-link>. Within a file, where they are used or in a global config.
In the code below, we use the configuration within a file, where the component is used.

```js
/*
stylify-variables
	blue: 'steelblue'
/stylify-variables

stylify-components
	title: 'font-size:48px font-family:arial color:$blue'
stylify-components
*/
export default function Index() {
	return (
		<h1 className="title">
			Stylify + Remix = 🚀
		</h1>
	);
}
```

## Production CSS and JSX output
The JSX and CSS can be mangled in production (configured by the `compiler.mangleSelectors`). If so, the output is even smaller and looks similar to the one below.

For the first example with utilities
```js
export default function Index() {
	return (
		// For utilities from first example
		<h1 className="a b c">
			Stylify + Remix = 🚀
		</h1>
	);
}
```

```CSS
.a { font-size:48px }
.b { font-family:arial }
.c { color:steelblue }
```

## Stackblitz Playground
Go ahead and try [Stylify CSS + Remix on Stackblitz](https://stackblitz.com/edit/stylify-remix-example?file=package.json,app%2Froutes%2Findex.tsx).

You can customize the build above however you want.

<where-to-next package="bundler" />
