---
slug: 'components'
section: components

order: 0

navigationTitle: "Components"

title: "CSS Components"
description: "Stylify CSS Components - Buttons, Grids, Forms, Animations, Switches and a lot more. Copy&Paste without a CSS framework."
---

Stylify components are inspired by the [Material Design 3](https://m3.material.io/).

Components' proportions are taken from their [community figma file](https://www.figma.com/file/DJMWYdOn4HyZ9GQqrGZfXD/Material-3-Design-Kit-(Community)?node-id=47909%3A2).

<note><template>
	Components expect that you have some kind of a "reset" stylesheet included in your page.
	For example [Normalize.css](https://necolas.github.io/normalize.css/).
	Also the `box-sizing:border-box` should be added on all elements.
</template></note>

## How to use and modify Stylify CSS components
- The easiest way is to copy&paste a piece of provided HTML
- The `$color` (and any other) variable can be replaced by your custom color (HEX, RGBA) or by your variable defined in Stylify CSS config.
- In case you plan to use it in multiple places, you might want to check out the `component` version of the component that uses Stylify CSS component definition. This way you are not going to have bloated templates with utilities.
- Feel free to change the proportion like margin, padding, width, height, font-size, line-height, etc
- All components mostly use CSS flexbox or CSS Grid. In case you change the display type, make sure to check the alignment of the internal elements.
- Some components use JavaScript (for example dialog), so make sure to copy it too, or write your own.

## Components list:
- <nuxt-link to="/snippets/components/animations">Animations</nuxt-link>
- <nuxt-link to="/snippets/components/badges">Badges</nuxt-link>
- <nuxt-link to="/snippets/components/buttons">Buttons</nuxt-link>
- <nuxt-link to="/snippets/components/containers">Containers</nuxt-link>
- <nuxt-link to="/snippets/components/dialogs">Dialogs</nuxt-link>
- <nuxt-link to="/snippets/components/dividers">Dividers</nuxt-link>
- <nuxt-link to="/snippets/components/grids">Grids</nuxt-link>
- <nuxt-link to="/snippets/components/messages">Messages</nuxt-link>
- <nuxt-link to="/snippets/components/shadows">Shadows</nuxt-link>
- <nuxt-link to="/snippets/components/switches">Switches</nuxt-link>
- <nuxt-link to="/snippets/components/text-fields">Text fields</nuxt-link>
