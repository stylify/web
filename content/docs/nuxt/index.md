---
slug: 'nuxt'
section: nuxt

order: 0

navigationTitle: "@stylify/nuxt"

title: "@stylify/nuxt"
description: ""
---

Nuxt module provides seamless Stylify integration into the Nuxt.js v3+.

<note>
	<strong>@stylify/nuxt</strong> can be used only in Nuxt v3 and above. For Nuxt v2 checkout <nuxt-link to="/docs/nuxt-module">@stylify/nuxt-module</nuxt-link>.
</note>

## Installation

Nuxt module can be installed only via CLI like NPM or Yarn:

```
yarn add @stylify/nuxt
npm i @stylify/nuxt
```

## Usage

Add a buildModule into the `nuxt.config.js`:
```js
buildModules: [
	'@stylify/nuxt'
]
```

## Configuration

If you want to configure the Stylify, you can use configuration section directly in `nuxt.config.js` or create a file `stylify.config.js` next to the `nuxt.config.js`. In both cases you use the same configuration scheme shown bellow.

The code part bellow should be used inside the `nuxt.config.js` or inside the `stylify.config.js`:

```js
import { defineConfig } from '@stylify/nuxt';

const stylifyConfig = defineConfig({
	dev: false,
	configPath: 'stylify.config.js',
	// Compiler config info https://stylifycss.com/docs/stylify/compiler#configuration
	compiler: {},
	// When vars dir paths are set, Stylify will export variables into
	// a file according to given path
	cssVarsDirPath: null,
	sassVarsDirPath: null,
	lessVarsDirPath: null,
	stylusVarsDirPath: null,
	// Files masks are used by @stylify/bundler
	// Bundler uses these masks to find files from which he should generate css
	// When you add a mask and you want to mangleSelectors, you also need to add appropriate loader. See bellow
	filesMasks: []
});
```

Example for nuxt.config.js
```js
export default {
	stylify: stylifyConfig
}
```

Example for stylify.config.js
```js
export default stylifyConfig;
```
