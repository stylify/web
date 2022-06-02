---
section: nuxt

order: 1

navigationTitle: "Installation"

title: "@stylify/nuxt installation"
description: "How to install and use @stylify/nuxt."
---

Nuxt module can be installed only via CLI like NPM or Yarn.

<note>
	<strong>@stylify/nuxt</strong> can be used only in Nuxt v3 and above. For Nuxt v2 checkout <nuxt-link to="/docs/nuxt-module">@stylify/nuxt-module</nuxt-link>.
</note>

## Installation

```
yarn add @stylify/nuxt
npm i @stylify/nuxt
```

## Usage

Add a buildModule into the nuxt.config.js
```js
buildModules: [
	'@stylify/nuxt-module'
]
```
