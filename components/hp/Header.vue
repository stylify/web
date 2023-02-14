<template>
	<div class="
		container margin-top:24px margin-bottom:64px display:flex gap:2% justify-content:space-between
		tolg:{flex-direction:column;align-items:center}
		lg:{margin-top:48px;display:grid;grid-template-columns:1fr_1fr}
		xl:grid-template-columns:48%_48%
	">
		<div class="md:max-width:640px">
			<h1 class="visually-hidden">Stylifycss.com - Write CSS faster</h1>
			<section class="margin-bottom:24px lg:font-size:18px">
				<h2 class="color:#fefefe text-align:center lg:text-align:left letter-spacing:-1.5px margin-top:0 font-size:34px minw450px:font-size:48px margin-bottom:12px xl:font-size:64px text-transform:uppercase">Write CSS Faster</h2>
				<div class="max-width:840px margin:0_auto text-align:center lg:text-align:left">
					<p class="margin-top:0">
						Stylify uses CSS-like selectors <span class="color:$blue1 font-family:monospace">color:blue</span>, <span class="color:$blue1 font-family:monospace">width:640px</span>, <span class="color:$blue1 font-family:monospace">margin:0_auto</span> along with <nuxt-link to="/docs/get-started#adding-a-variable" class="color:$blue1 font-family:monospace">variables</nuxt-link>, <nuxt-link to="/docs/get-started#defining-a-component" class="color:$blue1 font-family:monospace">components</nuxt-link>, <nuxt-link to="/docs/get-started#custom-selectors" class="color:$blue1 font-family:monospace">custom selectors</nuxt-link> to generate optimized CSS dynamically based on what you write.
					</p>
				</div>
				<ul class="
					padding-left:0
					[a]{color:$blue1}
					[li:before]{content:^✅^;position:absolute;left:0}
					[li]{padding-left:28px;position:relative;list-style:none}
				">
					<li><a href="#zero-learning-curve">Zero Learning Curve</a>. Don't waste time studying CSS framework</li>
					<li>Less switching between HTML/CSS files</li>
					<li>Automagic and <a href="#optimization">Extremely Tunned CSS Optimization</a></li>
					<li>Simple CSS <a href="#bundles-splitting">Bundles Splitting</a> for Layouts/Pages</li>
					<li>Easily <a href="#configuration">Configurable and Extensible</a></li>
					<li>Seamless <a href="#installation">Installation</a></li>
					<li>Prepared, Copy&Paste, <a href="#components">Headless Components</a></li>
				</ul>
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
</template>
