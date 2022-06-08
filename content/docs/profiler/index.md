---
slug: 'profiler'
section: profiler

order: 0

navigationTitle: "@stylify/profiler"

title: "@stylify/profiler"
description: "Profiler is a tool it's purpose is to show you some information about what is happening under the hood when you use the Stylify."
---

Profiler is a tool it's purpose is to show you some information about what is happening under the hood when you use the Stylify.

It provides information about the Runtime and the Compiler such as Variables list, CSS size or serialized Compilation Result.

![image alt text](/images/docs/profiler/screen1.png)
![image alt text](/images/docs/profiler/screen2.png)

## Installation

Profiler can be used directly through CDN or installed using CLI like NPM or YARN.

CLI:
```
yarn add -D @stylify/profiler
npm i -D @stylify/profiler
```

CDN:

```html
<script src="https://cdn.jsdelivr.net/npm/@stylify/profiler@latest/dist/profiler.min.js"></script>
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

## Configuration

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

## Creating extension

You can easily extend profiler by creating your own extension.

Under the hood profiler uses [Preact.js](https://preactjs.com/) for viewing data and interaction. Preact.js ships inside the Profiler in order to minimize dependency conflicts.

When creating an extension you can use [pre-styled elements](https://github.com/stylify/packages/tree/master/packages/profiler/src/styledElements).

Bellow is an example of a simple extension:
```js
import { Card, CardTitle, ProfilerExtensionPropsInterface, preact, utils } from '@stylify/profiler';

export class MyExtension extends preact.Component {

	static title = 'My extension';
	static icon = ``; // SVG icon - optional, but variable should be provided

	constructor() {
		super();
		this.state = {
			myData: []
		};
		window.addEventListener('load', () => {
			this.setState({
				// Utils will get data from script elements with a class '.stylify-profiler-data'
				// In order to use myExtension data you must provide them
				// Usage of script elements with json is not required. You can use any other data source you want.
				myData: utils.getProfilerDataFromPage('myExtension').myData
			});
		});
	}

	render() {
		return (
			// Use fragments instead of wrapping element
			<>
				<Card>
					<CardTitle>My Data</CardTitle>
					{this.state.myData.map((item) => {
						return <p>{item}</p>;
					})}
				</Card>
			</>
		);
	}

}
```

You can provide the data for the extension as follows:

```html
<script class="stylify-profiler-data" type="application/json">
{
	"myExtension": {
		"myData": [1, 2, 3]
	}
}
</script>
```

Extension can be added into the profiler like this:

```js
import { Profiler } from '@stylify/profiler';

// You can register it directly during initialization
const profiler = new Profiler({
	extensions: [MyExtension]
})

// Or add it separately
profiler.addExtension(MyExtension);
```
