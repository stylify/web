---
section: bundler

order: 2

navigationTitle: "Configuration"

title: "Configuration"
description: "Learn how to configure @stylify/bundler."
---

Bundler provides various options for configuration:

```js
const config = {
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
	// If file path is provided in the following options
	// variables from the Compiler config will be exported into those files
	// so you can reuse them inside css, scss and etc.
	// -----------
	// CSS variables are by default injected into the generated CSS.
	// You can change this behavior by configuring compiler
	// See https://stylify.dev/docs/stylify/compiler#variables
	cssVarsDirPath: 'path/to/vars.css',
	sassVarsDirPath: 'path/to/vars.sass',
	lessVarsDirPath: 'path/to/vars.less',
	stylusVarsDirPath: 'path/to/vars.stylus'
};

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
		compiler: {}
		// When a bundle is bundled, this callback is called
		callback: (bundleConfig, bundleBuildCache) => {
			console.log(bundleConfig);
			console.log(bundleBuildCache);
		}
	}
]);

// In case you want to build some code that must wait on the Bundler to finish bundling.
// This method can also be used when the watch mode is used.
await bundler.waitOnBundlesProcessed();
```
