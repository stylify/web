---
slug: 'bundler'
section: bundler

order: 0

navigationTitle: "@stylify/bundler"

title: "@stylify/bundler"
description: "@stylify/bundler is a package for simple CSS generating and bundling in a project."
---

Bundler is a package that allows you to generate CSS files for your project. Bundler is internally used within other Stylify CSS packages.

<img src="/images/docs/bundler/bundler.png" alt="" width="914" height="170" loading="lazy" class="border-radius:4px" />

## Installation

Bundler can be only installed via CLI like NPM or Yarn:

```
yarn add -D @stylify/bundler
npm i -D @stylify/bundler
```

## Usage

```js
import { Bundler } from '@stylify/bundler';

const bundler = new Bundler();

bundler.bundle([
	{
		outputFile: 'path/to/output.css',
		files: ['path/to/layout.html', 'path/to/page.vue']
	},
	{ outputFile: 'path/to/another.css', files: ['path/**/*.html'] }
]);
```

## Configuration

Bundler provides various options for configuration:

```js
import { defineConfig } from '@stylify/bundler';

const config = defineConfig({
	// Bundles are optional.
	// But if they are not passed during bundle() method call
	// they need to be passed here. Otherwise no bundles will be generated
	bundles: [],

	// Optional options are optional
	// https://stylifycss.com/docs/stylify/compiler#configuration
	compiler: {},
	// Path to a config file. When in a watch mode
	// nuxt watches the config file for changes
	configFile: 'path/to/config.js',
	// If verbose is enabled, the build info will be shown
	verbose: true,
	// The build is sync by default
	sync: true,
	// If set to true, after the build, bundler will start
	// watching files for a change
	watchFiles: false,
	// Bundles can be defined directly when the instance is created
	// The bundle configuration is shown bellow in bundler.bundle() method
	// The bundle() method must be called to initiate the bundling process
	bundles: [],
	// If file path is provided in the following options
	// variables from the Compiler config will be exported into those files
	// so you can reuse them inside css, scss and etc.
	// -----------
	// CSS variables are by default injected into the generated CSS.
	// You can change this behavior by configuring compiler
	// See https://stylifycss.com/docs/stylify/compiler#variables
	cssVarsDirPath: 'path/to/vars.css',
	sassVarsDirPath: 'path/to/vars.sass',
	lessVarsDirPath: 'path/to/vars.less',
	stylusVarsDirPath: 'path/to/vars.stylus'
});

const bundler = new Bundler(config);

// Array of bundles, returns Promise<void>
bundler.bundle([
	{
		// Required
		// Output file will be used to store the generated CSS
		// from given files
		outputFile: '/path/to/output.css',
		// Files or files masks will be used for finding files
		// from which the CSS will be generated.
		// Internally Stylify CSS uses https://npmjs.com/package/fast-glob
		// for finding files.
		files: [
			'path/to/file.html',
			'path/files/*/*.html',
			'path/to/files/**/*.html'
		],

		// Optional
		// This id can be used to find bundle by id
		id: 'my-bundle-id',
		// When true, selectors in given files will be mangled
		// If this option is set to true and rewriteSelectorsInFiles is false
		// it will only mangle css selectors
		mangleSelectors: false,
		// Can disable rewriting selectors inside a file when you want to just
		// mangle css but not files
		rewriteSelectorsInFiles: false,
		// When you want to generate CSS only for a specific part of page or don't want to
		// break other CSS in the project. Good for components and open source plugins
		// like chats and etc.
		// This selector is used EXACTLY as you set it. So if you use space on the end,
		// the space will be used in the scope.
		scope: '#my-scope',
		// Compiler config can be bundle specific
		// https://stylifycss.com/docs/stylify/compiler#configuration
		compiler: {}
	}
]);

// In case you need to wait for the CSS to be generated, call this method.
await bundler.waitOnBundlesProcessed();
```
</template>
</docs-section>


## Files content option
File [content options](/docs/stylify/compiler#contentoptionsprocessors) allows you to configure options directly in a file. Apart from default content options, you can use the `files` option.

<docs-section>
<template #description>

This option expects files paths as string When file path starts with `/`, it is an absolut path, otherwise is relative.

</template>
<template #code>

```
stylify-files
	/path/to/layout.html
	path/to/template/part.html
/stylify-files
```

</template>
</docs-section>

## Hooks

Bundler extends [default hooks](/docs/stylify/compiler#hooks) and adds a few more.

<docs-section>
<template #description>

- **bundler:beforeInputFileRewritten**: Before input file is rewritten
- **bundler:beforeCssFileCreated**: Before a CSS file is created
- **bundler:bundleProcessed**: When bundle is processed
- **bundler:fileToProcessOpened**: Before file is processed

</template>
<template #code>

```js
import { hooks } from '@stylify/bundler';

hooks.addListener('hoook:name', (options) => {});
```

</template>
</docs-section>
