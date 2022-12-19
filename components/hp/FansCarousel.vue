<!--
stylify-keyframes
	slideshow: `
		100% {
			transform: translateX(-50%);
		}
	`
/stylify-keyframes
-->
<template>
	<div class="slideshow width:200% height:230px margin:0_auto position:relative transform:translate3d(0,0,0) overflow:hidden">
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
					<img :src="`/images/hp/fans/${fan.image}`" class="border-radius:50%" alt="" loading="lazy" fetchpriority="low" width="50" height="50">
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
					<img :src="`/images/hp/fans/${fan.image}`" class="border-radius:50%" alt="" loading="lazy" width="50" height="50">
					<div class="margin-left:12px display:flex flex-direction:column align-items:flex-start">
						<strong class="font-size:18px color:#fff">{{ fan.name }}</strong>
						<span v-if="typeof fan.note !== 'undefined'" class="font-size:14px">{{ fan.note }}</span>
					</div>
				</div>
				<div class="font-size:14px font-size:14px color:lighten($blue4,20)">{{ fan.text }}</div>
			</a>
		</div>
	</div>
</template>

<script>
export default {
	data: () => ({
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
	})
}
</script>
