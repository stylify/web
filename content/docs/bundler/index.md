---
slug: 'bundler'
section: bundler

order: 0

navigationTitle: "@stylify/bundler"

title: "@stylify/bundler"
description: "@stylify/bundler is a package for simple CSS generating and bundling in a project."
---

Bundler is a package that provides functionality for creating CSS bundles for given files.

It is similar to Rollup.js or Webpack and it simplifies the routine of loading files, compiling them, generating CSS, creating CSS files, mangling target files and etc.

The reason why Stylify provides its own bundler instead of a Webpack loader or Rollup.js plugin is, that some developers may not want to use these loaders or can't. The Bundler also can be easily integrated into an existing project with custom bundlers. The only requirement is to have the Node.js environment available so the Stylify Bundler can be executed.

<note><template>
Bundler can be used with Webpack or Rollup.jss. You just have to integrate them. See [Webpack.js](/docs/integrations/webpack) or [Rollup.js](/docs/integrations/rollupjs) integration guide.
</template></note>

Check out [how to install the @stylify/bundler](/docs/bundler) and how to [configure it](/docs/bundler#configuration).

<img src="/images/docs/bundler/bundler.png" alt="" width="914" height="170" loading="lazy" class="border-radius:4px" />

## Installation

Bundler can be only installed via CLI like NPM or Yarn.

```
yarn add -D @stylify/bundler

npm i -D @stylify/bundler
```

## Usage

```js
import { nativePreset } from '@stylify/stylify';
import { Bundler } from '@stylify/bundler';

const bundler = new Bundler({compiler: nativePreset.compiler})

bundler.bundle([
	{
		outputFile: 'path/to/output.css',
		files: ['path/to/layout.html', 'path/to/page.vue']
	}
]);
```

### Files content option

File content option can help you easily collect files into a bundle.
This option allows you to have minimum input files, because these input files can have path to another files and masks using files content option. Thanks to that it searches for paths automatically and you don't have to change config of all depending bundler every time template or component changes. Instead you just add or remove file path in file content option and this change is automatically reflected in all bundles.

<note><template>
For more information about content options see [compiler documentation](/docs/stylify/compiler#contentoptionsprocessors).
</template></note>

<!-- <stylify-ignore> -->
```
// This option expects files paths as string
// When file path starts with /, it is an absolut path, otherwise is relative
@stylify-files
	/path/to/layout.html
	path/to/template/part.html
/@stylify-files
```
<!-- </stylify-ignore> -->

## Configuration

Bundler provides various options for configuration:

```js
import { defineConfig } from '@stylify/bundler';

const config = defineConfig({
	// Required
	// Config for the compiler
	compiler: {},

	// Optional
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
	stylusVarsDirPath: 'path/to/vars.stylus',
	onBeforeInputFileRewritten: (data) => console.log(data.filePath, data.content),
	onBeforeCssFileCreated: (data) => console.log(data.filePath, data.content),
	onBundleProcessed: (data) => console.log(data.bundleConfig, data.bundleBuildCache)
});

const bundler = new Bundler(config);

// Array of bundles, returns Promise<void>
bundler.bundle([
	{
		// Required
		// Output file will be used to store the generated CSS
		// from given files
		outputFile: string,
		// Files or files masks will be used for finding files
		// from which the CSS will be generated.
		// Internally Stylify uses https://www.npmjs.com/package/fast-glob
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
		// Will dump a cache into a json file using the same file path
		// as the outputFile have etc path/to/file.css.json
		dumpCache: false,
		// This options expects serialized compilation result. uses it to
		// The purpose of this option is to configure the CompilationResult
		// during the build.
		cache: {},
		// When you want to generate CSS only for a specific part of page or don't want to
		// break other CSS in the project. Good for components and open source plugins
		// like chats and etc.
		// This selector is used EXACTLY as you set it. So if you use space on the end,
		// the space will be used in the scope.
		scope: '#my-scope',
		// Compiler config can be bundle specific
		compiler: {},
		onBeforeInputFileRewritten: (data) => console.log(data.filePath, data.content),
		onBeforeCssFileCreated: (data) => console.log(data.filePath, data.content),
		onBundleProcessed: (data) => console.log(data.bundleConfig, data.bundleBuildCache)
	}
]);

// In case you want to build some code that must wait on the Bundler to finish bundling.
// This method can also be used when the watch mode is used.
await bundler.waitOnBundlesProcessed();
```
