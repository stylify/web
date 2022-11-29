<!--
stylify-components
	'why-stylify__block': `
		margin-left:24px margin-bottom:24px background:lighten($blue3,20) padding:12px
		width:100% sm:width:calc(50%_-_24px) lg:width:calc(100%_*_1/3_-_24px) lg:margin-bottom:0 border-radius:$radius2
	`,
	'why-stylify__block-title': 'margin:0 font-size:22px display:flex flex-direction:row align-items:center',
	'why-stylify__block-title-icon': 'font-weight:bold color:$blue1 width:24px height:24px display:inline-block margin-right:8px',
	'why-stylify__list': 'font-size:14px margin-bottom:0 margin-top:4px padding-left:24px color:lighten($blue4,20)'
/stylify-components
-->
<template>
	<div id="why-stylify-css" class="display:flex margin-left:-24px flex-wrap:wrap">
		<div class="why-stylify__block">
			<h3 class="why-stylify__block-title">
				<i class="icon icon-heart why-stylify__block-title-icon"></i>
				<span>Write CSS faster</span>
			</h3>
			<ul class="why-stylify__list">
				<li>💡 Use CSS-like selectors. Don't study framework</li>
				<li>🔗 Define <nuxt-link to="/docs/stylify/compiler#variables" class="color:$blue1">Variables</nuxt-link>, <nuxt-link to="/docs/stylify/compiler#components" class="color:$blue1">Components</nuxt-link>, <nuxt-link to="/docs/stylify/compiler#customselectors" class="color:$blue1">Custom selectors</nuxt-link></li>
				<li>🔁 Add <nuxt-link to="/docs/stylify/compiler#macros" class="color:$blue1">custom macros</nuxt-link> like <code>ml:2</code></li>
				<li>💲 Variables can be injected into css as CSS variables</li>
				<li>🌃 CSS <nuxt-link to="/docs/stylify/compiler#variables" class="color:$blue1">variables can differ for each screen</nuxt-link></li>
				<li>🖌️ Simplify coding with <nuxt-link to="/docs/stylify/compiler#helpers" class="color:$blue1">helpers</nuxt-link> like <code>color:lighten(#000,10)</code></li>
				<li>🖥️ Style any device with dynamic <nuxt-link to="/docs/stylify/compiler#screens" class="color:$blue1">screens</nuxt-link></li>
				<li>✋ You can mark areas for which CSS <nuxt-link to="/docs/stylify/compiler#ignoredareas" class="color:$blue1">should not be generated</nuxt-link></li>
			</ul>
		</div>

		<div class="why-stylify__block">
			<h3 class="why-stylify__block-title">
				<i class="icon icon-layers why-stylify__block-title-icon"></i>
				<span>Get extremely optimized CSS</span>
			</h3>
			<ul class="why-stylify__list">
				<li>📦 Split bundles for page/layout/component</li>
				<li>🧰 Selectors are minified from long <code>.color:blue</code> to short <code>.a</code></li>
				<li>✨ No purge needed. CSS is generated only when something is matched</li>
				<li>🔗 Components & Custom selectors are attached to utilities. No duplicated <code>property:value</code></li>
				<li>🪝 Hooks can modify CSS or output for example wrap it to CSS layers</li>
				<li>👀 Mangled (hidden/unreadable) HTML classes in production (if mangled)</li>
			</ul>
		</div>

		<div class="why-stylify__block">
			<h3 class="why-stylify__block-title">
				<i class="icon icon-layers why-stylify__block-title-icon"></i>
				<span>Copy&paste integration</span>
			</h3>
			<ul class="why-stylify__list">
				<li>🚀 Try it with frameworks like <nuxt-link to="/docs/integrations/nuxtjs" class="color:$blue1">Nuxt.js</nuxt-link>, <nuxt-link to="/docs/integrations/nextjs" class="color:$blue1">Next.js</nuxt-link>, <nuxt-link to="/docs/integrations/astro" class="color:$blue1">Astro</nuxt-link>. <nuxt-link to="/docs/integrations/solidjs" class="color:$blue1">SolidJS</nuxt-link>, <nuxt-link to="/docs/integrations/qwik" class="color:$blue1">Qwik</nuxt-link> <nuxt-link to="/docs/integrations/symfony" class="color:$blue1">Symfony</nuxt-link>, <nuxt-link to="/docs/integrations/nette" class="color:$blue1">Nette</nuxt-link>, <nuxt-link to="/docs/integrations/laravel" class="color:$blue1">Laravel</nuxt-link></li>
				<li>⚒️ Works with bundlers like <nuxt-link to="/docs/integrations/webpack" class="color:$blue1">Webpack</nuxt-link>, <nuxt-link to="/docs/integrations/rollupjs" class="color:$blue1">Rollup</nuxt-link>, <nuxt-link to="/docs/integrations/vitejs" class="color:$blue1">Vite.js</nuxt-link></li>
				<li>⛓️ Generated CSS can be used within SCSS, Less, Stylus</li>
				<li>🎨 CSS variables can be exported into external file and reused</li>
			</ul>
		</div>
	</div>
</template>
