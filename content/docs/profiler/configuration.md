---
section: profiler

order: 2

navigationTitle: "Configuration"

title: "Configuration"
configuration: "Learn how to configure the @stylify/profiler."
---

Profiler can be configured inside a browser or during an initialization.

Own initialization:
```js
import { Profiler } from '@stylify/profile';

const config = {
	buttonPosition: 'bottom:40px; left:40px;',
	// See creating extension page
	extensions: [MyExtension]
};

const profiler = new Profiler(config);

profiler.configure(config);
```

In the browser

```js
Stylify.Profiler.configure({
	// ...
});
```
