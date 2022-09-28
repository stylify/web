---
section: integrations

order: 1

navigationTitle: Astro
navigationIconPath: '/images/brands/astro.svg'

title: "Using Stylify CSS in Astro.build"
description: "Learn how to use Stylify CSS with the Astro."
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

Checkout the [@stylify/astro](/docs/astro#configuration) package.
