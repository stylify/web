---
section: get-started

order: 2

navigationTitle: "Why Stylify?"

title: "Why you should use Stylify CSS?"
description: "Why you should use Stylify CSS instead of writing CSS manually? Learn what are Stylify CSS features and what problems Stylify tries to solve."
---

Learn what are Stylify CSS features and what problems Stylify tries to solve. Discover how it can improve your daily coding experience and how it simplifies onboarding a new developer into the team.

## Stylify CSS Features
Stylify CSS allows you to write CSS faster and get extremely small CSS bundles. It is also easily integrable into any tool.

## Problems Stylify CSS tries to solve
Stylify CSS primarily focuses on the syntax for utilities and CSS bundles optimization. But apart from that, there are a lot of problems that Stylify solves.

### Problems that appear when writing CSS

#### Duplicated properties for selectors
Whether we write component or a selector, we mostly duplicate `properties:values` attached to that selector. Stylify solves this by internal algorithm for joining selectors, components and utilities.

### Constant switching between CSS and HTML files
When writing CSS manually, we often need to create a CSS file, then go to HTML, attach that class to some element and add CSS for it. With Stylify CSS this is not necessary.

#### Need to remove classes manually, when they are not used anymore
You can do that with the purge tool but that just fixes already-made mistakes. Stylify CSS generates everything on demand. No unused CSS is generated. No purge is needed.

### Complicated CSS files management
If the CSS is written manually (with or without preprocessor) we have to create CSS files or style tags for it (within Vue templates for example). This makes the CSS management difficult. We have to manually create, remove and rename files. In case of importing files, we have to always fix the path when file moves somewhere else or is renamed. When the amount of CSS files starts rising, it's simply more and more difficult. This is not the case with Stylify CSS. Files can be in the gitignore. They are generated automatically based on bundles configuration. Adding style tags and imports can be automated using hooks too.

#### Wrong CSS splitting
It takes a lot of work to split and import CSS, in correct way to avoid importing unused styles. Since CSS utilities are small and the recommended approach is to split layout/page or not split anything at all, the import is simple

#### We have to figure out names for selectors using BEM or a similar approach
This is eliminated by CSS-like utilities. There is no need for BEM or other naming conventions.

#### Creating useless selectors for simple things
Utilities solve the problem of creating a selector such as a `sidebar--larger-margin` just for larger indentation.

#### We often have unnecessary high specificity in CSS
This is again solved by utilities and specific overrides can be solved using CSS-variables. Because you can style elements conditionally and atomically, you often don't need to have higher specificity when using utilities.

### Fewer problems for new employees
When a new employee joins a company, he doesn't have to study any framework. If he knows CSS, he can start using Stylify CSS right away. He doesn't have to study CSS-in-JS library, CSS framework shortcuts and how to use that framework so the output is optimized.
