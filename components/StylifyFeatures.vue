<!--
stylify-components
	'why-stylify__block': `
		margin-left:12px margin-bottom:12px background:lighten($blue3,20) padding:12px
		width:100% sm:width:calc(50%_-_12px) border-radius:$radius2
		lg:width:calc(100%_*_1/3_-_12px) lg:margin-bottom:0
	`,
	'why-stylify__block-title': 'margin:0 font-size:22px display:flex flex-direction:row align-items:center',
	'why-stylify__block-title-icon': 'font-weight:bold color:$blue1 width:24px height:24px display:inline-block margin-right:8px',
	'why-stylify__list': `
		font-size:14px margin-bottom:0 margin-top:4px padding-left:0 color:lighten($blue4,20)
		li:before {content:^⚡️^;position:absolute;left:0;}
		li {list-style:none;padding-left:24px;position:relative}
	`
/stylify-components
-->
<template>
	<div id="why-stylify-css" class="display:flex margin-left:-12px flex-wrap:wrap [ul]{list-style:none;padding-left:0}">
		<section id="faster-coding" class="why-stylify__block">
			<h3 class="why-stylify__block-title">
				<i class="icon icon-heart why-stylify__block-title-icon"></i>
				<span>Code faster</span>
			</h3>
			<ul class="why-stylify__list">
				<li>Use CSS-like selectors. Don't study framework</li>
				<li>Define <nuxt-link to="/docs/stylify/compiler#variables" class="color:$blue1">Variables</nuxt-link>, <nuxt-link to="/docs/stylify/compiler#components" class="color:$blue1">Components</nuxt-link>, <nuxt-link to="/docs/stylify/compiler#customselectors" class="color:$blue1">Custom selectors</nuxt-link></li>
				<li>Add <nuxt-link to="/docs/stylify/compiler#macros" class="color:$blue1">custom macros</nuxt-link> like <code>ml:2</code></li>
				<li>Variables can be injected into CSS as CSS variables</li>
				<li>CSS <nuxt-link to="/docs/stylify/compiler#variables" class="color:$blue1">variables can differ for each screen</nuxt-link></li>
				<li>Use <nuxt-link to="/docs/stylify/compiler#helpers" class="color:$blue1">helpers</nuxt-link> like <code>color:lighten(#000,10)</code></li>
				<li>Style any device with dynamic <nuxt-link to="/docs/stylify/compiler#screens" class="color:$blue1">screens</nuxt-link></li>
			</ul>
		</section>

		<section id="output-optimization" class="why-stylify__block">
			<h3 class="why-stylify__block-title">
				<i class="icon icon-archive why-stylify__block-title-icon"></i>
				<span>Get extremely optimized CSS output</span>
			</h3>
			<ul class="why-stylify__list">
				<li>Split bundles for page/layout/component</li>
				<li>Selectors minification<code>.color:blue</code> => <code>.a</code></li>
				<li>No purge needed. CSS is generated on demand</li>
				<li>Almost zero duplicated <code>property:value</code></li>
				<li>Mark areas that <nuxt-link to="/docs/stylify/compiler#ignoredareas" class="color:$blue1">should not be processed</nuxt-link></li>
				<li>Use hooks to extend functionality</li>
			</ul>
		</section>

		<section id="copypaste-integration"  class="why-stylify__block">
			<h3 class="why-stylify__block-title">
				<i class="icon icon-layers why-stylify__block-title-icon"></i>
				<span>Copy&Paste Integration</span>
			</h3>
			<ul class="why-stylify__list">
				<li>Works with any framework like <nuxt-link to="/docs/integrations/nuxtjs" class="color:$blue1">Nuxt.js</nuxt-link>, <nuxt-link to="/docs/integrations/nextjs" class="color:$blue1">Next.js</nuxt-link>, <nuxt-link to="/docs/integrations/astro" class="color:$blue1">Astro</nuxt-link>. <nuxt-link to="/docs/integrations/solidjs" class="color:$blue1">SolidJS</nuxt-link>, <nuxt-link to="/docs/integrations/qwik" class="color:$blue1">Qwik</nuxt-link> <nuxt-link to="/docs/integrations/symfony" class="color:$blue1">Symfony</nuxt-link>, <nuxt-link to="/docs/integrations/laravel" class="color:$blue1">Laravel</nuxt-link></li>
				<li>Integrable into bundlers like <nuxt-link to="/docs/integrations/webpack" class="color:$blue1">Webpack</nuxt-link>, <nuxt-link to="/docs/integrations/rollupjs" class="color:$blue1">Rollup</nuxt-link>, <nuxt-link to="/docs/integrations/vitejs" class="color:$blue1">Vite.js</nuxt-link></li>
				<li>Generated CSS can be used within SCSS, Less, Stylus</li>
				<li>CSS variables can be exported into an external file</li>
			</ul>
		</section>
	</div>
</template>
