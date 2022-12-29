---
title: Write optimized CSS in Symfony with Stylify
image: '/images/blog/stylify-symfony/header.jpg'
ogImage: '/images/blog/stylify-symfony/og-image-v2.jpg'
author: 'Vladimír Macháček'
annotation: "Stay in Twig and PHP files, use CSS-like utilities to get optimized CSS. Learn how to write optimized CSS in a Symfony web app with Stylify CSS."
createdAt: 'June 14, 2022'
---


## Introduction
[Stylify](https://stylifycss.com) is a library that uses CSS-like selectors to generate optimized utility-first CSS based on what you write.

- ✅ CSS-like selectors
- ✅ No framework to study
- ✅ Less time spent in docs
- ✅ Mangled & Extremely small CSS
- ✅ No CSS purge needed
- ✅ Components, Variables, Custom selectors
- ✅ It can generate multiple CSS bundles

Also we have a page about <nuxt-link to="/docs/get-started/why-stylify-css">what problems Stylify CSS solves and why you should give it a try!</nuxt-link>

## Symfony Quick Setup 🚀
For an easier start, you can check out the [integration example](https://github.com/stylify/integrations-examples/tree/master/symfony) 🎮.

The easiest way to start is to use the Symfony Skeleton and Web App packages.
```
composer create-project symfony/skeleton myproject/
cd myproject
composer require webapp
npm install
```

Add the HpController `src/Controller/HpController.php`

```php
<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;

class HomeController extends AbstractController
{
    #[Route('/')]
    public function home(): Response
    {
        return $this->render('hp.html.twig');
    }
}
```

and the homepage template `templates/hp.html.twig`.
```twig
{% extends "base.html.twig" %}
{% block body %} Hello World! {% endblock %}
```

## Stylify CSS Integration

Install Stylify CSS universal plugin.
```
npm i @stylify/unplugin
```

Update the `webpack.config.js`. Import Stylify, add the plugin and the `hp` style entry.

```js
const { stylifyWebpack } = require('@stylify/unplugin');
const path = require('path');
// ...
const layoutCssPath = './assets/styles/layout.css';
const homepageCssPath = './assets/styles/homepage.css';

Encore
  .addPlugin(stylifyWebpack({
    bundles: [
        { outputFile: layoutCssPath, files: [
            './templates/base.html.twig'
        ]},
        { outputFile: homepageCssPath, files: [
            './templates/hp.html.twig'
        ]}
    ]
  }))
  .addStyleEntry('homepage', homepageCssPath)
  // ...
```

Change `app.css` in `assets/app.js` to 'layout.css' and add the CSS link into the `hp.html.twig`.

```twig
{% block stylesheets %}
  {{ parent() }}
  {{ encore_entry_link_tags('hp') }}
{% endblock %}
```

## Styling the website
When the setup is finished edit the `hp.html.twig`
```html
<div class="color:blue">Hello world!</div>
```
and run `npm run dev`.

Stylify will find the `color:blue` selector, and generate the CSS for it. `.color\:blue{color:blue}` into the `homepage.css`.

Some code often needs to be reused across multiple pages. It's not a good idea to have bloated templates by utilities and hardcoded units in the selectors. Let's define a `container` component and some variables.

Open the `webpack.config.js` and edit the Stylify CSS plugin config:
```js
.addPlugin(stylifyWebpack({
	// ...
	compiler: {
		variables: {
			containerSize: '800px',
			textColor: 'blue'
		},
		components: {
			container: 'max-width:$containerSize margin:0_auto'
		}
	}
}));
```

Now we can update the `base.html.twig`
```twig
<div class="container">{% block body %}{% endblock %}</div>
```

and the `hp.html.twig`:

```twig
<div class="color:$textColor">Hello world!</div>
```

Sometime, some components are used only in one place. It doesn't make sense to define them in the `webpack.config.js`. We can also define components, variables and etc directly in the file where they are used. Stylify CSS has [content options](https://stylifycss.com/docs/stylify/compiler#contentoptionsprocessors) for that.

Let's add a paragraph component in the `hp.html.twig`:

```twig
{#
stylify-components
  'text-block': `
    font-size:16px
    margin:12px_0
    md:margin:24px_0
  `
/stylify-components
#}
...
{% block body %}
    ...
    <div class="text-block">First text</div>
    <div class="text-block">Second text</div>
{% endblock %}
```

## The production build
When we run the build for production `npm run build`, Stylify CSS automatically mangles all recognized selectors and generates optimized CSS.

Optimized `hp.html.twig`:
```twig
{% block body %}
    <div class="a">Hello World!</div>
    <div class="b">First text</div>
    <div class="b">Second text</div>
{% endblock %}
```

Optimized hp CSS:
```css
.a{color:blue}
.e,
.b{font-size:16px}
.c,.b{margin:12px 0}
@media (min-width: 768px) {.d,.b{margin:24px 0}}
```

The example can be also found in the [docs](https://stylifycss.com/docs/integrations/symfony).

## More configuration
The examples above don't include everything Stylify CSS can do:
- You can map [nested files](https://stylifycss.com/docs/bundler#files-content-option) in the template
- Style [global selectors](https://stylifycss.com/docs/stylify/compiler#customselectors)
- Define [custom screens](https://stylifycss.com/docs/stylify/compiler#screens)
- Add [your macros](https://stylifycss.com/docs/stylify/compiler#macros) like `ml:20px` for margin-left
- And a lot more

Feel free to [check out the docs](https://stylifycss.com/docs/get-started) to learn more 💎.
