---
section: integrations

order: 1

navigationTitle: "Nuxt.js"
navigationIconPath: '/images/brands/nuxtjs-icon.svg'

title: "Nuxt.js integration"
description: "Learn how to integrate the Stylify utilify-first CSS generator into the the Nuxt.js."
---

For easier integration into the Nuxt.js, there is a package named [@stylify/nuxt-module](/docs/nuxt-module).

It is focused on seamless integration and also provides an extension for profiler that will show you what is your configuration or what the size of your CSS is.

<stack-blitz-link link="https://stackblitz.com/edit/stylify-nuxtjs-template?devtoolsheight=33&file=pages/index.vue"></stack-blitz-link>

<note><template>
Integration example for the Nuxt.js can be found in <a href="https://github.com/stylify/integrations-examples/tree/master/nuxtjs" target="_blank" rel="noopener">integrations examples repository</a>.
</template></note>

## How to integrate Stylify into the Nuxt.js

First install the package using CLI:
```
npm i -D @stylify/nuxt-module

yarn add -D @stylify/nuxt-module
```

Than add a build module into the `nuxt.config.js` build modules section:
```js
buildModules: [
	'@stylify/nuxt-module'
]
```

Now you can start using Stylify with Nuxt.js.

## Configuration
There is a lot of options you can configure. See [@stylify/nuxt-module](/docs/nuxt-module/configuration).
For the bundler configuration checkout the [@stylify/bundler page](/docs/bundler/configuration).
For the Compiler config, checkout the [Compiler documentation](/docs/stylify/compiler).

In case you will want to mangle selectors, you will need to add the `v-bind:class` attribute into the [selectorsAreas](/docs/stylify/compiler#rewriteselectorsareas) in the Compiler config if you use this attribute.

```js
nativePreset.compiler.selectorsAreas = [
	'(?:^|\\s+)(?:v-bind)?:class="([^"]+)"',
	'(?:^|\\s+)(?:v-bind)?:class=\'([^\']+)\''
];
```
