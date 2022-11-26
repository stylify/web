---
section: get-started

order: 4

navigationTitle: "Migrating to Stylify"

title: "Migrating to Stylify"
description: "How to import Stylify CSS into an existing project."
---

If you are about to integrate the Stylify CSS into an existing project you should start by rewriting small pieces of your application to minimize the integration errors and carefully remove all unused rewritten pieces of CSS.

<note><template>
Don't worry about increasing the CSS size in your application by switching to Stylify. Stylify CSS doesn't ship with any predefined CSS and it will generate only that CSS that matches the selectors you use. So if you write nothing, nothing will be generated.<br><br>
Stylify can also generate CSS for each bundle separately so you can create small chunks of CSS and load them only when needed.
</template></note>

The recommended steps you should follow are the following:
1. Pick a small (or non critical) piece of your application.
2. Create a bundle for that piece of application using [@stylify/bundler](/docs/bundler).
3. Rewrite the CSS of that selected part.
4. Import the bundle CSS and remove the unused rewritten CSS.
5. If all the previous steps are done, mangle selectors during a production build and repeat the process until everything is rewritten.
