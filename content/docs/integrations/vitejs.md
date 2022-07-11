---
section: integrations

order: 1

navigationTitle: "Vite.js"
navigationIconPath: '/images/brands/vitejs.svg'

title: "Vite.js integration"
description: "Learn how to use the Stylify utilify-first CSS generator along with the Vite.js."
---

Stylify can be integrated into the Vite.js using @stylify/bundler.

<stack-blitz-link link="https://stackblitz.com/edit/stylify-vitejs-vue-template?devtoolsheight=33&file=src/App.vue"></stack-blitz-link>


<note><template>
Integration example for the Vite.js can be found in <a href="https://github.com/stylify/integrations-examples/tree/master/vitejs" target="_blank" rel="noopener">integrations examples repository</a>.
</template></note>

## How to integrate the Stylify into the Vite.js

The example bellow works with the Vite - Vue.js template. You can however use the example bellow and configure it for Svelte, React and any other framework you use.

First install the [@stylify/unplugin](/docs/unplugin) package using NPM or Yarn:

```
npm i -D @stylify/unplugin
yarn add -D @stylify/unplugin
```

Next add the following configuration into the `vite.config.js`:

```js
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { vitePlugin } from '@stylify/unplugin';

const stylifyPlugin = vitePlugin({
	transformIncludeFilter: (id) => id.endsWith('vue'),
	bundles: [{
		files: ['./src/**/*.vue'],
		outputFile: './src/assets/stylify.css'
	}]
});

export default defineConfig(({ mode}) => {
  return {
    plugins: [stylifyPlugin, vue()]
  }
});
```

Now you can add the path of the generated `stylify.css` into `src/main.js` file:

```js
import { createApp } from 'vue'
import App from './App.vue'
import './assets/stylify.css';

createApp(App).mount('#app')
```

If you use the Vite.js commands now you will get the `stylify.css` file generated.

<where-to-next />
