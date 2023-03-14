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

## Syntax
Syntax is similar to CSS `property:value` with a few differences:
- Use `_` (one underscore) for a space and `^` (a hat) for a quote
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

## Compiler Configuration

<docs-section>
<template #description>

## dev
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

## macros
Macros are used to match selectors and generate CSS according to the match. The key inside the object can be a string or a regular expression.

Eeach matched selector is automatically mangled if enabled: `color:rgb(255,255,255)` => `ab`.

</template>
<template #code>

```js
const compilerConfig = {
	macros: {
		'color:(\\S+?)': ({macroMatch, selectorProperties}) => {
			// color:blue => will create => color: blue
			// You can also use addMultiple({})
			selectorProperties.add('color', macroMatch.getCapture(0));
		},
	},
};
```

Usage:
```html
<span class="color:red"></span>
<div class="color:#000"></span>
<div class="color:rgb(255,255,255)"></span>
```

</template>
</docs-section>

<docs-section>
<template #description>

## selectorsPrefix
This option allows you to set for example `u-` (as utility) prefix. This prefix will be joined with macros during matching.

Thanks to this feature you can use Stylify within your existing application without collision with already existing selectors.

</template>
<template #code>

```js
const compilerConfig = {
	selectorsPrefix: 'u-'
};
```

And in the code:
```html
<div class="
	u-color:blue
	hover:u-color:red
	[a]{u-color:blue}
"></div>
```

</template>
</docs-section>

<docs-section>
<template #description>

## mangleSelectors
If the mangle selectors option is set to true, the selectors in CSS will be mangled from long to short.

This only configures the Compilation Result so it generates minified CSS selectors. To rewrite selectors in files, you need to call `compiler.rewriteSelectors(content)` method.

The `rewriteSelectors` method is executed automatically within the Unplugin, Bundler, Astro, Nuxt and Nuxt Module packages. You have to call it only, if you want to work with the Compiler directly.

</template>
<template #code>

```js
const compilerConfig = {
	mangleSelectors: true
};
```

```js
const compiler = new Compiler(config);

compiler.rewriteSelectors(content);
```

</template>
</docs-section>

<docs-section>
<template #description>

## mangledSelectorsPrefix
This prefix is added before all mangled selectors. You can use any non-numeric character, for example `_` (an underscore).

This feature prevents collision of mangled selectors with those you may already have in your application. Use it only, when there is such collision.

</template>
<template #code>

```js
const compilerConfig = {
	mangledSelectorsPrefix: '_'
};
```

```html
<div class="color:blue"></div>

<!-- With configuration -->
<div class="_a"></div>

<!-- Without configuration -->
<div class="a"></div>
```

</template>
</docs-section>

<docs-section>
<template #description>

## variables
Variables can be used in a selector or accessed inside a macro.

</template>
<template #code>

```js
const compilerConfig = {
	variables: {
		blue: '#01befe',
		shadow: '0 8px 32px -8px rgb(0, 0, 0, 0.2)',
		// When variable is an object, Stylify CSS tries to find screen for it
		// You can use any screen you have defined in the screens
		dark: { blue: 'lightblue' },
		md: { fontSize: 24px },
		'minw640px': { fontSize: 32px },
		// When screen is not found, it falls back to a random custom selector
		'.dark': { blue: 'lightblue' },
		':root[data-theme="dark"]': { blue: 'lightblue' }
	},
	// By default variables are replaced by their value. If this option is enabled, they
	// are replaced by var(--variableName) and can be more dynamic.
	// This is great for example for switching between light and dark mode.
	replaceVariablesByCssVariables: false,
	// By default, variables are automatically injected into the generated CSS as CSS variables.
	// You can change this behavior by setting the option below to false
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

## externalVariables
In case you have some CSS variables defined elsewhere than in the Stylify config, you can mark them add them as external.

<note>
External variables cannot be used within helpers because their value cannot be accessed and processed.
</note

</template>
<template #code>

```js
const compilerConfig = {
	externalVariables: [
		// Simple string check
		'some-color',
		// Define callback to specify more flexible check.
		// This will for example mark every variable that starts with md-
		// as external.
		(variable) => variable.startsWith('md-') ? true : undefined
	],
	// If you have a lot of external variables and you don't want to bother by mapping them,
	// you can change the warning level
	// 'silent' => disables warning completely
	// 'warn' => is default for development
	// 'error' => is default for production
	undefinedVariableWarningLevel: 'silent'
};
```

Usage:
```html
<span class="
	color:$some-color
	background:$md-sys-color-primary
	border-color:$md-sys-color-tertiary
"></span>
```

</template>
</docs-section>

<docs-section>
<template #description>

## keyframes
Keyframes in Stylify CSS are defined with the same syntax like in the CSS.

Keyfames can also be defined within a comment within a file using [content options](#contentoptionsprocessors).

</template>
<template #code>

```js
const compilerConfig = {
	keyframes: {
		fadeIn: 'from { opacity: 0; } to { opacity: 1; }',
		fadeOut: 'from { opacity: 1; } to { opacity: 0; }',
		shadowPulse: `
			from { box-shadow: 0 0 0 0px rgba(0, 0, 0, 0.2); }
			to { box-shadow: 0 0 0 20px rgba(0, 0, 0, 0); }
		`
	}
};
```

```html
<span class="animation:fadeIn_2s_infinite">Fade In</span>
<span class="animation:fadeOut_2s_infinite">Fade Out</span>
<span class="animation:shadowPulse_2s_infinite">Shadow pulse</span>
```

</template>
</docs-section>

<docs-section>
<template #description>

## screens
Screens are used to generate media queries. The key can be a string or a regular expression. You can use predefined [screens](/docs/stylify/native-preset#screens) or define your own.

Screns can be combined using logical operands:
- **Logical AND**: `&&`
- **Logical OR**: `||`

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

## components
Components can decrease the amount of selectors in a template. They can be defined in the file where they are used or in the config. When defined using content-option, it expects javascript object without surrounding brackets.
When defining a component, you can also use [nested syntax](#nested-syntax-for-custom-selectors)

Components can be also defined directly in files using [content options](#contentoptionsprocessors).

<note>
When you define a component or macro like <code>link</code> this selector can have a collision in production with selector like <code>sidebar-link</code>, when mangling selectors. This selector will be replaced as <code>a</code> (for link) and <code>sidebar-a</code> (for section). You can prevent this behavior by configuring sidebar-section in <a href="#ignoredareas">ignoredAreas</a> option.
</note>

</template>
<template #code>

```js
const compilerConfig = {
	components: {
		// selector => dependencies
		'button': 'padding:4px background:black color:white hover:background:grey',
		'container': `
			max-width:1024px
			margin:0_auto
			md:max-width:1280px
		`,
		// You can define multiple components in one key, just separate them by "," (comma)
		'wrapper, footer': 'padding:24px',
		// When one component is defined multiple times, the selectors are merged
		// When selectorsChain is defined the last one is applied
		'wrapper': 'margin-top:24px',
		'button--big': `
			&.btn {
				font-size:48px
			}
		`,
		// Dynamic components
		// When the function has a callback, it accepts matches from regular expression
		// variables, helpers and if is dev environment.
		// This way you can define component, that returns selectors based on matches
		// from regular expression.
		'title(?:--(\\S+))?': ({ matches, variables, helpers, dev }) => {
			const color = matches[1] ?? '#000';
			return `font-size:24px${color ? ` color:${color}` : ''}`;
		},
	}
};
```

Usage:
```html
<span class="button"></span>
<div class="container"></div>
<!-- Dynamic Components -->
<div class="title"></div>
<div class="title--#06f">
<div class="title--$red">
```

</template>
</docs-section>

<docs-section>
<template #description>

## customSelectors
Custom selectors allows you to write CSS selectors for elements.
When configuring pseudo class for direct element, you can use the pseudo class directly. When the selector is not direct, then the pseudo class should be on the selector and not in the Stylify CSS selector. Check out the examples.

Custom selectors can be also defined directly in files using [content options](#contentoptionsprocessors).


</template>
<template #code>

```js
const compilerConfig = {
	customSelectors: {
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

### Nested syntax for custom selectors
You can nest selectors using SCSS-like syntax.
To create the selector is the same like in CSS. To refer the upper level use the `&` character.
To keep things simple, the only feature is nesting and chaining. The syntax is the same for `content options`. The pseudo classes like `:hover` works the same like in the example above.
The example below will generate the following:
- `header { width:800px }`
- `header nav { font-size:14px }`
- `header.fixed {}`
- `.docs header { background:blue }`
- `header h1, header h2 { font-family:arial }`

</template>
<template #code>

```js
const compilerConfig = {
	customSelectors: {
		'header': `
			width:800px
			nav {
				font-size:14px
			}
			&.fixed {
				position:fixed
			}
			.docs & { background:blue }
			h1, h2 { font-family:arial }
		`
	}
}
```

</template>

</docs-section>

<docs-section>
<template #description>

Custom selectors can be also written directly into the class attributes. The syntax is the following `[selector]{macros}`. Instead of a space use the `_` underscore. For a quote, use `^`. And to split different macros use `;`.
The example below will generate the following:
- `.docs [.docs_&]{font-size:14px;color:#222} {font-size:14px; color:#222}`
- `[h1,h2]{margin-top:0} h1, [h1,h2]{margin-top:0} h2 { margin-top:0 }`

For pseudo classes
- `[a::after]{content:^Hello_World^} a::after {content:'Hello World'}`
- `[a]{hover:color:steelblue} a:hover {color:steelblue}`
- `[a:hover]{color:stelblue} a:hover {color:stelblue}`
- `[&:hover_a]{color:stelblue}:hover a {color:stelblue}`


</template>
<template #code>

```html
<article class="
	[.docs_&]{font-size:14px;color:#222}
	[h1,h2]{margin-top:0}

	[a]{hover:color:steelblue}
	[a:hover]{color:stelblue}
	[&:hover_a]{color:stelblue}
"></article>
```

</template>

</docs-section>

<docs-section>
<template #description>

## helpers
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
		'(bgc|zi):(\\S+?)': ({helpers, macroMatch, selectorProperties}) => {
			const property = helpers.shortcut(macroMatch.getCapture(0));
			macroMatch.add(property, selectorProperties.getCapture(1));
		}
	}
}
```

Usage:
```html
<div class="
	zi:2 bgc:red
	color:lighten(#000,10)
	content:joinText(^Custom^,^Long_Text^)
"></div>
```

</template>
</docs-section>

<docs-section>
<template #description>

## selectorsAreas
In case you want to rewrite selectors in any framework specific class attribute, you must define that attribute to be matched.
By default Stylify CSS support a few syntaxes from Vue, React, Lit, AlpineJS and Nette. In case, some of the class attributes wasn't matched, add the selectorsAreas option with a regular expression to match it.

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

## ignoredAreas
In case you need to mark a code to be ignored during compilatio, you can use ignored areas.

`stylify-ignore` and `stylify-runtime-ignore` are by default areas you can use to remove content from compilation.

Also the following elements are ignored (only without attributes): `code, head, pre, script, style`.

Note that matching tags or areas using regular expressions is not reliable in some situations, therefore try to use the `stylify-ignore` as it is the most reliable option.

</template>
<template #code>

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

### pregenerate
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

## contentOptionsProcessors
Some configuration options can be defined directly in a file using `content options`. It's good to keep the definition of for example a component with its HTML.

</template>
<template #code>

```html
<!--
// Components expects a valid javascript object as value without surrounding brackets
stylify-components
	button: `font-size:24px padding:4px`,
	'button--big': `
		&.btn {
			font-size:48px
		}
	`
/stylify-components

// Variables expects a valid javascript object as value without surrounding brackets
stylify-variables
	blue: `#01befe`
/stylify-variables

// Keyframes expects a valid javascript object as value without surrounding brackets
stylify-keyframes
	fadeIn: 'from { opacity: 0; } to { opacity: 1; }',
	fadeOut: 'from { opacity: 1; } to { opacity: 0; }',
	shadowPulse: `
		from { box-shadow: 0 0 0 0px rgba(0, 0, 0, 0.2); }
		to { box-shadow: 0 0 0 20px rgba(0, 0, 0, 0); }
	`
/stylify-keyframes


// Custom selectors expects a valid javascript object as value without surrounding brackets
stylify-customSelectors
	article: `font-size:24px`
/stylify-customSelectors

// Pregenerate expects a string
stylify-pregenerate
	border-top:1px_solid_#444
/stylify-pregenerate

// Screens expects a valid javascript object as value without surrounding brackets
stylify-screens
	'testScreen': '(min-width: 123px)',
	'dynamic\\w+': (screen) => `(max-width: ${screen.replace('dynamic', '')})`
/stylify-screens
-->
```

Adding custom content option processor
```js
import { hooks } from '@stylify/stylify'

// You can use Stylify compiler to get any option
hooks.addListener('compiler:processContentOption:myOption', ({
	contentOptions,
	option,
	value
}) => {

});
```
</template>
</docs-section>

<docs-section>
<template #description>

## Compilation Result
Compilation result can be created or configured and passed into the Compiler as a second argument. By this approach, you can change the compilation behavior and extend the functionality.

<note>
Be aware that if you modify compilation result or create a new one with a wrong configuration, you can break the whole compilation process.
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
});
```

</template>
</docs-section>

<docs-section>
<template #description>

## CSS Record
Css record can be accessed only through a hook `compilationResult:configureCssRecord`. The CSS record is responsible for keeping the CSS tree and how the selectors are joined, managed and etc.

</template>
<template #code>

```js
hooks.addListener('compilationResult:configureCssRecord', ({cssRecord}) => {
	// ...
});
```

</template>
</docs-section>

## Hooks

Stylify has a hookable system that allows you to modify extend the functionality.

<docs-section>
<template #description>

- **compiler:beforeMacrosProcessed**: Before the content is processed and macros matched
- **compiler:afterMacrosProcessed**: Right after the `beforeMacrosProcessed`
- **compiler:compilationResultConfigured**: Triggered when compilation result is ready
- **compiler:newMacroMatch**: This hook is triggered when a macro is matched within the content
- **compiler:processContentOption:\[option\]**: Triggerd when processing content option. The `[option]` must be replaced by the name of content option like `customOption` if ou want to process your own options
- **compilationResult:configureCssRecord**: This hook is called when CSS record is created. You can for example set the scope
- **cssRecord:addProperty**: This is called right before the CSS `property:value` is added.
- **cssRecord:cssGenerated**: Triggered when the CSS was generated

</template>
<template #code>

```js
import { hooks } from '@stylify/stylify';

hooks.addListener('hoook:name', (options) => {});
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
