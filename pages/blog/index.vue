<template>
	<section class="container margin-top:60px margin-bottom:60px">
		<h1 class="text-align:center font-size:48px margin-bottom:48px">Blog</h1>
		<div class="display:flex flex-direction:column flex-wrap:wrap sm:margin-left:-24px sm:flex-direction:row">
			<nuxt-link
				v-for="(post, key) in posts"
				:to="post.path"
				:key="key"
				class="
					display:flex flex-direction:column color:#000 text-decoration:none
					border-radius:4px overflow:hidden
					margin-bottom:24px box-shadow:$shadow2
					sm:max-width:calc(50%__-__24px) sm:margin-left:24px
					lg:max-width:calc(100%__*__1/3__-__24px)
				"
			>
				<img :src="post.image" width="400" height="200" alt="" class="width:100% height:200px object-fit:cover border-radius:4px__4px__0__0" loading="lazy">
				<div class="padding:12px">
					<h2 class="margin-top:0 margin-bottom:4px font-size:18px line-height:28px display:-webkit-box -webkit-box-orient:vertical -webkit-line-clamp:3 overflow:hidden max-height:84px">{{ post.title }}</h2>
					<div class="color:$grey4">{{ getPostCreatedAtDate(post.createdAt) }}</div>
					<p class="margin-bottom:0 font-size:16px line-height:24px display:-webkit-box -webkit-box-orient:vertical -webkit-line-clamp:3 overflow:hidden max-height:72px">{{ post.annotation }}</p>
				</div>
			</nuxt-link>
		</div>
	</section>
</template>

<script>
import { BlogRepository } from '../../services/model/BlogRepository';
import { formatDateTime } from '../../services/blogDateTimeHelper';

export default {
	head() {
		const pageTitle = 'Blog | Stylify';
		const pageDescription = 'News and articles about the Stylify.';

		return {
			title: pageTitle,
			meta: [
				{ hid: 'description', name: 'description', content: pageDescription },
				// Open Graph
				{ hid: 'og:title', property: 'og:title', content: pageTitle },
				{ hid: 'og:description', property: 'og:description', content: pageDescription },
				// Twitter Card
				{ hid: 'twitter:title', name: 'twitter:title', content: pageTitle },
				{ hid: 'twitter:description', name: 'twitter:description', content: pageDescription }
			],
			link: [
				{ rel: 'canonical', href: 'https://stylify.dev/blog' }
			]
		}
  	},
	async asyncData({ $content }) {
		const blogRepository = new BlogRepository($content);
		const posts = await blogRepository.createQueryBuilder().sortBy('createdAt', 'desc')
			.only(['path', 'image', 'title', 'createdAt', 'annotation'])
			.fetch();
		return { posts };
	},
	methods: {
		getPostCreatedAtDate: (createdAt) => {
			return formatDateTime(createdAt);
		}
	}
}
</script>
