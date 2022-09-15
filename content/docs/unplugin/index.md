---
slug: 'unplugin'
section: unplugin

order: 0

navigationTitle: "@stylify/unplugin"

title: "@stylify/unplugin"
description: ""
---

Unplugin is an universal plugin for Webpack, Vite.js and Rollup.js and Esbuild.<br>
Under the hood it uses [unplugin](https://github.com/unjs/unplugin).

## Installation

Unplugin can be installed only via CLI like NPM or Yarn:
```
yarn add @stylify/unplugin
npm i @stylify/unplugin
```

## Usage

Unplugin can be used within Webpack, Vite.js and Rollup.js.
Each tool has it's own documentation page:
- [Webpack](/docs/integrations/webpack)
- [Vite.js](/docs/integrations/vitejs)
- [Rollup.js](/docs/integrations/rollupjs)

## Configuration
The configuration for unplugin is always the same for each bundler

```js
import { unplugin, vitePlugin, rollupPlugin, defineConfig, webpackPlugin } from '@stylify/unplugin';

const config = defineConfig({
	// --- Required
	// See https://stylifycss.com/docs/bundler#configuration
	// Part Array of bundles
	bundles: [],

	// --- Optional
	// true | false
	// Default is null. If null value is detected
	// the plugin tries to detect the environment
	dev: null,
	// https://stylifycss.com/docs/stylify/compiler#configuration
	compiler: {}
	// See https://stylifycss.com/docs/bundler#configuration
	bundler: {},
	// Id is a file name
	// Return true, if the file type or name should be processed
	// Example is with html suffix
	// By default stylify checks if the file is not in node_modules
	// and also checks for a various file types
	// listed here https://github.com/stylify/packages/blob/master/packages/unplugin/src/index.ts
	transformIncludeFilter: (id) => id.endsWith('html')
});

let webpackPlugin = webpackPlugin(config);
let vitePlugin = vitePlugin(config);
let rollupPlugin = rollupPlugin(config);
```

<where-to-next package="null" />

