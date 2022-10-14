---
section: integrations

order: 1

navigationTitle: "Nuxt.js"
navigationIconPath: '/images/brands/nuxtjs-icon.svg'

title: Using Stylify CSS in Nuxt.js
description: "Learn how to use the Stylify CSS with the Nuxt.js."
---

The integration uses Stylify packages for Nuxt 2 and Nuxt 3. Checkout the guides bellow.

<stack-blitz-link link="stylify-nuxtjs-template"></stack-blitz-link>

## How to integrate Stylify into the Nuxt.js v3+

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

Now you can start using Stylify with Nuxt.js.

## How to integrate Stylify into the Nuxt.js v2+ < v3

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

Now you can start using Stylify with Nuxt.js.

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
It is possible that the build will fail because it is not configured to use modern ES6 features.
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
