<template>
	<div class="container margin-top:60px margin-bottom:60px">
		<div class="max-width:800px margin-left:auto margin-right:auto">
			<nuxt-link
				v-if="!previousPost && !nextPost"
				to="/blog"
				class="color:$blue1 text-decoration:none display:inline-flex align-items:center line-height:1 margin-bottom:12px"
			>
				<i class="icon icon-arrow-down-circle display:inline-block margin-right:8px transform:rotate(90deg)"></i>
				<span>Go back to blog</span>
			</nuxt-link>

			<article class="margin-bottom:24px">
				<div class="margin-bottom:12px color:$grey4">{{ getPostCreatedAtDate(post.createdAt) }}</div>
				<img :src="post.image" alt="" loading="eager" width="800" height="400" class="width:100% height:auto max-height:400px object-fit:cover">
				<h1>{{ post.title }}</h1>
				<p>{{ post.annotation }}</p>
				<hr>
				<div class="text-align:center">
					<share-buttons :url="host + post.path" :title="post.title" :description="post.annotation" :image="post.ogImage" />
				</div>
				<hr>
				<nuxt-content :document="post" />
			</article>
			<hr class="margin-top:24px">
			<div class="text-align:center">
				<share-buttons :url="host + post.path" :title="post.title" :description="post.annotation" :image="post.ogImage" />
			</div>
			<hr class="margin-bottom:24px">
			<div class="display:flex justify-content:space-between margin-bottom:24px">
				<div class="display:flex margin-right:8px">
					<nuxt-link
						v-if="previousPost"
						:to="previousPost.path"
						class="color:$blue1 text-decoration:none display:inline-flex align-items:center line-height:1 max-width:320px"
					>
						<i class="icon icon-arrow-down-circle display:inline-block margin-right:8px transform:rotate(90deg)"></i>
						<span>{{ previousPost.title }} </span>
					</nuxt-link>
					<nuxt-link
						v-if="!previousPost && !nextPost"
						to="/blog"
						class="color:$blue1 text-decoration:none display:inline-flex align-items:center line-height:1 max-width:320px"
					>
						<i class="icon icon-arrow-down-circle display:inline-block margin-right:8px transform:rotate(90deg)"></i>
						<span>Go back to blog</span>
					</nuxt-link>
				</div>
				<div class="display:flex margin-left:8px">
					<nuxt-link
						v-if="nextPost"
						:to="nextPost.path"
						class="color:$blue1 text-decoration:none display:inline-flex align-items:center line-height:1 max-width:320px"
					>
						<span>{{ nextPost.title }}</span>
						<i class="icon icon-arrow-down-circle display:inline-block margin-left:8px transform:rotate(-90deg)"></i>
					</nuxt-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { BlogRepository } from '../../services/model/BlogRepository';
import { formatDateTime } from '../../services/blogDateTimeHelper';

const host= 'https://stylify.dev';

export default {
	data() {
		return {
			host: host
		}
	},
	head() {
		if (!this.post) {
			return;
		}

		const postTitle = this.post.title + ' | Stylify';
		const postAnnotation = this.post.annotation;
		const postImage = this.post.ogImage;
		const postCanonicalUrl = host + this.post.path

		const headLinks = [
			{ rel: 'canonical', href: host + this.post.path }
		];

		if (this.previousPost) {
			headLinks.push({ hid: 'prev', href: host + this.previousPost.path })
		}

		if (this.nextPost) {
			headLinks.push({ hid: 'next', href: host + this.nextPost.path });
		}

		return {
			title: postTitle,
			meta: [
				{ hid: 'description', name: 'description', content: postAnnotation },
				// Open Graph
				{ hid: 'og:title', property: 'og:title', content: postTitle },
				{ hid: 'og:type', property: 'og:type', content: 'article' },
				{ hid: 'og:url', property: 'og:url', content: postCanonicalUrl},
				{ hid: 'og:image', property: 'og:image', content: host + postImage },
				{ hid: 'og:description', property: 'og:description', content: postAnnotation },

				// Twitter Card
				{ hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
				{ hid: 'twitter:title', name: 'twitter:title', content: postTitle },
				{ hid: 'twitter:description', name: 'twitter:description', content: postAnnotation }
			],
			link: headLinks,
			script: [
				{
					innerHTML: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "Article",
						"headline": postTitle,
						"description": postAnnotation,
						"image": [
							host + "/static" + this.post.ogImage
						],
						"mainEntityOfPage": {
    						"@type": "WebPage",
    						"@id": host + this.post.path
						},
						"datePublished": new Date(this.post.createdAt).toISOString(),
						"dateModified": new Date(this.post.updatedAt).toISOString(),
						"author": [{
							"@type": "Person",
							"name": this.post.author,
						}]
					}),
					type: 'application/ld+json'
				}
			],
			__dangerouslyDisableSanitizers: ['script']
		}
  	},
	async asyncData({ $content, params}) {
		const blogRepository = new BlogRepository($content);
		const post = await blogRepository.findOneBySlug(params.slug);
		const [previousPost, nextPost] = await blogRepository.createQueryBuilder()
			.only(['title', 'path'])
			.sortBy('createdAt', 'asc')
			.surround(params.slug)
			.fetch()
		return { post, previousPost, nextPost };
	},
	mounted() {
		document.querySelectorAll('h2, h3, h4, h5, h6').forEach((title) => {
			title.addEventListener('click', () => {
				title.querySelector('a').click();
			});
		});
	},
	methods: {
		getPostCreatedAtDate: (createdAt) => {
			return formatDateTime(createdAt);
		}
	}
}
</script>
