---
slug: 'images'
section: assets

order: 1

navigationTitle: "Images"

title: "Images"
description: "Links to free images for your next web project."
---

On this page, you will find a list of pages, where you can find free images for your next web project.

## Images
- [UnDraw](https://undraw.co/illustrations)
- [OpenDoodles](https://www.opendoodles.com)
- [MixKit](https://mixkit.co/free-stock-art/)
- [Ira Design](https://iradesign.io/gallery/illustrations)
- [Illustration Kit](https://illustrationkit.com)
- [Illustrations.co](https://illlustrations.co)
- [Delesign](https://delesign.com/free-designs/graphics)
- [Reshot](https://www.reshot.com)
- [Open Stickers](https://openstickers.craftwork.design)
- [Higlights design](https://www.highlights.design/elements)

## Images optimization
When loading various images on page, try following optimization tricks:
- If the image should be loaded immediately, use `fetchpriority="high"` attribute. Otherwise use `loading="lazy"`. This will decrease the amount of images loaded when the customer enters the page.
- Use correct size. If the block size is for example 400x200, do not load image 2000x1000
- For images, that are large on desktop, try to split the image into smaller pieces and load it using `<picture>` element.
