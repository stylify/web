---
section: integrations

order: 1

navigationTitle: Node.js
navigationIconPath: '/images/brands/nodejs.svg'

title: Using Stylify CSS in Node.js
description: "Learn how to use the Stylify CSS in the Node.js environment."
---

Stylify can be used directly [@stylify/stylify](/docs/stylify) or via the [@stylify/bundler](/docs/bundler) package.

<note><template>
Integration example for the Node.js can be found in <a href="https://github.com/stylify/integrations-examples/tree/master/nodejs" target="_blank" rel="noopener">integrations examples repository</a>.
</template></note>

## How to integrate the Stylify into the Node.js

You can create your own compliation process or use the [@stylify/bundler](/docs/bundler) package.

### Using @stylify/stylify directly

For more information see [Stylify documentation](/docs/stylify):

```js
import { Compiler } from '@stylify/stylify';

const content = '';

const compiler = new Compiler({
	// https://stylifycss.com/docs/stylify/compiler#variables
	variables: {},
	// https://stylifycss.com/docs/stylify/compiler#macros
	macros: {},
	// https://stylifycss.com/docs/stylify/compiler#components
	components: {},
	// ...
});

const compilationResult = compiler.compile(content);
const css = compilationResult.generateCss();
const mangledContent = compiler.rewriteSelectors(content, compilationResult);
```

### Using @stylify/bundler package

For more information see [bundler documentation](/docs/bundler).
