---
section: integration

order: 1

navigationTitle: "Nuxt.js"
navigationIconPath: '/images/brands/nuxtjs-icon.svg'

title: "Nuxt.js integration"
description: "Learn how to integrate Stylify easily into the Nuxt.js."
---

For easier integration into the Nuxt.js, there is a package named [@stylify/nuxt-module](/docs/nuxt-module).

It is focused on seamless integration and also provides an extension for profiler that will show you what is your configuration or what the size of your CSS is.

## Installation
First install the package using CLI
```
npm i -D @stylify/nuxt-module

yarn add -D @stylify/nuxt-module
```

Than add a build module into the `nuxt.config.js` build modules section
```js
buildModules: [
	'@stylify/nuxt-module'
]
```

Now you can start using Stylify with Nuxt.js.

## Configuration
There is a lot of options you can configure. See [@stylify/nuxt-module](/docs/nuxt-module/configuration).
