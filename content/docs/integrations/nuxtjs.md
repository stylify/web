---
section: integrations

order: 1

navigationTitle: "Nuxt.js"
navigationIconPath: '/images/brands/nuxtjs-icon.svg'

title: Using Stylify CSS in Nuxt.js
description: "Learn how to integrate the Stylify utilify-first CSS generator into the the Nuxt.js."
---

For easier integration into the Nuxt.js, there is a package named [@stylify/nuxt-module](/docs/nuxt-module).

It is focused on seamless integration and also provides an extension for profiler that will show you what is your configuration or what the size of your CSS is.

<stack-blitz-link link="https://stackblitz.com/edit/stylify-nuxtjs-template?devtoolsheight=33&file=pages/index.vue"></stack-blitz-link>

<note><template>
Integration example for the Nuxt.js can be found in <a href="https://github.com/stylify/integrations-examples/tree/master/nuxtjs" target="_blank" rel="noopener">integrations examples repository</a>.
</template></note>

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
- Nuxt v3+ [@stylify/nuxt](/docs/nuxt)
- Nuxt v2 [@stylify/nuxt-module](/docs/nuxt-module)

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

<where-to-next />
