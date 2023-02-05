---
section: integrations

order: 1

navigationTitle: "Next.js"
navigationIconPath: '/images/brands/nextjs.svg'
image: '/integrations/nextjs/header.jpg'
ogImage: '/integrations/nextjs/og-image.jpg'

title: Using Stylify CSS in Next.js
description: "Learn how to integrate the Stylify CSS into the the Next.js. Code your Next.js website faster with Stylify CSS."
howToSchemaTitle: 'How to use Stylify CSS in Next.js.'
howToSchemaSteps: [
	{
		"name": "Installation",
		"text": "Install @stylify/unplugin package using CLI like YARN or NPM.",
		"url": "#installation",
	},
	{
		"name": "Usage",
		"text": "Add Stylify CSS build module into next.config.js.",
		"url": "#usage",
	},
	{
		"name": "Configuration",
		"text": "Extend Stylify CSS configuration however you need. Configure variables, components, custom selectors and a lot more.",
		"url": "#configuration",
	},
]
---

Next.js offers you to create production grade React applications that scale.

Stylify can be easily integrated into the Next.js using @stylify/unplugin.

<stack-blitz-link link="stylify-nextjs-template"></stack-blitz-link>

## How to integrate the Stylify CSS into the Next.js

First install the [@stylify/bundler](/docs/unplugin) package using NPM or Yarn:

```
npm i -D @stylify/unplugin
yarn add -D @stylify/unplugin
```

Next add a configuration into the `next.config.js`:

```js
const { stylifyWebpack } = require('@stylify/unplugin');

const stylifyPlugin = (dev) => stylifyWebpack({
	dev: dev,
	bundles: [{ outputFile: './styles/stylify.css', files: ['./pages/**/*.js'] }],
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

module.exports = {
  reactStrictMode: true,
  webpack: (config, { dev }) => {
    config.plugins.push(stylifyPlugin(dev));
    return config;
  }
}
```

And the last step is to add the `stylify.css` into the `_app.js`:

```js
import '../styles/globals.css';
import '../styles/stylify.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp;
```

Now you can use the Next.js commands to build your assets. In production, it will mangle selectors.

<where-to-next />
