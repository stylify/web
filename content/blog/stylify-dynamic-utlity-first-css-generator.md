---
title: Stylify CSS - Dynamic utility-first CSS generator
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
<nuxt-link to="/">Stylify</nuxt-link> is a library that comes with a <nuxt-link to="/docs/stylify/native-preset">Native Preset</nuxt-link>** that can match 678 (probably all)** CSS properties from `Chrome, Mozilla, Opera, Safari and Edge`. The size is less than **28 kB**.

The syntax is simple: `cssProperty:value` and in case you need screens and pseudo classes `screen:pseudoClass:property:value`.

In practice, the usage of the Stylify CSS looks like this:
```html
<div class="font-size:24px hover:color:red md:font-size:48px">
    Hello World!
</div>
<script src="https://cdn.jsdelivr.net/npm/@stylify/stylify@latest/dist/stylify.min.js"></script>
```
Because some values can contain a space and a quote, I have decided to add a special syntax. When writing a selector its value should contain a space, you can use `_`(underscore) and for a quote `^` (hat).

This allows you to write selectors like this:

```html
<div class="
 border:12px_solid_steelblue
 font-family:^Arial^,_sans-serif
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
- **<nuxt-link to="/docs/stylify/compiler#macros">Dynamic selectors</nuxt-link>**: Define a macro and use it however you want `width:240px`, `width:10%`, `width:30rem`.
- **<nuxt-link to="/docs/stylify/compiler#logical-operands-in-screens)**: You can combine screens using logical operands like `||` and `&&` => `sm&&tolg:font-size:48px xl&&dark:color:rgba(200,200,200,0.5">Dynamic screens</nuxt-link>` and use any value you want `minw123px:font-size:24px`.
- **Selectors mangling**: Stylify CSS can convert long selectors `transition:color_0.3s_ease-in-out` to `_abc123`.
- **Spliting CSS**: CSS can be generated for each file separately. Thanks to that you can split CSS for example for a page and layout.
- **<nuxt-link to="/docs/stylify/compiler#components">Components</nuxt-link>**: Define for example a `button` with dependencies like `background:#000 color:#fff padding:24px` and use it in a whole project.
- **<nuxt-link to="/docs/stylify/compiler#variables">Variables</nuxt-link>**: Define variables for repetetative values. They can be injected into code as CSS variables.
- **<nuxt-link to="/docs/stylify/compiler#customselectors">Plain selectors</nuxt-link>**: Allows you to style selectors like `article > h1`.
- **<nuxt-link to="/docs/stylify/compiler#helpers">Helpers</nuxt-link>**: Can be used when the CSS is generated for example for recalculating units and etc.

## Seamless Integration
Stylify can be integrated easily into frameworks like <nuxt-link to="/docs/integrations/nextjs">Next.js</nuxt-link>, <nuxt-link to="/docs/integrations/nuxtjs">Nuxt.js</nuxt-link>, <nuxt-link to="/docs/integrations/vitejs">Vite.js</nuxt-link>, <nuxt-link to="/docs/integrations/symfony">Symfony Framework</nuxt-link>, <nuxt-link to="/docs/integrations/nette">Nette Framework</nuxt-link>, <nuxt-link to="/docs/integrations/laravel">Laravel</nuxt-link> and etc. Also it works great along with <nuxt-link to="/docs/integrations/webpack">Webpack</nuxt-link> and <nuxt-link to="/docs/integrations/rollupjs">Rollup.js</nuxt-link>.

For easier integration there is a <nuxt-link to="/docs/nuxt-module">@stylify/nuxt-module</nuxt-link> for Nuxt.js and a <nuxt-link to="/docs/bundler">@stylify/bundler</nuxt-link> that can be used with already mentioned Rollup.js and Webpack or in any other tool.

When integrating into an existing project, it is possible to generate CSS for each page separately (even for small components) and <nuxt-link to="/docs/get-started/migrating-to-stylify">slowly rewrite the website</nuxt-link> without increasing its size or breaking anything.
