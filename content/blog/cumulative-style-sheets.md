---
title: Cumulative Style Sheets
image: '/images/blog/cumulative-style-sheets/stylify-cumulative-style-sheets.jpg'
ogImage: '/images/blog/cumulative-style-sheets/stylify-cumulative-style-sheets-og-image.jpg'
author: 'Vladimír Macháček'
annotation: "It's just CSS. What’s the worst that could happen? Maybe a refactoring within a few months."
createdAt: 'May 1, 2022'
---

Let's start with an example. How hard it is, to make a simple blue button? It's like one selector, probably a hover state and a few properties. Something like this:

```css
.button {
  font-size:18px;
  padding:8px 24px;
  background:#2196f3;
  color:#fff;
  border-radius:2px;
  border:0;
  display:inline-block;
  cursor:pointer;
}

.button:hover {
  background:#1e87db
}
```
With the same approach, we could create various dropdowns, sidebars, titles, sections and etc. But...

Is the code and the approach above the right way to do so?

Well... 🤷.

## The Problem
Every time, you create a new component or style a section, you increase the size of your CSS. What happens if we add a border radius to an image and font-size to some text?

```css
.button { /* ... */ border-radius:2px; /* ... */ }
img { border-radius:2px; /* Duplicated */ }
.subtitle { font-size:18px /* Duplicated */ }
```

## The Solution
The solution I see as a better way of writing the CSS for our button is **mixing components and utilities selectors**:

```css
.hover\:background\:\#1e87db:hover,
.button:hover { background: #1e87db }

.font-size\:16px, .button { font-size: 16px }

.padding\:8px__24px, .button { padding: 8px 24px }

.background\:\#2196f3, .button { background: #2196f3 }

.color\:\#fff, .button { color: #fff }

.border-radius\:2px, .button { border-radius: 2px }

.border\:0, .button { border: 0 }

.display\:inline-block, .button { display: inline-block }

.cursor\:pointer, .button { cursor: pointer }
```

When you look at the code you will probably think something like "What the hell is that?".

Let me explain: Every `property:value` you add into the CSS should also be an utility:
- You can reuse them easily anywhere
- There is less duplicated properties
- The bigger the project, the more classes gets reused, means the CSS size will grow slowly

Ok, but who would want to write something like this manually? The good news is, you don't have to.

## Stylify to the rescue
Exactly because of the reasons above, the [Stylify.dev](https://stylify.dev) have been created.

Here is an example, of how to create the same button with the Stylify (Checkout the HTML tab):

<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="KKQKReX" data-user="Machy8" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/Machy8/pen/KKQKReX">
  Stylify - button</a> by Vladimír Macháček (<a href="https://codepen.io/Machy8">@Machy8</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>


The CSS selectors can also be minified [when used in node.js](https://stylify.dev/docs/stylify/compiler#usage):

```html
<button class="_91rm6e"></button>
<style>
._79qtu:hover, ._91rm6e:hover { background: #1e87db }

._h0jma, ._91rm6e { font-size: 16px }

._gtcr, ._91rm6e { padding: 8px 24px }

._8kde4, ._91rm6e { background: #2196f3 }

._olqrj2, ._91rm6e { color: #fff }

._5s8un, ._91rm6e { border-radius: 2px }

._8r76, ._91rm6e { border: 0 }

._qprvp, ._91rm6e { display: inline-block }

._4gipbn, ._91rm6e { cursor: pointer }
</style>
```

In case you also take the time and separate your CSS for layout and each page separately ([which is easy to do with Stylify](https://stylify.dev/docs/bundler/installation-and-usage#installation)) you can have a realy small CSS chunks for each of your page.
You also don't have to care about duplicates and the selectors get's minified automatically.
