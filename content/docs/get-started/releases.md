---
section: get-started

order: 4

navigationTitle: "Releases & Updating"

title: "Stylify Releases"
description: "Stylify releases, changelog and how to update from one version to another."
---

Stylify releases, changelog and how to update from one version to another.

## Actual versions

| Project               | Status                                                       | Description                                                                          |
| --------------------- | ------------------------------------------------------------ | -------------------------------------------------------------------------------------|
| [astro]               | [![astro-status]][astro-package]                             | Integration for Astro.build                                                              |
| [bundler]             | [![bundler-status]][bundler-package]                         | A flexible CSS bundler.                                                              |
| [nuxt]                | [![nuxt-status]][nuxt-package]                               | Module for [Nuxt.js Framework](https://nuxtjs.org/) v3+.                             |
| [nuxt-module]         | [![nuxt-module-status]][nuxt-module-package]                 | Module for [Nuxt.js Framework](https://nuxtjs.org/) v2 < v3.                         |
| [stylify]             | [![stylify-status]][stylify-package]                         | Core package. Generates CSS and minifies selectors.                                  |
| [unplugin]            | [![unplugin-status]][unplugin-package]                       | Universal plugin for Vite, Webpack, Rollup and Esbuildn.                             |


[astro]: https://github.com/stylify/packages/tree/master/packages/astro
[astro-status]: https://img.shields.io/npm/v/@stylify/astro?color=%2301befe&label=Version&style=for-the-badge
[astro-package]: https://npmjs.com/package/@stylify/astro

[bundler]: https://github.com/stylify/packages/tree/master/packages/bundler
[bundler-status]: https://img.shields.io/npm/v/@stylify/bundler?color=%2301befe&label=Version&style=for-the-badge
[bundler-package]: https://npmjs.com/package/@stylify/bundler

[nuxt]: https://github.com/stylify/packages/tree/master/packages/nuxt
[nuxt-status]: https://img.shields.io/npm/v/@stylify/nuxt?color=%2301befe&label=Version&style=for-the-badge
[nuxt-package]: https://npmjs.com/package/@stylify/nuxt

[nuxt-module]: https://github.com/stylify/packages/tree/master/packages/nuxt-module
[nuxt-module-status]: https://img.shields.io/npm/v/@stylify/nuxt-module?color=%2301befe&label=Version&style=for-the-badge
[nuxt-module-package]: https://npmjs.com/package/@stylify/nuxt-module

[stylify]: https://github.com/stylify/packages/tree/master/packages/stylify
[stylify-status]: https://img.shields.io/npm/v/@stylify/stylify?color=%2301befe&label=Version&style=for-the-badge
[stylify-package]: https://npmjs.com/package/@stylify/stylify

[unplugin]: https://github.com/stylify/packages/tree/master/packages/unplugin
[unplugin-status]: https://img.shields.io/npm/v/@stylify/unplugin?color=%2301befe&label=Version&style=for-the-badge
[unplugin-package]: https://npmjs.com/package/@stylify/unplugin

## Upgrading from 0.4 to 0.5
- Release: [v0.5.0](https://github.com/stylify/packages/releases/tag/v0.5.0)

### @stylify/stylify
- Macros callbacks now accepts an object with arguments instead of a chain of arguments. The `this` object is no longer modified.
```js
// v0.4.0
const macros = {
	'macro': (macroMatch, selectorProperties) => { const { helpers, variables, dev } = this;}
};

// v0.5.0
const macros = {
	'macro':({ macroMatch, selectorProperties, helpers, variables, dev }) => {}
};
```
- The rewrite selectors method now optionaly accepts an object of arguments instead of 2 arguments
```js
// If options passed to rewrite selectors are string, then only one argument is expected
compiler.rewriteSelectors(code)

// If two or more are passed, it needs to be an object
compiler.rewriteSelectors({
	content: '',
	// Optional
	rewriteOnlyInSelectorsAreas: true,
	matchSelectorsWithPrefix: false
})
```
- The argument `rewriteInAreas` in rewriteSelectors method was renamed to `rewriteInSelectorsAreas`.
- Rename `plainSelectors` in config and in the content options to `customSelectors`
- Each `customSelector` and `component` now accepts only a string as value.
- Custom selectors can be now generated directly from template. See [docs](/docs/stylify/compiler#customselectors).
- In case you used a selectors chain for components, rewrite it to the new SCSS-like syntax.
```js
// v0.4.0
const components = {
	'btn--big': {
		selectors: 'color:blue',
		selectorsChain: 'btn'
	}
};

// v0.5.0
const components = {
	'btn--big': `
		&.btn { color:blue }
	`
};
```
- Hooks are now used like bellow. Checkout [Stylify hooks](/docs/stylify/compiler#hooks).
```js
import { hooks } from '@stylify/stylify';

hooks.addListener('', (options) => {});
```
- For Runtime

```js
const runtime = new Runtime();
runtime.hooks.addListener('', (options) => {});
```

### @stylify/bundler
- Bundler hooks are now used like bellow. Bundler hooks extends the default Stylify hooks. Checkout [Bundler hooks](/docs/bundler#hooks).
```js
import { hooks } from '@stylify/bundler';

hooks.addListener('', (options) => {});
```
- Now only the `await bundler.waitOnBundlesProcessed()` can be used to wait for bundler to finish bundling. The await `bundler.bundle()` is not neccessary.

### @stylify/bundler
- Unplugin exports are now `stylifyVite`, `stylifyRollup`, `stylifyWebpack`, `stylifyEsbuild`

## Upgrading from 0.3 to 0.4
- Release: [v0.4.0](https://github.com/stylify/packages/releases/tag/v0.4.0)
- Use only one underscore `_` (for a space character) => `border:1px_solid_blue`
- Integration was renamed from `stylifyIntegration` to `stylify`.
- No empty object nor configuration have to be passed in the integration initialization

## Upgrading from 0.2 to 0.3
- Release: [v0.3.0](https://github.com/stylify/packages/releases/tag/v0.3.0)
- You can remove `selectorsAreas` for React, Vue, Angular, Nette, Lit and Alpine from configuration. They are now by default in the compiler config.
- Move everything from `extend` object to the root:
```js
const config = {
	// All configuration options from extend object bellow move here.
	// The compiler is just example.
	compiler: {},
	// Extend keyword was removed
	extend: {
		compiler: {}
	}
}
```
- Stylify Runtime now has only `Stylify.configure()` method. `Stylify.runtime.configure()` was removed.

## Upgrading from 0.1 to 0.2
- Release: [v0.2.1](https://github.com/stylify/packages/releases/tag/v0.2.1)
- Profile have been removed
- Autoprefixer is not neccessary to be included within your bundler config. It is now by default in bundler.
- Selecotors can now start only by alphanumeric character.
