---
slug: 'stylify'
section: snippets

order: 1

navigationTitle: "Stylify"

title: "Stylify snippets"
description: "Snippets for Stylify configuration"
---

Snippets on this page are pieces of often used configuration.
You can copy them into your configuration, so you don't have to write it on your own.

## Custom Selectors

```js
const compilerConfig = {
	customSelectors: {
		// Corrects the box sizing
		'*': 'box-sizing:border-box',
		// Set's up the typography base to 10 stuff for rem usage
		// Smooth scroll
		// Keeps scrollbar
		html: `
			font-size:62.5%
			min-width:100%
			min-height:100%
			overflow-y:scroll
			scroll-behavior:smooth
		`,
		// Sets default size for font
		// Pretty font rendering
		body: 'font-size:1.6rem -webkit-font-smoothing:antialiased'
	}
}
```

## Variables

```js
const compilerConfig = {
	variables: {
		// Border radius
		radius4: '4px',
		radius8: '8px',
		radius12: '12px',
		radius16: '16px',
		radius20: '20px',
		radius24: '24px',
		circle: '50%',

		// Font size
		// Expects font-size:62.5% to be set on the HTML element
		// Line heights are estimated from Arial font
		// => https://grtcalculator.com/
		font8: '0.8rem', // Line height 1.7rem
		font12: '1.2rem', // Line height 2rem
		font14: '1.4rem', // Line height 2.4rem
		font18: '1.8rem', // Line height 3rem
		font24: '2.4rem', // Line height 4rem
		font32: '3.2rem', // Line height 5.4rem
		font40: '4rem', // Line height 6.7rem
		font48: '4.8rem', // Line height 8.1rem
		font56: '5.6rem', // Line height 9.4rem
		font64: '6.4rem', // Line height 10.8rem

		// Line heights
		// Adequate font sizes are above
		font17: '1.7rem',
		font20: '2rem',
		font24: '2.4rem',
		font30: '3rem',
		font40: '4rem',
		font54: '5.4rem',
		font67: '6.7rem',
		font81: '8.1rem',
		font94: '9.4rem',
		font108: '10.8rem',
	}
}
```

## Macros

```js
const compilerConfig = {
	macros: {
		// This macro will match for example `typo:16` and it will generate
		// the line height for it. Also it will convert the number to rem size.
		// It expects the HTML element font size to be set to font-size:62.5%
		'typo:(\\S+?)': ({macroMatch, selectorProperties}) => {
			const pixelFontSize = Number(macroMatch.getCapture(0));
			selectorProperties.addMultiple({
				'font-size': `${Number(pixelFontSize) * 0.0625}rem`,
				'line-height': `${pixelFontSize * 1.333 * 0.0625}rem`
			});
		}
	}
}
```
