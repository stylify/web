---
section: get-started

order: 2

navigationTitle: "Why Stylify?"

title: "Why you should use Stylify CSS?"
description: "Why you should use Stylify CSS instead of writing CSS manually? Learn what are Stylify CSS features and what problems Stylify tries to solve."
---

Learn what are Stylify CSS features and what problems Stylify tries to solve. Discover how it can improve your daily coding experience and how it simplifies onboarding a new developer into the team.

## Stylify CSS Features
Stylify CSS allows you write CSS faster and get extremely small CSS bundles. It is also easily integrable into any tool.

<why-stylify></why-stylify>


## Problems Stylify CSS tries to solve
Stylify CSS primarily focuses on the syntax for utilities and CSS bundles optimization. But apart from that, there are a lot of problems that Stylify solves.

### Problems that appear when writing CSS

#### Duplicated properties for selectors
Stylify solves this by internal algorithm for joining selectors, components and utilities

#### Need to remove classes manually, when they are not used anymore
You can do that with the purge tool but that just fixes already-made mistakes. Stylify CSS generates everything on demand. No unused CSS is generated. No purge is needed.

#### Wrong CSS splitting
It takes a lot of work to split and import CSS, in correct way to avoid importing unused styles. Since utilities are small and the recommended approach is to split layout/page or not split anything at all, the import is simple

#### We have to figure out names for selectors using BEM or similar approach
This is eliminated by CSS-like utilities. There is no need for BEM or other naming conventions.

#### Creating useless selectors for simple things
Utilities solve the problem of creating a selector such as a `sidebar--larger-margin` just for larger indentation.

#### We often have unnecessary high specificity in CSS
This is again solved by utilities and specific overrides can be solved using CSS-variables. Because you can style elements conditionally and atomically, you often don't need to have higher specificity when using utilities.

### Less problems for new employees
When a new employee joins a company, he doesn't have to study any framework. If he knows CSS, he can start using Stylify CSS right away. He doesn't have to study CSS-in-JS library, CSS framework shortcuts and how to use that framework so the output is optimized.
