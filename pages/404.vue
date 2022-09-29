<template>
	<div class="container margin-top:100px margin-bottom:100px">
		<h2 class="font-size:48px text-align:center">Page not found.</h2>
		<p class="text-align:center max-width:500px margin:0_auto">Ooops! The page you are looking for is probably using some other CSS framework and is still loading or it doesn't exist.</p>
		<p class="text-align:center">
			<span class="word-break:keep-all">¯\_(ツ)_/¯</span>
		</p>
		<p class="text-align:center">
			<nuxt-link to="/" class="color:$blue1 display:inline-flex text-decoration:none font-size:18px">
				<i class="icon icon-arrow-down-circle transform:rotate(90deg) margin-right:8px"></i>
				<span class="text-decoration:underline">Return to the main page</span>
			</nuxt-link>
		</p>
	</div>
</template>

<script>
export default {
	head: {
		title: 'Page not found | Stylify',
		meta: [
			{ name: 'robots', content: 'noindex, nofollow' },
		]
	}
}
</script>
