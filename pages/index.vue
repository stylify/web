<template>
	<div>
		<div>
			<section class="container margin-bottom:62px md:margin-bottom:104px">
				<h2 class="font-size:40px line-height:48px text-align:center margin-bottom:24px md:font-size:56px md:line-height:64px lg:font-size:72px"><span class="word-break:nobreak white-space:nowrap">Utility-First</span> CSS Generator</h2>
				<p class="text-align:center margin-bottom:32px font-size:18px line-height:32px lg:line-height:42px lg:font-size:24px">
					Stylify is a library that generates <span class="word-break:keep-all white-space:nowrap">utility-first</span> CSS dynamically based on what you write.
					<br>
					Write HTML. Get CSS.
				</p>
				<div class="margin-left:-24px margin-bottom:12px display:flex flex-direction:row flex-wrap:wrap align-items:center justify-content:center text-align:center font-size:18px line-height:32px">
					<nuxt-link to="/docs/get-started" class="btn margin-left:24px margin-bottom:24px box-shadow:$shadow1">Go ahead. Try it now!</nuxt-link>
					<a :href="'#' + filters.webalize('Installation')" class="btn btn--transparent color:#000 md:padding:12px__24px box-shadow:$shadow1 margin-bottom:24px margin-left:24px">Installation</a>
				</div>
				<div class="height:34px display:flex align-items:center justify-content:center margin-bottom:48px">
					<div class="display:flex height:28px margin-right:12px width:100px"><a class="github-button" href="https://github.com/stylify/packages" data-size="large" data-show-count="true" aria-label="Star stylify/packages on GitHub">Star</a></div>
					<div class="display:flex width:162px"><a href="https://twitter.com/stylify_dev?ref_src=twsrc%5Etfw" class="twitter-follow-button" data-size="large" data-show-count="false">Follow @stylify_dev</a></div>
				</div>
				<example-editor class="hp__example-editor" :showConfig="true" :showHtml="true" />
			</section>
		</div>
		<div :id="filters.webalize('Why Stylify?')" class="hp__section-blue-wrapper">
			<section class="container">
				<h2 class="hp__section-title">Why Stylify?</h2>
				<why-stylify />
			</section>
		</div>
		<div :id="filters.webalize('Installation')">
			<section class="container margin-bottom:90px md:margin-bottom:135px">
				<h2 class="hp__section-title">Installation</h2>
				<p class="hp__section-subtitle">
					Stylify packages can be used directly through CDN or installed using CLI like NPM or YARN.<br>
					<small class="font-size:16px line-height:27px display:block margin-bottom:8px">(Always use specific version in production like 1.0.0 for CDN instead of the latest.)</small>
					<a href="https://github.com/stylify/packages/releases" target="_blank" rel="noopener" class="display:inline-flex"><img alt="" width="146" height="28" src="https://img.shields.io/github/v/tag/stylify/packages?color=%2301befe&label=Version&style=for-the-badge"></a>
				</p>
				<div class="hp__section-content">
					<div class="hp__tab-buttons-wrapper">
						<a role="button" v-on:click="installationSelectedTab = 'stylify'" :class="[installationSelectedTab === 'stylify' ? '' : 'btn--transparent color:#000', 'margin-left:8px btn']">Stylify</a>
						<a role="button" v-on:click="installationSelectedTab = 'bundler'" :class="[installationSelectedTab === 'bundler' ? '' : 'btn--transparent color:#000', 'margin-left:8px btn']">Bundler</a>
						<a role="button" v-on:click="installationSelectedTab = 'profiler'" :class="[installationSelectedTab === 'profiler' ? '' : 'btn--transparent color:#000', 'margin-left:8px btn']">Profiler</a>
						<a role="button" v-on:click="installationSelectedTab = 'nuxtModule'" :class="[installationSelectedTab === 'nuxtModule' ? '' : 'btn--transparent color:#000', 'margin-left:8px btn']">Nuxt.js Module</a>
						<a role="button" v-on:click="installationSelectedTab = 'autoprefixer'" :class="[installationSelectedTab === 'autoprefixer' ? '' : 'btn--transparent color:#000', 'margin-left:8px btn']">Autoprefixer</a>
					</div>
					<div>
						<div v-show="installationSelectedTab === 'stylify'">
							<div class="margin-bottom:24px">
								<nuxt-link to="/docs/stylify" class="hp__section-more-info-link">
									<span>Stylify documentation</span>
									<i class="hp__section-more-info-link-icon icon icon-arrow-down-circle"></i>
								</nuxt-link>
							</div>
							<code-editor
								class="hp__code-editor margin-bottom:24px"
								:defaultCode="stylifyCdnDefaultCode"
								readonly
							/>
							<code-editor
								class="hp__code-editor"
								:defaultCode="stylifyCliDefaultCode"
								readonly
							/>
						</div>
						<div v-show="installationSelectedTab === 'bundler'">
							<div class="margin-bottom:24px">
								<nuxt-link to="/docs/bundler" class="hp__section-more-info-link">
									<span>Bundler documentation</span>
									<i class="hp__section-more-info-link-icon icon icon-arrow-down-circle"></i>
								</nuxt-link>
							</div>
							<code-editor
								class="hp__code-editor"
								:defaultCode="bundlerCliDefaultCode"
								readonly
							/>
						</div>
						<div v-show="installationSelectedTab === 'profiler'">
							<div class="margin-bottom:24px">
								<nuxt-link to="/docs/profiler" class="hp__section-more-info-link">
									<span>Profiler documentation</span>
									<i class="hp__section-more-info-link-icon icon icon-arrow-down-circle"></i>
								</nuxt-link>
							</div>
							<code-editor
								class="hp__code-editor margin-bottom:24px"
								:defaultCode="profilerCdnDefaultCode"
								readonly
							/>
							<code-editor
								class="hp__code-editor"
								:defaultCode="profilerCliDefaultCode"
								readonly
							/>
						</div>
						<div v-show="installationSelectedTab === 'nuxtModule'">
							<div class="margin-bottom:24px">
								<nuxt-link to="/docs/nuxt-module" class="hp__section-more-info-link">
									<span>Nuxt.js module documentation</span>
									<i class="hp__section-more-info-link-icon icon icon-arrow-down-circle"></i>
								</nuxt-link>
							</div>
							<code-editor
								class="hp__code-editor"
								:defaultCode="nuxtModuleCliDefaultCode"
								readonly
							/>
						</div>
						<div v-show="installationSelectedTab === 'autoprefixer'">
							<div class="margin-bottom:24px">
								<nuxt-link to="/docs/autoprefixer" class="hp__section-more-info-link">
									<span>Autoprefixer documentation</span>
									<i class="hp__section-more-info-link-icon icon icon-arrow-down-circle"></i>
								</nuxt-link>
							</div>
							<code-editor
								class="hp__code-editor"
								:defaultCode="autoprefixerCliDefaultCode"
								readonly
							/>
						</div>
					</div>
				</div>
			</section>
		</div>

		<div :id="filters.webalize('Focused on rapid and fluent coding.')" class="hp__section-blue-wrapper">
			<section class="container">
				<h2 class="hp__section-title">Focused on rapid and fluent coding.</h2>
				<p class="hp__section-subtitle">
					You can <strong>write any selector you want</strong>, use <strong>logical operands to combine screens</strong>, <strong>define variables</strong> for repeated values and <strong>call custom helpers</strong>. To make the CSS and HTML even smaller, you can <strong>mangle selectors</strong>.
				</p>
				<div>
					<nuxt-link to="/docs/get-started" class="hp__section-more-info-link">
						<span>Getting started</span>
						<i class="hp__section-more-info-link-icon icon icon-arrow-down-circle"></i>
					</nuxt-link>
				</div>
				<div class="hp__section-content">
					<div class="hp__tab-buttons-wrapper">
						<a role="button" v-on:click="featuresSelectedTab = 'dynamicSelectors'" :class="[featuresSelectedTab === 'dynamicSelectors' ? '' : 'btn--transparent color:#000', 'margin-left:8px btn']">Dynamic selectors</a>
						<a role="button" v-on:click="featuresSelectedTab = 'components'" :class="[featuresSelectedTab === 'components' ? '' : 'btn--transparent color:#000', 'margin-left:8px btn']">Components</a>
						<a role="button" v-on:click="featuresSelectedTab = 'plainSelectors'" :class="[featuresSelectedTab === 'plainSelectors' ? '' : 'btn--transparent color:#000', 'margin-left:8px btn']">Plain selectors</a>
						<a role="button" v-on:click="featuresSelectedTab = 'variables'" :class="[featuresSelectedTab === 'variables' ? '' : 'btn--transparent color:#000', 'margin-left:8px btn']">Variables</a>
						<a role="button" v-on:click="featuresSelectedTab = 'dynamicScreens'" :class="[featuresSelectedTab === 'dynamicScreens' ? '' : 'btn--transparent color:#000', 'margin-left:8px btn']">Dynamic screens</a>
						<a role="button" v-on:click="featuresSelectedTab = 'helpers'" :class="[featuresSelectedTab === 'helpers' ? '' : 'btn--transparent color:#000', 'margin-left:8px btn']">Helpers</a>
					</div>
					<div>
						<div v-show="featuresSelectedTab === 'dynamicSelectors'" class="display:flex flex-direction:column lg:flex-direction:row">
							<p class="font-size:18px line-height:32px lg:width:50% max-width:800px">
								<!-- <stylify-ignore> -->
								Stylify ships without predefined CSS. Thanks to that it will not slow your build with unused selectors or unnecessary CSS purging. <strong>You can write any selector you want</strong>. Just instead of spaces use  “__” (two underscores) and instead of quotes “^” (hat).
								<!-- </stylify-ignore> -->
							</p>
							<code-editor
								class="hp__code-editor max-width:800px lg:margin-left:24px lg:width:50%"
								:defaultCode="dynamicSelectorsDefaultCode"
								readonly
							/>
						</div>
						<div v-show="featuresSelectedTab === 'components'" class="display:flex flex-direction:column lg:flex-direction:row">
							<p class="font-size:18px line-height:32px lg:width:50% max-width:800px">
								<!-- <stylify-ignore> -->
								If you want to apply the same style to multiple elements, then <strong>instead of duplicating multiple selectors, you can define a component</strong>.
								<!-- </stylify-ignore> -->
							</p>
							<div class="max-width:800px lg:margin-left:24px lg:width:50% display:flex flex-direction:column align-items:flex-start">
								<code-editor
									class="box-shadow:$shadow1 padding:12px__0 height:70px margin-bottom:24px border-radius:$radius2"
									:defaultCode="componentsDefaultHtmlCode"
									readonly
								/>
								<code-editor
									class="box-shadow:$shadow1 padding:12px__0 padding:12px__0 border-radius:$radius2"
									:defaultCode="componentsDefaultJsCode"
									lang="js"
									readonly
								/>
							</div>
						</div>
						<div v-show="featuresSelectedTab === 'plainSelectors'" class="display:flex flex-direction:column lg:flex-direction:row">
							<p class="font-size:18px line-height:32px lg:width:50% max-width:800px">
								<!-- <stylify-ignore> -->
								Plain selectors allows you to <strong>style elements without using classes or IDs</strong>. They can be combined and separated by a comma like in normall CSS.
								<!-- </stylify-ignore> -->
							</p>
							<code-editor
								class="hp__code-editor max-width:800px lg:margin-left:24px lg:width:50%"
								:defaultCode="plainSelectorsDefaultCode"
								lang="js"
								readonly
							/>
						</div>
						<div v-show="featuresSelectedTab === 'variables'" class="display:flex flex-direction:column lg:flex-direction:row">
							<p class="font-size:18px line-height:32px lg:width:50% max-width:800px">
								<!-- <stylify-ignore> -->
								You can <strong>define variables in order to reuse values</strong>. For example for colors, shadows and etc.
								<!-- </stylify-ignore> -->
							</p>
							<div class="max-width:800px lg:margin-left:24px lg:width:50% display:flex flex-direction:column align-items:flex-start">
								<code-editor
									class="box-shadow:$shadow1 padding:12px__0 height:70px margin-bottom:24px border-radius:$radius2"
									:defaultCode="variablesDefaultHtmlCode"
									readonly
								/>
								<code-editor
									class="hp__code-editor"
									:defaultCode="variablesDefaultJsCode"
									lang="js"
									readonly
								/>
							</div>
						</div>
						<div v-show="featuresSelectedTab === 'dynamicScreens'" class="display:flex flex-direction:column lg:flex-direction:row">
							<p class="font-size:18px line-height:32px lg:width:50% max-width:800px">
								<!-- <stylify-ignore> -->
								You can <strong>write any screens you want</strong> and even <strong>combine them with logical operands like "&&" and "||"</strong>. Before generating finall CSS they are automatically sorted according to mobile first best practice. You can easily define your own screens.
								<!-- </stylify-ignore> -->
							</p>
							<code-editor
								class="hp__code-editor max-width:800px lg:margin-left:24px lg:width:50%"
								:defaultCode="dynamicScreensDefaultCode"
								readonly
							/>
						</div>
						<div v-show="featuresSelectedTab === 'helpers'" class="display:flex flex-direction:column lg:flex-direction:row">
							<p class="font-size:18px line-height:32px lg:width:50% max-width:800px">
								<!-- <stylify-ignore> -->
								Helpers are called when a selector is matched. For example for recalculating pixels to rem units and etc. In order to keep Stylify as small as possible, it does not provide any helper by default so feel free to define them yoursef.
								<!-- </stylify-ignore> -->
							</p>
							<code-editor
								class="hp__code-editor max-width:800px lg:margin-left:24px lg:width:50%"
								:defaultCode="helpersDefaultCode"
								lang="js"
								readonly
							/>
						</div>
					</div>
				</div>
			</section>
		</div>

		<section class="container margin-bottom:45px md:margin-bottom:90px">
			<h2 class="hp__section-title">All CSS properties available.</h2>
			<p class="hp__section-subtitle">
				Stylify comes with a <strong>native preset</strong> that allows you to use <strong> 678 different CSS properties</strong> that are <strong>available in Chrome, Mozila, Safari, Edge and Opera</strong>. You can also define your own configuration from scratch.
			</p>
			<div>
				<nuxt-link to="/docs/stylify/native-preset" class="hp__section-more-info-link">
					<span>Discover Native Preset</span>
					<i class="hp__section-more-info-link-icon icon icon-arrow-down-circle"></i>
				</nuxt-link>
			</div>
			<div class="hp__section-content ">
				<example-editor class="hp__example-editor" showConfig showHtml />
			</div>
		</section>

		<div class="background-color:$blue2 padding:45px__0 margin:40px__0 md:padding:90px__0 md:margin-bottom:80px">
			<section class="container">
				<h2 class="hp__section-title">Seamless integration.</h2>
				<p class="hp__section-subtitle">
					Stylify can be used in node.js and in the browser directly. You can use <strong class="white-space:nowrap">@stylify/bundler</strong> for bundling files and <strong class="white-space:nowrap">@stylify/nuxt-module</strong> in case you use Nuxt.
				</p>
				<div>
					<nuxt-link to="/docs/integrations" class="hp__section-more-info-link">
						<span>Learn more</span>
						<i class="hp__section-more-info-link-icon icon icon-arrow-down-circle"></i>
					</nuxt-link>
				</div>
				<div class="hp__section-content">
					<integration-blocks />
				</div>
			</section>
		</div>

		<div>
			<section class="container display:flex flex-direction:column align-items:center margin-bottom:40px md:margin-bottom:80px">
				<h2 class="margin-top:0 font-size:32px line-height:52px margin-bottom:18px md:font-size:60px md:line-height:90px">Go ahead, try it now!</h2>
				<p class="margin-top:0 font-size:24px margin-bottom:34px">
					Code less. Do more.
				</p>
				<div>
					<nuxt-link to="/docs/get-started" class="btn">Get started!</nuxt-link>
				</div>
			</section>
		</div>
		<script async defer src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
		<script async defer src="https://buttons.github.io/buttons.js"></script>
	</div>
</template>

<!-- <stylify-ignore> -->
<script>
import CodeEditor from '~/components/CodeEditor.vue';


const stylifyCdnDefaultCode = `
<!-- UMD - Runtime only -->
<script
	src="https://cdn.jsdelivr.net/npm/@stylify/stylify@latest/dist/stylify.min.js"
	integrity="sha256-CCqsfSP+nkhwN2Ga8cCdSRKlOEuvqNjOyVevAthK9Ns="
	crossorigin="anonymous"
><\/script>

<!-- UMD - Runtime + Native Preset -->
<script
	src="https://cdn.jsdelivr.net/npm/@stylify/stylify@latest/dist/stylify.native.min.js"
	integrity="sha256-GTrpA8ciFraUhjNCwG1oRkXTNsnhk45K1s4iI1ptHLE="
	crossorigin="anonymous"
><\/script>

<!-- ESM - Complete @stylify/stylify library -->
<script
	src="https://cdn.jsdelivr.net/npm/@stylify/stylify@latest/esm/index.min.js"
	integrity="sha256-MgcGTt8YGa/d9U4XloYDL8xp1XtsJkkYqJhzvqXKJgI="
	crossorigin="anonymous"
><\/script>
`.trim();

const stylifyCliDefaultCode = `
yarn add @stylify/stylify

npm i @stylify/stylify
`.trim();

const bundlerCliDefaultCode = `
yarn add @stylify/stylify

npm i @stylify/stylify
`.trim();

const profilerCdnDefaultCode = `
<!-- UMD - Profiler -->
<script
	src="https://cdn.jsdelivr.net/npm/@stylify/profiler@latest/dist/profiler.min.js"
	integrity="sha256-todmivx6lvBSy4MF5GAKw1lhhIhbb/0AOcXo6tAemKY="
	crossorigin="anonymous"
><\/script>
`.trim();

const profilerCliDefaultCode = `
yarn add -D @stylify/profiler

npm i -D @stylify/profiler
`.trim();

const nuxtModuleCliDefaultCode = `
yarn add @stylify/nuxt-module

npm i @stylify/nuxt-module
`.trim();

const autoprefixerCliDefaultCode = `
yarn add @stylify/autoprefixer

npm i @stylify/autoprefixer
`.trim();

const dynamicSelectorsDefaultCode = `
<div class="
	border:2px__solid__blue
	content:^Hello World^
	transition:color__0.3s__ease-in-out
	width:calc(100%__*__1/4__-24px)
"></div>`.trim();


let componentsDefaultHtmlCode = '<div class="button"></div>';
let componentsDefaultJsCode = `
new Compiler({
	components: {
		button: \`
			font-weight:bold padding:4px border-radius:8px
			background-color:blue font-size:16px
		\`
	}
});`.trim();

let plainSelectorsDefaultCode = `
new Compiler({
	plainSelectors: {
		'input, button': \`
			font-weight:bold color:#000
			md:font-size:24px
		\`,
		'a, .link': 'color:blue'
	}
});
`.trim();

let variablesDefaultHtmlCode = '<div class="color:$blue"></div>';
let variablesDefaultJsCode = `
new Compiler({
	variables: {
		blue: '#01befe'
	}
});`.trim();

const dynamicScreensDefaultCode = `
<div class="
	lg:font-size:24px
	sm&&tolg:font-size:32px
	lg&&dark:color:#fff
	rng640px-1024px:padding:48px
	mw450px:overflow:auto
"></div>`.trim();

let helpersDefaultCode = `
new Compiler({
	helpers: {
		textPropertyType(value) {
			if (value === 'bold') {
				return 'font-weight';
			} else if (value === 'italic') {
				return 'font-style'
			} else if (value.includes('$')) {
				return 'color';
			}
		},
	},
	macros: {
		'text:(\\\\S+)': function (macroMatch, selectorProperties) {
			const property = this.helpers.textPropertyType(
				macroMatch.getCapture(0)
			);
			selectorProperties.add(
				property, macroMatch.getCapture(0)
			);
		}
	}
});`.trim();

export default {
	components: { CodeEditor },
	data: () => ({
		// Installation tabs
		installationSelectedTab: 'stylify',

		stylifyCdnDefaultCode: stylifyCdnDefaultCode,
		stylifyCliDefaultCode: stylifyCliDefaultCode,

		bundlerCliDefaultCode: bundlerCliDefaultCode,

		profilerCdnDefaultCode: profilerCdnDefaultCode,
		profilerCliDefaultCode: profilerCliDefaultCode,

		nuxtModuleCliDefaultCode: nuxtModuleCliDefaultCode,

		autoprefixerCliDefaultCode: autoprefixerCliDefaultCode,

		// Features tabs
		featuresSelectedTab: 'dynamicSelectors',
		dynamicSelectorsDefaultCode: dynamicSelectorsDefaultCode,
		componentsDefaultHtmlCode: componentsDefaultHtmlCode,
		componentsDefaultJsCode: componentsDefaultJsCode,
		plainSelectorsDefaultCode: plainSelectorsDefaultCode,
		variablesDefaultHtmlCode: variablesDefaultHtmlCode,
		variablesDefaultJsCode: variablesDefaultJsCode,
		dynamicScreensDefaultCode: dynamicScreensDefaultCode,
		helpersDefaultCode: helpersDefaultCode
	})
}
</script>
<!-- </stylify-ignore> -->
