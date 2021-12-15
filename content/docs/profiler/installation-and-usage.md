---
section: profiler

order: 1

navigationTitle: "Installation"

title: "Installation and usage"
description: "Learn how to install and use the @stylify/profiler."
---

Profiler can be used directly through CDN or installed using CLI like NPM or YARN.

## Installation

CLI:
```
yarn add -D @stylify/profiler
npm i -D @stylify/profiler
```

CDN:

```html
<script src="https://unpkg.com/@stylify/profiler@0.0.2/dist/profiler.min.js"></script>
```

## Usage
Profiler can be used only in the browser.
Primarily it takes data from Runtime. When Runtime is not detected, it searches for data in script tags with a class `stylify-profiler-data`. These script tags must provide a valid json that is then parsed and used inside the profiler.

```js
import { Runtime } from '@stylify/runtime';
import { Profiler } from '@stylify/profiler';

// Profiler should be loaded before Runtime is initialized (if Runtime is present)
new Profiler();
new Runtime();
```
