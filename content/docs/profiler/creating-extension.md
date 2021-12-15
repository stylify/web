---
section: profiler

order: 2

navigationTitle: "Creating extension"

title: "Creating extension"
description: "Learn how to create an extension for the stylify/profiler."
---

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
