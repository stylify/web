---
section: migration

order: 1

navigationTitle: "Emotion"
navigationIconPath: '/images/brands/emotion.png'
image: '/migration/emotion/header.jpg'
ogImage: '/migration/emotion/og-image.jpg'

title: "How to migrate from Emotion CSS-in-JS library to Stylify CSS"
description: "Learn how to migrate effortlessly from the Emotion CSS-in-JS to Stylify's utility-first CSS and code faster with less code."
---

This guide is here to help you quickly compare the features and syntax of the Emotion CSS-in-JS library with those of Stylify's utility-first CSS, and give you an idea of how to migrate from Emotion to Stylify.

<MigrationNote></MigrationNote>

## Introduction
Emotion is a library designed for writing CSS styles with JavaScript. It provides powerful and predictable style composition in addition to a great developer experience with features such as source maps, labels, and testing utilities. Both string and object styles are supported.

<MigrationStylifyDescription></MigrationStylifyDescription>

## Selectors and CSS Utilities

<migration-code-block image="emotion.png">
<template #tool>

In Emotion, you can use CSS prop to style element directly like this:
```jsx
<div css={css`
	color: blue;
	font-weight: bold;
	@media (min-width: 640px) {
		color: red;
	}
`}></div>
```

</template>
<template #stylify>

<MigrationStylifySelectors></MigrationStylifySelectors>


</template>
</migration-code-block>


## Global Selectors

<migration-code-block image="emotion.png">
<template #tool>

Sometimes we need to style some parts of the application globally. To do that within the Emotion, we need to use the Global component:
```jsx
import { Global, css } from '@emotion/react'

render(
	<Global styles={css`
		.some-class {
			color: hotpink !important;
		}
	`}/>
)
```

</template>
<template #stylify>

<MigrationStylifyCustomSelectors></MigrationStylifyCustomSelectors>

</template>
</migration-code-block>

## Components
<migration-code-block image="emotion.png">
<template #tool>

In Emotion, components are often defined this way:

```jsx
const Title = styled.h1`
	color: blue
	font-weight: bold
	@media (max-width: 640px) {
		color:red
	}
`;
<Title>Hello World!🎉</Title>
```

</template>
<template #stylify>

<MigrationStylifyComponents></MigrationStylifyComponents>

</template>
</migration-code-block>

## Configuration, Customization and Variables
<migration-code-block image="emotion.png">
<template #tool>

In Emotion CSS you mostly use variables that are defined within the Javascript or some config file or CSS variables.

```jsx
const color = 'blue';
const Title = styled.h1`
	color: ${color},
	font-size: var(--font-size)
`;
```

</template>
<template #stylify>

<MigrationStylifyVariables></MigrationStylifyVariables>
<MigrationStylifyVariablesCssInJs></MigrationStylifyVariablesCssInJs>

</template>
</migration-code-block>

<migration-page-footer />
