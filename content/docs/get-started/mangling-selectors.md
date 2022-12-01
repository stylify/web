---
section: get-started

order: 3

navigationTitle: "Mangling selectors"

title: "Mangling Selectors"
description: "How to mangle HTML class selectors using the Stylify CSS Compiler."
---

When you want to mangle selectors, you must set the compiler option => `mangleSelectors: true`.

The example below is for a case when you would want to do some custom compilation.
Packages like [@stylify/bundler](/docs/bundler), [@stylify/unplugin](/docs/unplugin), [@stylify/nuxt](/docs/nuxt), [@stylify/astro](/docs/astro) uses the same process internaly (automaticaly).

```js
import { Compiler } from '@stylify/stylify';

const content = '';

const compiler = new Compiler({
	mangleSelectors: true
});

const compilationResult = compiler.compile(content);
const mangledContent = compiler.rewriteSelectors(content, compilationResult);
const css = compilationResult.generateCss();
```
