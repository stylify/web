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

First install the [@stylify/bundler](/docs/bundler) package using NPM or Yarn:

```
npm i -D @stylify/bundler

yarn add -D @stylify/bundler
```

Next add the following configuration into the `vite.config.js`:

```js
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { nativePreset } from '@stylify/stylify';
import { Bundler } from '@stylify/bundler';

export default defineConfig(({ mode}) => {
  // Optional configuration.
  nativePreset.compiler.variables = {
    blue: 'steelblue'
  };

  // Create a new Bundler instance.
  const bundler = new Bundler({
    compiler: nativePreset.compiler,
    watchFiles: mode === 'development'
  });

  // You can customize bundles however you want.
  const bundle = async () => {
    bundler.bundle([
      {
        files: ['./src/**/*.vue'],
        outputFile: './src/assets/stylify.css'
      }
    ]);
    return bundler.waitOnBundlesProcessed();
  };

  const stylifyBundlerPlugin = () => {
    return {
      name: 'stylify',
      options: bundle
    }
  };

  // Use the Stylify plugin.
  return {
    plugins: [vue(), stylifyBundlerPlugin()]
  }
})
```

Now you can add the path to the generated `stylify.css` into `src/main.js` file:

```js
import { createApp } from 'vue'
import App from './App.vue'
import './assets/stylify.css';

createApp(App).mount('#app')
```

If you use the Vite.js commands now you will get the `stylify.css` file generated.

## Configuration

The example above uses the [@stylify/bundler](/docs/bundler) package and the configuration can be found inside that package documentation.
For the Compiler config, checkout the [Compiler documentation](/docs/stylify/compiler).
