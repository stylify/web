<!--
stylify-components
	'btn--hp': `
		&.btn {
			justify-content:center font-size:16px md:min-width:230px padding:12px sm:padding:24px sm:font-size:24px
		}
	`,
	'hp__section-title': `
		font-size:32px font-weight:bold margin-top:0 margin-bottom:12px
		md:font-size:48px
	`,
	'hp__section-subtitle': `
		font-size:18px
		margin-top:0 margin-bottom:12px max-width:800px
		md:font-size:22px
	`,
	'hp__section-content': 'word-break:break-word margin-top:12px',
	'hp__tab-buttons-wrapper': `
		padding-left:12px padding-top:12px margin-left:-12px display:flex flex-wrap:nowrap
		overflow:auto md:margin-left:-16px lg:margin-left:-12px lg:margin-right:0
	`,
	'hp__tab-content': 'display:flex flex-direction:column lg:flex-direction:row',
	'hp__tab-content-list': 'margin-top:0 font-size:16px lg:width:50% max-width:800px',
	'hp__code-editor': 'padding:12px_0 border-radius:$radius2',
	'hp__info-boxes': '> div {border:1px_solid_#1e2431 padding:8px border-radius:4px}'
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
		<h1 class="visually-hidden">Stylifycss.com - Write CSS faster</h1>
		<section class="container md:margin-top:24px lg:margin-top:34px">
			<h2 class="color:#fff letter-spacing:-1.5px margin-top:0 font-size:48px text-align:center margin-bottom:12px md:font-size:64px line-height:1 lg:font-size:72px xl:font-size:100px text-transform:uppercase">Write CSS Faster</h2>
			<p class="max-width:980px margin-left:auto margin-right:auto text-align:center margin-top:0 lg:font-size:18px">
				Stylify is a library that uses CSS-like selectors <span class="color:$blue1 font-family:monospace">color:blue</span>, <span class="color:$blue1 font-family:monospace">width:640px</span>, <span class="color:$blue1 font-family:monospace">margin:0_auto</span> along with <span class="color:$blue1 font-family:monospace">variables</span>, <span class="color:$blue1 font-family:monospace">components</span>, <span class="color:$blue1 font-family:monospace">custom selectors</span> to generate CSS dynamically based on what you write.
			</p>
			<div class="text-align:center lg:font-size:18px">💎&nbsp;Don't waste time studying a CSS framework. Stay with CSS. Focus on coding!&nbsp;💎</div>
		</section>
		<div class="container display:flex gap:12px margin-top:24px justify-content:center flex-wrap:wrap align-items:center">
			<span class="display:flex gap:12px align-items:center">
				<GithubButton />
				<GithubButton type="sponsor" />
			</span>
			<span class="display:flex gap:12px align-items:center">
				<strong class="badge cursor:default pointer-events:none">
					17k+/year packages downloads
				</strong>
				<a href="https://www.producthunt.com/posts/stylify-css?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-stylify&#0045;css" target="_blank" class="pointer-events:none border:2px_solid_#f1f1f1 border-radius:4px display:inline-flex align-items:center" rel="noopener nofollow"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=366602&theme=dark" alt="Stylify&#0032;CSS - Stylify&#0032;uses&#0032;CSS&#0045;like&#0032;selectors&#0032;to&#0032;generate&#0032;optimized&#0032;CSS | Product Hunt" style="width: auto; height: 32px;" width="250" height="54" loading="lazy" decoding="async" /></a>
			</span>
		</div>
		<section class="container margin-top:52px margin-bottom:24px">
			<h2 class="text-align:center margin-bottom:8px">How it works?</h2>
			<div class="[>div]{display:inline-flex;align-items:center;justify-content:center} hp__info-boxes font-size:14px display:grid md:grid-template-columns:repeat(3,1fr) gap:12px">
				<div>
					<span class="font-size:24px margin-right:8px">🔁</span>
					<span>
						<a href="#installation" class="color:$blue1">Install Stylify CSS</a>.
						<br>Write CSS-like selectors into class attributes.
					</span>
				</div>
				<div>
					<span class="font-size:24px margin-right:8px">📦</span>
					<span>CSS is automatically generated into CSS files.</span>
				</div>
				<div>
					<span class="font-size:24px margin-right:8px">🚀</span>
					<span>In production, CSS and HTML get optimized: minified, selectors are mangled <code class="white-space:nowrap">.color-blue</code> => <code class="white-space:nowrap">.a</code> and properties are chained.</span>
				</div>
			</div>
		</section>
		<section :id="filters.webalize('Features')" class="max-width:1280px margin-left:auto margin-right:auto padding-top:24px margin-bottom:24px">
			<div class="hp__tab-buttons-wrapper">
				<a v-for="(tabLabel, tab) in tabs" :key="tab" :data-id="tab" role="button" v-on:click="featuresSelectedTab = tab" :class="[featuresSelectedTab === tab ? 'background:lighten($blue3,20) border-top-color:$blue1 color:#fff' : 'border-color:transparent color:$blue4', 'transition:border-color_.3s margin-right:1px font-weight:bold white-space:nowrap cursor:pointer border-top-width:8px border-top-style:solid padding:12px_24px text-align:center display:inline-flex']">{{tabLabel}}</a>
			</div>
			<div class="padding:12px lg:padding:24px background:lighten($blue3,20)">
				<div v-show="featuresSelectedTab === 'selectors'" class="max-width:100% display:flex flex-direction:column align-items:flex-start">
					<p class="margin-top:0 font-size:14px">
						Write selectors as css <code>property:value</code>. Use <code>_</code> (one underscore) instead of a space and <code>^</code> (hat) instead of a quote. You can also define your own selectors.
					</p>
					<div class="hp__example-editor width:100%">
						<GetStartedSelectors />
					</div>
				</div>
				<div v-show="featuresSelectedTab === 'components'">
					<p class="margin-top:0 font-size:14px">
						Don't bloat your templates with utilities and duplicates. Components can be defined in a template (expects an object without surounding brackets) or in a Compiler config.
					</p>
					<div class="hp__example-editor width:100%">
						<GetStartedComponents />
					</div>
				</div>
				<div v-show="featuresSelectedTab === 'customSelectors'">
					<p class="margin-top:0 font-size:14px">
						Style any element with plain selectors. Can be configured within a template (expects an object without surounding brackets) or in a Compiler config.
					</p>
					<div class="hp__example-editor width:100%">
						<GetStartedCustomSelectors />
					</div>
				</div>
				<div v-show="featuresSelectedTab === 'variables'">
					<p class="margin-top:0 font-size:14px">
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
						<div class="max-width:800px lg:margin-left:12px lg:width:50%">
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
						<div class="max-width:800px lg:margin-left:12px lg:width:50%">
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

		<section id="installation" class="container margin-bottom:24px md:margin-bottom:32px">
			<div class="margin-bottom:24px">
				<h3 class="font-size:24px margin-bottom:4px color:#fff text-align:center">
					Start using Stylify CSS with your favorite tool in a minute.
				</h3>
				<div class="hp__section-content">
					<integration-blocks />
				</div>
			</div>
			<div class="max-width:100% margin-left:-8px sm:margin-left:-12px display:flex flex-direction:row align-items:center justify-content:center text-align:center font-size:18px">
				<nuxt-link to="/docs/get-started" class="btn btn--hp margin-left:8px sm:margin-left:12px border:2px_solid_$blue1">
					Get started <i class="icon icon-arrow-down-circle display:inline-block margin-left:8px transform:rotate(-90deg)"></i>
				</nuxt-link>
				<nuxt-link to="/docs/integrations" class="btn btn--hp btn--transparent color:$blue1 border:2px_solid_$blue1 margin-left:8px sm:margin-left:12px md:padding:12px_24px">Installation</nuxt-link>
			</div>
		</section>

		<section :id="filters.webalize('Why Stylify?')" class="container margin-top:32px padding-top:32px" >
			<h2 class="font-size:32px margin-bottom:12px md:margin-bottom:12px md:font-size:48px text-align:center margin-top:0">💡&nbsp;Why Stylify?&nbsp;💡</h2>
			<p class="text-align:center max-width:1000px margin:0_auto">
				Stylify primarily tries to solve two problems. <strong>Syntax for utilities</strong> and <strong>CSS output optimization and scalability</strong>.
				<br>Apart from that, it brings useful features that will help you to code your project in a flexible and scalable way.
			</p>
			<div class="hp__info-boxes margin-top:8px display:grid grid-template-columns:repeat(auto-fit,minmax(300px,1fr)) gap:12px">
				<div><strong>The CSS-like</strong> syntax is used to stick with the native CSS as much as possible and skip the process of studying random shortcuts and selectors. It's almost like writing CSS. Therefore is easy to switch between Stylify and CSS.</div>
				<div><strong>Optimization process</strong> then shortens selectors in HTML and CSS, chains selectors to minimize duplicate properties, let's you split CSS bundles however you need and a lot more.</div>
			</div>
			<div class="hp__section-content"><why-stylify /></div>
		</section>

		<section id="components" class="container margin-top:32px padding-top:32px">
			<h2 class="font-size:32px margin-bottom:12px md:margin-bottom:24px md:font-size:48px text-align:center margin-top:0">🎨&nbsp;Use prepared components&nbsp;🎨</h2>
			<div class="sm:margin-left:-12px display:flex flex-wrap:wrap">
				<nuxt-link v-for="component in componentsList" :key="component.docsUrl" :to="`/snippets/${component.docsUrl}`" class="text-decoration:none width:100% sm:width:calc(100%_*_1/2_-_12px) lg:width:calc(100%_*_1/3_-_12px) lg:width:calc(100%_*_1/4_-_12px) display:inline-flex flex-direction:column sm:margin-left:12px margin-bottom:12px background:lighten($blue3,20) padding:12px border-radius:8px [&:hover_h3]{color:$blue1}">
					<iframe :src="`/content/snippets/${component.previewUrl}`" class="width:100% overflow:hidden border-radius:4px" frameBorder="0" loading="lazy"></iframe>
					<h3 class="margin:8px_0_0_0 font-size:18px line-height:1!important transition:.3s">{{ component.title }}</h3>
				</nuxt-link>
			</div>
			<div class="text-align:center">
				<nuxt-link to="/snippets/components" class="btn btn--hp margin-top:12px">
					Check out components
					<i class="icon icon-arrow-down-circle display:inline-block margin-left:8px transform:rotate(-90deg)"></i>
				</nuxt-link>
			</div>
		</section>

		<section id="quote" class="container margin-top:32px padding-top:32px">
			<div class="max-width:1280px margin-left:auto margin-right:auto">
				<h2 class="font-size:32px margin-bottom:12px md:margin-bottom:24px md:font-size:48px text-align:center margin-top:0">💎&nbsp;Don't study frameworks. Focus on coding!&nbsp;💎</h2>
				<div class="display:flex flex-direction:column md:flex-direction:row align-items:center justify-content:center">
					<div class="max-width:724px md:width:calc(100%_-_220px) font-size:16px">
						<p class="margin-top:0">
							The thing you want is to code your website easily, and quickly without spending much time in Docs. Frameworks, CSS-in-JS libs, and Preprocessors have a lot of features, that are great, but also makes the development more complex and forces you to study syntax, random named selectors, and how to use which feature (which you will forget after a week of holiday).
						</p>
						<p class="margin:0">
							Stylify goes against the grain and uses CSS-like selectors you already know. It's like writing pure CSS directly into the markup without the need of switching between files and figuring out the names for selectors. If you know CSS, you know how to use Stylify.
							<br>If you try Stylify, you will find out that preprocessors and short selectors in frameworks are unnecessary.
						</p>
					</div>
					<div class="display:flex flex-direction:row md:flex-direction:column margin-top:24px md:margin-top:0 md:padding-left:24px align-items:center flex-direction:column">
						<img src="/images/machacek.jpg" alt="" width="200" height="200" class="md:margin-left:12px border-radius:200px height:100px md:height:136px width:100px md:width:136px" loading="lazy" decoding="async">
						<div class="margin-left:12px md:margin-left:0 md:margin-top:12px md:text-align:center">
							<strong class="color:#fff">Vladimír Macháček</strong>
							<br>Author of Stylify CSS
							<br>Webdev at <a href="https://slevomat.cz" class="color:$blue1" target="_blank">Slevomat.cz</a>
						</div>
					</div>
				</div>
			</div>
			<div>
				<h3 class="text-align:center font-size:24px"><img src="/images/brands/youtube.svg" loading="lazy" decoding="async" width="42" height="42" alt="" class="vertical-align:middle margin-right:12px">Learn more about Stylify on our Youtube channel</h3>
				<div class="display:flex max-width:calc(100%_+_16px) margin-left:-8px margin-right:-8px flex-direction:row margin-top:32px overflow:auto justify-content:center">
					<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/GRwtXDnm5gE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" loading="lazy" allowfullscreen class="max-width:100% min-height:315px height:auto"></iframe>
				</div>
			</div>
		</section>

		<div :id="filters.webalize('Fans')" class="max-width:100% overflow:hidden margin-top:0 padding-top:32px margin:32px_0 md:margin-bottom:48px">
			<div class="display:flex justify-content:center align-items:center flex-direction:column md:flex-direction:row margin-bottom:24px">
				<div class="height:34px display:flex align-items:center justify-content:center md:border-right:2px_solid_#bbe8f6 md:padding-right:12px md:margin-right:12px">
					<div class="display:flex height:40px margin-right:12px width:84px"><GithubButton /></div>
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
				<div class="display:flex justify-content:center flex-direction:row align-items:flex-start position:absolute top:0 left:0 height:100% transform:translate3d(0,0,0) animation:slideshow_70s_linear_infinite column-gap:12px">
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

		<div>
			<section class="container display:flex flex-direction:column align-items:center margin-bottom:32px padding-bottom:32px">
				<h2 class="margin-top:0 font-size:32px margin-bottom:4px md:font-size:60px">Go ahead, try it now!</h2>
				<p class="margin-top:0 font-size:24px margin-bottom:12px">
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
		'text:(\\\\S+)': ({macroMatch, selectorProperties}) => {
			const property = helpers.textPropertyType(
				macroMatch.getCapture(0)
			);
			selectorProperties.add(
				property, macroMatch.getCapture(0)
			);
		}
	}
});`.trim();

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

		tabs: {
			selectors: 'Use selectors you know',
			components: 'Define components',
			customSelectors: 'Style anything',
			variables: 'Use variables',
			dynamicScreens: 'Customize screens',
			helpers: 'Extend functionality'
		},
		videos: [
			{
				image: 'style-your-website-faster.jpg',
				title: '💎 Style your website faster',
				link: 'https://www.youtube.com/shorts/hHOugsB045I'
			},
			{
				image: 'write-css-faster.jpg',
				title: '🔥 Write CSS for your website faster',
				link: 'https://www.youtube.com/shorts/zlQwVlIsmlE'
			},
		],
		componentsList: [
			{
				previewUrl: 'components/buttons.html',
				docsUrl: 'components/buttons',
				title: 'Buttons'
			},
			{
				previewUrl: 'components/badges.html',
				docsUrl: 'components/badges',
				title: 'Badges'
			},
			{
				previewUrl: 'components/switches.html',
				docsUrl: 'components/switches',
				title: 'Switches'
			},
			{
				previewUrl: 'components/text-fields.html',
				docsUrl: 'components/text-fields',
				title: 'Text Fields'
			},
			{
				previewUrl: 'components/shadows.html',
				docsUrl: 'components/shadows',
				title: 'Shadows'
			},
			{
				previewUrl: 'components/animations.html',
				docsUrl: 'components/animations',
				title: 'Animations'
			},
			{
				previewUrl: 'components/grids-fit.html',
				docsUrl: 'components/grids',
				title: 'Grids'
			},
			{
				previewUrl: 'components/messages.html',
				docsUrl: 'components/messages',
				title: 'Messages'
			},
		],
		fans: [
			{
				name: 'Mubashar Hashmat',
				note: 'Manager at Scorp',
				image: 'mubashar-hashmat.jpg',
				text: `Extremely awesome 😎.`,
				link: 'https://twitter.com/MubasharHashmat/status/1491036188152832003'
			},
			{
				name: 'Jean-Baptiste',
				note: 'Creator of Ardaria',
				image: 'jean-baptiste.jpg',
				text: `Interesting project! Keep going guyz 💪`,
				link: 'https://twitter.com/JB_Briant/status/1589131258441129984'
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
				name: '蝉丸ファン',
				note: 'Core committer of @webpack',
				image: 'about-hiroppy.gif',
				text: `It's similar to the Tailwind but more readable.`,
				link: 'https://twitter.com/about_hiroppy/status/1595005062279041024'
			},
			{
				name: 'Phan An',
				note: '@vuejs core team member',
				image: 'phan-an.jpg',
				text: `This looks super interesting!`,
				link: 'https://twitter.com/notphanan/status/1566610354246864901'
			},
			{
				name: 'Tomáš Pilař',
				note: 'Co-Founder & CTO Conviu.com',
				image: 'tomas-pilar.jpg',
				text: `I recommend looking at stylifycss.com if you don't know that tool yet 👍. Launched on the first try with Symfony and it works like a charm! 👏`,
				link: 'https://twitter.com/TomasPilaru/status/1494635502930169884'
			},
			{
				name: 'Posandu Mapa',
				note: 'Fullstack dev',
				image: 'posandu-mapa.jpeg',
				text: `I like how Stylify compresses the utility classes. A good Tailwind CSS alternative.`,
				link: 'https://www.producthunt.com/products/stylify-css/reviews?review=551602'
			},
			{
				name: 'Finn Guha',
				note: 'Webdev teacher',
				image: 'finn-guha.jpeg',
				text: `Wow, that seems like a promising concept ! And one that seems very interesting to me personally. I am always amazed by new and unique concepts of writing CSS.`,
				link: 'https://www.producthunt.com/posts/stylify-css?comment=2013972'
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
			},
			{
				name: 'Shushant Lakhyani',
				note: 'Just Ship It Hub',
				image: 'shushant-lakhyani.jpeg',
				text: `This looks cool!`,
				link: 'https://www.producthunt.com/posts/stylify-css?comment=2014729'
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
				name: 'Ricardo Anaya',
				note: 'Full Stack Developer',
				image: 'ricardo-anaya.jpg',
				text: `Cool!`,
				link: 'https://twitter.com/ricky_anaya/status/1594835182632439810'
			},
			{
				name: 'Musa Yazlık',
				image: 'musa-yazlik.jpg',
				text: `Hmm. I like it. 😁`,
				link: 'https://www.producthunt.com/posts/stylify-css?comment=2015470'
			},
		]
	}),
	head() {
		return {
			link: [
				{ rel: 'canonical', href: "https://stylifycss.com"}
			],
			script: [
				{
					innerHTML: `{
						"@context": "http://schema.org",
						"@type": "VideoObject",
						"name": "Style your website faster with Stylify CSS | Stylify introduction in 8 minutes | #webdevelopment",
						"description": "Learn how to style your website faster with Stylify CSS and CSS-like utilities.  Learn how to use variables, components, custom selectors and a lot more.",
						"thumbnailUrl": "https://i.ytimg.com/vi/GRwtXDnm5gE/default.jpg",
						"uploadDate": "2022-11-09T12:12:45Z",
						"duration": "PT8M5S",
						"embedUrl": "https://www.youtube.com/embed/GRwtXDnm5gE"
					}`,
					type: 'application/ld+json'
				}
			],
			__dangerouslyDisableSanitizers: ['script']
		}
	},
}
</script>
