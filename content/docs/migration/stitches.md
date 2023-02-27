---
section: migration

order: 1

navigationTitle: "Stitches"
navigationIconPath: '/images/brands/stitches.svg'
image: '/migration/stitches/header.jpg'
ogImage: '/migration/stitches/og-image.jpg'

title: "How to migrate from Stitches CSS-in-JS library to Stylify CSS"
description: "Learn how to migrate effortlessly from the Stitches CSS-in-JS to Stylify's utility-first CSS and code faster with less code."
---

This guide is here to help you quickly compare the features and syntax of the Stitches CSS-in-JS library with those of Stylify's utility-first CSS, and give you an idea of how to migrate from Stitches to Stylify.

<MigrationNote></MigrationNote>

## Introduction
Stitches is a CSS-in-JS with near-zero runtime, SSR, multi-variant support, and a best-in-class developer experience.

<MigrationStylifyDescription></MigrationStylifyDescription>

## Selectors and CSS Utilities

<migration-code-block image="stitches.svg">
<template #tool>

When you want to style some element directly, you can use the CSS property:

```jsx
<Button css={{
	borderRadius: '0',
	'&:hover': {
		backgroundColor: 'black',
		color: 'white',
	},
}}>Button</Button>
```

</template>
<template #stylify>

<MigrationStylifySelectors></MigrationStylifySelectors>


</template>
</migration-code-block>


## Global Selectors

<migration-code-block image="stitches.svg">
<template #tool>

Global styles can be defined within Stitches as follows:

```jsx
import { globalCss } from '@stitches/react';

const globalStyles = globalCss({
	'*': { margin: 0, padding: 0 },
});

() => {
	globalStyles();
	return <div ... />
};
```

</template>
<template #stylify>

<MigrationStylifyCustomSelectors></MigrationStylifyCustomSelectors>

</template>
</migration-code-block>

## Components
<migration-code-block image="stitches.svg">
<template #tool>

Stitches allows you to define components in this way:

```jsx
import { styled } from '@stitches/react';

const Button = styled('button', {
	backgroundColor: 'gainsboro',
	borderRadius: '9999px',
	fontSize: '13px',
	padding: '10px 15px',
	'&:hover': {
		backgroundColor: 'lightgray',
	},
});
```

</template>
<template #stylify>

<MigrationStylifyComponents></MigrationStylifyComponents>

</template>
</migration-code-block>

## Configuration, Customization and Variables

<migration-code-block image="stitches.svg">
<template #tool>

Stitches can be configured technically from any place within the application.
You can create a new Stitches instance and reuse it anywhere you need.

Global config example:
```jsx
export const { styled, css } = createStitches({
	theme: {
		colors: {
			gray500: 'hsl(206,10%,76%)',
		},
		space: {
			1: '5px',
		},
		fontSizes: {
			1: '12px',
		},
		fonts: {
			mono: 'Söhne Mono, menlo, monospace',
		},
	// ...
	}
});
```

Local config example:
```jsx
const { styled } = createStitches({
	theme: {
		colors: {
			violet800: 'hsl(252 62% 54.9%)',
		},
	},
});
const Button = styled('button', {
	backgroundColor: '$violet800',
});
```

</template>
<template #stylify>

<MigrationStylifyVariables></MigrationStylifyVariables>
<MigrationStylifyVariablesCssInJs></MigrationStylifyVariablesCssInJs>

</template>
</migration-code-block>

<migration-page-footer></migration-page-footer>
