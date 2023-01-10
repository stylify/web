<template>
	<section :class="`
		container position:relative
	`">
		<h2 class="visually-hidden">They talked about Stylify CSS</h2>
		<div :class="`${toggled ? 'max-height:5000px' : 'max-height:550px lg:max-height:450px'} will-change:max-height transition:.4s overflow:hidden display:grid grid-template-columns:repeat(auto-fit,minmax(300px,1fr)) gap:12px`">
			<a
				v-for="(fan, index) in fans"
				:key="'orig-' + index"
				:href="fan.link"
				target="blank"
				rel="noopener nofollow"
				class="
					text-decoration:none color:$blue4 width:100%
					display:inline-flex flex-direction:column
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
		</div>
		<a @click="() => toggled = !toggled" :class="`
			display:flex align-items:flex-end justify-content:center width:100% left:0
			${toggled ? 'position:sticky bottom:50px height:64px' : 'height:200px position:absolute bottom:0 background:linear-gradient(0deg,rgba(10,16,29,1)_40%,rgba(0,0,0,0)_100%)'}
		`">
			<span role="button" class="btn btn--hp [span]{margin-right:8px}">
				<span v-show="toggled">Hide</span>
				<span v-show="!toggled">Show More Shoutouts</span>
				<i :class="`icon icon-arrow-down-circle display:inline-block will-change:transform transition:.3s ${toggled ? 'transform:rotate(-180deg)' : 'transform:rotate(0deg)'}`"></i>
			</span>
		</a>
	</section>
</template>

<script>
export default {
	data: () => ({
		toggled: false,
		fans: [
			{
				name: 'Jorge Baumann.js',
				note: 'Full Stack Developer at One Beyond',
				image: 'jorge-baumann.jpg',
				text: `
					[🔧] Do you know Stylify? It's an alternative to Tailwind #CSS that goes one step further.
					🔤 Known syntax
					📈 No learning curve
					👩‍💻 Write normal CSS in classes
					⚛️ Supports variables and components
					🗜️ Works with Webpack, Rollup or Vite
				`,
				link: 'https://twitter.com/baumannzone/status/1612751229016326144'
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
				name: 'Lukeshiru',
				note: 'Webdev at Vangware',
				image: 'lukeshiru.gif',
				text: `It's like Tailwind's JIT, but without having to learn new classnames, and following a really simple set of "rules". Great library!`,
				link: 'https://dev.to/machy8/stylifydev-dynamic-css-generator-1cbe'
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
				name: 'Tom Ravn',
				note: 'Webdeveloper & SysAdmin',
				image: 'tom-ravn.jpg',
				text: 'Have you heard about Stylify? Similar framework as #TailwindCSS. I guess when you finally learn #CSS using Tailwind you can go level deeper and use Stylify, you will basically write pure CSS into #html.😆',
				link: 'https://twitter.com/TomR4vn/status/1518493107817431040'
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
				name: 'Toheeb Ogunbiyi',
				note: 'Web-UI Engineer',
				image: 'toheeb.jpg',
				text: `Utility on steroids, I love this! No weird utility names, almost same as CSS. Chars as class names on production. Colocation of states within the rule makes a lot of sense too. This makes up for readability compared to others.`,
				link: 'https://twitter.com/ToheebDotCom/status/1608710082157760514'
			},
			{
				name: 'Rin',
				note: 'Full-Stack Developer',
				image: 'rin.jpg',
				text: `Immediately interested when I read features on documentation, give a shot with Astro and absolutely love it.`,
				link: 'https://twitter.com/rrrriiiiiinnnn/status/1609084128242331660'
			},
			{
				name: 'Japheth Mutai',
				image: 'japheth-mutai.jpg',
				text: `Well, I guess we all need to follow @stylifycss to reduce our #CSS related nerve attacks 😂😂.`,
				link: 'https://twitter.com/ItsDevMutai/status/1495784770646728713'
			},
			{
				name: 'Yousuf Iqbal',
				note: 'Full Stack Developer',
				image: 'yousuf-iqbal.jpg',
				text: 'This is awesome. Almost zero learning curve 👍!',
				link: 'https://twitter.com/yousufiqbal_dev/status/1605883118359019523'
			},
			{
				name: 'Ahmad Tahir',
				note: 'Fullstack Dev',
				image: 'ahmad-tahir.jpg',
				text: `Wow this looks neat 💯. I'll be checking it out.`,
				link: 'https://twitter.com/AhmadBMTahir/status/1531256572629987328'
			},
			{
				name: 'Código de Marras',
				note: 'Frontend Developer',
				image: 'codigo-de-marras.jpg',
				text: `It's interesting, an alternative to having everything in a single file...`,
				link: 'https://twitter.com/CodigoDeMarras/status/1612801313942769664'
			},
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
				name: 'Xavi',
				image: 'xavi.jpg',
				text: `Awesome, i'll try it later.`,
				link: 'https://twitter.com/IbraXavi/status/1612859833023172611'
			},
			{
				name: 'Shushant Lakhyani',
				note: 'Just Ship It Hub',
				image: 'shushant-lakhyani.jpeg',
				text: `This looks cool!`,
				link: 'https://www.producthunt.com/posts/stylify-css?comment=2014729'
			},
			{
				name: 'Mukesh',
				image: 'mukesh.jpg',
				text: 'Seems cool ✌️✌️✌️',
				link: 'https://twitter.com/mukezhz/status/1605579574460289025'
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
