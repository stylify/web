---
section: integrations

order: 1

navigationTitle: "Cake PHP"
navigationIconPath: '/images/brands/cakephp.png'

title: Using Stylify CSS in Cake PHP
description: "Learn how to integrate the Stylify CSS into the Cake PHP."
---

Because Cake PHP doesn't ship with any bundler, you can integrate Stylify into the Cake PHP using the Bundler package.

<note><template>
Integration example for the Cake PHP can be found in <a href="https://github.com/stylify/integrations-examples/tree/master/cakephp" target="_blank" rel="noopener">integrations examples repository</a>.
</template></note>

## How to integrate the Stylify into the Cake PHP

In the example bellow we will use the Bundler package on its own.

Because there is no package.json, we need to creat it:
```
yarn init
npm init
```

Install the [@stylify/bundler](/docs/bundler) package using NPM or Yarn:

```
npm i -D @stylify/bundler
yarn add -D @stylify/bundler
```

Next, create a file, for example `stylify.js` in the root:

```js
const { Bundler } = require('@stylify/bundler');

const isDev = process.argv[process.argv.length - 1] === '--w';
const bundler = new Bundler({
    watchFiles: isDev,
    // Optional
    compiler: {
        mangleSelectors: !isDev,
        // https://stylifycss.com/docs/stylify/compiler#variables
        variables: {},
        // https://stylifycss.com/docs/stylify/compiler#macros
        macros: {},
        // https://stylifycss.com/docs/stylify/compiler#components
        components: {},
        // ...
    }
});

// This bundles all CSS into one file
// You can configure the Bundler to bundle CSS for each page separately
// See bundler link bellow
bundler.bundle([
  { files: ['./templates/**/*.php', './src/**/*.php'], outputFile: './webroot/css/stylify.css' },
]);
```

And the last step is to add scripts into the `package.json`:

```json
"scripts": {
	"build": "node bundles.js",
	"watch": "node bundles.js --w"
}
```

Now you can add the path to `stylify.css` file into the `templates/layouts/default.php`:

```php
<?= $this->Html->css(['stylify']) ?>
```

You can customize the build above however you want.

<where-to-next package="bundler" />
