---
section: migration

order: 1

navigationTitle: "UIkit"
navigationIconPath: '/images/brands/uikit.svg'
image: '/migration/uikit/header.jpg'
ogImage: '/migration/uikit/og-image.jpg'

title: "How to migrate from UIkit CSS framework to Stylify CSS"
description: "Learn how to migrate effortlessly from the UIkit CSS component framework to Stylify's utility-first CSS and code faster with less code."
---

This guide is here to help you quickly compare the features and syntax of the UIkit component framework with those of Stylify's utility-first CSS, and give you an idea of how to migrate from UIkit to Stylify.

<MigrationNote></MigrationNote>

## Introduction

UIkit is a lightweight and modular front-end framework for developing fast and powerful web interfaces.

<MigrationStylifyDescription></MigrationStylifyDescription>

## Selectors and CSS Utilities

<migration-code-block image="uikit.svg">
<template #tool>

UIkit provides a set of utilities for properties like margin, padding, width, etc.

I could not find any information if it provides something like `hover` or `active` pseudo classes support and media queries support.

```html
<div class="
	uk-width-1-1
	uk-padding-small
	u-text-lead
"></div>
```

</template>
<template #stylify>

<MigrationStylifySelectors></MigrationStylifySelectors>


</template>
</migration-code-block>


## Global Selectors

<migration-code-block image="uikit.svg">
<template #tool>

I could not find any information suggesting that  UIkit provides something like dynamic Global Selectors.

</template>
<template #stylify>

<MigrationStylifyCustomSelectors></MigrationStylifyCustomSelectors>

</template>
</migration-code-block>

## Components
<migration-code-block image="uikit.svg">
<template #tool>

UIkit is a framework based on components. Therefore, there are plenty of components, such as buttons, badges, forms, tables, menus, etc:

```html
<span class="uk-badge"></span>
<a class="uk-button uk-button-default" href=""></a>
```

</template>
<template #stylify>

<MigrationStylifyComponents></MigrationStylifyComponents>

</template>
</migration-code-block>

## Configuration, Customization and Variables
<migration-code-block image="uikit.svg">
<template #tool>

UIkit provides a theme that you can modify during a build process through variables:

```css
// 1. Your custom variables and variable overwrites.
$global-link-color: #DA7D02;

// 2. Import default variables and available mixins.
@import "uikit/src/scss/variables-theme.scss";
@import "uikit/src/scss/mixins-theme.scss";

// 3. Your custom mixin overwrites.
@mixin hook-card() { color: #000; }

// 4. Import UIkit.
@import "uikit/src/scss/uikit-theme.scss";
```

</template>
<template #stylify>

<MigrationStylifyVariables></MigrationStylifyVariables>

</template>
</migration-code-block>

<migration-page-footer></migration-page-footer>
