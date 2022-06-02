---
section: integrations

order: 1

navigationTitle: "Symfony"
navigationIconPath: '/images/brands/symfony-icon.svg'

title: Symfony Framework integration
description: "Learn how to integrate the Stylify utilify-first CSS generator into the Symfony Framework."
---

<note><template>
Integration example for the Symfony framework can be found in <a href="https://github.com/stylify/integrations-examples/tree/master/symfony" target="_blank" rel="noopener">integrations examples repository</a>.
</template></note>

## How to integrate the Stylify into the Symfony Framework

The example bellow uses `symfony/skeleton` and ads a few composer packages according to the getting started tutorial: `twig, annotations, @symfony/webpack-encore`.

First install the [@stylify/bundler](/docs/unplugin) package using NPM or Yarn:

```
npm i -D @stylify/unplugin
yarn add -D @stylify/unplugin
```

Now add the following configuration into the webpack.config.js:

```js
const Encore = require('@symfony/webpack-encore');
const { webpackPlugin } = require('@stylify/unplugin');
const path = require('path');

const layoutCssPath = './assets/styles/layout.css';
const homepageCssPath = './assets/styles/homepage.css';
// ...

const stylifyPlugin = webpackPlugin({
	transformIncludeFilter: (id) => id.endsWith('twig'),
	bundles: [
		{ outputFile: layoutCssPath, files: [
			'./templates/base.html.twig'
		]},
		{ outputFile: homepageCssPath, files: [
			'./templates/homepage/homepage.html.twig'
		]}
	]
});

Encore
	// Use the Stylify plugin
    .addPlugin(stylifyPlugin)
    .addStyleEntry('layout', [
        './assets/styles/stylify-variables.css',
        layoutCssPath
    ])
	.addStyleEntry('homepage', homepageCssPath)
    // ...

module.exports = Encore.getWebpackConfig();
```

Now you can use the generated bundles in the symfony app:
```
{{ encore_entry_link_tags('layout') }}

{{ encore_entry_link_tags('homepage') }}
```

<where-to-next />
