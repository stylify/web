---
slug: 'fonts'
section: assets

order: 1

navigationTitle: "Fonts"

title: "Fonts"
description: "Links to free fonts for your next web project"
---

On this page, you will find a list of pages, where you can find free fonts for your next web project.

## Golden Ratio Typography
Get correct line height for your font => https://grtcalculator.com

## Fonts
- [Google Fonts](https://fonts.google.com)
- [Font Squirell](https://www.fontsquirrel.com)
- [Font Space](https://www.fontspace.com)

## Fonts optimization
When loading custom font, you should checkout the following optimization tricks:
- Try to avoid importing various font sizes: 300,400,700 should be enough for most cases
- You may want to download the font and host it from your own server. It's faster then using external CDN.
- Use woff or woff2. Avoid SVG fonts
- The fastest way to load the font is to convert it into the Base64 into the CSS file. This way, the browsers doesn't have to wait for the font to load and there are no layout shifts caused by the font change.
- When lazyloading the font, use the `font-diplay:swap` property. This doesn't block the page rendering.
