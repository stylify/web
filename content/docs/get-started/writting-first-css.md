---
section: get-started

order: 2

navigationTitle: "Writing first CSS"

title: "Writting first CSS"
description: "How to start using Stylify. First selectors and configuration."
---

In all the examples bellow we are going to use the [Native Preset](/docs/stylify/native-preset). This preset contains a macro that allows us to write selectors in the similar syntax as CSS properties.

You can also start without this preset and define your own selectors, macros and etc. More information about it is in the configuration section bellow.

<note>
You can edit the code directly in the editors or copy it into the created index.html from the getting started page.
</note>

## First CSS
The default pattern for all Stylify selectors is the following:

```txt
<screens and pseudo classes>:?<customSelector>
```

If you decide to use the [Native Preset](/docs/stylify/native-preset), the syntax is then extended to this:

```txt
<screens and pseudo classes>:?<property>:<value>
```

In this tutorial we are always working with the Native Preseet, so we can write CSS like normal css `property:value`.  Stylify doesn't restrict selectors so you can use any value you want.

<note>
If you already defined your own selectors, you must follow your own pattern.
</note>

<!-- <stylify-ignore> -->
<example-editor layout="column">
<div class="color:steelblue text-align:center font-weight:bold font-size:24px">
	First CSS 🥳!
</div>
</example-editor>
<!-- </stylify-ignore> -->

## Special syntax
As mentioned on the getting started page, Stylify generates CSS dynamically based on what you write. In order to generate CSS as flexible as possible, you can use `__` (two underscores) instead of a space and `^` (hat) instead of a quote.
This syntax features above are available even when not using the Native Preset.

<!-- <stylify-ignore> -->
<example-editor layout="column">
<div class="padding:8px__12px border:12px__solid__steelblue font-family:^Arial^,__sans-serif">
	Special Syntax
</div>
</example-editor>
<!-- </stylify-ignore> -->

## Screens
In the Native Preset there are predefined shortcuts like `sm, md, lg` you may know from Tailwind or Bootstrap and dynamic screens such as `minw, maxw, rng` (see [screens](/docs/stylify/compiler#screens)). Dynamic screens are flexible and the generated media query depends on the value you choose when using them.

When not using the Native Preset, you have to define your own screens as shown bellow in the [configuration](#configuration) section.

<!-- <stylify-ignore> -->
<example-editor layout="column">
<div class="font-size:12px minw768px:font-size:32px lg:font-size:24px">
	Screens
</div>
</example-editor>
<!-- </stylify-ignore> -->

Screens can also be randomly combined by using logical operands. There is a **logical AND** `&&` and a **logical OR** `||`.
Don't worry about the screens order. They are sorted before the CSS is generated (see [screens documentation](/docs/stylify/compiler#logical-operands-in-screens)).

<!-- <stylify-ignore> -->
<example-editor layout="column">
<div class="lg||landscape:color:darkred sm&&dark:color:grey lg&&dark:color:white">
	Combined screens
</div>
</example-editor>
<!-- </stylify-ignore> -->

## Helpers
When using the Native Preset you can use its internal helpers for lightening or darkening a color or making the color transparent (see [helpers](/docs/stylify/compiler#helpers)). This helpers are injected using a [Compiler hook](/docs/stylify/compiler#hooks).

<!-- <stylify-ignore> -->
<example-editor layout="column">
<div class="color:lighten(#222,10) color:darken(#eee,10) background:colorToRgb(#aaa,__0.5)">
	Helpers
</div>
</example-editor>
<!-- </stylify-ignore> -->

## Configuration
By default Stylify doesn't ship with any configuration. When you don't want to configure anything, you can use or extend for example the mentioned Native Preset.

On the other hand, if you decide to use your own configuration, it can be done very easily.

<note><template>
There are many options to configure in the Stylify. The example bellow covers only a few of them for easier start. For more information see [how to configure Stylify](/docs/stylify/compiler#configuration).
</template></note>

Stylify let's you configure for example variables, macros, components, and screens.

<!-- <stylify-ignore> -->
```js
const configuration = {
	compiler: {
		variables: {
			blue1: '#01befe',
			blue2: '#f2fcff'
		},
		macros: {
			'color:(\\S+?)': function (macroMatch, cssProperties): void {
				// color:blue => will create => color: blue
				cssProperties.add('color', macroMatch.getCapture(0));
			},
		},
		components: {
			// selector => dependencies
			'button': 'padding:4px background:black color:white',
			'container': `
				max-width:1024px
				margin:0__auto
			`,
		},
		screens: {
			'sm': '(min-width: 400px)',
			// Screens can also be functions
			// That allows you to make as flexible screen as possible
			'minw\\w+': (screen) => `(min-width: ${screen.replace('minw', '')})`
		}
	}
}

Stylify.runtime.configure(configuration);
```
<!-- </stylify-ignore> -->

You can then use your configuration during the development:

<!-- <stylify-ignore> -->
```html
<div class="container">
	<button class="button">Button</button>
	<span class="color:$blue1 minw640px:color:$blue2">Text</span>
</div>
```
<!-- </stylify-ignore> -->
