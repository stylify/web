---
section: stylify

order: 1

navigationTitle: Native Preset

title: "Native Preset"
description: "Native preset is a prepared configuration for Stylify with 678 selector types you can use."
---

Native (default) preset is a prepared configuration for Stylify that consist of predefined macro, screens and helpers.
The code behind the NativePreset can be found in the <a href="https://github.com/stylify/packages/blob/master/packages/stylify/src/Compiler/defaultPreset.ts" target="_blank" rel="noopener">@stylify/stylify repository</a>.

## Inside the preset

### Predefined macro
This macro allows you to CSS like syntax matching **678 CSS properties** available in Chrome, Safari, Mozila, Opera and Edge.
Checkout the [syntax guide](/docs/stylify/compiler#syntax).

List of all available selectors can be found in the <a href="https://github.com/stylify/packages/tree/master/packages/stylify/tools/default-preset-generator/lists" target="_blank" rel="noopener">@stylify/stylify repository</a>

### Screens
There are static shortcuts like `tosm, sm, md, ...` and dynamic screens like `minw, maxw, rng, ...` that generates media queries based on the value you choose when using them. The values and units you use are up to you.

Dont forget that screens can be combined using logical operands `&&` (and) and `||` (or) like `maxw320px&&maxh667px:color:blue`.

<div class="max-width:100% overflow:auto">

<!-- stylify-ignore -->

| Screen     | Value                                                        | Example                    |
|------------|--------------------------------------------------------------|----------------------------|
| tosm       | @media (max-width: 639px)                                    | tosm:color:blue            |
| sm         | @media (min-width: 640px)                                    | sm:color:blue              |
| tomd       | @media (max-width: 767px)                                    | tomd:color:blue            |
| md         | @media (min-width: 768px)                                    | md:color:blue              |
| tolg       | @media (max-width: 1023px)                                   | tolg:color:blue            |
| lg         | @media (min-width: 1024px)                                   | lg:color:blue              |
| toxl       | @media (max-width: 1279px)                                   | toxl:color:blue            |
| xl         | @media (min-width: 1280x)                                    | xl:color:blue              |
| to2xl      | @media (max-width: 1535px)                                   | to2xl:color:blue           |
| 2xl        | @media (min-width: 1536px)                                   | 2xl:color:blue             |
| to3xl      | @media (max-width: 1919px)                                   | to3xl:color:blue           |
| 3xl        | @media (min-width: 1920px)                                   | 3xl:color:blue             |
| minw       | @media (min-width: custom)                                   | minw640px:color:blue       |
| maxw       | @media (max-width: custom)                                   | maxw639px:color:blue       |
| minh       | @media (min-height: custom)                                  | minh668px:color:blue       |
| maxh       | @media (max-height: custom)                                  | maxh667px:color:blue       |
| rng        | @media (min-width: custom) and @media(max-width: custom)     | rng640px-1023px:color:blue |
| screen     | @media screen                                                | screen:color:blue          |
| onlyScreen | @media only screen                                           | onlyScreen:color:blue      |
| portrait   | @media (orientation: portrait)                               | portrait:color:blue        |
| landscape  | @media (orientation: landscape)                              | landscape:color:blue       |
| dark       | @media (prefers-color-scheme: dark)                          | dark:color:blue            |
| light      | @media (prefers-color-scheme: light)                         | light:color:blue           |

<!-- /stylify-ignore -->
</div>


<docs-section>
<template #description>

<h3 class="margin-top:0">Sorting</h3>

Screens are automaticaly sorted. The sorting function can be changed (see [configuration](/docs/stylify/compiler#compilation-result)).

<note><template>
**asc** - from smallest to largest, mobile first approach<br>
**desc** - from largest to smallest, desktop first approach
</template></note>

</template>
<template #code>

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

</template>
</docs-section>

### Helpers
Native preset ships with a few helpers that can simplify the development process.
When passing an argument that contains `,`, you must add quotes to that argument using `^` (`^` is replaced by quote, see [syntax page](/docs/stylify/compiler#quotes)).

When passing an argument into the helper, you can use variables like `$myVariable`.

<docs-section>
<template #description>

<h4 class="margin-top:0">Lighten color</h4>

This helper expects a color in a hex or rgb format and and makes the color lighter. The color is returned in a hex format.

</template>
<template #code>

```txt
color:lighten($myColor,10)
color:lighten(#222,10)
color:lighten(^rgb(0,0,0)^,10)
```

</template>
</docs-section>

<docs-section>
<template #description>

<h4 class="margin-top:0">Darken color</h4>

This helper expects a color in a hex or rgb format and and makes the color darker. The color is returned in a hex format.

</template>
<template #code>

```txt
color:darken(#eee,10)
color:darken(^rgb(255,255,255)^,10)
```

</template>
</docs-section>

<docs-section>
<template #description>

<h4 class="margin-top:0">Color to RGB</h4>

This helper expects a color in a hex or rgb format. It returns in the rgb format. If alpha canal is passed as second argument, it returns the rgba format.

</template>
<template #code>

```txt
color:colorToRgb(#000) => is converted into rgba(0, 0, 0);
color:colorToRgb(#000,0.1) => is converted into rgba(0, 0, 0, 0.1)
color:colorToRgb(^rgb(0,0,0)^,0.1) => is converted into rgba(0, 0, 0, 0.1)
```

</template>
</docs-section>
