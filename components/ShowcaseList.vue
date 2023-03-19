<template>
	<div :class="`${showCarousel ? 'padding:0_8px overflow:auto margin:0_-8px md:margin:0_-12px lg:margin:0_-24px xl:margin:0 lg:padding:0' : ''}`">
		<div :class="`${showCarousel ? ' toxl:{grid-auto-flow:column;min-width:max-content}' : ''} display:grid gap:24px grid-template-columns:repeat(auto-fit,minmax(300px,1fr))`">
			<a v-for="item in itemsList" :href="`${item.url}?ref=stylifycss.com`" target="_blank" rel="noopener nofollow" class="
				position:relative text-decoration:none border:1px_solid_#1e2431 border-radius:8px overflow:hidden
				[&:hover>div]{opacity:1}
			">
				<img :src="`/images/showcase/${item.img}`" :key="item.name" width="400" height="200" loading="lazy" fetchpriority="low" alt="" class="width:100% min-height:200px object-fit:cover display:flex" />
				<div class="color:#f1f1f1 opacity:0 padding:12px background:rgba(0,0,0,0.5) transition:.3s will-change:opacity backdrop-filter:blur(5px) position:absolute inset:0 display:flex align-items:center justify-content:center flex-direction:column">
					<div class="md:font-size:20px text-align:center"><strong>{{ item.name }}{{ item.description ? ` - ${item.description}` : '' }}</strong></div>
					<div v-if="(typeof item.techStack !== 'undefined')">
						<span>Tech Stack:</span>
						<div class="display:flex flex-wrap:wrap gap:8px">
							<img v-for="stackImage in item.techStack" :src="`/images/brands/${stackImage}`" :key="stackImage" alt="" width="80px" height="40px" loading="lazy" fetchpriority="low" class="padding:8px border-radius:8px background:#1e2431 max-height:40px max-width:80px height:auto width:100% display:flex">
						</div>
					</div>
				</div>
			</a>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		limit: {
			type: Number,
			default: null
		}
	},
	computed: {
		showCarousel() {
			return this.limit !== null && this.limit <= 6;
		},
		itemsList() {
			if (this.limit === null) {
				return this.items;
			}

			return this.items.slice(0, this.limit);
		}
	},
	data: () => ({
		items: [
			{
				name: 'Conviu',
				img: 'conviucom.jpg',
				url: 'https://conviu.cz',
				description: 'A tool that helps Czech e-commerce platforms to increase sales.',
				techStack: ['symfony.svg'],
			},
			{
				name: 'Zsht.cz',
				img: 'zshtcz.jpg',
				url: 'https://zsht.cz',
				description: 'Czech School website',
				techStack: ['wordpress.svg'],
			},
			{
				name: 'MilesPernicious.com',
				img: 'milesperniciouscom.jpg',
				url: 'https://www.milespernicious.com/',
				description: 'Personal Blog',
				techStack: ['astro.svg'],
			},
			{
				name: 'FSuminho',
				img: 'fsuminho.jpg',
				url: 'https://fsuminho.github.io/website/',
				description: 'Website from Minho University Formula Cars Students',
				techStack: ['browser.svg'],
			},
			{
				name: 'StylifyCSS.com',
				img: 'stylifycsscom.jpg',
				url: 'https://stylifycss.com',
				techStack: ['nuxtjs.svg'],
			}
		]
	})
}
</script>
