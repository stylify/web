---
section: migration

order: 1

navigationTitle: "Tailwind"
navigationIconPath: '/images/brands/tailwind.svg'
image: '/migration/tailwind/header.jpg'
ogImage: '/migration/tailwind/og-image.jpg'

title: "How to migrate from Tailwind Utility-First CSS framework to Stylify CSS"
description: "Learn how to migrate effortlessly from the Tailwind utility-first CSS framework to Stylify CSS and code faster with less code."
---

This guide is here to help you quickly compare the features and syntax of the Tailwind utility-first CSS framework with those of Stylify, and give you an idea of how to migrate from Tailwind to Stylify.

<MigrationNote></MigrationNote>

## Introduction

Tailwind is a library that helps you rapidly build modern websites without ever leaving your HTML. It's a utility-first CSS framework packed with classes like flex, `pt-4`, `text-center` and `rotate-90` that can be composed to build any design, directly in your markup.

<MigrationStylifyDescription></MigrationStylifyDescription>


## Selectors and CSS Utilities

<migration-code-block image="tailwind.svg">
<template #tool>

Tailwind provides a lot of flexible CSS utilities for properties like color, spacing, typography, visibility, etc:

```html
<div class="
	bg-slate-100
	rounded-xl
	p-8
	top-[117px]
	md:flex
"></div>
```

</template>
<template #stylify>

<MigrationStylifySelectors></MigrationStylifySelectors>


</template>
</migration-code-block>


## Global Selectors

<migration-code-block image="tailwind.svg">
<template #tool>

When you want to select for example child elements in Tailwind, you can use arbitrary variants for that:

```html
<div class="
	[&>*]:underline
	[&>p]:mt-0
"></div>
```

</template>
<template #stylify>

<MigrationStylifyCustomSelectors></MigrationStylifyCustomSelectors>

</template>
</migration-code-block>

## Components
<migration-code-block image="tailwind.svg">
<template #tool>

Components in Tailwind can be defined using `@apply` rule. Also they can be nested into CSS layers:

```css
@layer components {
	.btn-primary {
		@apply py-2 px-4 bg-blue-500 text-white;
	}
}
```

Tailwind also provides a lot of copy&paste components on their website.

</template>
<template #stylify>

<MigrationStylifyComponents></MigrationStylifyComponents>

</template>
</migration-code-block>

## Configuration, Customization and Variables
<migration-code-block image="tailwind.svg">
<template #tool>

Tailwind can be configured within a config file by extending/overriding an existing theme:

```js
module.exports = {
	content: ['./src/**/*.{html,js}'],
	theme: {
		colors: {
			'blue': '#1fb6ff',
		},
		fontFamily: {
			sans: ['Graphik', 'sans-serif'],
		},
		extend: {
			spacing: {
				'8xl': '96rem',
				'9xl': '128rem',
			},
			borderRadius: {
				'4xl': '2rem',
			}
		}
	},
}
```

</template>
<template #stylify>

<MigrationStylifyVariables></MigrationStylifyVariables>

</template>
</migration-code-block>

<migration-page-footer></migration-page-footer>
