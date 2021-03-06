---
section: stylify

order: 1

navigationTitle: Compiler

title: "Compiler"
description: "Stylify Compiler is a tool for generating CSS, mangling selectors and a lot more."
---

Compiler provides a method for generating CSS according to given configuration from a given content and a method that can rewrite (mangle) selectors in a given content.

## Usage
```js
import { Compiler, nativePreset } from '@stylify/stylify';

const content = '<div class="color:blue"></div>';

const compiler = new Compiler(nativePreset.compiler);
const compilationResult = compiler.compile(content);

const css = compilationResult.generateCss();
// If the third parameter is set and if it is true (default) it rewrites selectors
// only in areas defined in selectorsAreas and not in whole content
const mangledContent = compiler.rewriteSelectors(content, compilationResult, true);
```

### Configuration
The configuration is different based on the tool and environment where the compiler is used.
The example bellows shows configuration for Node.js and Browser. For more examples, checkout the [integration examples](/docs/integrations) page.

Node.js

```js
import { Compiler, nativePreset } from '@stylify/stylify';

// ---When adding config to native preset
// Example for macros and components when configuring native preset
nativePreset.compiler.variables = {
	blue: 'steelblue'
};
nativePreset.compiler.macros = {
	myMacro: ''
};
// ...

// --- When using custom config
const compiler = new Compiler({
	macros: {},
	variables: {},
	// ...
});

// --- You can also extend the configuration directly on instance
compiler.configure({ /* ... */})
```

Browser
```js
Stylify.runtime.configure({
	compiler: {
		// ...
	}
});
```

## Syntax
In order to be as flexible as possible, Stylify provides a few useful features when writing selectors.
Before you start using Stylify, you should check them first.

### Selectors matching patern
Stylify takes a content and matches selectors using configured macros. Then it generates CSS from matched selectors.
By default Stylify doesn't have any configuration and you have to configure it yourself.

<note><template>
Stylify does however provide the [Native Preset](/docs/stylify/native-preset). This preset provides a configuration containing useful helpers and a macro that matches 678 selector types from Chrome, Firefox, Opera, Edge and Safari.
</template></note>

The default pattern for all Stylify selectors is the following:

```txt
<screens and pseudo classes>:?<customSelector>
```

If you decide to use the [Native Preset](/docs/stylify/native-preset), the syntax is then extended to this:

```txt
<screens and pseudo classes>:?<property>:<value>
```

Screens and pseudo classes are optional. In case you need to use screen and pseudo class, the screen must be always before the pseudo class.

```txt
color:red
hover:color:red
sm:hover:color:red
```

### Spaces
In case of writting a selector, that should contain a space, you can use `__` (two underscores). These underscores are replaced by a space during compilation.

- Spaces character: `__` (two underscores)

```txt
border:1px__solid__red => border:1px solid red
width:calc(100%__-__8px) => width:calc(100% - 8px)
```

### Quotes
Some CSS properties requires quotes such as a `font-family` or a `content`.
Because selectors are inside class attributes and therefore can be wrapped by a single quote or double quote, an alternative is necessary.

- Quotes character: `^` (hat)


```txt
font-family:^Open__Sans^ => font-family:'Open Sans'
content:^Some__long__content^ => content:'Some long content'
```


### Logical operands in screens
Screens can be randomly combined using logical operands. Before the CSS is generated, they are sorted in the following order:

<note><template>
**asc** - from smallest to largest, mobile first approach<br>
**desc** - from largest to smallest, desktop first approach
</template></note>

- without media query
- min-width => asc
- min-height => asc
- max-width => desc
- max-height => desc
- min-device-width => asc
- min-device-height => asc
- max-device-width => desc
- max-device-height => desc
- light mode => according to above
- dark mode => according to above
- print => according to above
- others

The sorting function can be changed (see [configuration](/docs/stylify/compiler#compilation-result)).

- Logical AND: `&&`
- Logical OR: `||`


```txt
sm&&dark:color:red
minw740px||landscape:color:blue
```


## Configuration
Compiler by default has no configuration. You can configure it using the options bellow.

### dev
If dev is set to true, the generated CSS will contain new lines and spaces to be more readable, selectors in generated CSS will not be mangled and if any variable is missing, only a warning will be shown in the console.

```js
const compilerConfig = {
	dev: true
};
```

### macros

Macros are used to match selectors and generate css according to the match. The key inside the object can be a string or a regular expression.

Eeach matched selector is automatically mangled if enabled: `color:rgb(255,255,255)` => `_abc123`.

```js
const compilerConfig = {
	macros: {
		'color:(\\S+?)': function (macroMatch, cssProperties): void {
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


### variables
Variables can be used in a selector or accessed inside a macro.

```js
const compilerConfig = {
	variables: {
		blue: '#01befe',
		shadow: '0 8px 32px -8px rgb(0, 0, 0, 0.2)'
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

### screens

Screens are used to generate media queries. The key can be a string or a regular expression.

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

### components

Components can decrease the amount of selectors in a template.

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

Component can also be defined by calling the compiler `addComponent` method. This method expects configuration object as shown with the `button--big` component or a selectors string or an array of selectors strings:

```js
const compiler = new Compiler(/* ... */);

compiler.addComponent('button', '...');
```

Usage:
```html
<span class="button"></span>
<div class="container"></div>
```

### plainSelectors

Plain selectors allows you to write CSS selectors for elements

```js
const compilerConfig = {
	plainSelectors: {
		// selector => dependencies
		'article': 'font-size:16px line-height:28px color:#222',
		'article h1, article h2': 'color:blue',
	}
};
```

Usage:
```html
<article></article>
```

#### Caveats
In case you want to add for example a `hover:color:blue` to a selector, you should follow the approaches bellow. It is becuase when a pseudo class is used in a dependency, it is added on the end of the selector and that might not be alwas that what you want.

If the selector is indirect like `div > button`, `article a`, you should add the dependency like this:
```js
const compilerConfig = {
	plainSelectors: {
		// First without the pseudo class
		'article a': 'color:green',
		// Then with the pseudo class
		'article a:hover': 'color:blue'
		'article a:hover i': 'color:white'
	}
};
```

When the selector is direct like an `a`, `input` or a class like `a.button`, `.link` you can use the approch above and bellow:

```js
const compilerConfig = {
	plainSelectors: {
		'a': 'color:green hover:color:blue',
		'a.link': 'color:green hover:color:red'
	}
};
```

### helpers

Helpers are functions that can be called when a selector is matched and its properties are being generated.

<note><template>
Helpers can also be used directly in selectors. It is done automatically in the Native Preset. If you don't use this preset, you must configure it on your own using [onNewMacroMatch](#onnewmacromatch) hook. Example of such integration can be found in the <a href="https://github.com/stylify/packages/blob/master/packages/stylify/src/Presets/nativePreset.ts" target="_blank" rel="noopener">native preset config</a>.
</template></note>

```js
const compilerConfig = {
	helpers: {
		shortcut(value) {
			const shortcuts = {
				'bgc': 'background-color',
				'zi': 'z-index'
			};

			return value in shortcuts ? shortcuts[value] : value;
		}
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
<div class="zi:2 bgc:red"></div>
```

### selectorsAreas
In case you want to rewrite selectors in any framework specific class attribute, you must define that attribute to be matched.
By default Stylify only rewrites `class=""` and `class=''`.

```js
const compilerConfig = {
	selectorsAreas: [
		// Vue.js
		'(?:^|\\s+)(?:v-bind)?:class="([^"]+)"',
		// React
		'(?:^|\\s+)className="([^"]+)"', '(?:^|\\s+)className=\\{`((?:.|\n)+?)`\\}',
		// Angular
		'(?:^|\\s+)[className]="([^"]+)"', '(?:^|\\s+)[ngClass]="{((?:.|\n)+?)}"',
		// Nette framework
		'(?:^|\\s+)n:class="([^"]+)"'
		// ...
	]
};
```

### ignoredAreas
`stylify-ignore` and `stylify-runtime-ignore` are by default areas you can use to remove content from compilation.

Then there are the following tags, that are ignored (only without attributes): `code, head, pre, script, style.

<note>
Ignored tags can be configured but they are always matched without attributes because no html parser is integrated in Stylify and is not reliable to match them with regular expressions.
The ignoredElements options is marked as @internal to keep you away from this option.
</note>

```js
const compilerConfig = {
	ignoredAreas: [
		/<myElement[\s]*?>([\s\S]*?)<\/myElement>/,
	]
};
```

`stylify-ignore` (and any other ignore element) can be placed inside a comment and therefore can be used in any file format.

```html
<!-- stylify-ignore -->
Everything between these tags will be ignored
<div class="color:red"></div>
<!-- /stylify-ignore -->
```

### pregenerate
The pregenerate option allows you to add some content into the compilation process.

```js
const compilerConfig = {
	pregenerate: 'color:red color:blue width:100%'
};
```

### contentOptionsProcessors
Some configuration can be only a file or bundle specific. Because of that Stylify provides a content options that are processed during a compilation and provides a way to define a components, variables and etc. only for a specific file or bundle.

Common syntax is the following:
```
stylify-<option> ...data /stylify-<option>
```

The default available content options are listed bellow:

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

It is possible to define own content options processor:

<note><template>
An example of a content option definition can be found inside the <a href="https://github.com/stylify/packages/blob/master/packages/bundler/src/Bundler.ts" target="_blank" rel="noopener">@stylify/bundler package</a>.
</template></note>

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

### Hooks

In the Compiler there are two hooks that you can use to streamline or extend the Stylify functionality.

#### onPrepareCompilationResult

This hook is called when the compile function is called and the new CompilationResult is created or updated. You can for example change the configuration of the compilation result or see what is happening under the hood.

<note><template>
An example of this hook usage can be found on the [@stylify/autoprefixer](/docs/autoprefixer#usage) page.
</template></note>

```js
const compilerConfig = {
	onPrepareCompilationResult: (compilationResult) {
		console.log(compilationResult);
	};
}
```

#### onNewMacroMatch

When a selector is matched by macro within a content a new MacroMatch is created. Right after its creation this hook is called with the MacroMatch as its argument.

The selector properties inside the hook already contains values of variables if they vere in the selector.

<note><template>
An example of this hooks usage can be found in the <a href="https://github.com/stylify/packages/blob/master/packages/stylify/src/Presets/nativePreset.ts" target="_blank" rel="noopener">Native Preset code</a>.
</template></note>

```js
const compilerConfig = {
	onNewMacroMatch: (macroMatch, selectorProperties) {
		console.log(macroMatch);
		console.log(selectorProperties);
	}
}
```

### Compilation Result

Compilation result can be created or configured and passed into the Compiler as a second argument. By this approach, you can change the compilation behavior and extend the functionality.

<note>
Be aware that if you modifie compilation result or create a new one with a wrong configuration, you can break the whole compilation process.
</note>

<note><template>
An example of CompilationResult hooks usage can be found on the [@stylify/autoprefixer](/docs/autoprefixer#usage) page.
</template></note>

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

### CSS Record

Css record can be accessed only through a hook from compilation result.

<note><template>
An example of CssRecord hooks usage can be found on the [@stylify/autoprefixer](/docs/autoprefixer#usage) page.
</template></note>

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
