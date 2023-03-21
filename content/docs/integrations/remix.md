---
section: integrations

order: 1

navigationTitle: "Remix"
navigationIconPath: '/images/brands/remix.svg'
image: '/integrations/remix/header.jpg'
ogImage: '/integrations/remix/og-image.jpg'

title: Using Stylify CSS in Remix
description: "Learn how to integrate the Stylify CSS into the Remix. Code your Remix website faster with Stylify CSS."
howToSchemaTitle: 'How to use Stylify CSS in Remix.'
howToSchemaSteps: [
	{
		"name": "Stylify CSS installatiom",
		"text": "Install @stylify/bundler package using CLI like YARN or NPM.",
		"url": "#installation",
	},
	{
		"name": "Usage",
		"text": "Next, create a file, for example stylify.js.",
		"url": "#usage",
	},
	{
		"name": "Configuration",
		"text": "Extend Stylify CSS configuration however you need. Configure variables, components, custom selectors and a lot more.",
		"url": "#configuration",
	},
]
---

Remix is a full stack web framework that lets you focus on the user interface and work back through web standards to deliver a fast, slick, and resilient user experience.

Stylify can be integrated into the Remix using Bundler.

<stack-blitz-link link="stylify-remix-example"></stack-blitz-link>

## How to integrate the Stylify CSS into the Remix

First, install the [@stylify/bundler](/docs/bundler) package using NPM or Yarn:

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
	// Compiler config info https://stylifycss.com/docs/stylify/compiler#configuration
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

Now when you run `yarn dev`, the CSS file will be generated. In production, the selectors will be mangled.

You can customize the build above however you want.

<where-to-next package="bundler" />
