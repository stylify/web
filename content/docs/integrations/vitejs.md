---
section: integrations

order: 1

navigationTitle: "Vite.js"
navigationIconPath: '/images/brands/vitejs.svg'

title: Using Stylify CSS with Vite.js
description: "Learn how to use the Stylify CSS with the Vite.js."
---

Stylify can be integrated into the Vite.js using @stylify/bundler.

<stack-blitz-link link="https://stackblitz.com/edit/stylify-vite-example"></stack-blitz-link>

## How to integrate the Stylify into the Vite.js

The example bellow works with the Vite template. You can however use the example bellow and configure it for Svelte, React, Vue, Angular, Lit and any other framework you want.

First install the [@stylify/unplugin](/docs/unplugin) package using NPM or Yarn:

```
npm i -D @stylify/unplugin
yarn add -D @stylify/unplugin
```

Next add the following configuration into the `vite.config.js`:

```js
import { defineConfig } from 'vite';
import { vitePlugin } from '@stylify/unplugin';

const stylifyPlugin = vitePlugin({
  bundles: [{ files: ['./*'], outputFile: './stylify.css' }],
  // Optional - https://stylifycss.com/docs/unplugin
  compiler: {},
});

export default defineConfig(({ mode }) => ({
  plugins: [stylifyPlugin],
}));
```

Now you can add the path of the generated `stylify.css` into `main.js` file:

```js
import './stylify.css';
```

If you use the Vite.js commands now you will get the `stylify.css` file generated.

<where-to-next />
