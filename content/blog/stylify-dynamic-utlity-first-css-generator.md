---
title: Stylify - Dynamic utility-first CSS generator
image: '/images/blog/intro/header.gif'
ogImage: '/images/blog/intro/og-image.jpg'
author: 'Vladimír Macháček'
annotation: 'Stylify generates optimized utility-first CSS dynamically based on what you write. Write HTML. Get CSS. 🚀'
createdAt: January 5, 2022
---

## Let me tell you a story
Recently, I have been working on multiple projects. One project uses Bootstrap, second one Tailwind and some other vanilla CSS with own utility and components classes.

Even though those tools are great and approaches not "bad", **learning and remembering the classes, configurations, selectors all over again is just simply anoying and time consuming**. IDE plugins for whispering classes sometimes come to me as pure despair.

I asked myself many times, **why there is no framework or a library that uses natural CSS properties and their values as selectors**, that developers already knows. Yes, the selectors will maybe be a bit longer but there would be nothing to study in order to use it.

Because I have could not find any, I have created my own.

## From Idea to Project

It took me a year of development and I have finally released the first version 🎉.
[Stylify](https://stylifycss.com) is a library that comes with a [Native Preset](https://stylifycss.com/docs/stylify/native-preset) that can match **678 (probably all)** CSS properties from `Chrome, Mozilla, Opera, Safari and Edge`. The size is less than **28 kB**.

The syntax is simple: `cssProperty:value` and in case you need screens and pseudo classes `screen:pseudoClass:property:value`.

In practice, the usage of the Stylify looks like this:
```html
<div class="font-size:24px hover:color:red md:font-size:48px">
    Hello World!
</div>
<script src="https://cdn.jsdelivr.net/npm/@stylify/stylify@latest/dist/stylify.min.js"></script>
```
Because some values can contain a space and a quote, I have decided to add a special syntax. When writting a selector its value should contain a space, you can use `__`(two underscores) and for a quote `^` (hat).

This allows you to write selectors like this:

```html
<div class="
 border:12px__solid__steelblue
 font-family:^Arial^,__sans-serif
">
  Hello World!
</div>
```

When compiled and mangled, it generates the following CSS:

```css
._nmed{
 border:12px solid steelblue
}
._l4hja{
 font-family:'Arial', sans-serif
}
```

### Another Features
- **[Dynamic selectors](https://stylifycss.com/docs/stylify/compiler#macros)**: Define a macro and use it however you want `width:240px`, `width:10%`, `width:30rem`.
- **[Dynamic screens](https://stylifycss.com/docs/stylify/compiler#logical-operands-in-screens)**: You can combine screens using logical operands like `||` and `&&` => `sm&&tolg:font-size:48px xl&&dark:color:rgba(200,200,200,0.5)` and use any value you want `minw123px:font-size:24px`.
- **Selectors mangling**: Stylify can convert long selectors `transition:color__0.3s__ease-in-out` to `_abc123`.
- **Spliting CSS**: CSS can be generated for each file separately. Thanks to that you can split CSS for example for a page and layout.
- **[Components](https://stylifycss.com/docs/stylify/compiler#components)**: Define for example a `button` with dependencies like `background:#000 color:#fff padding:24px` and use it in a whole project.
- **[Variables](https://stylifycss.com/docs/stylify/compiler#variables)**: Define variables for repetetative values. They can be injected into code as CSS variables.
- **[Plain selectors](https://stylifycss.com/docs/stylify/compiler#plainselectors)**: Allows you to style selectors like `article > h1`.
- **[Helpers](https://stylifycss.com/docs/stylify/compiler#helpers)**: Can be used when the CSS is generated for example for recalculating units and etc.

## Seamless Integration
Stylify can be integrated easily into frameworks like [Next.js](https://stylifycss.com/docs/integrations/nextjs), [Nuxt.js](https://stylifycss.com/docs/integrations/nuxtjs), [Vite.js](https://stylifycss.com/docs/integrations/vitejs), [Symfony Framework](https://stylifycss.com/docs/integrations/symfony), [Nette Framework](https://stylifycss.com/docs/integrations/nette), [Laravel](https://stylifycss.com/docs/integrations/laravel) and etc. Also it works great along with [Webpack](https://stylifycss.com/docs/integrations/webpack) and [Rollup.js](https://stylifycss.com/docs/integrations/rollupjs).

For easier integration there is a [@stylify/nuxt-module](https://stylifycss.com/docs/nuxt-module) for Nuxt.js and a [@stylify/bundler](https://stylifycss.com/docs/bundler) that can be used with already mentioned Rollup.js and Webpack or in any other tool.

When integrating into an existing project, it is possible to generate CSS for each page separately (even for small components) and [slowly rewrite the website](https://stylifycss.com/docs/get-started/migrating-to-stylify) without increasing it's size or breaking anything.
