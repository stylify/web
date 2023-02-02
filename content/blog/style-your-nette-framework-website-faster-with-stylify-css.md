---
title: 🚀 Style your Nette Framework website faster with Stylify CSS
image: '/images/blog/stylify-nette/header.jpg'
ogImage: '/images/blog/stylify-nette/og-image.jpg'
author: 'Vladimír Macháček'
annotation: "Style your Nette Framework website faster and intuitively with Stylify."
createdAt: 'July 9, 2022'
---

Style your Nette Framework website faster with <nuxt-link to="/">Stylify</nuxt-link>. Don't study selectors and syntax. Use pure CSS syntax and get generated CSS with advanced optimization for production.

For the example below, you can check out the [Nette Framework Integration Example](https://github.com/stylify/integrations-examples/tree/master/nette).

## 🚀 Nette Introduction
[Nette](https://nette.org/en/) is a PHP framework made by [David Grudl](https://twitter.com/DavidGrudl) and it is a great alternative to Symfony and Laravel. It has an amazing templating system called [Latte](https://latte.nette.org/) that uses a similar syntax to PHP and by default has context-sensitive escaping (which no other framework has). In my opinion, it is easier to learn, because it comes with a simple structure by default, it has no dependencies and fewer patterns to learn.

## 💎 Stylify CSS Introduction
<nuxt-link to="/">Stylify</nuxt-link> is a library that uses CSS-like selectors to generate optimized utility-first CSS based on what you write.

- ✅ CSS-like selectors
- ✅ No framework to study
- ✅ Less time spent in docs
- ✅ Mangled & Extremely small CSS
- ✅ No CSS purge needed
- ✅ Components, Variables, Custom selectors
- ✅ It can generate multiple CSS bundles

Also we have a page about <nuxt-link to="/docs/get-started/why-stylify-css">what problems Stylify CSS solves and why you should give it a try!</nuxt-link>

## Nette installation
The easiest way to start with Nette is to use Composer following [this guide](https://doc.nette.org/en/quickstart/getting-started):
- Run `composer create-project nette/web-project nette-blog`
- Go to the project dir `cd nette-blog`
- To start the web run `php -S 0.0.0.0:80 -t www`
- The web should be available at `http://localhost`

## Stylify CSS setup
Because Nette doesn't come with any bundler nor with any javascript package by default, we are going to use the Stylify CSS Bundler.

Install the bundler `yarn add -D @stylify/bundler`.
Create the `bundles.js` file in the project root with the following content:

```js
const { nativePreset } = require('@stylify/stylify');
const { Bundler } = require('@stylify/bundler');

// Detect watch mode
const watchFiles = process.argv[process.argv.length - 1] === '--w';
const bundler = new Bundler({
	compiler: {
		// Mangle selectors for production
		mangleSelectors: !watchFiles,
		// Match n:class attributes
		selectorsAreas: [
			'(?:^|\\s+)n:class="([^"]+)"',
			'(?:^|\\s+)n:class=\'([^\']+)\''
		]
	},
	watchFiles: watchFiles
});

bundler.bundle([
	{
		files: ['./app/Presenters/templates/@layout.latte'],
		outputFile: './www/static/css/layout.css'
	},
	{
		files: ['./app/Presenters/templates/Homepage/default.latte'],
		outputFile: './www/static/css/homepage.css'
	}
]);
```
This config above will generate two bundles:
- `Layout` - used globally
- `Homepage` - only for the homepage

We could of course generate CSS for the whole project into one file. But it would make the CSS unnecessary larger.

Now open the `package.json` file and add the following scripts:

```json
"scripts": {
    "build": "node bundles.js",
    "watch": "node bundles.js --w"
}
```

The last step is to edit the templates. Open the `App/Presenters/Templates/@layout.latte` and add the link to the layout CSS file:
```html
<link rel="stylesheet" href="/static/css/layout.css">
```
In the `App/Presenters/Templates/Homepage/default.latte` add the following:

```html
{block content}
<link rel="stylesheet" href="/static/css/homepage.css">
<div class="font-size:48px text-align:center">
    Hello World!🎉
</div>
```

If you run the `yarn watch`, Stylify CSS will generate CSS and will watch any file for change.

### Components
To avoid bloated templates with utilities, you can configure
components directly in files, where they are used using <nuxt-link to="/docs/get-started#defining-a-component">content options</nuxt-link> (expects javascript object without brackets) or in the <nuxt-link to="/docs/get-started#defining-a-component">compiler config</nuxt-link>.

First, let's add the global `container` component. Open the `bundles.js`, and the following:

```js
const compilerConfig = {
	components: {
		container: 'max-width:1024px margin:0_auto'
	}
}

const bundler = new Bundler({ /*...*/ });
```
Now we can use it in the whole project. In our case, we add it to the layout:

```html
<main class="container">{include content}</main>
```

On the homepage, we can add a local component for the title using content options:

```html
{*
    stylify-components
        title: 'font-size:48px text-align:center'
    /stylify-components
*}

{block content}
<link rel="stylesheet" href="/static/css/homepage.css">
<div class="title">Hello World!🎉</div>
```

### Variables
It's always a good idea to have clean and flexible code without hardcoded values. <nuxt-link to="/docs/get-started#adding-a-variable">Variables</nuxt-link> can be defined in the same way as components. Let's modify the title component:

```html
{*
    stylify-variables
        titleFontSize: '48px'
    /stylify-variables

    stylify-components
        title: 'font-size:$titleFontSize text-align:center'
    /stylify-components
*}

{block content}
{* ... *}
```

### Mapping files
When a template includes a component or a nested template part, we can add it to the bundle using `stylify-files` option.

Let's create the `_content.latte` template part next to the `default.latte` with the following content:

```html
{*
	stylify-components
		title: 'font-size:$titleFontSize text-align:center'
	/stylify-components
*}
<div class="title">Hello World!🎉</div>
```

The `Homepage/default.latte` then informs the bundler about external paths using `stylify-files` option that expects paths separated by a space or a new line:
```
{*
...
stylify-files
    ./_content.latte
/stylify-files
*}

{block content}
{include './_content.latte'}
```

The content in the `./_content.latte` is automatically processed by the bundler.

## 🔥 Production build:
If you run `yarn build`, the selectors will be shrunk and the CSS minified:

`@layout.latte`:
```html
<main class="_7tcrv">{include content}</main>
```

`_content.latte`:
```html
<div class="_88io">Hello World!🎉</div>
```

`layout.css`:
```css
._0plj4,._7tcrv{max-width:1024px}
._m0vnad,._7tcrv{margin:0 auto}
```

`homepage.css`:
```css
:root {--titleFontSize: 48px;}
._k38ic,._88io{font-size:48px}
._1vegb8,._88io{text-align:center}
```


## Configure anything you need
The examples above don't include everything Stylify CSS can do:
- You can map <nuxt-link to="/docs/bundler#files-content-option">nested files</nuxt-link> in the template
- Style <nuxt-link to="/docs/stylify/compiler#customselectors">global selectors</nuxt-link>
- Define <nuxt-link to="/docs/stylify/compiler#screens">custom screens</nuxt-link>
- Add <nuxt-link to="/docs/stylify/compiler#macros">your macros</nuxt-link> like `ml:20px` for margin-left
- And a lot more

Feel free to <nuxt-link to="/docs/get-started">check out the docs</nuxt-link> to learn more 💎.
