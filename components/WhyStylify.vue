<template>
	<div class="display:flex margin-left:-24px flex-wrap:wrap">
		<div class="why-stylify__block">
			<h3 class="why-stylify__block-title">
				<i class="icon icon-heart why-stylify__block-title-icon"></i>
				<span>Don't study selectors</span>
			</h3>
			<ul class="why-stylify__list">
				<li>With the <nuxt-link to="/docs/stylify/native-preset" class="color:$blue1">Native Preset</nuxt-link> you can use native CSS <code class="white-space:nowrap">property:value</code> like <code class="white-space:nowrap">color:blue</code> as a selector.</li>
				<li>Don't study and remember selectors. You already know them.</li>
			</ul>
		</div>
		<div class="why-stylify__block">
			<h3 class="why-stylify__block-title">
				<i class="icon icon-layers why-stylify__block-title-icon"></i>
				<span>Copy&paste integration</span>
			</h3>
			<ul class="why-stylify__list">
				<li>Stylify works with any tool: <nuxt-link to="/docs/integrations/nuxtjs" class="color:$blue1">Nuxt.js</nuxt-link>, <nuxt-link to="/docs/integrations/nextjs" class="color:$blue1">Next.js</nuxt-link>, <nuxt-link to="/docs/integrations/webpack" class="color:$blue1">Webpack</nuxt-link>, <nuxt-link to="/docs/integrations/rollupjs" class="color:$blue1">Rollup</nuxt-link>, <nuxt-link to="/docs/integrations/vitejs" class="color:$blue1">Vite.js</nuxt-link>, <nuxt-link to="/docs/integrations/symfony" class="color:$blue1">Symfony</nuxt-link>, <nuxt-link to="/docs/integrations/nette" class="color:$blue1">Nette</nuxt-link>, <nuxt-link to="/docs/integrations/laravel" class="color:$blue1">Laravel</nuxt-link>.</li>
				<li>Generated CSS can be used within SCSS, Less and Stylus projects.</li>
			</ul>
		</div>
		<div class="why-stylify__block">
			<h3 class="why-stylify__block-title">
				<i class="icon icon-pie-chart why-stylify__block-title-icon"></i>
				<span>Get small CSS Chunks</span>
			</h3>
			<ul class="why-stylify__list">
				<li>CSS can be generated for each file, page, layout or component separately.</li>
				<li>Selector is generated only once and reused when possible.</li>
			</ul>
		</div>
		<div class="why-stylify__block">
			<h3 class="why-stylify__block-title">
				<i class="icon icon-archive why-stylify__block-title-icon"></i>
				<span>Minify CSS even more</span>
			</h3>
			<ul class="why-stylify__list">
				<li>Shrink long selectors such as <code class="white-space:nowrap">font-weight:bold</code> to <code class="white-space:nowrap">_abc123</code>.
				<li>Minimize your CSS even further.</li>
			</ul>
		</div>
		<div class="why-stylify__block">
			<h3 class="why-stylify__block-title">
				<i class="icon icon-layout why-stylify__block-title-icon"></i>
				<span>Style any screen</span>
			</h3>
			<ul class="why-stylify__list">
				<li>Combine screens using <nuxt-link to="/docs/stylify/compiler#logical-operands-in-screens" class="color:$blue1">logical operands</nuxt-link> like <code class="white-space:nowrap">sm&&tolg</code>, <code class="white-space:nowrap">xl||landscape</code> and <code class="white-space:nowrap">lg&&dark</code>.</li>
				<li>Dynamic sizes for screens such as <code class="white-space:nowrap">minw640px</code> minimizes the amount of screens.</li>
			</ul>
		</div>
		<div class="why-stylify__block">
			<h3 class="why-stylify__block-title">
				<i class="icon icon-settings why-stylify__block-title-icon"></i>
				<span>Simplify your work</span>
			</h3>
			<ul class="why-stylify__list">
				<li>Define reusable <nuxt-link to="/docs/stylify/compiler#components" class="color:$blue1">Components</nuxt-link>, <nuxt-link to="/docs/stylify/compiler#variables" class="color:$blue1">Variables</nuxt-link>, <nuxt-link to="/docs/stylify/compiler#helpers" class="color:$blue1">Helpers</nuxt-link> and style selectors like <code class="white-space:nowrap">article > h1</code> with <nuxt-link to="/docs/stylify/compiler#plainselectors" class="color:$blue1">Plain Selectors</nuxt-link>.</li>
				<li>Variables can be injected into the CSS as CSS variables and used outside of generated CSS.</li>
			</ul>
		</div>
	</div>
</template>
