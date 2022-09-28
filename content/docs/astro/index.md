---
slug: 'astro'
section: astro

order: 0

navigationTitle: "@stylify/astro"

title: "@stylify/astro"
description: "@stylify/astro simplifies Stylify integration into Astri.build."
---

Astro integration simplifies Stylify integration into the Astro.build.

<stack-blitz-link link="https://stackblitz.com/edit/stylify-astro-example"></stack-blitz-link>

## Installation

Integration can be installed only via CLI like NPM or Yarn:
```
yarn add @stylify/astro
npm i @stylify/astro
```

## Usage

Add a buildModule into the `astro.config.mjs`:

```js
import { defineConfig } from 'astro/config';
import stylify from '@stylify/astro';

export default defineConfig({
	integrations: [stylify()]
});
```

## Configuration

Configuration is optional. If the "bundles" option is not set, all files within the src directory will be compiled and a single `stylify.css` file will be generated and injected to all pages.

Configuration in `astro.config.mjs`:
```js
stylify({
	// https://stylifycss.com/docs/unplugin#configuration
})
```

You can also configure Stylify using custom file or `stylify.config.js` created next to the `astro.config.mjs`.

```js
import { defineConfig } from '@stylify/astro';

export default defineConfig({
	// https://stylifycss.com/docs/unplugin#configuration
});
```
