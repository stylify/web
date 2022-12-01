---
section: integrations

order: 1

navigationTitle: "Symfony"
navigationIconPath: '/images/brands/symfony-icon.svg'
image: '/integrations/symfony/header.jpg'
ogImage: '/integrations/symfony/og-image.jpg'

title: Using Stylify CSS in Symfony Framework
description: "Learn how to use the Stylify CSS with the Symfony Framework. Code your Symfony website faster with Stylify CSS."
howToSchemaTitle: 'How to use Stylify CSS in Symfony.'
howToSchemaSteps: [
	{
		"name": "Installation",
		"text": "Install @stylify/unplugin package using CLI like YARN or NPM.",
		"url": "#installation",
	},
	{
		"name": "Usage",
		"text": "Add Stylify CSS build module into astro.config.mjs.",
		"url": "#usage",
	},
	{
		"name": "Configuration",
		"text": "Extend Stylify CSS configuration however you need. Configure variables, components, custom selectors and a lot more.",
		"url": "#configuration",
	},
]
---

Symfony is a set of reusable PHP components and a PHP framework to build web applications, APIs, microservices and web services.

<note><template>
Integration example for the Symfony framework can be found in <a href="https://github.com/stylify/integrations-examples/tree/master/symfony" target="_blank" rel="noopener">integrations examples repository</a>.
</template></note>

## How to integrate the Stylify CSS into the Symfony Framework

The example below uses `symfony/skeleton` and ads a few composer packages according to the getting started tutorial: `twig, annotations, @symfony/webpack-encore`.

First install the [@stylify/unplugin](/docs/unplugin) package using CLI:

```
npm i -D @stylify/unplugin
yarn add -D @stylify/unplugin
```

Now add the following configuration into the `webpack.config.js`:

```js
const Encore = require('@symfony/webpack-encore');
const { stylifyWebpack } = require('@stylify/unplugin');

const cssPath = './assets/styles/index.css';

const stylifyPlugin = stylifyWebpack({
	bundles: [{ outputFile: cssPath, files: [ './templates/**/*.html.twig' ] }],
	// Optional
	compiler: {
		// https://stylifycss.com/docs/stylify/compiler#variables
		variables: {},
		// https://stylifycss.com/docs/stylify/compiler#macros
		macros: {},
		// https://stylifycss.com/docs/stylify/compiler#components
		components: {},
		// ...
	}
});

Encore
	// Use the Stylify CSS plugin
	.addPlugin(stylifyPlugin)
	.addStyleEntry('index', cssPath);
```

Now you can use the generated bundle in the symfony app:
```
{{ encore_entry_link_tags('index.css') }}
```

<where-to-next />
