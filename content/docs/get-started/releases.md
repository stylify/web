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

## Upgrading from 3.0 to 4.0
- Release: [v0.4.0](https://github.com/stylify/packages/releases/tag/v0.4.0)
- Use only one underscore `_` (for a space character) => `border:1px_solid_blue`
- Integration was renamed from `stylifyIntegration` to `stylify`.
- No empty object nor configuration have to be passed in the integration initialization

## Upgrading from 2.0 to 3.0
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

## Upgrading from 0.1 to 2.0
- Release: [v0.2.1](https://github.com/stylify/packages/releases/tag/v0.2.1)
- Profile have been removed
- Autoprefixer is not neccessary to be included within your bundler config. It is now by default in bundler.
- Selecotors can now start only by alphanumeric character.
