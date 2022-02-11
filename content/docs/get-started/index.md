---
slug: get-started
section: get-started

order: 0

navigationTitle: Get Started

title: "Get Started"
description: "Stylify is a Library that generates CSS dynamically based on what you write. Learn how to use it!"
---

Stylify is a Library that generates CSS dynamically based on what you write.
It can be used directly in the browser or in a Node.js environment.

It is inspired by Tailwind and Tachynos. Unlike these CSS frameworks, Stylify ships with a Native Preset that uses native CSS `property:value` as selectors.

In case you want shorter or completely different selectors you can configure them or create a whole new preset preset.

## Quick start
The easiest way to start is to use Stylify through CDN.
Create an index.html file and copy the code bellow into it.

Selectors are the same like in the CSS. Just use `__` (two underscores) for a space and `^` (a hat) for a quote.

<!-- <stylify-ignore> -->
<example-editor layout="column">
<strong class="color:steelblue font-size:32px">Hello World 🤩!</strong>
<script src="https://cdn.jsdelivr.net/npm/@stylify/stylify@latest/dist/stylify.native.min.js">
</script>
</example-editor>
<!-- </stylify-ignore> -->

Stylify can be easily used with libraries like Vue.js, React.js, Svelte, Symfony, Laravel or Nette. Checkout [how to install Stylify](/docs/get-started/installation) and [how to write first css](/docs/get-started/writting-first-css).

If you already have a project, you may be intersted in this small guide on [how to integrate Stylify into an existing project](/docs/get-started/migrating-to-stylify) will help.

## Why Stylify
As a web developer using pure CSS you first write a selector in an HTML file and then CSS into a style or separated CSS file. Also you have to remember how to write media queries if you don't use preprocessors like SCSS, Less or Stylus that provides mixins.

If you use frameworks, you must remember selectors or search for a hint in IDE. When a class is missing you have to go and configure it for every missing range, color size and etc.

What more, in both scenarios you have to care about the CSS size and unused CSS unless you use something like to check that.

When using Stylify, you are going to get the following features:
- **Dynamic Selectors**: Thanks to them, you define a selector only once and reuse it in various ways.
- **Dynamic Screens**: Screens can be dynamic and combined using logical operands like `&&` and `||`
- **Native Preset**: Native Preset is a configuration that if used provides almost all CSS properties (**678 selector types**) from Chrome, Firefox, Safari, Mozila and Opera. There is no css you can't write.
- **Components**: Define one selector and use it across whole project with the same style.
- **Plain Selectors**: Allows you to style global selectors like `div`, `article > h1` and etc. using Stylify.
- **Variables**: Allows you to reuse repetitive values.
- **Bundler**: With the [Bundler](/docs/bundler) you can generate CSS bundles for your project and mangle selectors without any extra work.
- **CSS Chunks**: CSS can be generated separately for each page, layout or component. This provides a way to generate small CSS files you can use only when needed.
- **Mangled HTML**: Compiler can easily mangle long selectors like `font-weight:bold` into `_abc123`
- **Fast builds**: Because Stylify doesn't ship with any CSS it won't slow down your build by purging unwanted code
- **Profiler**: In case you want to see CSS size, forgot a component name, Profiler can be added into a page any by one click you can find what you need.
