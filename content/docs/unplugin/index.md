---
slug: 'unplugin'
section: unplugin

order: 0

navigationTitle: "@stylify/unplugin"

title: "@stylify/unplugin"
description: ""
---

Unplugin is a universal plugin for Webpack, Vite.js and Rollup.js and ESbuild.<br>
Under the hood it uses [unplugin](https://github.com/unjs/unplugin).

## Installation

Unplugin can be installed only via CLI like NPM or Yarn:
```
yarn add @stylify/unplugin
npm i @stylify/unplugin
```

## Usage

Unplugin can be used within Webpack, Vite.js and Rollup.js.
Each tool has its own documentation page:
- [Webpack](/docs/integrations/webpack)
- [Vite.js](/docs/integrations/vitejs)
- [Rollup.js](/docs/integrations/rollupjs)

## Configuration
The configuration for Unplugin is always the same for each bundler

```js
import {
	unplugin, defineConfig
	stylifyVite, stylifyRollup, stylifyWebpack, stylifyEsbuild
} from '@stylify/unplugin';

const config = defineConfig({
	// --- Required
	// See https://stylifycss.com/docs/bundler#configuration
	// Part Array of bundles
	bundles: [],

	// --- Optional
	// Path to config file. If this option is not specified
	// unplugin will try to find the config in process.cwd() dir
	// which is mostly the root of the project.
	// By default it searches for stylify.config.(js|mjs|cjs).
	configFile: '',
	// true | false
	// Default is null. If null value is detected
	// the plugin tries to detect the environment
	dev: null,
	// https://stylifycss.com/docs/stylify/compiler#configuration
	compiler: {},
	// See https://stylifycss.com/docs/bundler#configuration
	bundler: {},
	// Id is a file name
	// Return true, if the file type or name should be processed
	// Example is with HTML suffix
	// By default Stylify CSS checks if the file is not in node_modules
	// and also checks for a various file types
	// listed here https://github.com/stylify/packages/blob/master/packages/unplugin/src/index.ts
	transformIncludeFilter: (id) => id.endsWith('html')
});

let webpackPlugin = stylifyWebpack(config);
let vitePlugin = stylifyVite(config);
let rollupPlugin = stylifyRollup(config);
let esbuildPlugin = stylifyEsbuild(config);
```

## External Config File
If you want to move the configuration outside of the project config, use the `configFile` option mentioned above. By default, unplugin searches for `stylify.config.(js|mjs|cjs)` files. If any of them is found, it is processed.

Example of config exports is shown below. Define config method is optional. It's just a helper that provides better Typescript experience.

Common JS (CJS):
```js
const { defineConfig } = require('@stylify/unplugin');

// With defineConfig
module.exports = defineConfig(() => ({
	bundles: [
		{ outputFile: './index.css', files: ['./index.html'] }
	]
});

// Without defineConfig
module.exports = {
	// ...
}
```

Modules (ESM):
```js
import { defineConfig } from '@stylify/unplugin';

// With defineConfig
export default defineConfig(() => ({
	bundles: [
		{ outputFile: './index.css', files: ['./index.html'] }
	]
});

// Without defineConfig
export default {
	// ...
}
```

<where-to-next package="null" />
