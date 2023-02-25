<template>
	<nuxt-link
		:to="post.path"
		class="
			display:flex flex-direction:column color:$grey5 text-decoration:none
			border-radius:4px overflow:hidden
			margin-bottom:24px
			sm:max-width:calc(50%_-_24px) sm:margin-left:24px
			lg:max-width:calc(100%_*_1/3_-_24px)
			lg:margin-bottom:48px
		"
	>
		<img :src="post.image" width="400" height="200" alt="" class="filter:brightness(0.9) width:100% height:200px object-fit:cover border-radius:4px border:1px_solid_$grey3" loading="lazy">
		<div class="padding-top:12px">
			<div class="color:$grey5">{{ getPostCreatedAtDate(post.createdAt) }}</div>
			<h2 class="margin-top:0 margin-bottom:4px font-size:18px display:-webkit-box -webkit-box-orient:vertical -webkit-line-clamp:3 overflow:hidden max-height:84px">{{ post.title }}</h2>
			<p class="margin-bottom:0 margin-top:4px font-size:16px display:-webkit-box -webkit-box-orient:vertical -webkit-line-clamp:3 overflow:hidden max-height:74px">{{ post.annotation }}</p>
		</div>
	</nuxt-link>
</template>

<script>
import { formatDateTime } from '~/services/blogDateTimeHelper';

export default {
	props: {
		post: {
			type: Object,
			required: true,
		},
	},
	methods: {
		getPostCreatedAtDate: (createdAt) => {
			return formatDateTime(createdAt);
		}
	}
}
</script>
