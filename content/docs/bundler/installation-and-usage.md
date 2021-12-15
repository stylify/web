---
section: bundler

order: 1

navigationTitle: "Installation"

title: "Installation"
description: "Learn how to install and use the @stylify/bundler package."
---

Bundler can be only installed via CLI like NPM or Yarn.

## Installation

```
yarn add -D @stylify/bundler

npm i -D @stylify/bundler
```

## Usage

```js
import { nativePreset } from '@stylify/stylify';
import { Bundler } from '@stylify/bundler';

const bundler = new Bundler({compilerConfig: nativePreset.compiler})

bundler.bundle([
	{
		outputFile: 'path/to/output.css',
		files: ['path/to/layout.html', 'path/to/page.vue']
	}
]);
```

### Files content option

File content option can help you easily collect files into a bundle.
This option allows you to have minimum input files, because these input files can have path to another files and masks using files content option. Thanks to that it searches for paths automatically and you don't have to change config of all depending bundler every time template or component changes. Instead you just add or remove file path in file content option and this change is automatically reflected in all bundles.

<note><template>
For more information about content options see [compiler documentation](/docs/stylify/compiler#contentoptionsprocessors).
</template></note>

<!-- <stylify-ignore> -->
```
// This option expects files paths as string
// When file path starts with /, it is an absolut path, otherwise is relative
@stylify-files[
	/path/to/layout.html
	path/to/template/part.html
]
```
<!-- </stylify-ignore> -->
