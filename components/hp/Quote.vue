<template>
	<section id="quote" class="container">
		<h2 class="hp-section-title">Don't study frameworks. Focus on coding!</h2>
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
				<a role="button" v-if="!videoOpened" @click="videoOpened = true" class="cursor:pointer">
					<img src="/images/hp/youtube-video-preview.png" width="310" height="185" loading="lazy" fetchpriority="low" class="object-fit:cover">
				</a>
				<div v-else v-html="youtubeIframe"></div>
				<div class="margin-left:12px md:margin-left:0 margin-top:8px md:margin-top:12px text-align:center">
					<strong class="color:#fefefe">Vladimír Macháček</strong>
					<br>Author of Stylify&nbsp;CSS
					<br>Webdev at <a href="https://slevomat.cz" class="color:$blue1" target="_blank">Slevomat.cz</a>
				</div>
			</div>
		</div>
		<div class="text-align:center margin-top:24px">
			<nuxt-link to="/docs/get-started" class="btn btn--hp margin-top:12px">
				Go ahead and try Stylify
				<i class="icon icon-arrow-down-circle display:inline-block margin-left:8px transform:rotate(-90deg)"></i>
			</nuxt-link>
		</div>
	</section>
</template>

<script>

export default {
	data: () => ({
		videoOpened: false,
		youtubeIframe: `<iframe width="310" height="185" src="https://www.youtube-nocookie.com/embed/GRwtXDnm5gE?autoplay=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" loading="lazy" fetchpriority="low" allowfullscreen class="max-width:100%"></iframe>`
	})
}

</script>
