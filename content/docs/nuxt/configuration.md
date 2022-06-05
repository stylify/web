---
section: nuxt

order: 2

navigationTitle: "Configuration"

title: "Configuration"
description: "Learn how to configure the @stylify/nuxt."
---

<note>
	<strong>@stylify/nuxt</strong> can be used only in Nuxt v3 and above. For Nuxt v2 checkout <nuxt-link to="/docs/nuxt-module">@stylify/nuxt-module</nuxt-link>.
</note>

By default @stylify/nuxt uses [Native preset](/docs/stylify/native-preset). You can change the configuration however you need.

If you want to configure the Stylify, you can use configuration section directly in `nuxt.config.js` or create a file `stylify.config.js` next to the nuxt.config.js. In both cases you use the same configuration scheme shown bellow.

The code part bellow should be used inside the `nuxt.config.js` or inside the `stylify.config.js`:

```js
import { defineConfig } from '@stylify/nuxt';

const stylifyConfig = defineConfig({
	dev: false,
	configPath: 'stylify.config.js',
	// Compiler config info https://stylify.dev/docs/stylify/compiler
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
	// When options above are used inside the extend field,
	// they extend existing configuration instead of overriding it
	extend: {
		// ...
	}
});
```

Example for nuxt.config.js
```js
{
	// ...
	stylify: stylifyConfig
	// ...
}
```

Example for stylify.config.js
```js
export default stylifyConfig;
```
