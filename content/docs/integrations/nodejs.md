---
section: integrations

order: 1

navigationTitle: Node.js
navigationIconPath: '/images/brands/nodejs.svg'

title: "Node.js integration"
description: "Learn how to use the Stylify utility-first CSS generator in the Node.js environment."
---

Stylify can be used in two ways in the Node.js environment. Directly through [@stylify/stylify](/docs/stylify) or using the [@stylify/bundler](/docs/bundler) package.

<note><template>
Integration example for the Node.js can be found in <a href="https://github.com/stylify/integrations-examples/tree/master/nodejs" target="_blank" rel="noopener">integrations examples repository</a>.
</template></note>

## How to integrate the Stylify into the Node.js

You can either use Stylify directly or create a Bundler config.

### Using @stylify/stylify directly

For more information see [stylify documentation](/docs/stylify):

```js
import { Compiler, nativePreset } from '@stylify/stylify';

const content = '';

const compiler = new Compiler(nativePreset.compiler);
const compilationResult = compiler.compile(content);
const css = compilationResult.generateCss();
const mangledContent = compiler.rewriteSelectors(content, compilationResult);
```

### Using @stylify/bundler package

For more information see [bundler documentation](/docs/bundler):

```js
import { nativePreset } from '@stylify/stylify';
import { Bundler } from '@stylify/bundler';

const bundler = new Bundler({compilerConfig: nativePreset.compiler})

bundler.bundle([
	{
		outputFile: 'path/to/output.css',
		files: ['path/to/layout.html', 'path/to/page.html']
	}
]);
```
