---
section: get-started

order: 3

navigationTitle: "Bundling files"

title: "Bundling files"
description: "How to bundle CSS files for any web project you want."
---

Stylify provides [@stylify/bundler](/docs/bundler) with which you can easily generate CSS files for your project. The easiest way is to generate all CSS into one file. However un case you want, you can generate bundle for each page separately.

<note>
You can bundle any file type like PHP, JS, TXT, YAML and etc. Stylify sees any content inside those files only as a text.
</note>

```js
import { nativePreset } from '@stylify/stylify';
import { Bundler } from '@stylify/bundler';

// Adding variablees and macros into the default config
nativePreset.compiler.variables = {};
// Custom macro
nativePreset.compiler.macros['ml:(\\S+?)'] = function (macroMatch, cssProperties): void {
	// ml:24px => will create => margin-left: 24px
	cssProperties.add('margin-left', macroMatch.getCapture(0));
};

const bundler = new Bundler({compiler: nativePreset.compiler})

bundler.bundle([
    {
        outputFile: 'path/to/output.css',
        files: ['path/to/layout.html', 'path/to/page.html']
    }
]);
```
