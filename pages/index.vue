<!--
stylify-components
	'btn--hp': `
		&.btn {
			justify-content:center font-size:16px md:min-width:230px padding:12px sm:padding:24px sm:font-size:24px
		}
	`,
	'hp__section-title': `
		font-size:32px line-height:42px font-weight:bold margin-top:0 margin-bottom:12px
		md:font-size:48px md:line-height:64px
	`,
	'hp__section-subtitle': `
		font-size:18px line-height:32px
		margin-top:0 margin-bottom:24px max-width:800px
		md:font-size:22px md:line-height:34px
	`,
	'hp__section-content': 'word-break:break-word margin-top:24px',
	'hp__tab-buttons-wrapper': `
		padding-left:12px padding-top:12px margin-left:-12px display:flex flex-wrap:nowrap
		overflow:auto md:margin-left:-16px lg:margin-left:-12px lg:margin-right:0
	`,
	'hp__tab-content': 'display:flex flex-direction:column lg:flex-direction:row',
	'hp__tab-content-list': 'margin-top:0 font-size:16px line-height:30px lg:width:50% max-width:800px',
	'hp__code-editor': 'padding:12px_0 border-radius:$radius2'
/stylify-components

stylify-keyframes
	slideshow: `
		100% {
			transform: translateX(-50%);
		}
	`
/stylify-keyframes
-->
<template>
	<div>
		<section class="container margin-top:24px md:margin-top:64px">
			<h2 class="color:#fff letter-spacing:-1.5px margin-top:0 font-size:56px text-align:center margin-bottom:24px md:font-size:64px line-height:1 lg:font-size:72px xl:font-size:100px text-transform:uppercase">Write CSS Faster</h2>
			<p class="max-width:980px margin-left:auto margin-right:auto text-align:center margin-top:0 line-height:32px lg:line-height:30px lg:font-size:18px">
				Stylify uses CSS like selectors <span class="color:$blue1 font-family:monospace">color:blue</span>, <span class="color:$blue1 font-family:monospace">width:640px</span>, <span class="color:$blue1 font-family:monospace">margin:0_auto</span> along with <span class="color:$blue1 font-family:monospace">variables</span>, <span class="color:$blue1 font-family:monospace">components</span>, <span class="color:$blue1 font-family:monospace">custom selectors</span> to generate CSS dynamically based on what you write.
			</p>
			<div class="text-align:center line-height:32px lg:line-height:30px lg:font-size:18px">💎&nbsp;Don't waste your time by studying a framework. Focus on coding.&nbsp;💎</div>
		</section>
		<section :id="filters.webalize('Features')" class="max-width:1280px margin-left:auto margin-right:auto padding-top:24px lg:padding-top:48px margin-bottom:32px">
			<div class="hp__tab-buttons-wrapper">
				<a v-for="(tabLabel, tab) in tabs" :key="tab" :data-id="tab" role="button" v-on:click="featuresSelectedTab = tab" :class="[featuresSelectedTab === tab ? 'background:lighten($blue3,20) border-top-color:$blue1 color:#fff' : 'border-color:transparent color:$blue4', 'transition:border-color_.3s margin-right:1px font-weight:bold white-space:nowrap cursor:pointer border-top-width:8px border-top-style:solid padding:12px_24px text-align:center display:inline-flex']">{{tabLabel}}</a>
			</div>
			<div class="padding:12px lg:padding:24px background:lighten($blue3,20)">
				<div v-show="featuresSelectedTab === 'selectors'" class="max-width:100% display:flex flex-direction:column align-items:flex-start">
					<p class="margin-top:0 font-size:14px line-height:28px">
						Write selectors as css <code>property:value</code>. Use <code>_</code> (one underscore) instead of a space and <code>^</code> (hat) instead of a quote. You can also define your own selectors.
					</p>
					<div class="hp__example-editor width:100%">
						<GetStartedSelectors />
					</div>
				</div>
				<div v-show="featuresSelectedTab === 'components'">
					<p class="margin-top:0 font-size:14px line-height:28px">
						Don't bloat your templates with utilities and duplicates. Components can be defined in a template (expects an object without surounding brackets) or in a Compiler config.
					</p>
					<div class="hp__example-editor width:100%">
						<GetStartedComponents />
					</div>
				</div>
				<div v-show="featuresSelectedTab === 'customSelectors'">
					<p class="margin-top:0 font-size:14px line-height:28px">
						Style any element with plain selectors. Can be configured within a template (expects an object without surounding brackets) or in a Compiler config.
					</p>
					<div class="hp__example-editor width:100%">
						<GetStartedCustomSelectors />
					</div>
				</div>
				<div v-show="featuresSelectedTab === 'variables'">
					<p class="margin-top:0 font-size:14px line-height:28px">
						Avoid hardcoded values in templates. Use variables. Can be configurd within a template (expects an object without surounding brackets) or in a Compiler config.
					</p>
					<div class="hp__example-editor width:100%">
						<GetStartedVariables />
					</div>
				</div>
				<div v-show="featuresSelectedTab === 'dynamicScreens'">
					<div class="hp__tab-content">
						<ul class="hp__tab-content-list">
							<li><strong>Use custom values for screens</strong>: <code>mw450px</code> and <code class="white-space:nowrap">rng640px-1024px</code></li>
							<li><strong>Combine screens with logicl operands</strong>: <code>sm&&tolg</code> or <code>sm||tolg</code></li>
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
		</section>

		<section class="container margin-bottom:24px md:margin-bottom:48px">
			<div>
				<p class="hp__section-subtitle">
					Start using Stylify with your favorite tool in a minute.
				</p>
				<div class="hp__section-content">
					<div  class="margin-bottom:24px display:inline-flex max-width:100%"><example-code-editor :defaultCode="cdnUsageDefaultCode" lang="html" readonly/></div>
					<integration-blocks />
				</div>
			</div>
			<div class="max-width:100% margin-left:-8px sm:margin-left:-12px md:margin-left:-24px display:flex flex-direction:row align-items:center justify-content:center text-align:center font-size:18px line-height:32px">
				<nuxt-link to="/docs/get-started" class="btn btn--hp margin-left:8px sm:margin-left:12px md:margin-left:24px border:2px_solid_$blue1">
					Get started <i class="icon icon-arrow-down-circle display:inline-block margin-left:8px transform:rotate(-90deg)"></i>
				</nuxt-link>
				<a :href="'#' + filters.webalize('Installation')" class="btn btn--hp btn--transparent color:$blue1 border:2px_solid_$blue1 margin-left:8px sm:margin-left:12px md:padding:12px_24px">Installation</a>
			</div>
		</section>

		<section id="quote" class="container margin-top:48px padding-top:48px">
			<div class="max-width:1280px margin-left:auto margin-right:auto">
				<h2 class="font-size:32px margin-bottom:12px md:margin-bottom:24px line-height:42px md:font-size:48px md:line-height:64px text-align:center margin-top:0">Don't study frameworks. Focus on coding.</h2>
				<div class="display:flex flex-direction:column md:flex-direction:row align-items:center justify-content:center">
					<div class="max-width:724px md:width:calc(100%_-_220px) font-size:16px line-height:24px">
						<p class="margin-top:0">
							The thing you want is to style your website easily, and quickly without spending much time in Docs. Frameworks, CSS-in-JS libs, and Preprocessors have a lot of features that are great but also make the development more complex and force you to study syntax, random named selectors, and how to use which feature (which you will forget after a week of holiday).
						</p>
						<p class="margin:0">
							Stylify goes against the grain and uses CSS like selectors you already know. It's like writing pure CSS directly into the markup without the need of switching between files and figuring out the names for selectors. If you know CSS, you know how to use Stylify.
							<br>If you try Stylify, you will find out that preprocessors and short selectors in frameworks are unnecessary.
						</p>
					</div>
					<div class="display:flex flex-direction:row md:flex-direction:column margin-top:24px md:margin-top:0 md:padding-left:24px align-items:center flex-direction:column">
						<img src="/images/machacek.jpg" alt="" width="200" height="200" class="md:margin-left:24px border-radius:200px height:100px md:height:136px width:100px md:width:136px" loading="lazy" decoding="async">
						<div class="margin-left:12px md:margin-left:0 md:margin-top:12px md:text-align:center">
							<strong class="color:#fff">Vladimír Macháček</strong>
							<br>Author of Stylify CSS
							<br>Webdev at <a href="https://slevomat.cz" class="color:$blue1" target="_blank">Slevomat.cz</a>
						</div>
					</div>
				</div>
			</div>
		</section>

		<div :id="filters.webalize('Fans')" class="max-width:100% overflow:hidden margin-top:0 padding-top:46px margin:45px_0 md:margin-bottom:48px">
			<div class="display:flex justify-content:center align-items:center flex-direction:column md:flex-direction:row margin-bottom:24px">
				<div class="height:34px display:flex align-items:center justify-content:center md:border-right:2px_solid_#bbe8f6 md:padding-right:12px md:margin-right:12px">
					<div class="display:flex height:28px margin-right:12px width:100px"><a class="github-button" href="https://github.com/stylify/packages" data-size="large" data-show-count="true" aria-label="Star stylify/packages on GitHub">Star</a></div>
					<div class="display:flex">
						<a href="https://twitter.com/stylifycss?ref_src=twsrc%5Etfw" target="_blank" rel="noopener nofollow" class="text-decoration:none line-height:1 font-size:12px background:#1d9bf0 color:#fff padding:8px_12px border-radius:12px twitter-follow-button">
							Follow @stylifycss
						</a>
					</div>
				</div>
				<div class="text-align:center">
					<share-buttons url="https://stylifycss.com" title="Write CSS Faster and Efficiently. Write HTML. Get CSS." description="Stylify generates optimized utility-first CSS dynamicly based on what you write. Write HTML. Get CSS. No more unwanted CSS. No more unnecessary configuration." />
				</div>
			</div>
			<div class="slideshow width:200% height:300px md:height:280px margin:0_auto position:relative transform:translate3d(0,0,0) overflow:hidden">
				<div class="display:flex justify-content:center flex-direction:row align-items:flex-start position:absolute top:0 left:0 height:100% transform:translate3d(0,0,0) animation:slideshow_50s_linear_infinite column-gap:24px">
					<a
						v-for="(fan, index) in fans"
						:key="'orig-' + index"
						:href="fan.link"
						target="blank"
						rel="noopener nofollow"
						class="
						text-decoration:none color:$blue4
						width:320px
						display:inline-flex flex-direction:column flex-shrink:0 height:230px
						background:lighten($blue3,20) padding:12px border-radius:4px
					"
					>
						<div class="display:flex align-items:center margin-bottom:12px">
							<img :src="`/images/hp/fans/${fan.image}`" class="border-radius:50%" alt="" decoding="async" loading="lazy" width="50" height="50">
							<div class="margin-left:12px display:flex flex-direction:column justify-content:flex-start">
								<strong class="font-size:18px color:#fff">{{ fan.name }}</strong>
								<span v-if="typeof fan.note !== 'undefined'" class="font-size:14px">{{ fan.note }}</span>
							</div>
						</div>
						<div class="font-size:14px color:lighten($blue4,20)">{{ fan.text }}</div>
					</a>
					<a
						v-for="(fan, index) in fans"
						:key="'copy-' + index"
						:href="fan.link"
						target="blank"
						rel="noopener nofollow"
						class="
						text-decoration:none color:$blue4
						width:320px
						display:inline-flex flex-direction:column flex-shrink:0 height:230px
						background:lighten($blue3,20) padding:12px border-radius:4px
					"
					>
						<div class="display:flex align-items:center margin-bottom:12px">
							<img :src="`/images/hp/fans/${fan.image}`" class="border-radius:50%" alt="" decoding="async" loading="lazy" width="50" height="50">
							<div class="margin-left:12px display:flex flex-direction:column align-items:flex-start">
								<strong class="font-size:18px color:#fff">{{ fan.name }}</strong>
								<span v-if="typeof fan.note !== 'undefined'" class="font-size:14px">{{ fan.note }}</span>
							</div>
						</div>
						<div class="font-size:14px font-size:14px color:lighten($blue4,20)">{{ fan.text }}</div>
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
	</div>
</template>

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
<!-- Try Stylify using CDN. Copy this into any html file. -->
<script src="https://cdn.jsdelivr.net/npm/@stylify/stylify@latest/dist/stylify.min.js"><\/script>
`;

const variablesExampleCode = `
<!--
stylify-variables
	fontSize: '24px',
	fontSizeLg: '32px',
	textShadow: '0 4px 8px #379adf'
/stylify-variables
-->
<div class="
	font-size:$fontSize
	lg:font-size:$fontSizeLg
	text-shadow:$textShadow
">
	Seamless coding 🏄‍♀️
</div>
`;

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
			customSelectors: 'Style anything',
			variables: 'Use variables',
			dynamicScreens: 'Customize screens',
			helpers: 'Extend functionality'
		},
		fans: [
			{
				name: 'Mubashar Hashmat',
				note: 'Manager at Scorp',
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
				name: 'Angsuman Chakraborty',
				image: 'angsuman-chakraborty.jpg',
				text: `For your information stylifycss.com: Dynamic Utility-First CSS Generator.`,
				link: 'https://twitter.com/angsuman/status/1482257827188310017'
			},
			{
				name: 'Phan An',
				note: '@vuejs core team member',
				image: 'phan-an.jpg',
				text: `This looks super interesting!`,
				link: 'https://twitter.com/notphanan/status/1566610354246864901'
			},
			{
				name: 'Lukeshiru',
				note: 'Webdev at Vangware',
				image: 'lukeshiru.gif',
				text: `It's like Tailwind's JIT, but without having to learn new classnames, and following a really simple set of "rules". Great library!`,
				link: 'https://dev.to/machy8/stylifydev-dynamic-css-generator-1cbe'
			},
			{
				name: 'Tom Ravn',
				note: 'Webdeveloper & SysAdmin',
				image: 'tom-ravn.jpg',
				text: 'Have you heard about Stylify? Similar framework as #TailwindCSS. I guess when you finally learn #CSS using Tailwind you can go level deeper and use Stylify, you will basically write pure CSS into #html.😆',
				link: 'https://twitter.com/TomR4vn/status/1518493107817431040'
			},
			{
				name: 'Tomáš Pilař',
				note: 'Co-Founder & CTO Conviu.com',
				image: 'tomas-pilar.jpg',
				text: `I recommend looking at stylifycss.com if you don't know that tool yet 👍. Launched on the first try with Symfony and it works like a charm! 👏`,
				link: 'https://twitter.com/TomasPilaru/status/1494635502930169884'
			},
			{
				name: 'David Mario Licla',
				note: 'Front-End dev at Forma',
				image: 'david-mario-licla.jpeg',
				text: '🤯 Did you know that there is an alternative to TailwindCSS but only using CSS properties? Look it\'s called Stylify!',
				link: 'https://www.linkedin.com/posts/davidmariolc_sab%C3%ADas-que-existe-una-alternativa-a-tailwindcss-activity-6912058924682604544-ImsK?utm_source=linkedin_share&utm_medium=member_desktop_web'
			},
			{
				name: 'Ahmad Tahir',
				note: 'Fullstack Dev',
				image: 'ahmad-tahir.jpg',
				text: `Wow this looks neat 💯. I'll be checking it out.`,
				link: 'https://twitter.com/AhmadBMTahir/status/1531256572629987328'
			},
			{
				name: 'Japheth Mutai',
				image: 'japheth-mutai.jpg',
				text: `Well, I guess we all need to follow @stylifycss to reduce our #CSS related nerve attacks 😂😂.`,
				link: 'https://twitter.com/ItsDevMutai/status/1495784770646728713'
			}
		]
	}),
}
</script>
