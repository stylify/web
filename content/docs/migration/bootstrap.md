---
section: migration

order: 1

navigationTitle: "Bootstrap"
navigationIconPath: '/images/brands/bootstrap.svg'
image: '/migration/bootstrap/header.jpg'
ogImage: '/migration/bootstrap/og-image.jpg'

title: "How to migrate from Bootstrap CSS framework to Stylify CSS"
description: "Learn how to migrate effortlessly from the Bootstrap CSS component framework to Stylify's utility-first CSS and code faster with less code."
---

This guide is here to help you quickly compare the features and syntax of the Bootstrap component framework with those of Stylify's utility-first CSS, and give you an idea of how to migrate from Bootstrap to Stylify.

<MigrationNote></MigrationNote>

## Introduction
Bootstrap is a powerful, extensible, and feature-packed frontend toolkit. Build and customize with Sass, utilize prebuilt grid system and components, and bring projects to life with powerful JavaScript plugins.

<MigrationStylifyDescription></MigrationStylifyDescription>


## Selectors and CSS Utilities

<migration-code-block image="bootstrap.svg">
<template #tool>

Bootstrap provides a lot of utilities for properties like display, flex, colors, overflow, etc.

I could not find any information suggesting that  Bootstrap provides something like `hover` or `active` pseudo classes support and media queries support:


```html
<div class="d-flex p-2 text-primary shadow-lg">
```

</template>
<template #stylify>

<MigrationStylifySelectors></MigrationStylifySelectors>


</template>
</migration-code-block>


## Global Selectors

<migration-code-block image="bootstrap.svg">
<template #tool>

I could not find any information suggesting that  Bootstrap provides something like dynamic Global Selectors.

</template>
<template #stylify>

<MigrationStylifyCustomSelectors></MigrationStylifyCustomSelectors>

</template>
</migration-code-block>

## Components
<migration-code-block image="bootstrap.svg">
<template #tool>

Bootstrap is a framework based on components. Therefore, there are plenty of components, such as buttons, badges, forms, tables, menus, etc:

```html
<button class="btn btn-primary"></button>
<span class="badge bg-secondary"></span>
<ul class="list-group">
	<li class="list-group-item">An item</li>
</ul>
```

</template>
<template #stylify>

<MigrationStylifyComponents></MigrationStylifyComponents>

</template>
</migration-code-block>

## Configuration, Customization and Variables
<migration-code-block image="bootstrap.svg">
<template #tool>

Bootstrap customization is mostly done within SCSS/CSS files and the theme is generated during a build process:

```css
// Required
@import "../node_modules/bootstrap/scss/functions";

// Default variable overrides
$body-bg: #000;
$body-color: #111;

// Required
@import "../node_modules/bootstrap/scss/variables";
```

You can also add custom theme colors:

```css
// Create your own map
$custom-colors: (
  "custom-color": #900
);

// Merge the maps
$theme-colors: map-merge($theme-colors, $custom-colors);
```
</template>
<template #stylify>

<MigrationStylifyVariables></MigrationStylifyVariables>

</template>
</migration-code-block>

<migration-page-footer></migration-page-footer>
