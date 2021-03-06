---
section: integrations

order: 1

navigationTitle: "React.js"
navigationIconPath: '/images/brands/react.png'

title: "React.js integration"
description: "Integrate Stylify CSS into the the React.js."
---


Stylify can be used with React.js in varous ways:
- With Vite.js (this example)
- [Next.js](/docs/integrations/nextjs)

<stack-blitz-link link="https://stackblitz.com/edit/stylify-react-vite?file=src%2FApp.jsx"></stack-blitz-link>


<note><template>
Integration example for the Vite.js can be found in <a href="https://github.com/stylify/integrations-examples/tree/master/reactjs" target="_blank" rel="noopener">integrations examples repository</a>.
</template></note>

## How to integrate the Stylify with React.js and Vite.js

The example bellow works with the Vite - React.js template. You can however use the example bellow and configure it for Svelte, Vue and any other framework you use.

First install the [@stylify/unplugin](/docs/unplugin) package using NPM or Yarn:

```
npm i -D @stylify/unplugin
yarn add -D @stylify/unplugin
```

Next add the following configuration into the `vite.config.js`:

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { vitePlugin } from '@stylify/unplugin';

const stylifyPlugin = vitePlugin({
    transformIncludeFilter: (id) => {
		return id.endsWith('js') || id.endsWith('ts') || id.endsWith('tsx') || id.endsWith('jsx');
	},
    bundles: [{
        outputFile: './src/stylify.css',
        files: ['./src/**/*.js', './src/**/*.ts', './src/**/*.jsx', './src/**/*.tsx'],
    }],
    extend: {
        bundler: {
            compiler: {
                selectorsAreas: [
                    '(?:^|\\s+)className="([^"]+)"',
                    '(?:^|\\s+)className=\'([^\']+)\'',
                    '(?:^|\\s+)className=\\{`((?:.|\n)+)`\\}'
                ]
            }
        }
    }
});

export default defineConfig({
	plugins: [stylifyPlugin, react()]
});
```

Now you can add the path to the generated `src/stylify.css` into `src/main.js` file:

```js
// ..
import './assets/stylify.css';
```

Now run `yarn dev`. The `src/stylify.css` file will be generated.

## Configuration
There is a lot of options you can configure:
- [@stylify/unplugin](/docs/unplugin)
- [Compiler config](/docs/stylify/compiler)

<where-to-next />
