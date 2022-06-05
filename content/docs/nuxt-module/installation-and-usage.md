---
section: nuxt-module

order: 1

navigationTitle: "Installation"

title: "Installation and usage"
description: "Learn how to install and use the @stylify/nuxt-module."
---

Nuxt module can be installed only via CLI like NPM or Yarn.

<note>
	<strong>@stylify/nuxt-module</strong> can be used only in Nuxt v2. For Nuxt v3 and above checkout <nuxt-link to="/docs/nuxt">@stylify/nuxt</nuxt-link>.
</note>

## Installation

CLI
```bash
yarn add -D @stylify/nuxt-module
npm i -D @stylify/nuxt-module
```

## Usage

Add a buildModule into the nuxt.config.js
```js
buildModules: [
	'@stylify/nuxt-module'
]
```
