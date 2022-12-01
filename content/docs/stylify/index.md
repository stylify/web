---
slug: 'stylify'
section: stylify

order: 0

navigationTitle: "@stylify/stylify"

title: "@stylify/stylify"
description: "Stylify is a Library that generates CSS dynamically based on what you write."
---

Stylify generates CSS dynamically based on what you write. It can be used directly in the browser or in a Node.js environment.

Stylify is inspired by Tailwind and Tachynos with the focus on utility classes and pushes the idea even further. Unlike Bootstrap, Foundation or the Bulma it doesn't ship with pregenerated CSS.
Stylify allow developers to define flexible macros, that matches selectors and according to the matches it generates CSS. With this approach, you can define one macro and use it for generating countless variants of selectors and therefore CSS properties without the repetative configuration of new selectors or dimensions.

Stylify core size is around <strong>20 Kb</strong>. When a [Native Preset](/docs/stylify/native-preset) is included, the size is around 28 Kb non Gzipped. Thanks to this size Stylify CSS won't slow down build of your application.

Stylify is a core package for all other packages. It consist of Compiler, Runtime and a Native preset.

Learn [how to get started with Stylify](/docs/get-started) or check out [how to integrate Stylify CSS into an existing project](/docs/get-started/migrating-to-stylify) will help.

## Installation
Stylify can be used through CDN or installed via CLI like Yarn or NPM.

### CDN

```html
<script src="https://cdn.jsdelivr.net/npm/@stylify/stylify@latest/dist/stylify.min.js"></script>
```

### CLI

```shell
npm i -D @stylify/stylify
yarn add -D @stylify/stylify
```

## Usage

Below is a list of guides on how to use Stylify CSS along with multiple tools. If you haven't found an adequate guide, you are more than welcome to extend Stylify CSS docs.

<integration-blocks />
