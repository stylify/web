<template>
	<div class="display:grid gap:24px grid-template-columns:repeat(auto-fit,minmax(300px,1fr))">
		<a v-for="item in items" :href="`${item.url}?ref=stylifycss.com`" target="_blank" rel="noopener nofollow" class="
			position:relative text-decoration:none border:1px_solid_#1e2431 border-radius:8px overflow:hidden
			[&:hover>div]{opacity:1}
		">
			<img :src="`/images/showcase/${item.img}`" :key="item.name" width="400" height="200" loading="lazy" fetchpriority="low" alt="" class="width:100% min-height:200px object-fit:cover display:flex" />
			<div class="color:#f1f1f1 opacity:0 padding:12px background:rgba(0,0,0,0.5) transition:.3s will-change:opacity backdrop-filter:blur(5px) position:absolute inset:0 display:flex align-items:center justify-content:center flex-direction:column">
				<div class="md:font-size:20px text-align:center"><strong>{{ item.name }}{{ item.description ? ` - ${item.description}` : '' }}</strong></div>
				<div v-if="(typeof item.techStack !== 'undefined')">
					<span>Tech Stack:</span>
					<div class="display:flex flex-wrap:wrap gap:8px">
						<img v-for="stackImage in item.techStack" :src="`/images/brands/${stackImage}`" :key="stackName" alt="" width="80px" height="40px" loading="lazy" fetchpriority="low" class="padding:8px border-radius:8px background:#1e2431 max-height:40px max-width:80px height:auto width:100% display:flex">
					</div>
				</div>
			</div>
		</a>
	</div>
</template>

<script>
export default {
	data: () => ({
		items: [
			{
				name: 'Zsht.cz',
				img: 'zshtcz.jpg',
				url: 'https://zsht.cz',
				description: 'Czech School website',
				techStack: ['wordpress.svg'],
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
