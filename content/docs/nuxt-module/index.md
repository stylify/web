---
slug: 'nuxt-module'
section: nuxt-module

order: 0

navigationTitle: "@stylify/nuxt-module"

title: "@stylify/nuxt-module"
description: "@stylify/nuxt-module provides provides seamless Stylify integration into the Nuxt.js."
---


Nuxt module provides seamless Stylify integration into the Nuxt.js v2+ < v3.

<note>
	<strong>@stylify/nuxt-module</strong> can be used only in Nuxt v2. For Nuxt v3 and above checkout <nuxt-link to="/docs/nuxt">@stylify/nuxt</nuxt-link>.
</note>

<docs-section>
<template #description>

<h2 class="margin-top:0">Installation</h2>

Nuxt module can be installed only via CLI like NPM or Yarn:

</template>
<template #code>

```bash
yarn add -D @stylify/nuxt-module
npm i -D @stylify/nuxt-module
```

</template>
</docs-section>

<docs-section>
<template #description>

<h2 class="margin-top:0">Usage</h2>

Add a buildModule into the `nuxt.config.js`:

</template>
<template #code>

```js
buildModules: [
	'@stylify/nuxt-module'
]
```

</template>
</docs-section>

## Configuration

If you want to configure the Stylify, you can use configuration section directly in `nuxt.config.js` or create a file `stylify.config.js` next to the nuxt.config.js. In both cases you use the same configuration scheme shown bellow.

The code part bellow should be used inside the `nuxt.config.js` or inside the `stylify.config.js`:
```js
import { defineConfig } from '@stylify/nuxt-module';

const stylifyConfig = defineConfig({
	dev: false,
	configPath: 'stylify.config.js',
	// Compiler config info https://stylifycss.com/docs/stylify/compiler
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
	filesMasks: [],
	// Loaders are used during webpack build when compiler.mangleSelectors are set to true and when nuxt runs production build
	// When a file is loaded by webpack according to defined loader, it's content
	// will be mangled by Stylify Compiler.
	// Loaders have the following structure
	// {
	//		test: /\.vue$/i,
	//		include: ['path/to/some/dir']
	//	},
	loaders: []
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
