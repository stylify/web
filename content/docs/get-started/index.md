---
slug: get-started
section: get-started

order: 0

navigationTitle: Get Started

title: "Get Started"
description: "Stylify generates CSS dynamically based on what you write. Learn how to use it!"
---

Stylify generates CSS dynamically based on what you write.
It can be used directly in the browser or in a Node.js environment. It is inspired by Tailwind and Tachynos.

Unlike these CSS frameworks, Stylify uses Native Syntax like CSS `property:value` as selectors. Therefore, you don't have to study or remember the selectors because they are almost the same like pure CSS. In case you want shorter or completely different selectors you can configure them or create a whole new preset.

## Quick Start
The easiest way to start is to use Stylify through CDN.
Create an index.html file and copy the code bellow into it (you can also try our <a href="https://codepen.io/Machy8/pen/Bawpvdy?editors=1010" target="blank" rel="noopener nofollow">Codepen Playground</a>).

Selectors are almost the same like when writting pure CSS. Just use `__` (two underscores) for a space and `^` (a hat) for a quote.

<!-- <stylify-ignore> -->
<example-editor layout="column">
<strong class="color:steelblue font-size:24px">Hello World 🤩!</strong>

<script src="https://cdn.jsdelivr.net/npm/@stylify/stylify@latest/dist/stylify.native.min.js"></script>
</example-editor>
<!-- </stylify-ignore> -->

When writting CSS, we often need to reuse the code we write. It's not efficient to style a button all over again and duplicate selectors. Hardcoded values like sizes `font-size:24px` are also not ideal. Therefore Stylify comes with the following features: [Variables](/docs/stylify/compiler#variables), [Components](/docs/stylify/compiler#components), [Logical operands in screens](/docs/stylify/compiler#logical-operands-in-screens), [Plain Selectors](/docs/stylify/compiler#plainselectors), [Content options](/docs/stylify/compiler#contentoptionsprocessors).

Let's go ahead and learn [what each Stylify package does](/docs/get-started/installation).
<br>
<br>
## Go ahead and try Stylify with your favorite tool!

<integration-blocks />

