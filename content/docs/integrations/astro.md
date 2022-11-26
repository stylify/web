---
section: integrations

order: 1

navigationTitle: Astro
navigationIconPath: '/images/brands/astro.svg'
image: '/integrations/astro/header.jpg'
ogImage: '/integrations/astro/og-image.jpg'

title: "Using Stylify CSS in Astro.build"
description: "Learn how to use Stylify CSS with the Astro.build. Code your Astro.build website faster with Stylify CSS."
howToSchemaTitle: 'How to use Stylify CSS in Astro.build.'
howToSchemaSteps: [
	{
		"name": "Installation",
		"text": "Install @stylify/astro package using CLI like YARN or NPM.",
		"url": "/integrations/astro#installation",
	},
	{
		"name": "Usage",
		"text": "Add Stylify CSS build module into astro.config.mjs.",
		"url": "#usage",
	},
	{
		"name": "Configuration",
		"text": "Extend Stylify CSS configuration however you need. Configure variables, components, custom selectors and a lot more.",
		"url": "#configuration",
	},
]
---

Astro.build is a framework that let's you build your website faster.

@stylify/astro integration simplifies Stylify CSS integration into the Astro.build.

<stack-blitz-link link="stylify-astro-example"></stack-blitz-link>

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
