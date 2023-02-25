---
section: migration

order: 1

navigationTitle: "Foundation"
navigationIconPath: '/images/brands/foundation.png'
image: '/migration/foundation/header.jpg'
ogImage: '/migration/foundation/og-image.jpg'

title: "How to migrate from Foundation CSS framework to Stylify CSS"
description: "Learn how to migrate effortlessly from the Foundation CSS component framework to Stylify's utility-first CSS and code faster with less code."
---

This guide is here to help you quickly compare the features and syntax of the Foundation component framework with those of Stylify's utility-first CSS, and give you an idea of how to migrate from Foundation to Stylify.

<MigrationNote></MigrationNote>

## Introduction
Foundation is a Framework for any device, medium, and accessibility. Foundation is a family of responsive front-end frameworks that make it easy to design beautiful responsive websites, apps and emails that look amazing on any device.

<MigrationStylifyDescription></MigrationStylifyDescription>

## Selectors and CSS Utilities

<migration-code-block image="foundation.png">
<template #tool>

Foundation Sited provides utilities for properties like shadow, flexbox, visibility, etc:

```html
<div class="float-left shadow show-for-medium">Left</div>
```

</template>
<template #stylify>

<MigrationStylifySelectors></MigrationStylifySelectors>


</template>
</migration-code-block>


## Global Selectors

<migration-code-block image="foundation.png">
<template #tool>

I could not find any information suggesting that  Foundation provides something like dynamic Global Selectors.

</template>
<template #stylify>

<MigrationStylifyCustomSelectors></MigrationStylifyCustomSelectors>

</template>
</migration-code-block>

## Components
<migration-code-block image="foundation.png">
<template #tool>

Foundation is a framework based on components. Therefore, there are plenty of components, such as buttons, badges, forms, tables, menus, etc:

```html
<span class="badge primary">1</span>
<a role="button" class="button radius primary">1</a>
<ul class="menu">
	<li><a href="#">One</a></li>
	<li><a href="#">Two</a></li>
</ul>
```

</template>
<template #stylify>

<MigrationStylifyComponents></MigrationStylifyComponents>

</template>
</migration-code-block>

## Configuration, Customization and Variables
<migration-code-block image="foundation.png">
<template #tool>

Foundation Sites can be configured within SCSS file. If you downloaded the Foundation directly from their website, you can configure it in `_settings.scss` file, otherwise, you have to override imported variables:

```css
$foundation-palette: (
	"primary": #1779ba,
	"secondary": #767676,
	"success": #3adb76,
	"warning": #ffae00,
	"alert": #cc4b37,
);
```

</template>
<template #stylify>

<MigrationStylifyVariables></MigrationStylifyVariables>

</template>
</migration-code-block>

<migration-page-footer></migration-page-footer>
