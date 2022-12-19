<!--
stylify-components
	'btn--hp': `
		&.btn {
			justify-content:center font-size:16px md:min-width:230px padding:12px sm:padding:24px sm:font-size:24px
		}
	`,
	'hp__info-boxes': '> div {border:1px_solid_#1e2431 padding:8px border-radius:4px}'
/stylify-components
-->
<template>
	<div>
		<div class="container lg:margin-top:24px lg:margin-top:48px margin-bottom:64px tolg:flex-direction:column display:flex lg:display:grid lg:grid-template-columns:1fr_1fr xl:grid-template-columns:48%_48% gap:2% justify-content:space-between tolg:align-items:center">
			<div class="md:max-width:640px">
				<h1 class="visually-hidden">Stylifycss.com - Write CSS faster</h1>
				<section class="margin-bottom:24px lg:font-size:18px">
					<h2 class="color:#fff text-align:center lg:text-align:left letter-spacing:-1.5px margin-top:0 font-size:34px minw400px:font-size:48px margin-bottom:12px xl:font-size:64px text-transform:uppercase">Write CSS Faster</h2>
					<div class="max-width:840px margin:0_auto text-align:center lg:text-align:left">
						<p class="margin-top:0">
							Stylify uses CSS-like selectors <span class="color:$blue1 font-family:monospace">color:blue</span>, <span class="color:$blue1 font-family:monospace">width:640px</span>, <span class="color:$blue1 font-family:monospace">margin:0_auto</span> along with <nuxt-link to="/docs/get-started#adding-a-variable" class="color:$blue1 font-family:monospace">variables</nuxt-link>, <nuxt-link to="/docs/get-started#defining-a-component" class="color:$blue1 font-family:monospace">components</nuxt-link>, <nuxt-link to="/docs/get-started#custom-selectors" class="color:$blue1 font-family:monospace">custom selectors</nuxt-link> to generate optimized CSS dynamically based on what you write.
						</p>
					</div>
					<div>
						✅ Syntax you already know. Don't waste time studying CSS framework.
						<br>✅ Less switching between HTML/CSS files
						<br>✅ Automagic and Extremely tunned CSS optimization
						<br>✅ Simple CSS Bundles splitting for Layouts/Pages
						<br>✅ Easily Configurable and Extensible
					</div>
				</section>
				<div class="max-width:100% flex-wrap:wrap margin-top:12px md:margin-top:24px gap:8px sm:gap:12px display:flex flex-direction:row align-items:center justify-content:center lg:justify-content:flex-start font-size:18px">
					<nuxt-link to="/docs/get-started" class="btn border:2px_solid_$blue1 sm:padding:20px_24px lg:padding:20px_24px">
						Get started
						<i class="icon icon-arrow-down-circle display:inline-block margin-left:8px transform:rotate(-90deg) width:18px height:18px"></i>
					</nuxt-link>
					<nuxt-link to="/docs/integrations" class="btn btn--transparent color:$blue1 border:2px_solid_$blue1 sm:padding:20px_24px lg:padding:20px_24px">Installation</nuxt-link>
					<span class="tolg:display:none"><GithubButton /></span>
				</div>
			</div>
			<div class="width:100% margin-top:24px lg:width:auto max-width:640px lg:margin-top:0 lg:max-width:none">
				<HpCodeExamples />
			</div>
		</div>
		<div id="features" class="container">
			<p class="text-align:center">
				Stylify may look like inline styles. Why not use them? Because they are not responsive and can't be <a href="#why-stylify" class="color:$blue1">efficiently optimized</a>.
			</p>
			<stylify-features />
		</div>
		<section id="how-it-works" class="scroll-margin-top:50px container margin-top:42px margin-bottom:42px">
			<h2 class="text-align:center margin-bottom:8px">How it works?</h2>
			<div class="[>div]{display:inline-flex;align-items:center;justify-content:center} hp__info-boxes font-size:14px display:grid md:grid-template-columns:repeat(3,1fr) gap:12px">
				<div>
					<span class="font-size:24px margin-right:8px">📥</span>
					<span>
						<a href="#installation" class="color:$blue1">Install Stylify CSS</a>.
						<br>Write CSS-like selectors into class attributes.
						<br>Additionally configure <nuxt-link to="/docs/get-started#adding-a-variable" class="color:$blue1">Variables</nuxt-link>, <nuxt-link to="/docs/get-started#defining-a-component" class="color:$blue1">Components</nuxt-link>, <nuxt-link to="/docs/get-started#adding-macros" class="color:$blue1">Macros</nuxt-link>.
					</span>
				</div>
				<div>
					<span class="font-size:24px margin-right:8px">📦</span>
					<span>
						CSS is automatically generated into CSS files.
						<br>Multiples CSS bundles can be configured.
					</span>
				</div>
				<div>
					<span class="font-size:24px margin-right:8px">🚀</span>
					<span>In production, CSS and HTML are optimized and selectors minified <code class="white-space:nowrap">.color:blue</code> => <code class="white-space:nowrap">.a</code>.</span>
				</div>
			</div>
		</section>
		<section :id="filters.webalize('Why Stylify?')" class="scroll-margin-top:50px container margin-top:42px margin-bottom:42px">
			<why-stylify textAlign="center" />
		</section>
		<section id="installation" class="scroll-margin-top:50px container margin-top:42px margin-bottom:42px">
			<div class="margin-bottom:24px">
				<h3 class="font-size:24px margin-bottom:4px color:#fff text-align:center">
					Start using Stylify CSS with your favorite tool in a minute.
				</h3>
				<div class="margin-top:12px">
					<integration-blocks />
				</div>
			</div>
		</section>
		<section id="quote" class="scroll-margin-top:50px container margin-top:32px padding-top:32px">
			<h2 class="font-size:32px margin-bottom:12px md:margin-bottom:24px md:font-size:48px text-align:center margin-top:0">Don't study frameworks. Focus on coding!</h2>
			<div class="display:flex flex-direction:column md:flex-direction:row align-items:center justify-content:center">
				<div class="max-width:724px md:width:calc(100%_-_220px) font-size:16px">
					<p class="margin-top:0">
						As a developer you want to code your website easily, quickly and without spending much time in Docs. Frameworks, CSS-in-JS libs, and Preprocessors have a lot of features, that are great, but also makes the development more complex, forces you to study syntax, randomly named selectors and how to use which feature (which you will forget after a week of holiday 🍹).
					</p>
					<p class="margin:0">
						Stylify focuses on simplicity and uses CSS-like selectors you already know. It's like writing pure CSS directly into the markup without the need of switching between files and figuring out the names for selectors. If you know CSS, you know how to use Stylify.
						<br>If you try Stylify, you will find out that preprocessors and short selectors are unnecessary.
					</p>
				</div>
				<div class="display:flex flex-direction:row md:flex-direction:column margin-top:24px md:margin-top:0 md:padding-left:24px align-items:center flex-direction:column">
					<iframe width="310" height="185" src="https://www.youtube-nocookie.com/embed/GRwtXDnm5gE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" loading="lazy" allowfullscreen class="max-width:100%"></iframe>
					<div class="margin-left:12px md:margin-left:0 margin-top:8px md:margin-top:12px md:text-align:center">
						<strong class="color:#fff">Vladimír Macháček</strong>
						<br>Author of Stylify CSS
						<br>Webdev at <a href="https://slevomat.cz" class="color:$blue1" target="_blank">Slevomat.cz</a>
					</div>
				</div>
			</div>
		</section>
		<div :id="filters.webalize('Fans')" class="scroll-margin-top:50px max-width:100% overflow:hidden margin-top:0 padding-top:32px margin:32px_0">
			<HpFansCarousel />
		</div>

		<section id="components" class="scroll-margin-top:50px container margin-top:32px padding-top:32px margin-bottom:32px">
			<h2 class="font-size:32px margin-bottom:12px md:margin-bottom:24px md:font-size:48px text-align:center margin-top:0">Use prepared components</h2>
			<ComponentsPreviewGrid />
			<div class="text-align:center">
				<nuxt-link to="/snippets/components" class="btn btn--hp margin-top:12px">
					Check out components
					<i class="icon icon-arrow-down-circle display:inline-block margin-left:8px transform:rotate(-90deg)"></i>
				</nuxt-link>
			</div>
		</section>
	</div>
</template>

<script>
export default {
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
