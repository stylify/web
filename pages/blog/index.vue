<template>
	<section class="container margin-top:24px margin-bottom:48px md:margin-top:48px">
		<h1 class="text-align:center font-size:48px margin-bottom:24px margin-top:0">Blog</h1>

		<div class="container margin-bottom:64px">
			<NewsletterForm />
		</div>

		<div class="display:flex flex-direction:column flex-wrap:wrap sm:margin-left:-24px sm:flex-direction:row">
			<BlogPostListItem
				v-for="(post, key) in posts"
				:post="post"
				:key="key"
			/>
		</div>
	</section>
</template>

<script>
import { BlogRepository } from '~/services/model/BlogRepository';

export default {
    head() {
        const pageTitle = "Blog | Stylify";
        const pageDescription = "News and articles about the Stylify.";
        return {
            title: pageTitle,
            meta: [
                { hid: "description", name: "description", content: pageDescription },
                // Open Graph
                { hid: "og:title", property: "og:title", content: pageTitle },
                { hid: "og:description", property: "og:description", content: pageDescription },
                // Twitter Card
                { hid: "twitter:title", name: "twitter:title", content: pageTitle },
                { hid: "twitter:description", name: "twitter:description", content: pageDescription }
            ],
            link: [
                { rel: "canonical", href: "https://stylifycss.com/blog" }
            ]
        };
    },
    async asyncData({ $content }) {
        const blogRepository = new BlogRepository($content);
        const posts = await blogRepository.createQueryBuilder().sortBy("createdAt", "desc")
            .only(["path", "image", "title", "createdAt", "annotation"])
            .fetch();
        return { posts };
    },
}
</script>
