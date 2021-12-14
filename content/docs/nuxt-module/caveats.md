---
section: nuxt-module

order: 3

navigationTitle: "Caveats"

title: "Limitations when using Stylify with Nuxt.js."
---

Right now Stylify generates only one CSS file for the whole project and puts it into the assets/stylify.css file.

It is because when `style` element is put into the nuxt layout, page or component, the order of the CSS is somehow random during Nuxt.js compilation and it also varries if you are in a dev mode or production and if you are using extractCss or not. Even the `scoped` css doesn't help here, therefore this approach was the only one possible that works right now.

<note>
Stylify will be able to handle generating CSS for each page separately in Nuxt using our bundler. But there wasn't time to developed that feature yet.
</note>

There are several issues on this. Even though they are closed, the problem remains:
- [https://github.com/nuxt/nuxt.js/issues/4219](https://github.com/nuxt/nuxt.js/issues/4219)
- [https://stackoverflow.com/questions/56665934/nuxt-vuetify-how-to-control-the-order-in-which-css-files-are-loaded]()
