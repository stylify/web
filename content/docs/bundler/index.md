---
slug: 'bundler'
section: bundler

order: 0

navigationTitle: "@stylify/bundler"

title: "@stylify/bundler"
description: "@stylify/bundler is a package for simple CSS generating and bundling in a project."
---

Bundler is a package that provides functionality for creating CSS bundles for given files.

It is similar to Rollup.js or Webpack and it simplifies the routine of loading files, compiling them, generating CSS, creating CSS files, mangling target files and etc.

The reason why Stylify provides its own bundler instead of a Webpack loader or Rollup.js plugin is, that some developers may not want to use these loaders or can't. The Bundler also can be easily integrated into an existing project with custom bundlers. The only requirement is to have the Node.js environment available so the Stylify Bundler can be executed.

<note><template>
Bundler can be used with Webpack or Rollup.jss. You just have to integrate them. See [Webpack.js](/docs/integration/webpack) or [Rollup.js](/docs/integration/rollupjs) integration guide.
</template></note>

Check out [how to install the @stylify/bundler](/docs/bundler/installation-and-usage) and how to [configure it](/docs/bundler/configuration).

<img src="/images/docs/bundler/bundler.png" alt="" width="914" height="170" loading="lazy" class="border-radius:4px" />
