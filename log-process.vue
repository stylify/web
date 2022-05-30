<template>
	<div>
		<section class="_7tcrv _11sk _5p9uv0">
			<h2 class="_if95v4 _h35b1 _4outnm _1vegb8 _v3ui _4rnsf _11f _rsfm7">Write CSS Faster<br><span class="_olqug5 _h2a44 _rpu1g">without framework</span></h2>
			<p class="_1vegb8 _if95v4 _v3ui _h0lic _4p0ntk _aa5kmk _rnu7c">
				Stylify generates optimized <span class="_qthj _nb49l">utility-first</span> CSS dynamically based on what you write.
				<br>
				Write HTML. Get CSS 💎
			</p>

			<div :id="filters.webalize('Features')" class="_11sk">
				<div class="_04oup">
					<a role="button" v-on:click="featuresSelectedTab = 'selectors'" :class="[featuresSelectedTab === 'selectors' ? '' : '_3d9a _olsfuo', '_750o _is _dn0qp']">Use selectors you know</a>
					<a role="button" v-on:click="featuresSelectedTab = 'components'" :class="[featuresSelectedTab === 'components' ? '' : '_3d9a _olsfuo', '_750o _is _dn0qp']">Define components</a>
					<a role="button" v-on:click="featuresSelectedTab = 'plainSelectors'" :class="[featuresSelectedTab === 'plainSelectors' ? '' : '_3d9a _olsfuo', '_750o _is _dn0qp']">Style anything</a>
					<a role="button" v-on:click="featuresSelectedTab = 'variables'" :class="[featuresSelectedTab === 'variables' ? '' : '_3d9a _olsfuo', '_750o _is _dn0qp']">Use variables</a>
					<a role="button" v-on:click="featuresSelectedTab = 'dynamicScreens'" :class="[featuresSelectedTab === 'dynamicScreens' ? '' : '_3d9a _olsfuo', '_750o _is _dn0qp']">Customize screens</a>
					<a role="button" v-on:click="featuresSelectedTab = 'helpers'" :class="[featuresSelectedTab === 'helpers' ? '' : '_3d9a _olsfuo', '_750o _is _dn0qp']">Extend functionality</a>
				</div>
				<div>
					<div v-show="featuresSelectedTab === 'selectors'" class="_fr9l37 _u6t11 _6984cs">
						<example-editor class="hp__example-editor _f5a1a" :showHtml="true" />
					</div>
					<div v-show="featuresSelectedTab === 'components'">
						<div class="_lapd7">
							<ul class="_ose3e">
								<li>Define components to reuse selectors and style.</li>
								<li>Components are <strong>generated only when found in content. No unwanted CSS will be generated</strong>.</li>
							</ul>
							<div class="_557or _uvbb4b _dlunh _fr9l37 _u6t11 _6984cs">
								<example-code-editor class="_l8gbrn _ikfi8 _ttoe8q _u4vh _ohuopp" :defaultCode="componentsDefaultHtmlCode" readonly></example-code-editor>
								<example-code-editor class="_l8gbrn _ikfi8 _ikfi8 _ohuopp" :defaultCode="componentsDefaultJsCode" lang="js" readonly></example-code-editor>
							</div>
						</div>
					</div>
					<div v-show="featuresSelectedTab === 'plainSelectors'">
						<div class="_lapd7">
							<ul class="_ose3e">
								<li>Style elements without classes or IDs.</li>
								<li>You can style multiple selectors at once, just separate them by comma.</li>
							</ul>
							<div class="_557or _uvbb4b _dlunh">
								<example-code-editor
									class="_dsb5"
									:defaultCode="plainSelectorsDefaultCode"
									lang="js"
									readonly
								/>
							</div>
						</div>
					</div>
					<div v-show="featuresSelectedTab === 'variables'">
						<div class="_lapd7">
							<ul class="_ose3e">
								<li>Define variables to reuse their values.</li>
								<li>Great for colors, sizes, shadows and etc.</li>
							</ul>
							<div class="_557or _uvbb4b _dlunh _fr9l37 _u6t11 _6984cs">
								<example-code-editor
									class="_l8gbrn _ikfi8 _ttoe8q _u4vh _ohuopp"
									:defaultCode="variablesDefaultHtmlCode"
									readonly
								/>
								<example-code-editor
									class="_dsb5"
									:defaultCode="variablesDefaultJsCode"
									lang="js"
									readonly
								/>
							</div>
						</div>
					</div>
					<div v-show="featuresSelectedTab === 'dynamicScreens'">
						<div class="_lapd7">
							<ul class="_ose3e">
								<li><strong>You can use any value for screen you want</strong> like <code>mw450px</code> and <code class="_nb49l">rng640px-1024px</code>.</li>
								<li><strong>Screens can be combined using logical operands</strong> like <code>sm&&tolg</code> or <code>sm||tolg</code>.</li>
								<li><strong>Screens are automatically sorted</strong>. The sorting function can be changed.</li>
							</ul>
							<div class="_557or _uvbb4b _dlunh">
								<example-code-editor
									class="_dsb5"
									:defaultCode="dynamicScreensDefaultCode"
									readonly
								/>
							</div>
						</div>
					</div>
					<div v-show="featuresSelectedTab === 'helpers'">
						<div class="_lapd7">
							<ul class="_ose3e">
								<li>Helpers are called when a selector is found.</li>
								<li>They are great for recalculating units, converting colors to different type, replacing words in selectors and etc.</li>
							</ul>
							<div class="_557or _uvbb4b _dlunh">
								<example-code-editor
									class="_dsb5"
									:defaultCode="helpersDefaultCode"
									lang="js"
									readonly
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="_bahj1 _uaaj _fr9l37 _p9tfh _8sgb1q _8g58ul _vhc4h _1vegb8 _h0lic _4p00er">
				<nuxt-link to="/docs/get-started" class="_is _g6o4 _pe5msi _v3ui _rfit _2vo74c">Go ahead. Try it now!</nuxt-link>
				<a :href="'#' + filters.webalize('Installation')" class="_is _g6o4 _3d9a _rfit _s86te _2vo74c _jrvd _v3ui _pe5msi">Installation</a>
			</div>
		</section>

		<section :id="filters.webalize('Installation')" class="_7tcrv _11sk _5p9uv0 _dsuhv _bahj1">
			<h2 class="_cgi3o">Seamless integration.</h2>
			<p class="_nqq78">
				Start using Stylify with your favorite tool in a minute.
			</p>
			<div class="_mjbgin">
				<integration-blocks />
			</div>
		</section>

		<div :id="filters.webalize('Fans')" class="_bahj1 _qlf4a _if95v4 _9tche _8js0 _ed2r _dsuhv">
			<div class="_fr9l37 _vhc4h _8g58ul _u6t11 _pmq5r4 _v3ui">
				<div class="_ttrusi _fr9l37 _8g58ul _vhc4h _q0gdn _f9a2i _3o1tp">
					<div class="_fr9l37 _ttso7d _cguu4 _f59bb"><a class="github-button" href="https://github.com/stylify/packages" data-size="large" data-show-count="true" aria-label="Star stylify/packages on GitHub">Star</a></div>
					<div class="_fr9l37 _evotf"><a href="https://twitter.com/stylify_dev?ref_src=twsrc%5Etfw" class="twitter-follow-button" data-size="large" data-show-count="false">Follow @stylify_dev</a></div>
				</div>
				<div class="_1vegb8">
					<share-buttons url="https://stylify.dev" title="Write CSS Faster and Efficiently. Write HTML. Get CSS." description="Stylify generates optimized utility-first CSS dynamicly based on what you write. Write HTML. Get CSS. No more unwanted CSS. No more unnecessary configuration." />
				</div>
			</div>
			<div class="slideshow _e9459 _kkd _m0vnad _psffd _rkau4 _qlf4a">
				<div class="_fr9l37 _vhc4h _p9tfh _6984cs _6tl5u _rqn73 _rrpb _lb _rkau4 _0qb63 _deu9 _qmk67">
					<a
						v-for="(fan, index) in fans"
						:key="index"
						:href="fan.link"
						target="blank"
						rel="noopener nofollow"
						class="
						_d73oq _olsfuo
						_53dod _u6t11 _g6s8l _6egid _2j _oim62 _84omq _54821 _rle6 _prm8
						_l8gbrn _677kd _6pso _5s72l
					"
					>
						<div class="_fr9l37 _8g58ul _u4vh">
							<img :src="`/images/hp/fans/${fan.image}`" class="_mbrbb" alt="" decoding="async" loading="lazy" width="50" height="50">
							<strong class="_78os _h0lic">{{ fan.name }}</strong>
						</div>
						<div>{{ fan.text }}</div>
					</a>
					<a
						v-for="(fan, index) in fans"
						:key="index"
						:href="fan.link"
						target="blank"
						rel="noopener nofollow"
						class="
						_d73oq _olsfuo
						_53dod _u6t11 _g6s8l _6egid _2j _oim62 _84omq _54821 _rle6 _prm8
						_l8gbrn _677kd _6pso _5s72l
					"
					>
						<div class="_fr9l37 _8g58ul _u4vh">
							<img :src="`/images/hp/fans/${fan.image}`" class="_mbrbb" alt="" decoding="async" loading="lazy" width="50" height="50">
							<strong class="_78os _h0lic">{{ fan.name }}</strong>
						</div>
						<div>{{ fan.text }}</div>
					</a>
				</div>
			</div>
		</div>

		<section :id="filters.webalize('Why Stylify?')" class="_7tcrv _11sk" >
			<h2 class="_cgi3o">Why Stylify?</h2>
			<div class="_mjbgin"><why-stylify /></div>
		</section>

		<div>
			<section class="_7tcrv _fr9l37 _u6t11 _8g58ul _11sk">
				<h2 class="_if95v4 _h2a44 _4ou68t _uajn _4r0dm _ki8">Go ahead, try it now!</h2>
				<p class="_if95v4 _h1et7 _011h">
					Code less. Do more.
				</p>
				<div>
					<nuxt-link to="/docs/get-started" class="_is">Get started!</nuxt-link>
				</div>
			</section>
		</div>
		<script async defer src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
		<script async defer src="https://buttons.github.io/buttons.js"></script>
	</div>
</template>

<!-- <stylify-ignore> -->
<script>
import ExampleCodeEditor from '~/components/ExampleCodeEditor.vue';


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
			} else if (value.includes('</stylify-ignore> -->
)) {
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
	components: { ExampleCodeEditor },
	data: () => ({
		stylifyCdnDefaultCode: stylifyCdnDefaultCode,
		stylifyCliDefaultCode: stylifyCliDefaultCode,

		bundlerCliDefaultCode: bundlerCliDefaultCode,

		profilerCdnDefaultCode: profilerCdnDefaultCode,
		profilerCliDefaultCode: profilerCliDefaultCode,

		nuxtModuleCliDefaultCode: nuxtModuleCliDefaultCode,

		autoprefixerCliDefaultCode: autoprefixerCliDefaultCode,

		// Features tabs
		featuresSelectedTab: 'selectors',
		componentsDefaultHtmlCode: componentsDefaultHtmlCode,
		componentsDefaultJsCode: componentsDefaultJsCode,
		plainSelectorsDefaultCode: plainSelectorsDefaultCode,
		variablesDefaultHtmlCode: variablesDefaultHtmlCode,
		variablesDefaultJsCode: variablesDefaultJsCode,
		dynamicScreensDefaultCode: dynamicScreensDefaultCode,
		helpersDefaultCode: helpersDefaultCode,
		fans: [
			{
				name: 'Mubashar Hashmat',
				image: 'mubashar-hashmat.jpg',
				text: `Extremely awesome 😎.`,
				link: 'https://twitter.com/MubasharHashmat/status/1491036188152832003'
			},
            {
				name: 'Paul⭐Bear',
				image: 'paul-bear.jpg',
				text: `Very cool library!`,
				link: 'https://twitter.com/Paulstryd/status/1493327596020457480'
			},
			{
				name: 'sam i am',
				image: 'sam-i-am.jpg',
				text: `That's nice!`,
				link: 'https://twitter.com/sbworld/status/1518571221490749441'
			},
			{
				name: 'Ahmad Tahir',
				image: 'ahmad-tahir.jpg',
				text: `Wow this looks neat 💯. I’ll be checking it out.`,
				link: 'https://twitter.com/AhmadBMTahir/status/1531256572629987328'
			},
			{
				name: 'Angsuman Chakraborty',
				image: 'angsuman-chakraborty.jpg',
				text: `For your information Stylify.dev: Dynamic Utility-First CSS Generator.`,
				link: 'https://twitter.com/angsuman/status/1482257827188310017'
			},
						{
				name: 'Lukeshiru',
				image: 'lukeshiru.gif',
				text: `It's like Tailwind's JIT, but without having to learn new classnames, and following a really simple set of "rules". Great library!`,
				link: 'https://dev.to/machy8/stylifydev-dynamic-css-generator-1cbe'
			},
			{
				name: 'Tom Ravn',
				image: 'tom-ravn.jpg',
				text: 'Have you heard about Stylify? Similar framework as #TailwindCSS. I guess when you finally learn #CSS using Tailwind you can go level deeper and use Stylify, you will basically write pure CSS into #html.😆',
				link: 'https://twitter.com/TomR4vn/status/1518493107817431040'
			},
			{
				name: 'Tomáš Pilař',
				image: 'tomas-pilar.jpg',
				text: `I recommend looking at Stylify.dev if you don't know that tool yet 👍. Launched on the first try with Symfony and it works like a charm! 👏`,
				link: 'https://twitter.com/TomasPilaru/status/1494635502930169884'
			},
			{
				name: 'David Mario Licla',
				image: 'david-mario-licla.jpeg',
				text: '🤯 Did you know that there is an alternative to TailwindCSS but only using CSS properties? Look it\'s called Stylify!',
				link: 'https://www.linkedin.com/posts/davidmariolc_sab%C3%ADas-que-existe-una-alternativa-a-tailwindcss-activity-6912058924682604544-ImsK?utm_source=linkedin_share&utm_medium=member_desktop_web'
			},
			{
				name: 'Develop Greatness',
				image: 'develop-greatness.jpg',
				text: `Well, I guess we all need to follow @stylify_dev to reduce our #CSS related nerve attacks 😂😂.`,
				link: 'https://twitter.com/ItsDevMutai/status/1495784770646728713'
			},
		]
	})
}
</script>

<style lang="scss">
@keyframes slideshow {
	100% {
		transform: translateX(-50%);
	}
}
</style>

<!-- </stylify-ignore> -->
