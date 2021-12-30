---
section: integrations

order: 1

navigationTitle: "Next.js"
navigationIconPath: '/images/brands/nextjs.svg'

title: Next.js integration
description: "Learn how to integrate the Stylify utilify-first CSS generator into the the Next.js."
---

Stylify can be easily integrated into the Next.js using @stylify/bundler and Webpack plugin.

<stack-blitz-link link="https://stackblitz.com/edit/stylify-nextjs-template?devtoolsheight=33&file=pages/index.js"></stack-blitz-link>

<note><template>
Integration example for the Next.js can be found in <a href="https://github.com/stylify/integrations-examples/tree/master/nextjs" target="_blank" rel="noopener">integrations examples repository</a>.
</template></note>

## How to integrate the Stylify into the Next.js

First install the [@stylify/bundler](/docs/bundler) package using NPM or Yarn:

```
npm i -D @stylify/bundler

yarn add -D @stylify/bundler
```

Next add a configuration into the `next.config.js`:

```js
const { nativePreset } = require('@stylify/stylify');
const { Bundler } = require('@stylify/bundler');

class StylifyPlugin {
	constructor(options) {
		this.options = {
			...{ isDev: false },
			...options
		}
	}

	apply(compiler) {
		// Optional configuration.
		nativePreset.compiler.variables = {
			blue: 'steelblue'
		};

		// Create a new Bundler instance.
		const bundler = new Bundler({
			compiler: nativePreset.compiler,
			watchFiles: this.options.isDev
		});

		// You can customize bundles however you want.
		bundler.bundle([
			{
				outputFile: './styles/stylify.css',
				files: ['./pages/**/*.js']
			}
		]);

		// You can change these hooks.
		// Just remember, the Stylify must be initialized before the build.
		compiler.hooks.beforeRun.tapPromise(StylifyPlugin.name, () => {
			return bundler.waitOnBundlesProcessed();
		});
		compiler.hooks.beforeRun.tapPromise(StylifyPlugin.name, () => {
			return bundler.waitOnBundlesProcessed();
		});
	}
}

module.exports = {
  // ...
  webpack: (config, { dev }) => {
    config.plugins.push(new StylifyPlugin({ isDev: dev }));
    return config;
  }
}
```

And the last step is to add the `stylify.css` into the `_app.js`:

```js
import '../styles/globals.css';
import '../styles/stylify.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp;
```

Now you can use the Next.js commands to build your assets. This will also trigger the Stylify Bundler.

## Configuration

The example above uses the [@stylify/bundler](/docs/bundler) package and the configuration can be found inside that package documentation.
For the Compiler config, checkout the [Compiler documentation](/docs/stylify/compiler).

In case you will want to mangle selectors, you will need to add the `className` attribute into the [selectorsAreas](/docs/stylify/compiler#rewriteselectorsareas) in the Compiler config if you use this attribute.

```js
nativePreset.compiler.selectorsAreas = [
	'(?:^|\\s+)className="([^"]+)"',
	'(?:^|\\s+)className=\'([^\']+)\'',
	'(?:^|\\s+)className=\\{`((?:.|\n)+)`\\}'
];
