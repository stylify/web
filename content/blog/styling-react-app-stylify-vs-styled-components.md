---
title: "Styling React App: Stylify CSS vs Styled Components"
image: '/images/blog/stylify-styled-components/header.jpg'
ogImage: '/images/blog/stylify-styled-components/og-image.jpg'
author: 'Vladimír Macháček'
annotation: "Styling React App: Stylify CSS vs Styled Components"
createdAt: 'August 21, 2022'
---

[Stylify](https://stylifycss.com/) generates utility-first CSS based on what you write. It works with any framework and with any tool. Styled Components is a library for styling React components.

This article is not about which tool is better but about comparing approaches when styling the app with these tools.

## Setup
For all the examples below, I am going to use the vite-react setup.

[Stylify](https://stylifycss.com/) requires the installation and a bit of configuration. It's because the CSS is generated during a build before the app is initialized:
```
npm i -D @stylify/unplugin
```

And the vite.config.js:
```js
const stylifyPlugin = stylifyVite({
	bundles: [{
		outputFile: './src/stylify.css',
		files: ['./src/**/*.js', './src/**/*.jsx'],
	}]
});

export default defineConfig({
    plugins: [stylifyPlugin, react()]
});
```

You can try to edit the [Stylify+Vite+React](https://stackblitz.com/edit/stylify-react-vite?file=src%2FApp.jsx) and [Stylify+Next](https://stackblitz.com/edit/stylify-nextjs-template?devtoolsheight=33&file=pages/index.js) examples on Stackblitz.

Styled Components only requires to install the library and it can be used right away.
```
npm i styled-components
```

## Syntax and usage
When you want to style an element with the Styled Components, you can use the CSS API or create a component:
```jsx
const Title = styled.div`
  color: blue
  font-weight: bold
`;
<Title>Hello World!🎉</Title>
```

The generated CSS looks like this:
```css
.sc-bdVaJa {} .knKEua{color:blue;font-weight:bold;}
```

[Stylify](https://stylifycss.com/) on the other hand takes file content and generates CSS for each matched selector. Each selector is by default a utility and is generated only once.

The [syntax](https://stylifycss.com/docs/stylify/compiler/#syntax) is by default native CSS `property:value`. Also, when writing values, you can use `_` (underscore) instead of space and `^` (a hat) for a quote. It is similar to Tailwind, but without having to learn and remember the custom selectors and shortcuts. If you know CSS you already know the Stylify CSS selectors. In case you need want shorter or custom selectors, you can [add your own macros](https://stylifycss.com/docs/stylify/compiler#macros).

The selectors can be written right away without defining a component.
```jsx
<div className="color:blue font-weight:bold">Hello World!🎉</div>
```

CSS output:
```css
.color\:blue {color:blue}
.font-weight\:bold {font-weight:bold}
```

However, nobody wants bloated templates with utilities. Sometimes the [components](https://stylifycss.com/docs/stylify/compiler#components) are necessary. They can be defined globally in a config or locally in a file (through [content options](https://stylifycss.com/docs/stylify/compiler/#contentoptionsprocessors)), where they are used. In the file, it expects a javascript object without the surrounding brackets. The definition is recommended within comments because almost any file format can handle comments. In [Stylify](https://stylifycss.com/) the component is a CSS class and it can be used on any element:
```jsx
/*
stylify-components
  title: 'color:blue font-weight:bold'
/stylify-components
*/
<div className="title">Hello World!🎉</div>
```

The `title` selector in the CSS is attached to each selector it requires. Because of that, there are fewer selectors/duplicates and the CSS is smaller.
```css
.color\:blue,.title{color:blue}
.font-weight\:bold,.title{font-weight:bold}
```

When it comes to production, the selectors can be minified:
```jsx
<div class="_88io">Hello World!🎉</div>
```

```css
._asder,._88io{color:blue}
._a4fv7,._88io{font-weight:bold}
```

### Media queries
When we need a different style for various media queries, we can do that like this in Styled Components:
```jsx
const Title = styled.div`
  color:blue
  @media (max-width: 768px) {
    color:red
  }
`;
```

With Stylify, you can use [predefined screens or dynamic ones](https://stylifycss.com/docs/stylify/compiler/#screens):
```jsx
/*
stylify-components
  title: `
    color:blue
    md:color:red
    minw640px:color:orange
  `
/stylify-components
*/
<div className="title">Hello World!🎉</div>
```

### Variables
Variables can be used within the Styled Components directly in the styles:

```jsx
const Title = styled.div`
  color: ${props => props.color || "red"}
`;
```

Stylify allows you to define [variables](https://stylifycss.com/docs/stylify/compiler/#variables) and then use them within the selectors:
```jsx
/*
stylify-variables
  blue: '#005EB8',
  red: '#8b0000'
/stylify-variables

stylify-components
  title: 'color:$blue'
/stylify-components
*/
<div className="color:$red"></div>
```

When there is a case that we need various types of one button, we need to write the full selectors in stylify
```jsx
<div className={`wrapper searchDiv ${isOrangeButton ? 'color:orange' : 'color:blue'}`}></div>
```

### Keyframes
The keyframes in the Styled Components can be defined like this:
```jsx
const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const Rotate = styled.div`
  animation: ${rotate} 2s linear infinite;
`;
```

In Stylify CSS it looks a bit different
```jsx
/*
stylify-keyframes
  rotate: `
     from { transform: rotate(0deg); }
     to { transform: rotate(360deg); }
  `
/stylify-keyframes
*/
<div class="animation:rotate_2s_linear_infinite"></div>
```
A simple animation example:
<img src="/images/blog/stylify-styled-components/stylify-keyframes.gif" width="851" height="402" loading="lazy" decoding="async" class="object-fit:cover max-width:100% height:auto">

### Plain selectors
When it comes to global styles and simple selectors, they can be defined within the Styled Components using `createGlobalStyle`:
```jsx
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  button { color:red }
`;

<React.Fragment>
  <GlobalStyle />
</React.Fragment>
```

In Stylify, the same thing is achieved using [plain selectors](https://stylifycss.com/docs/stylify/compiler/#customselectors). The selectors are directly injected into the generated CSS file.
```jsx
/*
stylify-plainSelectors
   button: 'color:red'
/stylify-plainSelectors
*/
<button></button>
```

## Splitting CSS
The Styled Components doe's a good job when it comes to optimization as it automatically splits the CSS into critical and noncritical and injects the CSS of those components that are used. However, the compilation is done when the app is running.

Stylify doesn't work that way.
It generates CSS files according to your configuration and you have to tell the app when the CSS should be loaded.
You can configure a bundle for each `page/component/layout` separately. Even though you can split the CSS however you want, thanks to the utilities/components combination the CSS size is going to be relatively small as the selectors are generated only once. So sometimes it makes sense to have only Front + Admin CSS.  Stylify website has less then `20 Kb` and other websites are between `30-50 Kb`.
One more feature is, that it doesn't slow down the app because the CSS is generated before the app is initialized.

## Thanks for help!
Also a big thanks goes to [Luke Shiru](https://twitter.com/lukeshiru) for reviewing the information about the Styled Components.
