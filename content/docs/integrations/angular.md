---
section: integrations

order: 1

navigationTitle: "Angular"
navigationIconPath: '/images/brands/angular.svg'
image: '/integrations/angular/header.jpg'
ogImage: '/integrations/angular/og-image.jpg'

title: Using Stylify CSS in Angular
description: "Learn how to integrate the Stylify CSS into the Angular. Code your Angular website faster with Stylify CSS."
howToSchemaTitle: 'How to use Stylify CSS in Angular.'
howToSchemaSteps: [
	{
		"name": "Stylify CSS installatiom",
		"text": "Install @stylify/bundler package using CLI like YARN or NPM.",
		"url": "#installation",
	},
	{
		"name": "Usage",
		"text": "Create stylify.js with a bundler config.",
		"url": "#usage",
	},
	{
		"name": "Configuration",
		"text": "Extend Stylify CSS configuration however you need. Configure variables, components, custom selectors and a lot more.",
		"url": "#configuration",
	},
]
---

Angular is a platform for building mobile and desktop web applications.

Stylify can be integrated into the Angular using Bundler.

<stack-blitz-link link="stylifycss-angular-example"></stack-blitz-link>

<note><template>
In case you use any kind of bundler like Webpack, Vite, Rollup or ESbuild, go and checkout the guide for <nuxt-link to="/docs/unplugin">@stylify/unplugin</nuxt-link> that can be easily integrated into these tools.
</template></note>

## How to integrate the Stylify CSS into the Angular

First install the [@stylify/bundler](/docs/bundler) package using NPM or Yarn:

```
npm i -D @stylify/bundler
yarn add -D @stylify/bundler
```

Also for the watch mode, we need to run two paralel tasks. This can be solved using concurrently:
```
yarn add -D concurrently
npm i concurrently
```

Next, create a file, for example `stylify.js`:

```js
const { Bundler } = require('@stylify/bundler');

const isDev = process.argv[process.argv.length - 1] === '--w';
const bundler = new Bundler({
  watchFiles: isDev,
  // Optional
  compiler: {
    mangleSelectors: !isDev,
    // https://stylifycss.com/docs/stylify/compiler#variables
    variables: {},
    // https://stylifycss.com/docs/stylify/compiler#macros
    macros: {},
    // https://stylifycss.com/docs/stylify/compiler#components
    components: {},
    // ...
  },
});

// This bundles all CSS into one file
// You can configure the Bundler to bundle CSS for each page separately
// See bundler link bellow
bundler.bundle([
	{
		files: ['./src/**/*.html', './src/**/*.ts'],
		outputFile: './src/styles.css',
	},

	// You can also split css for each component
	// You can map files within the components using content comment option
	// https://stylifycss.com/docs/bundler#files-content-option
	// Stylify takes that option and searches for defined files. If defined file
	// also has an option, id check also those files and so long.
	// This way it maps all files and all dependencies.
	/*
	{
		files: ['./src/app/app.component.*'],
		outputFile: './src/app/app.component.css',
	},
	*/
]);

```

If you don't use splitting and everything will not bundled into the `styles.css`, then don't forget to add paths to css files.

The last step is to add scripts into the `package.json`:

```json
"scripts": {
	"dev": "concurrently 'yarn stylify.dev' 'ng serve -c development'",
	"prod": "yarn stylify.build & ng serve",
	"stylify.build": "node stylify.js",
	"stylify.dev": "node stylify.js --w"
}
```

Now when you run `yarn dev`, the CSS files will be generated. In production, the selectors will be mangled.

You can customize the build above however you want.

<where-to-next package="bundler" />
