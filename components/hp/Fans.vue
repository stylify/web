<template>
	<section :class="`
		container position:relative
	`">
		<h2 class="visually-hidden">They talked about Stylify CSS</h2>
		<div :class="`${toggled ? 'max-height:8000px' : 'max-height:550px lg:max-height:450px'} will-change:max-height transition:.4s overflow:hidden display:grid grid-template-columns:repeat(auto-fit,minmax(300px,1fr)) gap:12px`">
			<a
				v-for="(fan, index) in fans"
				:key="'orig-' + index"
				:href="fan.link"
				target="blank"
				rel="noopener nofollow"
				:class="`
					text-decoration:none color:$blue4 width:100%
					display:inline-flex flex-direction:column
					background:lighten($blue3,20) padding:12px border-radius:4px
					${fan.text ? '' : 'align-items:center justify-content:center'}
				`"
			>
				<div class="display:flex align-items:center">
					<img v-if="fan.image" :src="`/images/hp/fans/${fan.image}`" :class="fan.text ? 'border-radius:50%' : ''" alt="" loading="lazy" fetchpriority="low" :width="fan.text ? 50 : 80" :height="fan.text ? 50 : 80">
					<div v-if="(typeof fan.htmlContent === 'undefined')" class="margin-left:12px display:flex flex-direction:column justify-content:flex-start">
						<strong class="font-size:18px color:#fefefe">{{ fan.name }}</strong>
						<span v-if="typeof fan.note !== 'undefined'" class="font-size:14px">{{ fan.note }}</span>
					</div>
				</div>
				<div v-if="(typeof fan.htmlContent !== 'undefined')" v-html="fan.htmlContent" class="display:flex"></div>
				<div v-else-if="fan.text" class="margin-top:12px font-size:14px color:lighten($blue4,20)" v-html="fan.text"></div>
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
				htmlContent: '<img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=366602&theme=light" alt="" loading="lazy" fetchpriority="low" style="width:100%; height:68px">',
				link: 'https://www.producthunt.com/products/stylify-css#stylify-css'
			},
			{
				name: 'One of the Top Front-End Tools Of 2022',
				note: 'By Louis Lazaris',
				image: 'smashing-magazine.png',
				link: 'https://www.smashingmagazine.com/2023/01/top-frontend-tools-2022/#stylify-https-stylifycss-com/'
			},
			{
				name: 'One of the Top Development Languages on Product Hunt',
				image: 'product-hunt.jpg',
				link: 'https://www.producthunt.com/topics/development-language'
			},
			{
				name: 'Mentioned in TLDR.tech newsletter',
				image: 'tldr.png',
				link: 'https://tldr.tech/tech/2022-11-11'
			},
			{
				name: 'Mentioned in This Week In React newsletter',
				note: 'By Sébastien Lorber',
				image: 'this-week-in-react.png',
				link: 'https://thisweekinreact.com/newsletter/124'
			},
			{
				name: 'Mentioned by Remix.run maintainer as a tool for generating CSS for Remix',
				note: 'By Chance Strickland',
				image: 'remix.svg',
				link: 'https://github.com/remix-run/remix/discussions/4631#discussioncomment-4172687'
			},
			{
				name: 'Mentioned in Web Tools Weekly as one of the Top 30 Tools of 2022',
				image: 'web-tools-weekly.png',
				link: 'https://mailchi.mp/webtoolsweekly/web-tools-493'
			},
			{
				name: 'One of the Best Tailwind CSS Alternatives for 2023',
				image: 'larainfo.svg',
				link: 'https://larainfo.com/blogs/best-tailwind-css-alternatives-for-2023'
			},
			{
				name: 'Mentioned as one of the Top 7 Web dev tools that will make your life EASY',
				note: 'By Pritesh Kiri',
				image: 'pritesh-kiri.jpg',
				link: 'https://twitter.com/PriteshKiri/status/1608795151782285313'
			},
			{
				name: 'Mentioned in Svelte newsletter',
				note: 'By Dani Sandoval',
				image: 'svelte.svg',
				link: 'https://svelte.dev/blog/whats-new-in-svelte-february-2023'
			},
			{
				name: 'Mentioned in Symfony newsletter',
				note: 'By Javier Eguiluz',
				image: 'symfony.png',
				link: 'https://symfony.com/blog/a-week-of-symfony-808-20-26-june-2022'
			},
			{
				name: 'Mentioned in Jamstacked newsletter',
				note: 'By Brian Rinaldi',
				image: 'jamlogo.png',
				link: 'https://jamstack.email/issues/72'
			},
			{
				name: 'Mentioned in Feature Newsletter',
				note: 'By Gabriel Nunes',
				image: 'feature-newsletter.webp',
				link: 'https://codecon.substack.com/p/44-para-ser-mais-que-senior-voce'
			},
			{
				name: 'Yoav Ganbar',
				note: 'Engineer at Builder.io and QwikDev',
				image: 'yoav-gangbar.jpg',
				text: `Write plain CSS just in a class?<br>Fair enough, I'm intrigued.`,
				link: 'https://twitter.com/HamatoYogi/status/1571724628321796099'
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
				text: `Wow, that seems like a promising concept! And one that seems very interesting to me personally. I am always amazed by new and unique concepts of writing CSS.`,
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
				name: 'Michael Andreuzza',
				note: 'UI Designer & Front end dev',
				image: 'michael-andreuzza.jpg',
				text: `I like that mangling feature. I was using a library that uglifies the code exactly like that..very useful for some cases.`,
				link: 'https://twitter.com/Mike_Andreuzza/status/1606995345694941185'
			},
			{
				name: 'Oscar Lito M Pablo',
				image: 'oscar-lito-m-pablo.png',
				text: 'We now can easily integrate/use in @stylifycss by @8machy any Material Design 3 ("Material You") @materialdesign themes generated using the new Material Theme Builder! Saves a lot of time!',
				link: 'https://twitter.com/FlipOneUp/status/1612936955062550528'
			},
			{
				name: 'David Teren',
				note: 'Tech Lead & Ruby and Rails Dev',
				image: 'david-teren.jpg',
				text: `It's one of the tools that enables me to create entirely reactive web, iOS and Android apps with little JS.`,
				link: 'https://twitter.com/davidteren/status/1608449486950391810'
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
				name: 'Ahmed Zougari',
				note: 'React developer',
				image: 'ahmed-zougari.jpeg',
				text: `StylifyCSS is like Tailwind framework but easier to learn and read.`,
				link: 'https://www.linkedin.com/feed/update/urn:li:activity:7019319987689410560?updateEntityUrn=urn%3Ali%3Afs_feedUpdate%3A%28V2%2Curn%3Ali%3Aactivity%3A7019319987689410560%29'
			},
			{
				name: 'Jean-Baptiste',
				note: 'Creator of Ardaria',
				image: 'jean-baptiste.jpg',
				text: `Interesting project! Keep going guyz 💪`,
				link: 'https://twitter.com/JB_Briant/status/1589131258441129984'
			},
			{
				name: 'Ngmi',
				image: 'ngmi.jpg',
				text: `I'm notoriously bad with CSS, giving this a try 👾.`,
				link: 'https://twitter.com/ngmisl/status/1611429779789737984'
			},
			{
				name: 'Mubashar Hashmat',
				note: 'Manager at Scorp',
				image: 'mubashar-hashmat.jpg',
				text: `Extremely awesome 😎.`,
				link: 'https://twitter.com/MubasharHashmat/status/1491036188152832003'
			},
			{
				name: 'Xavi',
				image: 'xavi.jpg',
				text: `Awesome, I'll try it later.`,
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
				name: 'Musa Yazlık',
				image: 'musa-yazlik.jpg',
				text: `Hmm. I like it. 😁`,
				link: 'https://www.producthunt.com/posts/stylify-css?comment=2015470'
			},
			{
				name: 'Eze Chukwuemeka',
				note: 'Tech Support',
				image: 'eze-chukwuemeka.jpg',
				text: `I love this`,
				link: 'https://twitter.com/EzeChuk92/status/1622842527702212608'
			},
			{
				name: 'Mugiwara Superfly',
				image: 'mugiwara-superfly.jpg',
				text: `Wow wow wow`,
				link: 'https://twitter.com/i_amsuperfly/status/1618178850869108739'
			},
			{
				name: 'G-Wok',
				note: 'Web3 Developer ',
				image: 'g-wok.jpg',
				text: `Looks cool`,
				link: 'https://twitter.com/wannabelon/status/1622820105842204673'
			},
			{
				name: 'Ricardo Anaya',
				note: 'Full Stack Developer',
				image: 'ricardo-anaya.jpg',
				text: `Cool!`,
				link: 'https://twitter.com/ricky_anaya/status/1594835182632439810'
			},
			{
				name: 'Rajesh Khadka',
				note: 'Tech Lead & Ruby and Rails Dev',
				image: 'rajesh-khadka.jpg',
				text: `May be next tailwind css. 🙃`,
				link: 'https://twitter.com/rajeshkhadka200/status/1620060216493764608'
			},
			{
				name: 'Ryuse',
				note: 'Frontend developer',
				image: 'ryuse.jpg',
				text: `Interesting`,
				link: 'https://twitter.com/Ryuse45551970/status/1612622469369569282'
			},
			{
				name: 'Thiago Teles',
				note: 'Fullstack developer at Scriptcase',
				image: 'thiago-teles.jpeg',
				text: 'Nice',
				link: 'https://app.daily.dev/posts/XZXtpLlp8#c-YTfJ1_iN6'
			},
		]
	})
}
</script>
