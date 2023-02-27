---
section: migration

order: 1

navigationTitle: "Materialize"
navigationIconPath: '/images/brands/materialize.svg'
image: '/migration/materialize/header.jpg'
ogImage: '/migration/materialize/og-image.jpg'

title: "How to migrate from Materialize CSS framework to Stylify CSS"
description: "Learn how to migrate effortlessly from the Materialize CSS component framework to Stylify's utility-first CSS and code faster with less code."
---

This guide is here to help you quickly compare the features and syntax of the Materialize component framework with those of Stylify's utility-first CSS, and give you an idea of how to migrate from Materialize to Stylify.

<MigrationNote></MigrationNote>

## Introduction

Materialize is a modern responsive front-end framework based on Material Design

<MigrationStylifyDescription></MigrationStylifyDescription>

## Selectors and CSS Utilities

<migration-code-block image="materialize.svg">
<template #tool>

Materialize provides a lot of utilities for properties like colors, typography, grids, etc:

```html
<span class="blue-text text-darken-2">This is a card panel with dark blue text</span>
<div class="row">
	<div class="col s1">1</div>
	<div class="col s1">2</div>
</div>
<p class="flow-text">I am Flow Text</p>
```

</template>
<template #stylify>

<MigrationStylifySelectors></MigrationStylifySelectors>

</template>
</migration-code-block>


## Global Selectors

<migration-code-block image="materialize.svg">
<template #tool>

I could not find any information suggesting that  Materialize provides something like dynamic Global Selectors.

</template>
<template #stylify>

<MigrationStylifyCustomSelectors></MigrationStylifyCustomSelectors>

</template>
</migration-code-block>

## Components
<migration-code-block image="materialize.svg">
<template #tool>

Materialize is a framework based on components. Therefore, there are plenty of components, such as buttons, badges, forms, tables, menus, etc:

```html
<span class="badge">1</span>
<a class="btn-floating btn-large waves-effect waves-light red">
	<i class="material-icons">add</i>
</a>
<ul class="pagination">
	<li class="disabled"><a href="#!"><i class="material-icons">chevron_left</i></a></li>
	<li class="active"><a href="#!">1</a></li>
	<li class="waves-effect"><a href="#!">2</a></li>
	<li class="waves-effect"><a href="#!">3</a></li>
	<li class="waves-effect"><a href="#!"><i class="material-icons">chevron_right</i></a></li>
</ul>
```

</template>
<template #stylify>

<MigrationStylifyComponents></MigrationStylifyComponents>

</template>
</migration-code-block>

## Configuration, Customization and Variables
<migration-code-block image="materialize.svg">
<template #tool>

Materialize CSS can be configured by modifying the downloaded SCSS files and generating a new theme during a build process.

</template>
<template #stylify>

<MigrationStylifyVariables></MigrationStylifyVariables>

</template>
</migration-code-block>

<migration-page-footer></migration-page-footer>
