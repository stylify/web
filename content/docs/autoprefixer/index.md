---
slug: 'autoprefixer'
section: autoprefixer

order: 0

navigationTitle: "@stylify/autoprefixer"

title: "@stylify/autoprefixer"
description: "@stylify/autoprefixer package for PostCSS Autoprefixer SSR integration."
---

Autoprefixer is a package that uses PostCSS to generate prefixes map for your CSS.

This map then can used be inside an SSR applications or inside a browser when you want to generate prefixed CSS on demand but don't want to slow down the application with the postcss post processing.


## Installation
Autoprefixer can be installed only via CLI like NPM or Yarn.

```
yarn add @stylify/autoprefixer

npm i @stylify/autoprefixer
```

## Usage
Autoprefixer is composed from a Prefixes Generator and Prefixer.

Prefixes Generator takes a Compilation Result from the Compiler and generates all prefixes according to PostCSS configuration within the project.

Prefixer then takes the map with prefixes and merges it with selector properties.

```js
// Prefixes server side pregeneration simulation
import { Compiler, nativePreset } from '@stylify/stylify';
import { PrefixesGenerator, Prefixer } from '@stylify/autoprefixer';

const content = '';

// ------- Build part (server side) -----
// 1. Compile content
let compilationResult = new Compiler(nativePreset.compiler).compile(content);

// 2. Create prefixes map
// The prefixes map is an object containing prefixes.
// You can save it as a json file ant use it later on.
const prefixesMap = new PrefixesGenerator().createPrefixesMap(compilationResult);

// ------- In the browser or SSR App -----
// 3. Add the following hooks
// Compiler receives CompilationResult as second argument, that can be empty but configured
// there is a hook onPrepareCssRecord, in which we add another hook onAddProperty
// this makes shure, that when a property is added, all related prefixes are added.
// See https://stylify.dev/docs/stylify/compiler for more information about hooks.
const prefixer = new Prefixer(prefixesMap);
let compilationResult = new Compiler(nativePreset.compiler).compile(
	content,
	new CompilationResult({
		onPrepareCssRecord: (cssRecord) => {
			cssRecord.onAddProperty = (propertyName, propertyValue) => {
				return prefixer.prefix(propertyName, propertyValue);
			}
		}
	})
);
```
