---
section: stylify

order: 1

navigationTitle: Compiler

title: "Compiler"
description: "Stylify Compiler is a tool for generating CSS, mangling selectors and a lot more."
---

The Compiler is the core for generating CSS with Stylify. This tool generates CSS and rewrites (mangles) selectors. Also when you need to add Variables, Components, custom Macros and etc, you do that in a Compiler config.

<docs-section>
<template #description>

<h2 class="margin-top:0">Syntax</h2>

Syntax is similar to CSS `property:value` with a few differences:
- Use `__` (two underscores) for a space and `^` (a hat) for a quote
- The default syntax pattern is `<screen>:<pseudo classes>:<property>:<value>`. Sceens and pseudo classes are optional.
- Screns can be combined using logical operands:
	- **Logical AND**: `&&`
	- **Logical OR**: `||`

</template>
<template #code>

```html
color:blue => blue color
hover:color:blue => blue color after hover
lg:color:blue => blue color for from selected screen
lg:hover:color:blue => blue color after hover from selected screen

lg&&dark:color:red => large screen and prefer-color-scheme dark
minw740px||landscape:color:blue => for min width or landscape
```

</template>
</docs-section>

## Configuration

<docs-section>
<template #description>

<h3 class="margin-top:0">dev</h3>
If dev is set to true, the generated CSS will contain new lines and spaces to be more readable, selectors in generated CSS will not be mangled and if any variable is missing, only a warning will be shown in the console.

</template>
<template #code>

```js
const compilerConfig = {
	dev: true
};
```

</template>
</docs-section>

<docs-section>
<template #description>

<h3 class="margin-top:0">macros</h3>
Macros are used to match selectors and generate css according to the match. The key inside the object can be a string or a regular expression.

Eeach matched selector is automatically mangled if enabled: `color:rgb(255,255,255)` => `_abc123`.

</template>
<template #code>

```js
const compilerConfig = {
	macros: {
		'color:(\\S+?)': (macroMatch, cssProperties) => {
			// color:blue => will create => color: blue
			// You can also use addMultiple({})
			cssProperties.add('color', macroMatch.getCapture(0));
		},
	},
};
```

Usage:
```html
<span class="color:red"></span>
<div class="color:#000"></span>
<div class="color:rgb(255,__255,__255)"></span>
```

</template>
</docs-section>

<docs-section>
<template #description>

<h3 class="margin-top:0">variables</h3>
Variables can be used in a selector or accessed inside a macro.

</template>
<template #code>

```js
const compilerConfig = {
	variables: {
		blue: '#01befe',
		shadow: '0 8px 32px -8px rgb(0, 0, 0, 0.2)',
		// When variable is an object, Stylify tries to find screen for it
		// You can use any screen you have defined in the screens
		dark: { blue: 'lightblue' },
		md: { fontSize: 24px },
		'minw640px': { fontSize: 32px },
		// When screen is not found, it falls back to a random plain selector
		'.dark': { blue: 'lightblue' },
		':root[data-theme="dark"]': { blue: 'lightblue' }
	},
	// By default variables are replaced by their value. If this option is enabled, they
	// are replaced by var(--variableName) and can be more dynamic.
	// This is great for example for switching between light and dark mode.
	replaceVariablesByCssVariables: false,
	// By default, variables are automatically injected into the generated CSS as CSS variables.
	// You can change this behavior by setting the option bellow to false
	injectVariablesIntoCss: true
};
```

Usage:
```html
<span class="color:$blue"></span>
```

</template>
</docs-section>

<docs-section>
<template #description>

<h3 class="margin-top:0">screens</h3>
Screens are used to generate media queries. The key can be a string or a regular expression.

</template>
<template #code>

```js
const compilerConfig = {
	screens: {
		'sm': '(min-width: 400px)',
		// Screens can also be functions
		// That allows you to make as flexible screen as possible
		'minw\\w+': (screen) => `(min-width: ${screen.replace('minw', '')})`
	}
};
```

Usage:
```html
<span class="sm:color:darkred"></span>
<div class="minw640px:color:$blue"></span>
<div class="minw80rem:color:darkgreen"></span>
```

</template>
</docs-section>

<docs-section>
<template #description>

<h3 class="margin-top:0">components</h3>

Components can decrease the amount of selectors in a template. They can be defined in the file where they are used or in the config. When defined using content-option, it expects javascript object without surrounding brackets.

Components can be also defined directly in files using [content options](#contentoptionsprocessors).

</template>
<template #code>

```js
const compilerConfig = {
	components: {
		// selector => dependencies
		'button': 'padding:4px background:black color:white hover:background:grey',
		'container': `
			max-width:1024px
			margin:0__auto
			md:max-width:1280px
		`,
		// You can define multiple components in one key, just separate them by "," (comma)
		'wrapper, footer': 'padding:24px',
		// When one component is defined multiple times, the selectors are merged
		// When selectorsChain is defined the last one is applied
		'wrapper': 'margin-top:24px',
		// When you are creating a component modifier you should add the selectorsChain
		// to increase the CSS specificity
		'button--big': {
			selectors: 'font-size:48px',
			selectorsChain: 'button'
		}
	}
};
```

Usage:
```html
<span class="button"></span>
<div class="container"></div>
```

</template>
</docs-section>

<docs-section>
<template #description>

<h3 class="margin-top:0">plainSelectors</h3>

Plain selectors allows you to write CSS selectors for elements.
When configuring pseudo class for direct element, you can use the pseudo class directly. When the selector is not direct, then the pseudo class should be on the selector and not in the stylify selector. Checkout the examples.

Plain selectors can be also defined directly in files using [content options](#contentoptionsprocessors).


</template>
<template #code>

```js
const compilerConfig = {
	plainSelectors: {
		// selector => dependencies
		'article': 'font-size:16px line-height:28px color:#222',
		'article h1, article h2': 'color:blue',
		// For indirect selectors with pseudo class like `div > button`, `article a`
		'article a:hover': 'color:blue'
		'article a:hover i': 'color:white'
		// For direct selectors with pseudo class like a, input or a.button and a.link
		'a': 'color:green hover:color:blue',
		'a.link': 'color:green hover:color:red'
	}
};
```

Usage:
```html
<article></article>
```

</template>
</docs-section>


<docs-section>
<template #description>

<h3 class="margin-top:0">helpers</h3>
Helpers are functions that can be called when a selector is matched and its properties are being generated.

</template>
<template #code>

```js
const compilerConfig = {
	helpers: {
		shortcut(value) {
			const shortcuts = {
				'bgc': 'background-color',
				'zi': 'z-index'
			};

			return value in shortcuts ? shortcuts[value] : value;
		},
		joinText(...texts) => '"' + texts.join(' ') + '"'
	},
	macros: {
		'(bgc|zi):(\\S+?)': function (macroMatch, cssProperties) {
			const property = this.helpers.shortcut(macroMatch.getCapture(0));
			macroMatch.add(property, cssProperties.getCapture(1));
		}
	}
}
```

Usage:
```html
<div class="
	zi:2 bgc:red
	color:lighten(#000,10)
	content:joinText(^Custom^,^Long__Text^)
"></div>
```

</template>
</docs-section>

<docs-section>
<template #description>

<h3 class="margin-top:0">selectorsAreas</h3>

In case you want to rewrite selectors in any framework specific class attribute, you must define that attribute to be matched.
By default Stylify support a few syntaxes from Vue, React, Lit, AlpineJS and Nette. In case, some of the class attributes wasn't matched, add the selectorsAreas option with a regular expression to match it.

</template>
<template #code>

```js
const compilerConfig = {
	selectorsAreas: [
		// Vue.js
		'(?:^|\\s+)(?:v-bind)?:class="([^"]+)"',
		// React
		'(?:^|\\s+)className="([^"]+)"'
	]
};
```

</template>
</docs-section>

<docs-section>
<template #description>

<h3 class="margin-top:0">ignoredAreas</h3>

In case you need to mark a code to be ignored during compilatio, you can use ignored areas.

`stylify-ignore` and `stylify-runtime-ignore` are by default areas you can use to remove content from compilation.

Also the following elements are ignored (only without attributes): `code, head, pre, script, style`.

Note that matching tags or areas using regular expressions is not reliable in some situations, therefore try to use the `stylify-ignore` as it is the most reliable option.

</template>
<template #code>

```js
const compilerConfig = {
	selectorsAreas: [
		// Vue.js
		'(?:^|\\s+)(?:v-bind)?:class="([^"]+)"',
		// React
		'(?:^|\\s+)className="([^"]+)"'
	]
};
```

Usage
```html
<!-- stylify-ignore -->
Everything inside will be ignored
<div class="color:red"></div>
<!-- /stylify-ignore -->
```

</template>
</docs-section>

<docs-section>
<template #description>

<h3 class="margin-top:0">pregenerate</h3>

The pregenerate option allows you to add some content into the compilation process.

</template>
<template #code>

```js
const compilerConfig = {
	pregenerate: 'color:red color:blue width:100%'
};
```

</template>
</docs-section>


<docs-section>
<template #description>

<h3 class="margin-top:0">contentOptionsProcessors</h3>

Some configuration options can be defined directly in the file. It's good to keep the definition of for example a component with its HTML.

</template>
<template #code>

```html
// Components expects a valid javascript object as value
stylify-components
	button: `font-size:24px padding:4px`,
	'button--big': {
		selectors: 'font-size:48px',
		selectorsChain: 'button'
	}
/stylify-components

// Variables expects a valid javascript object as value
stylify-variables
	blue: `#01befe`
/stylify-variables

// Plain selectors expects a valid javascript object as value
stylify-plainSelectors
	article: `font-size:24px`
/stylify-plainSelectors

// Pregenerate expects a string
stylify-pregenerate
	border-top:1px__solid__#444
/stylify-pregenerate

stylify-screens
	'testScreen': '(min-width: 123px)',
	'dynamic\\w+': (screen) => `(max-width: ${screen.replace('dynamic', '')})`
/stylify-screens
```

Adding custom content option processor
```js
const compilerConfig = {
	contentOptionsProcessors: {
		// Content options is an object of already matched options.
		// OptionMatch value is the matched value of your option
		// stylify-myOption optionMatchValue /stylify-myOption
		myOption: (contentOptions, optionMatchValue) => {
			// Process the option value ...

			contentOptions.myOptionData = optionMatchValue;
			// You must return the contentOptions object
			return contentOptions;
		}
	};
}
```

</template>
</docs-section>


### Hooks

In the Compiler there are two hooks that you can use to streamline or extend the Stylify functionality.

<docs-section>
<template #description>

<h4 class="margin-top:0"> onPrepareCompilationResult</h4>

This hook is called when the compile function is called and the new CompilationResult is created or updated. You can for example change the configuration of the compilation result or see what is happening under the hood.

</template>
<template #code>

```js
const compilerConfig = {
	onPrepareCompilationResult: (compilationResult) => {
		console.log(compilationResult);
	};
}
```

</template>
</docs-section>

<docs-section>
<template #description>
<h4 class="margin-top:0">onNewMacroMatch</h4>


When a selector is matched by macro within a content a new MacroMatch is created. Right after its creation this hook is called with the MacroMatch as its argument.

The selector properties inside the hook already contains values of variables if they vere in the selector.

</template>
<template #code>

```js
const compilerConfig = {
	onNewMacroMatch: (macroMatch, selectorProperties) => {
		console.log(macroMatch);
		console.log(selectorProperties);
	}
}
```

</template>
</docs-section>


<docs-section>
<template #description>

<h3 class="margin-top:0">Compilation Result</h3>

Compilation result can be created or configured and passed into the Compiler as a second argument. By this approach, you can change the compilation behavior and extend the functionality.

<note>
Be aware that if you modifie compilation result or create a new one with a wrong configuration, you can break the whole compilation process.
</note>

</template>
<template #code>

```js
const compilationResult = new CompilationResult({
	// All options are optional
	dev: false,
	// If reconfigurable is set to false, the configuration will not change
	reconfigurable: false,
	// This function is responsible for sorting screens before the CSS is generated.
	// The argument is a Map type and the function must also return a Map type.
	screensSortingFunction: (screensList) => { return screensList },
	// If mangle selectors is true, selectors within the CSS will be manhled
	mangleSelectors: false,
	// A hook, that is called when a new CssRecord is created
	onPrepareCssRecord: (cssRecord) => { console.log(cssRecord) }
});
```

</template>
</docs-section>

<docs-section>
<template #description>

<h3 class="margin-top:0">CSS Record</h3>

Css record can be accessed only through a hook from compilation result.

</template>
<template #code>

```js
const compilationResult = new CompilationResult({
	onPrepareCssRecord: (cssRecord) => {
		// This hook passes property and a its value as arguments.
		// The function must return an null, nothing or an object its structure is the following
		// { property: value, anotherProperty: value}
		cssRecord.onAddProperty = (property, value) => {
			console.log(property, value);

			// Return is optional
			return { [property]: value };
		};
		// This hook receives actual cssRecord as argument
		cssRecord.onAfterGenerate = (cssRecord) => {
			console.log(cssRecord);
		}
	}
});
```

</template>
</docs-section>

## Custom compilation process
```js
import { Compiler } from '@stylify/stylify';

const content = '<div class="color:blue"></div>';

const compiler = new Compiler();
const compilationResult = compiler.compile(content);
const css = compilationResult.generateCss();
// If the third parameter is set and if it is true (default) it rewrites selectors
// only in areas defined in selectorsAreas and not in whole content
const mangledContent = compiler.rewriteSelectors(content, compilationResult, true);
```
