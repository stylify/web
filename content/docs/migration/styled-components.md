---
section: migration

order: 1

navigationTitle: "Styled Components"
navigationIconPath: '/images/brands/styled-components.png'
image: '/migration/styled-components/header.jpg'
ogImage: '/migration/styled-components/og-image.jpg'

title: "How to migrate from Styled Components CSS-in-JS library to Stylify CSS"
description: "Learn how to migrate effortlessly from the Styled Components CSS-in-JS to Stylify's utility-first CSS and code faster with less code."
---

This guide is here to help you quickly compare the features and syntax of the Styled Components CSS-in-JS library with those of Stylify's utility-first CSS, and give you an idea of how to migrate from Styled Components to Stylify.

<MigrationNote></MigrationNote>

## Introduction
Styled Components is a library that lets you write actual CSS in your JavaScript. This means you can use all the features of CSS you use and love, including (but by far not limited to) media queries, all pseudo-selectors, nesting, etc.

<MigrationStylifyDescription></MigrationStylifyDescription>

## Selectors and CSS Utilities

<migration-code-block image="styled-components.png">
<template #tool>

I could not find any information suggesting that  Styled Components provides something like dynamic utilities or CSS property like Emotion CSS-in-JS.

</template>
<template #stylify>

<MigrationStylifySelectors></MigrationStylifySelectors>


</template>
</migration-code-block>


## Global Selectors

<migration-code-block image="styled-components.png">
<template #tool>

When defining global styles in Styled Components, you have to create a global style component:
```jsx
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    color: ${props => (props.whiteColor ? 'white' : 'black')};
  }
`

<React.Fragment>
  <GlobalStyle whiteColor />
</React.Fragment>
```

</template>
<template #stylify>

<MigrationStylifyCustomSelectors></MigrationStylifyCustomSelectors>

</template>
</migration-code-block>

## Components
<migration-code-block image="styled-components.png">
<template #tool>

In Styled Components, components are often defined this way:

```jsx
const Title = styled.div`
  color: blue
  font-weight: bold
  @media (max-width: 768px) {
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
<migration-code-block image="styled-components.png">
<template #tool>

In Styled Components CSS you mostly use variables that are defined within the Javascript or some config file or CSS variables.

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

<migration-page-footer></migration-page-footer>
