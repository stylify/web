---
section: migration

order: 1

navigationTitle: "Windi"
navigationIconPath: '/images/brands/windi.svg'
image: '/migration/windi/header.jpg'
ogImage: '/migration/windi/og-image.jpg'

title: "How to migrate from Windi utility-first CSS framework to Stylify CSS"
description: "Learn how to migrate effortlessly from the Windi utility-first CSS framework to Stylify CSS and code faster with less code."
---

This guide is here to help you quickly compare the features and syntax of the Windi utility-first CSS framework with those of Stylify, and give you an idea of how to migrate from Windi to Stylify.

<MigrationNote></MigrationNote>

## Introduction

Windi CSS is an on-demand alternative to Tailwind, which provides faster load times, full compatibility with Tailwind v2.0, and a bunch of additional cool features.

<MigrationStylifyDescription></MigrationStylifyDescription>


## Selectors and CSS Utilities

<migration-code-block image="windi.svg">
<template #tool>

In Windi, you can use utilities directly on the element. Selectors (groups) can also contain a space:

```jsx
<div class="
	py-8 px-8 max-w-sm mx-auto
	sm:(py-4 flex items-center space-y-0 space-x-6)
">
</div>
```

</template>
<template #stylify>

<MigrationStylifySelectors></MigrationStylifySelectors>


</template>
</migration-code-block>


## Global Selectors

<migration-code-block image="windi.svg">
<template #tool>

I could not find any information suggesting that  Windi provides something like dynamic Global Selectors.

</template>
<template #stylify>

<MigrationStylifyCustomSelectors></MigrationStylifyCustomSelectors>

</template>
</migration-code-block>

## Components
<migration-code-block image="windi.svg">
<template #tool>

In Windi, components be defined within a plugin like this:

```js
import plugin from 'windicss/plugin'

plugin(({ addComponents }) => {
	addComponents({
		'.btn': {
			padding: '.5rem 1rem',
			borderRadius: '.25rem',
		},
	})
})
```

You can also define a shortcut:
```js
export default {
	shortcuts: {
		'btn': {
			'color': 'white',
			'@apply': 'py-2 px-4 font-semibold rounded-lg',
			'&:hover': {
				'@apply': 'bg-green-700',
				'color': 'black',
			},
		},
	},
}
```

</template>
<template #stylify>

<MigrationStylifyComponents></MigrationStylifyComponents>

</template>
</migration-code-block>

## Configuration, Customization and Variables
<migration-code-block image="windi.svg">
<template #tool>

In Windi you configure a theme in the config file.

```jsx
import { defineConfig } from 'windicss/helpers'
import colors from 'windicss/colors'
import plugin from 'windicss/plugin'

export default defineConfig({
	darkMode: 'class',
	theme: {
		extend: {
			screens: {
				'sm': '640px',
			},
			colors: {
				blue: colors.sky,
			},
			fontFamily: {
				sans: ['Graphik', 'sans-serif'],
			},
			spacing: {
				128: '32rem',
			},
			borderRadius: {
				'4xl': '2rem',
			},
		},
	},
})
```

</template>
<template #stylify>

<MigrationStylifyVariables></MigrationStylifyVariables>

</template>
</migration-code-block>

<migration-page-footer></migration-page-footer>
