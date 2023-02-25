---
section: migration

order: 1

navigationTitle: "Bulma"
navigationIconPath: '/images/brands/bulma.svg'
image: '/migration/bulma/header.jpg'
ogImage: '/migration/bulma/og-image.jpg'

title: "How to migrate from Bulma CSS framework to Stylify CSS"
description: "Learn how to migrate effortlessly from the Bulma CSS component framework to Stylify's utility-first CSS and code faster with less code."
---

This guide is here to help you quickly compare the features and syntax of the Bulma component framework with those of Stylify's utility-first CSS, and give you an idea of how to migrate from Bulma to Stylify.

<MigrationNote></MigrationNote>

## Introduction
Bulma is a free, open source framework that provides ready-to-use frontend components that you can easily combine to build responsive web interfaces.

<MigrationStylifyDescription></MigrationStylifyDescription>

## Selectors and CSS Utilities

<migration-code-block image="bulma.svg">
<template #tool>

Bulma provides CSS utilities for properties like color, spacing, typography, visibility, etc:

```html
<div class="
	has-text-white
	mb-4 px-1
	is-capitalized
"></div>
```

</template>
<template #stylify>

<MigrationStylifySelectors></MigrationStylifySelectors>

</template>
</migration-code-block>


## Global Selectors

<migration-code-block image="bulma.svg">
<template #tool>

I could not find any information suggesting that  Bulma provides something like dynamic Global Selectors.

</template>
<template #stylify>

<MigrationStylifyCustomSelectors></MigrationStylifyCustomSelectors>

</template>
</migration-code-block>

## Components
<migration-code-block image="bulma.svg">
<template #tool>

Bulma is a framework based on components. Therefore, there are plenty of components, such as buttons, badges, forms, tables, menus, etc:

```html
<input class="input is-primary">
<aside class="menu">
	<p class="menu-label">General</p>
	<ul class="menu-list">
		<li><a>Dashboard</a></li>
	</ul>
</aside>
```

</template>
<template #stylify>

<MigrationStylifyComponents></MigrationStylifyComponents>

</template>
</migration-code-block>

## Configuration, Customization and Variables
<migration-code-block image="bulma.svg">
<template #tool>

Bulma is configured through SCSS variables within an import file and the theme is generated during a build process:

```css
// Set your brand colors
$purple: #8A4D76;
// ...

// Update Bulma's global variables
$family-sans-serif: "Nunito", sans-serif;
// ...

// Update some of Bulma's component variables
$body-background-color: $beige-lighter;
// ...

// Import only what you need from Bulma
@import "../node_modules/bulma/sass/utilities/_all.sass";
@import "../node_modules/bulma/sass/base/_all.sass";
// ...
```

</template>
<template #stylify>

<MigrationStylifyVariables></MigrationStylifyVariables>

</template>
</migration-code-block>

<migration-page-footer></migration-page-footer>
