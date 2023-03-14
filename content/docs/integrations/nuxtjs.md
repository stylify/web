---
section: integrations

order: 1

navigationTitle: "Nuxt.js"
navigationIconPath: '/images/brands/nuxtjs-icon.svg'
image: '/integrations/nuxtjs/header.jpg'
ogImage: '/integrations/nuxtjs/og-image.jpg'

title: Using Stylify CSS in Nuxt.js
description: "Learn how to use the Stylify CSS with the Nuxt.js. Code your Nuxt.js website faster with Stylify CSS."
howToSchemaTitle: 'How to use Stylify CSS in Nuxt.js.'
howToSchemaSteps: [
	{
		"name": "Stylify CSS installatiom",
		"text": "Install @stylify/nuxt (for Nuxt v3) or @stylify/nuxt-module (for Nuxt v2) package using CLI like YARN or NPM.",
		"url": "#installation",
	},
	{
		"name": "Usage",
		"text": "Add Stylify CSS build module into nuxt.config.js.",
		"url": "#usage",
	},
	{
		"name": "Configuration",
		"text": "Extend Stylify CSS configuration however you need. Configure variables, components, custom selectors and a lot more.",
		"url": "#configuration",
	},
]
---

Nuxt.js is an open source framework that uses Vue.js for making web development simple and powerful.

The integration uses Stylify CSS packages for Nuxt 2 and Nuxt 3. Check out the guides below.

## How to integrate Stylify CSS into the Nuxt.js v3+

<stack-blitz-link link="stylify-nuxt3"></stack-blitz-link>

First install the package using CLI:
```
npm i -D @stylify/nuxt
yarn add -D @stylify/nuxt
```

Than add a build module into the `nuxt.config.js` build modules section:
```js
buildModules: [
	'@stylify/nuxt'
]
```

Now you can start using Stylify CSS with Nuxt.js.

<note>
For some unknown reason, the CSS is not reloaded when an error is triggered within the Nuxt (syntax, duplicated attributes). If that happens, just hit save within the nuxt config file or restart the dev server.
</note>

## How to integrate Stylify CSS into the Nuxt.js v2+ < v3

<stack-blitz-link link="stylify-nuxtjs-template"></stack-blitz-link>

First install the package using CLI:
```
npm i -D @stylify/nuxt-module
yarn add -D @stylify/nuxt-module
```

Than add a build module into the `nuxt.config.js` build modules section:
```js
buildModules: [
	'@stylify/nuxt-module'
]
```

Now you can start using Stylify CSS with Nuxt.js.

## Configuration
There is a lot of options you can configure:
- Nuxt v3: [@stylify/nuxt](/docs/nuxt)
- Nuxt v2: [@stylify/nuxt-module](/docs/nuxt-module)

### Stylelint
In case you use Stylelint, you may want to add the generated `stylify.css` and possible files with variables into the `.stylelintignore` file.

```
assets/stylify.css
assets/scss/variables/stylify-variables.scss
```

If the Stylelint complains about a pattern that doesn't match any files, add the [--allow-empty-input](https://stylelint.io/user-guide/usage/cli/#--allow-empty-input---aei) rule into the package.json file to the `lint:style` and the `stylelint` config into the `nuxt.config.js`:

```js
stylelint: {
	allowEmptyInput: true
}
```

### Build config
The build may fail because it is not configured to use modern ES6 features.
You can fix it by setting the transpile option in the `nuxt.config.js`:

```js
build: {
	transpile: [
		'@stylify/stylify/lib/index.cjs',
		'@stylify/stylify/esm/index.mjs'
	]
}
```

<where-to-next />
