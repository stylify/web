---
section: migration

order: 1

navigationTitle: "Pure CSS"
navigationIconPath: '/images/brands/pure-css.png'
image: '/migration/pure-css/header.jpg'
ogImage: '/migration/pure-css/og-image.jpg'

title: "How to migrate from Pure CSS framework to Stylify CSS"
description: "Learn how to migrate effortlessly from the Pure CSS component framework to Stylify's utility-first CSS and code faster with less code."
---

This guide is here to help you quickly compare the features and syntax of the Pure CSS component framework with those of Stylify's utility-first CSS, and give you an idea of how to migrate from Pure CSS to Stylify.

<MigrationNote></MigrationNote>

## Introduction
Pure CSS is a set of small, responsive CSS modules that you can use in every web project.

<MigrationStylifyDescription></MigrationStylifyDescription>

## Selectors and CSS Utilities

<migration-code-block image="pure-css.png">
<template #tool>

Pure CSS provides utilities for properties like grid:
```html
<div class="pure-g">
    <div class="pure-u-1-3"><p>Thirds</p></div>
    <div class="pure-u-1-3"><p>Thirds</p></div>
    <div class="pure-u-1-3"><p>Thirds</p></div>
</div>
```

</template>
<template #stylify>

<MigrationStylifySelectors></MigrationStylifySelectors>

</template>
</migration-code-block>


## Global Selectors

<migration-code-block image="pure-css.png">
<template #tool>

I could not find any information suggesting that  Pure CSS provides something like dynamic Global Selectors.

</template>
<template #stylify>

<MigrationStylifyCustomSelectors></MigrationStylifyCustomSelectors>

</template>
</migration-code-block>

## Components
<migration-code-block image="pure-css.png">
<template #tool>

Pure CSS is a framework that provides some basic components, such as buttons, forms, tables, menus, etc:

```html
<a class="pure-button" href="#">A Pure Button</a>
<table class="pure-table">
    <thead>
        <tr>
            <th>#</th>
            <th>Brand</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>Honda</td>
        </tr>
    </tbody>
</table>
```

</template>
<template #stylify>

<MigrationStylifyComponents></MigrationStylifyComponents>

</template>
</migration-code-block>

## Configuration, Customization and Variables
<migration-code-block image="pure-css.png">
<template #tool>

Pure CSS can be configured by extending existing classes:

```css
/* add your custom styles in this selector */
.form-custom { ... }
```

```html
<form class="form-custom pure-form"></form>
```

You can also choose which components you want to import by selecting responsive and non-responsive Rollup. You can find more info on their website.

</template>
<template #stylify>

<MigrationStylifyVariables></MigrationStylifyVariables>

</template>
</migration-code-block>

<migration-page-footer></migration-page-footer>
