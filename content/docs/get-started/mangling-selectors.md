---
section: get-started

order: 3

navigationTitle: "Mangling selectors"

title: "Mangling Selectors"
description: "How to mangle html class selectors using the Stylify Compiler."
---

Selectors can be mangled using Compiler. This process works only on the backend side or during a build.

<note>
Selectors can also be rewritten inside a browser by rewriting the document HTML but it is kinda missing the point of this optimization as it slows down the page loading time.
</note>

The process is done in two steps:
1. Compile file content (or multiple files)
2. Mangle selectors for each processed file

<note><template>
You can create the process on your own or use the [@stylify/bundler](/docs/bundler) package.
</template></note>

```js
import { Compiler, nativePreset } from '@stylify/stylify';

const content = '';
const compilerConfig = nativePreset.compiler;

// OPTIONAL
// In case, you use any framework specific class attribute
// you must configure it because by default, Stylify rewrites
// selectors only inside class="" and class=''
compilerConfig.rewriteSelectorsAreas = [
	// Vue.js
	'(?:^|\\s+)(?:v-bind)?:class="([^"]+)"'
	// React
	'(?:^|\\s+)className="([^"]+)"', '(?:^|\\s+)className=\\{`((?:.|\n)+)`\\}'
	// Angular
	'(?:^|\\s+)[className]="([^"]+)"', '(?:^|\\s+)[ngClass]="{((?:.|\n)+)}"'
	// Nette framework
	'(?:^|\\s+)n:class="([^"]+)"'
	// ...
];

// Create Compiler instance
const compiler = new Compiler(compilerConfig);
// Process content, get selectors
const compilationResult = compiler.compile(content);

// Mangle content
const mangledContent = compiler.rewriteSelectors(content, compilationResult);
// Generate CSS
const css = compilationResult.generateCss();

```
