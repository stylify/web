<template>
	<div>
		<section class="container margin-bottom:48px margin-top:48px">
			<h2 class="hp-title margin-top:0 font-size:56px text-align:center margin-bottom:24px md:font-size:64px line-height:1 lg:font-size:72px xl:font-size:100px">Write CSS Faster</h2>
			<p class="text-align:center margin-top:0 md:margin-bottom:24px font-size:18px line-height:28px lg:line-height:30px lg:font-size:20px">
				Stylify generates optimized <span class="word-break:keep-all white-space:nowrap">utility-first</span> CSS dynamically based on what you write.
				<br>
				Write Selectors. Get CSS. Without framework 💎
			</p>

			<div :id="filters.webalize('Features')" class="margin-bottom:48px">
				<div class="hp__tab-buttons-wrapper">
					<a v-for="(tabLabel, tab) in tabs" :key="tab" :data-id="tab" role="button" v-on:click="featuresSelectedTab = tab" :class="[featuresSelectedTab === tab ? 'border-color:$blue1 color:$blue1 font-weight:bold' : 'border-color:transparent', 'white-space:nowrap cursor:pointer border-bottom-width:4px border-bottom-style:solid padding:8px text-align:center display:inline-block']">{{tabLabel}}</a>
				</div>
				<div>
					<div v-show="featuresSelectedTab === 'selectors'" class="max-width:100% display:flex flex-direction:column align-items:flex-start">
						<p class="margin-top:0 max-width:600px font-size:14px line-height:28px">
							Write selectors as css <code>property:value</code>. Use <code>__</code> (two underscores) instead of a space and <code>^</code> (hat) instead of a quote. You can also define your own selectors.
						</p>
						<div class="hp__example-editor width:100%">
							<GetStartedSelectors />
						</div>
					</div>
					<div v-show="featuresSelectedTab === 'components'">
						<p class="margin-top:0 max-width:600px font-size:14px line-height:28px">
							Don't bloat your templates with utilities and duplicates. Components can be defined in a template (expects an object without surounding brackets) or in a Compiler config.
						</p>
						<div class="hp__example-editor width:100%">
							<GetStartedComponents />
						</div>
					</div>
					<div v-show="featuresSelectedTab === 'plainSelectors'">
						<p class="margin-top:0 max-width:600px font-size:14px line-height:28px">
							Style any element with plain selectors. Can be configured within a template (expects an object without surounding brackets) or in a Compiler config.
						</p>
						<div class="hp__example-editor width:100%">
							<GetStartedPlainSelectors />
						</div>
					</div>
					<div v-show="featuresSelectedTab === 'variables'">
						<p class="margin-top:0 max-width:600px font-size:14px line-height:28px">
							Avoid hardcoded values in templates. Use variables. Can be configurd within a template (expects an object without surounding brackets) or in a Compiler config.
						</p>
						<div class="hp__example-editor width:100%">
							<GetStartedVariables />
						</div>
					</div>
					<div v-show="featuresSelectedTab === 'dynamicScreens'">
						<div class="hp__tab-content">
							<ul class="hp__tab-content-list">
								<li><strong>You can use any value for screen you want</strong> like <code>mw450px</code> and <code class="white-space:nowrap">rng640px-1024px</code>.</li>
								<li><strong>Screens can be combined using logical operands</strong> like <code>sm&&tolg</code> or <code>sm||tolg</code>.</li>
								<li><strong>Screens are automatically sorted</strong>. The sorting function can be changed.</li>
							</ul>
							<div class="max-width:800px lg:margin-left:24px lg:width:50%">
								<example-code-editor
									class="hp__code-editor"
									:defaultCode="dynamicScreensDefaultCode"
									readonly
								/>
							</div>
						</div>
					</div>
					<div v-show="featuresSelectedTab === 'helpers'">
						<div class="hp__tab-content">
							<ul class="hp__tab-content-list">
								<li>Helpers are called when a selector is found.</li>
								<li>They are great for recalculating units, converting colors to different type, replacing words in selectors and etc.</li>
							</ul>
							<div class="max-width:800px lg:margin-left:24px lg:width:50%">
								<example-code-editor
									class="hp__code-editor"
									:defaultCode="helpersDefaultCode"
									lang="js"
									readonly
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="max-width:100% margin-left:-24px display:flex flex-direction:row flex-wrap:wrap align-items:center justify-content:center text-align:center font-size:18px line-height:32px">
				<nuxt-link to="/docs/get-started" class="btn btn--hp margin-left:24px margin-bottom:24px md:margin-bottom:0 border:2px__solid__$blue1">
					Get started <i class="icon icon-arrow-down-circle display:inline-block margin-left:8px transform:rotate(-90deg)"></i>
				</nuxt-link>
				<a :href="'#' + filters.webalize('Installation')" class="btn btn--hp btn--transparent md:margin-bottom:0 color:$blue1 border:2px__solid__$blue1 md:padding:12px__24px margin-bottom:24px margin-left:24px">Installation</a>
			</div>
		</section>

		<section :id="filters.webalize('Installation')" class="container margin-bottom:48px margin-top:48px md:margin-bottom:48px max-width:100%">
			<h2 class="hp__section-title">Seamless integration.</h2>
			<p class="hp__section-subtitle">
				Start using Stylify with your favorite tool in a minute.
			</p>
			<div class="hp__section-content">
				<div  class="margin-bottom:24px display:inline-flex max-width:100%"><example-code-editor :defaultCode="cdnUsageDefaultCode" lang="html" readonly/></div>
				<integration-blocks />
			</div>
		</section>

		<div :id="filters.webalize('Fans')" class="max-width:100% overflow:hidden margin-top:0 background-color:$blue2 padding-top:45px margin:45px__0 md:margin-bottom:48px">
			<div class="max-width:1280px margin-left:auto margin-right:auto">
				<h2 class="hp__section-title text-align:center">Give us a Feedback!</h2>
				<p class="hp__section-subtitle text-align:center margin-left:auto margin-right:auto">Star a repo, follow us on the Twitter, mention Stylify on a social media and let us know, what you think!</p>
			</div>
			<div class="display:flex justify-content:center align-items:center flex-direction:column md:flex-direction:row margin-bottom:24px">
				<div class="height:34px display:flex align-items:center justify-content:center md:border-right:2px__solid__#bbe8f6 md:padding-right:12px md:margin-right:12px">
					<div class="display:flex height:28px margin-right:12px width:100px"><a class="github-button" href="https://github.com/stylify/packages" data-size="large" data-show-count="true" aria-label="Star stylify/packages on GitHub">Star</a></div>
					<div class="display:flex width:162px">
						<a href="https://twitter.com/stylify_dev?ref_src=twsrc%5Etfw" target="_blank" rel="noopener nofollow" class="text-decoration:none line-height:1 font-size:12px background:#1d9bf0 color:#fff padding:8px__12px border-radius:12px twitter-follow-button">
							Follow @stylify_dev
						</a>
					</div>
				</div>
				<div class="text-align:center">
					<share-buttons url="https://stylify.dev" title="Write CSS Faster and Efficiently. Write HTML. Get CSS." description="Stylify generates optimized utility-first CSS dynamicly based on what you write. Write HTML. Get CSS. No more unwanted CSS. No more unnecessary configuration." />
				</div>
			</div>
			<div class="slideshow width:200% height:300px md:height:280px margin:0__auto position:relative transform:translate3d(0,0,0) overflow:hidden">
				<div class="display:flex justify-content:center flex-direction:row align-items:flex-start position:absolute top:0 left:0 height:100% transform:translate3d(0,0,0) animation:slideshow__36s__linear__infinite lg:animation:slideshow__20s__linear__infinite column-gap:24px">
					<a
						v-for="(fan, index) in fans"
						:key="'orig-' + index"
						:href="fan.link"
						target="blank"
						rel="noopener nofollow"
						class="
						text-decoration:none color:#000
						display:inline-flex flex-direction:column flex-shrink:0 max-width:300px md:max-width:400px height:280px md:height:220px
						box-shadow:$shadow1 background:#fff padding:12px border-radius:4px
					"
					>
						<div class="display:flex align-items:center margin-bottom:12px">
							<img :src="`/images/hp/fans/${fan.image}`" class="border-radius:50%" alt="" decoding="async" loading="lazy" width="50" height="50">
							<strong class="margin-left:8px font-size:18px">{{ fan.name }}</strong>
						</div>
						<div>{{ fan.text }}</div>
					</a>
					<a
						v-for="(fan, index) in fans"
						:key="'copy-' + index"
						:href="fan.link"
						target="blank"
						rel="noopener nofollow"
						class="
						text-decoration:none color:#000
						display:inline-flex flex-direction:column flex-shrink:0 max-width:300px md:max-width:400px height:280px md:height:220px
						box-shadow:$shadow1 background:#fff padding:12px border-radius:4px
					"
					>
						<div class="display:flex align-items:center margin-bottom:12px">
							<img :src="`/images/hp/fans/${fan.image}`" class="border-radius:50%" alt="" decoding="async" loading="lazy" width="50" height="50">
							<strong class="margin-left:8px font-size:18px">{{ fan.name }}</strong>
						</div>
						<div>{{ fan.text }}</div>
					</a>
				</div>
			</div>
		</div>

		<section :id="filters.webalize('Why Stylify?')" class="container margin-bottom:48px" >
			<h2 class="hp__section-title">Why Stylify?</h2>
			<div class="hp__section-content"><why-stylify /></div>
		</section>

		<div>
			<section class="container display:flex flex-direction:column align-items:center margin-bottom:48px">
				<h2 class="margin-top:0 font-size:32px line-height:52px margin-bottom:18px md:font-size:60px md:line-height:90px">Go ahead, try it now!</h2>
				<p class="margin-top:0 font-size:24px margin-bottom:34px">
					Code less. Do more.
				</p>
				<div>
					<nuxt-link to="/docs/get-started" class="btn">Get started!</nuxt-link>
				</div>
			</section>
		</div>
		<script async defer src="https://buttons.github.io/buttons.js"></script>
	</div>
</template>

<!-- <stylify-ignore> -->
<script>
import ExampleCodeEditor from '~/components/ExampleCodeEditor.vue';

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

const cdnUsageDefaultCode = `
<!-- Copy this script and try Stylify in the browser. -->
<script src="https://cdn.jsdelivr.net/npm/@stylify/stylify@latest/dist/stylify.native.min.js"><\/script>
`;

const variablesExampleCode = `
<!--
ATstylify-variables
	fontSize: '24px',
	fontSizeLg: '32px',
	textShadow: '0 4px 8px #379adf'
/ATstylify-variables
-->
<div class="
	font-size:$fontSize
	lg:font-size:$fontSizeLg
	text-shadow:$textShadow
">
	Seamless coding 🏄‍♀️
</div>
`.replace(/AT/g, '@');

export default {
	components: { ExampleCodeEditor },
	data: () => ({

		// Features tabs
		featuresSelectedTab: 'selectors',
		dynamicScreensDefaultCode: dynamicScreensDefaultCode,
		helpersDefaultCode: helpersDefaultCode,
		cdnUsageDefaultCode: cdnUsageDefaultCode,

		tabs: {
			selectors: 'Use selectors you know',
			components: 'Define components',
			plainSelectors: 'Style anything',
			variables: 'Use variables',
			dynamicScreens: 'Customize screens',
			helpers: 'Extend functionality'
		},
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
	}),
}
</script>

<style lang="scss">
.hp-title {
	background: #007cf0;
	background: linear-gradient(to right, #007cf0 0%, #00b4f4 100%);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
}

@keyframes slideshow {
	100% {
		transform: translateX(-50%);
	}
}
</style>

<!-- </stylify-ignore> -->
