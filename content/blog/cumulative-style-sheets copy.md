---
title: Write optimized CSS in Symfony application with Stylify
image: '/images/blog/stylify-symfony/header.jpg'
ogImage: '/images/blog/stylify-symfony/og-image.jpg'
author: 'Vladimír Macháček'
annotation: "Stay in Twig and PHP files, write HTML and get optimized CSS. Learn how to write optimized CSS in a Symfony web application in a minute."
createdAt: 'July 14, 2022'
---

From anoying switching between files to flawless coding. Learn how to improve the coding experience in your Symfony Web Application in 5 minutes 🚀.

## Introduction
[Stylify](https://stylify.dev) generates CSS dynamically based on what you write. The syntax is similar to css `property:value`. Defined utilities are combined with components selectors and in production minified to bare minimum like `.color\:red,.button {color:red}` to `_zx, _ga{color:red}`.

With Stylify, you can stay in the Twig templates or PHP files, write selectors and get smallest CSS chunks possible for each page separately 🤟.

## Symfony Quick Setup 🚀
The easiest way to start is to use the Symfony Skeleton and Webapp packages.
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

## Stylify Integration

Install Stylify universal plugin.
```
npm i @stylify/unplugin
```

Update the `webpack.config.js`. Import Stylify, add plugin and the `hp` style entry.

```js
const { webpackPlugin } = require('@stylify/unplugin');
const path = require('path');
// ...
const layoutCssPath = './assets/styles/layout.css';
const homepageCssPath = './assets/styles/homepage.css';

Encore
  .addPlugin(webpackPlugin({
    transformIncludeFilter: (id) => id.endsWith('twig') || id.endsWith('.php'),
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

Change `app.css` in `assets/app.js` to 'layout.css' and add the css link into the `hp.html.twig`.

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

Stylify will find the `color:blue` selector, and generate the css for it. `.color\:blue{color:blue}` into the `homepage.css`.

Some code often needs to be reused accross multiple pages. It's not a good idea to have bloated templates by utilities and hardcoded units in the selectors. Let's define a `container` component and some variables.

Open the `webpack.config.js` and edit the Stylify plugin config:
```js
.addPlugin(webpackPlugin({
  // ...
  extend: {
    bundler: {
      compiler: {
        variables: {
          containerSize: '800px',
          textColor: 'blue'
        },
        components: {
          container: 'max-width:$containerSize margin:0__auto'
        }
      }
    }
  }
}));
```

Now we can update the `base.html.twig`
```twig
<div class="container">{% block body %}{% endblock %}</div>
```

and the `hp.html.twig`

```twig
<div class="color:$textColor">Hello world!</div>
```

Sometime, some components are used only one place. It doesn't make sense to define them in the `webpack.config.js`. We can also define components, variables and etc directly in the file where they are used. Stylify has a [content options](https://stylify.dev/docs/stylify/compiler#contentoptionsprocessors) for that.

Let's add a paragraph component in the `hp.html.twig`:

```twig
{#
@stylify-components
  'text-block': `
    font-size:16px
    margin:12px__0
    md:margin:24px__0
  `
/@stylify-components
#}
...
{% block body %}
    ...
    <div class="text-block">First text</div>
    <div class="text-block">Second text</div>
{% endblock %}
```

## The production build
When we run the build for production `npm run build`, Stylify automatically mangles all recognized selectors and generates optimized CSS.

Optimized `hp.html.twig`:
```twig
{% block body %}
    <div class="_ghd5j">Hello World!</div>
    <div class="_hhvd">First text</div>
    <div class="_hhvd">Second text</div>
{% endblock %}
```

Optimized hp css:
```css
._ghd5j{color:blue}
._h0jma,
._hhvd{font-size:16px}
._gbu5r,._hhvd{margin:12px 0}
@media (min-width: 768px) {._bpb5,._hhvd{margin:24px 0}}
```

The example can be also found in the [docs](https://stylify.dev/docs/integrations/symfony).

## More configuration
The examples above doesn't include everything Stylify can do:
- You can map [nested files](https://stylify.dev/docs/bundler#files-content-option) in the template
- Style [global selectors](https://stylify.dev/docs/stylify/compiler#plainselectors)
- Define [custom screens](https://stylify.dev/docs/stylify/compiler#screens)
- Add [own macros](https://stylify.dev/docs/stylify/compiler#macros) like `ml:20px` for margin-left
- And a lot more

Feel free to [checkout the docs](https://stylify.dev/docs/get-started) to learn more 💎.
