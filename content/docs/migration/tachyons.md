---
section: migration

order: 1

navigationTitle: "Tachyons"
navigationIconPath: '/images/brands/tachyons.svg'
image: '/migration/tachyons/header.jpg'
ogImage: '/migration/tachyons/og-image.jpg'

title: "How to migrate from Tachyons Utility-First CSS framework to Stylify CSS"
description: "Learn how to migrate effortlessly from the Tachyons utility-first CSS framework to Stylify and code faster with less code."
---

This guide is here to help you quickly compare the features and syntax of the Tachyons utility-first CSS framework with those of Stylify, and give you an idea of how to migrate from Tachyons to Stylify.

<MigrationNote></MigrationNote>

## Introduction
Tachyons is a framework that lets you create fast loading, highly readable, and 100% responsive interfaces with as little CSS as possible.

<MigrationStylifyDescription></MigrationStylifyDescription>


## Selectors and CSS Utilities

<migration-code-block image="tachyons.svg">
<template #tool>

Tachyons provides a lot of flexible CSS utilities for properties like color, spacing, typography, visibility, etc:

```html
<div class="flex">
	<div class="outline w-25 pa3 mr2">
		<code>1</code>
	</div>
</div>
```

</template>
<template #stylify>

<MigrationStylifySelectors></MigrationStylifySelectors>

</template>
</migration-code-block>


## Global Selectors

<migration-code-block image="tachyons.svg">
<template #tool>

I could not find any information suggesting that  Tachyons provides something like dynamic Global Selectors.

</template>
<template #stylify>

<MigrationStylifyCustomSelectors></MigrationStylifyCustomSelectors>

</template>
</migration-code-block>

## Components
<migration-code-block image="tachyons.svg">
<template #tool>

Tachyons doesn't have any configuration API for components.
However, it has a prepared set of copy&paste components on its website you can use in your project and you can configure them in configurator mentioned on their website:

```html
<div class="ph3">
	<h1 class="f6 fw6 ttu tracked">Basic button</h1>
	<a class="f6 link dim ph3 pv2 mb2 dib white bg-black" href="#0">Button Text</a>
</div>

<article class="mw5 mw6-ns center pt4">
	<div class="aspect-ratio aspect-ratio--16x9 mb4">
		<div class="aspect-ratio--object cover"></div>
	</div>
</article>
```

</template>
<template #stylify>

<MigrationStylifyComponents></MigrationStylifyComponents>

</template>
</migration-code-block>

## Configuration, Customization and Variables
<migration-code-block image="tachyons.svg">
<template #tool>

Tachyons can be configured directly by modifying downloaded CSS files.
You can also use tachyons with CSS variables and define your own sizes, colors, etc.

They have a video on their website on how to do so.

</template>
<template #stylify>

<MigrationStylifyVariables></MigrationStylifyVariables>

</template>
</migration-code-block>

<migration-page-footer></migration-page-footer>
