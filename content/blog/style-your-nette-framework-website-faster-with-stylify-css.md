---
title: 🚀 Style your Nette Framework website faster with Stylify CSS
image: '/images/blog/stylify-nette/header.jpg'
ogImage: '/images/blog/stylify-nette/og-image.jpg'
author: 'Vladimír Macháček'
annotation: "Style your Nette Framework website faster and intuitively with Stylify."
createdAt: 'July 9, 2022'
---

Style your Nette Framework website faster with [Stylify](https://stylifycss.com). Don't study selectors and syntax. Use pure CSS syntax and get generated CSS with advanced optimization for production.

For the example bellow, you can checkout the [Nette Framework Integration Example](https://github.com/stylify/integrations-examples/tree/master/nette).

## 🚀 Nette Introduction
[Nette](https://nette.org/en/) is a PHP framework made by [David Grudl](https://twitter.com/DavidGrudl) and it is a great alternative to Symfony and Laravel. It has an amazing templating system called [Latte](https://latte.nette.org/) that uses similar syntax to PHP and by default has context-sensitive escaping (which no other framework has). In my opinion, it is easier to learn, because it comes with a simple structure by default, it has no dependencies and less patterns to learn.

## 💎 Stylify CSS Introduction
[Stylify](https://stylifycss.com) generates CSS dynamically based on what you write. The syntax is similar to css `property:value`. Defined utilities are combined with components selectors and in production minified to bare minimum like `.color\:red,.button {color:red}` to `._zx, ._ga{color:red}`.

Stylify allows you to get very small bundles, generate additional lazyloaded CSS chunks and style the page by writting HTML and selectors 🤟.

## Nette installation
The easiest way to start with Nette is to use Composer following [this guide](https://doc.nette.org/en/quickstart/getting-started):
- Run `composer create-project nette/web-project nette-blog`
- Go to the project dir `cd nette-blog`
- To start the web run `php -S 0.0.0.0:80 -t www`
- The web should be available at `http://localhost`

## Stylify CSS setup
Because Nette doesn't come with any bundler neither with any javascript package by default, we are going to use the Stylify CSS Bundler.

Install the bundler `yarn add -D @stylify/bundler`.
Create the `bundles.js` file in the project root with the following content:

```js
const { nativePreset } = require('@stylify/stylify');
const { Bundler } = require('@stylify/bundler');

// Detect watch mode
const watchFiles = process.argv[process.argv.length - 1] === '--w';

// Mangle selectors for production
nativePreset.compiler.mangleSelectors = !watchFiles;

// Match n:class attributes
nativePreset.compiler.selectorsAreas = [
    '(?:^|\\s+)n:class="([^"]+)"',
    '(?:^|\\s+)n:class=\'([^\']+)\''
];

const bundler = new Bundler({
	compiler: nativePreset.compiler,
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

We could of course generate css for the whole project into one file. But it would make the css unnecessary larger.

Now open the `package.json` file and add the following scripts:

```json
"scripts": {
    "build": "node bundles.js",
    "watch": "node bundles.js --w"
}
```

The last step is to edit the templates. Open the `App/Presenters/Templates/@layout.latte` and add the link to layout css file:
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

If you run the `yarn watch`, Stylify CSS will generate css and will watch any file for change.

### Components
To avoid bloated templates with utilities, you can configure
components directly in files, where they are used using [content options](https://stylifycss.com/docs/get-started#defining-a-component) (expects javascript object without brackets) or in the [compiler config](https://stylifycss.com/docs/get-started#defining-a-component).

First, let's add the global `container` component. Open the `bundles.js`, and the following:

```js
nativePreset.compiler.components = {
    container: 'max-width:1024px margin:0_auto'
}

const bundler = new Bundler({ /*...*/ });
```
Now we can use it in the whole project. In our case, we add it to the layout:

```html
<main class="container">{include content}</main>
```

In the homepage, we can add a local component for the title using content options:

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
It's always a good idea to have a clean and flexible code without hardcoded values. [Variables](https://stylifycss.com/docs/get-started#adding-a-variable) can be defined the same way as components. Let's modify the title component:

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
If you run `yarn build`, the selectors will be shrinked and the css minified:

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
The examples above doesn't include everything Stylify CSS can do:
- You can map [nested files](https://stylifycss.com/docs/bundler#files-content-option) in the template
- Style [global selectors](https://stylifycss.com/docs/stylify/compiler#plainselectors)
- Define [custom screens](https://stylifycss.com/docs/stylify/compiler#screens)
- Add [own macros](https://stylifycss.com/docs/stylify/compiler#macros) like `ml:20px` for margin-left
- And a lot more

Feel free to [checkout the docs](https://stylifycss.com/docs/get-started) to learn more 💎.
