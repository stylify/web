---
title: 'Stylify CSS: Automated utility-first CSS bundles splitting into CSS layers in Astro.build'
image: '/images/blog/stylify-astro-bundles/header.jpg'
ogImage: '/images/blog/stylify-astro-bundles/og-image.jpg'
author: 'Vladimír Macháček'
annotation: 'Stylify CSS: Automated utility-first CSS bundles splitting into CSS layers in Astro.build'
createdAt: 'December 11, 2022'
---


Utility-first CSS bundles can be very small. But what if, we could make them even smaller? Split them for each page/layout for example? Some pages might not styles from another page. Learn how to split CSS bundles in Astro. build automatically using Stylify CSS.

## Video Guide

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/OYJn23w8fqI" class="width:100%" frameborder="0" loading="lazy" fetchpriority="low" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Stylify CSS introduction
<nuxt-link to="/">Stylify</nuxt-link> is a library that uses CSS-like selectors to generate optimized utility-first CSS based on what you write.

- ✅ CSS-like selectors
- ✅ No framework to study
- ✅ Less time spent in docs
- ✅ Mangled & Extremely small CSS
- ✅ No CSS purge needed
- ✅ Components, Variables, Custom selectors
- ✅ It can generate multiple CSS bundles

Also we have a page about <nuxt-link to="/docs/get-started/why-stylify-css">what problems Stylify CSS solves and why you should give it a try!</nuxt-link>

## Motivation
Each bundle can contain only necessary CSS. This means almost zero unused CSS and in production, it can be mangled and minified, so the CSS is even smaller (more info below).
![Stylify example](/images/blog/stylify-astro-bundles/preview.png)

## The code
Ok, first the code, then the explanation. Even though the code can look complicated, it is actually pretty simple:
```js
import stylify from '@stylify/astro';
import { hooks } from '@stylify/bundler';
import fastGlob from 'fast-glob';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const pagesDir = 'src/pages';
const layoutsDir = 'src/layouts';
const stylesDir = 'src/styles';

/** @type { import('@stylify/bundler').BundlerConfigInterface[]} */
const stylifyBundles = [];
const layoutCssLayerName = 'layout';
const pageCssLayerName = 'page';

const getFileCssLayerName = (filePath) =>
  filePath.includes('/pages/') ? pageCssLayerName : layoutCssLayerName;

const getOutputFileName = (file) => {
  const parsedFile = path.parse(file);
  const fileName = parsedFile.name.toLowerCase();
  const dirNameCleanupRegExp = new RegExp(`${pagesDir}|${layoutsDir}|\\W`, 'g');
  const dir = parsedFile.dir.replace(dirNameCleanupRegExp, '');
  return `${dir.length ? `${dir}-` : ''}${fileName}.css`;
};

const createBundle = (file) => {
  const fileName = path.parse(file).name;
  const fileCssLayerName = getFileCssLayerName(file);

  return {
    outputFile: `${stylesDir}/${fileCssLayerName}/${getOutputFileName(file)}`,
    files: [file],
    cssLayer: fileCssLayerName,
  };
};

const createBundles = (files) => {
  for (const file of files) {
    stylifyBundles.push(createBundle(file));
  }
};

// 1. Map files in layouts/pages and create bundles
createBundles(fastGlob.sync(`${pagesDir}/**/*.astro`));
createBundles(fastGlob.sync(`${layoutsDir}/**/*.astro`));

// 2. Init Stylify Astro Integraton
const stylifyIntegration = stylify({
  bundler: {
    id: 'astro',
    // Set CSS @layers order
    cssLayersOrder: {
      // Order will be @layer layout,page;
      order: [layoutCssLayerName, pageCssLayerName].join(','),
      // Layers order will be exported into file with layout @layer
      exportLayer: [layoutCssLayerName],
    },
  },
  bundles: stylifyBundles,
});

// 3. Add hook that processes opened files
/** @param { import('@stylify/bundler').BundleFileDataInterface } data */
hooks.addListener('bundler:fileToProcessOpened', (data) => {
  let { content, filePath } = data;

  // 3.1 Only for layout and page files
  if (filePath.includes('/pages/') || filePath.includes('/layouts/')) {
    const cssFileName = path.parse(filePath).name;
    const cssFilePathImport = `import '/${stylesDir}/${getFileCssLayerName(
      filePath
    )}/${getOutputFileName(filePath)}';`;

    if (!content.includes(cssFilePathImport)) {
      if (/import \S+ from (?:'|")\S+(\/layouts\/\S+)(?:'|");/.test(content)) {
        content = content.replace(
          /import \S+ from (?:'|")\S+\/layouts\/\S+(?:'|");/,
          `$&\n${cssFilePathImport}`
        );
      } else if (/^\s*---\n/.test(content)) {
        content = content.replace(/^(\s*)---\n/, `$&${cssFilePathImport}\n`);
      } else {
        content = `---\n${cssFilePathImport}\n---\n${content}`;
      }

      fs.writeFileSync(filePath, content);
    }
  }

  // 3.2 For all files
  const regExp = new RegExp(
    `import \\S+ from (?:'|")\\S+(\\/components\\/\\S+)(?:'|");`,
    'g'
  );
  let importedComponent;
  const importedComponentFiles = [];
  const rootDir = path.dirname(fileURLToPath(import.meta.url));

  while ((importedComponent = regExp.exec(content))) {
    importedComponentFiles.push(
      path.join(rootDir, 'src', importedComponent[1])
    );
  }

  data.contentOptions.files = importedComponentFiles;
});

// 4. Wait for bundler to initialize and watch for directories
// to create new bundles when a file is added
hooks.addListener('bundler:initialized', ({ bundler }) => {
  // Watch layouts and pages directories
  // If you plan to use nested directories like blog/_slug.astro
  // for which you want to automatize bundles configuration
  // You will need to add the path to them here
  const dirsToWatchForNewBundles = [layoutsDir, pagesDir];
  for (const dir of dirsToWatchForNewBundles) {
    fs.watch(dir, (eventType, fileName) => {
      const fileFullPath = path.join(dir, fileName);

      if (eventType !== 'rename' || !fs.existsSync(fileFullPath)) {
        return;
      }

      bundler.bundle([createBundle(fileFullPath)]);
    });
  }
});

export default {
  // 5. Add Stylify Astro Integration
  integrations: [stylifyIntegration]
};
```

## How it works
The code above is split into 5 steps:
1. It finds all pages in `src/pages` and all layouts in `src/layouts` and calls the `createBundles` to create bundles configuration for us with the correct layer name and output file.
2. The Stylify integration is initialized and CSS layers order is configured so it will generate the order only into a file, that has the `layout` CSS layer name.
3. <nuxt-link to="/docs/bundler#hooks">bundler:fileToProcessOpened</nuxt-link> hook is added. This hook has two parts. One part is done, when this file is a layout or page and the another for every opened file.
 - When a layout or a page file is opened, it checks, whether it contains a path to CSS file and if not, it adds it to the head of the file.
 - For all other files, it tries to check for `imports`. If any component import is found, it maps it as a dependency. This way it can map a whole components dependency tree automatically so you just keep adding/removing them and the CSS is generated correctly
4. When Bundler is initialized we can start watching for newly added files within the `layout` and `pages` directory. Every time a new file is added, we create a new Bundle.
5. The Stylify Integration is added to the Astro config.

**When we run the dev command, Stylify will do the following:**

1. Map layout/page files
2. Generate CSS into correct files, wrap the content into the correct CSS layer and adds links to these files into Astro templates.
3. If a new file in layout/pages is created a new bundle is automatically added

**And how does the output looks for production?**
Layout (src/layouts/Layout.astro):
```css
@layer layout,page;
@layer layout {.b{font-size:16px}}
```

Page (src/pages/index.astro):
```css
@layer page {.a{color:darkblue}}
```

## Integration example
Check out the interactive [example on Stack Blitz](https://stackblitz.com/edit/stylify-astro-automated-bundles-example?file=src%2Fpages%2Findex.astro).

## Configuration
The examples above don't include everything Stylify can do:
- Define <nuxt-link to="/docs/stylify/compiler#components">components</nuxt-link>
- Add <nuxt-link to="/docs/stylify/compiler#customselectors">custom selectors</nuxt-link>
- Configure <nuxt-link to="/docs/stylify/compiler#macros">your macros</nuxt-link> like `ml:20px` for margin-left
- Define <nuxt-link to="/docs/stylify/compiler#screens">custom screens</nuxt-link>
- You can map <nuxt-link to="/docs/bundler#files-content-option">nested files</nuxt-link> in the template
- And a lot more

Feel free to <nuxt-link to="/docs/get-started">check out the docs</nuxt-link> to learn more 💎.
