<!--
stylify-components
	'blog-post__footer-link': `
		color:$blue1
		text-decoration:none
		display:inline-flex
		align-items:center
		max-width:320px
		span {
			display:-webkit-box
			webkit-line-clamp:2
			webkit-box-orient:vertical
			max-height:52px
			overflow:hidden
		}
	`
/stylify-components
-->
<template>
	<div class="container tolg:flex-direction:column display:flex margin-bottom:48px md:margin-top:48px">
		<div class="width:100% max-width:800px lg:max-width:calc(100%_-_432px) margin-left:auto margin-right:auto">
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
				<img :src="post.image" alt="" loading="eager" width="800" height="400" class="filter:brightness(0.9) width:100% height:auto max-height:400px object-fit:cover margin-bottom:12px md:margin-bottom:24px">
				<h1>{{ post.title }}</h1>
				<p>{{ post.annotation }}</p>
				<hr>
				<div class="text-align:center">
					<share-buttons :url="host + post.path" :title="post.title" :description="post.annotation" :image="post.ogImage" />
				</div>
				<hr>
				<nuxt-content :document="post" />
			</article>

			<div>
				<strong class="font-size:26px color:#fefefe">Give as Feedback!</strong>
				<div>Do you like Stylify CSS? Let us know by starring our repo&nbsp;<GithubButton class="margin-left:8px vertical-align:middle" /></div>
			</div>

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
						class="blog-post__footer-link"
					>
						<i class="icon icon-arrow-down-circle display:inline-block margin-right:8px transform:rotate(90deg)"></i>
						<span>{{ previousPost.title }} </span>
					</nuxt-link>
					<nuxt-link
						v-if="!previousPost && !nextPost"
						to="/blog"
						class="blog-post__footer-link"
					>
						<i class="icon icon-arrow-down-circle display:inline-block margin-right:8px transform:rotate(90deg)"></i>
						<span>Go back to blog</span>
					</nuxt-link>
				</div>
				<div class="display:flex margin-left:8px">
					<nuxt-link
						v-if="nextPost"
						:to="nextPost.path"
						class="blog-post__footer-link"
					>
						<span>{{ nextPost.title }}</span>
						<i class="icon icon-arrow-down-circle display:inline-block margin-left:8px transform:rotate(-90deg)"></i>
					</nuxt-link>
				</div>
			</div>
			<div class="display:flex justify-content:center margin-top:24px"><Affiliate /></div>
		</div>
		<div class="padding-top:12px lg:margin-left:24px lg:max-width:408px max-height:calc(100%_-_$stickyHeaderMargin)">
			<section class="top:calc($stickyHeaderMargin_+_12px) lg:position:sticky">
				<h2 class="text-align:center">Other Articles</h2>
				<div class="gap:12px display:grid grid-template-columns:repeat(auto-fit,minmax(250px,1fr))">
					<nuxt-link
						v-for="(post, key) in newPosts"
						:to="post.path"
						:key="key"
						class="display:flex flex-direction:column color:$blue4 text-decoration:none border-radius:4px overflow:hidden"
					>
						<img :src="post.image" width="400" height="200" alt="" class="filter:brightness(0.9) width:100% height:200px object-fit:cover border-radius:4px border:1px_solid_$grey3" loading="lazy" fetchpriority="low">
						<div class="padding-top:12px">
							<div class="color:$blue4">{{ getPostCreatedAtDate(post.createdAt) }}</div>
							<h3 class="margin-top:0 margin-bottom:4px font-size:18px display:-webkit-box -webkit-box-orient:vertical -webkit-line-clamp:3 overflow:hidden max-height:84px">{{ post.title }}</h3>
						</div>
					</nuxt-link>
				</div>
			</section>
		</div>
	</div>
</template>

<script>
import { BlogRepository } from '~/services/model/BlogRepository';
import { formatDateTime } from '~/services/blogDateTimeHelper';

const host= 'https://stylifycss.com';

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

		const postTitle = this.post.title + ' | Stylify CSS';
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
				{ hid: 'twitter:image:src', name: 'twitter:image:src', content:  host + postImage },
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
							host + postImage
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
		let post = await blogRepository.findOneBySlug(params.slug);
		const [previousPost, nextPost] = await blogRepository.createQueryBuilder()
			.only(['title', 'path'])
			.sortBy('createdAt', 'asc')
			.surround(params.slug)
			.fetch();

		const newPosts = await blogRepository.createQueryBuilder().sortBy('createdAt', 'desc')
			.only(['path', 'image', 'title', 'createdAt', 'annotation'])
			.where({ title: { $ne: post.title }})
			.limit(3)
			.fetch();

		let titleIndex = null;
		let bodyChildren = post.body.children;

		for (let i = 0; i < bodyChildren.length; i++) {
			const children = bodyChildren[i];
			if (children.tag === 'h2') {
				titleIndex = i;
				break;
			}
		}

		return { post, previousPost, nextPost, newPosts };
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
