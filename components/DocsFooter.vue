<template>
	<div v-if="typeof page !== 'undefined'">
		<div class="display:flex justify-content:space-between margin-bottom:24px">
			<div>
				<nuxt-link
					v-if="previousPage"
					:to="previousPage.slug === page.section ? previousPage.dir : previousPage.path"
					class="link text-decoration:none line-height:1"
				>
					<i class="icon icon-arrow-down-circle display:inline-block margin-right:8px transform:rotate(90deg)"></i>
					<span>{{ previousPage.navigationTitle }} </span>
				</nuxt-link>
			</div>
			<div>
				<nuxt-link
					v-if="nextPage"
					:to="nextPage.slug === page.section ? nextPage.dir : nextPage.path"
					class="link text-decoration:none line-height:1"
				>
					<span>{{ nextPage.navigationTitle }}</span>
					<i class="icon icon-arrow-down-circle display:inline-block margin-left:8px transform:rotate(-90deg)"></i>
				</nuxt-link>
			</div>
		</div>
		<hr class="margin-bottom:24px">
		<div class="display:flex align-items:center justify-content:center">
				<a
					:href="`${project.config.websiteRepositoryUrl}/edit/master/content${page.path}${page.extension}`"
					target="_blank"
					rel="noopener"
					class="color:$blue1 text-decoration:none line-height:1"
				>
					<i class="icon icon-edit margin-right:8px"></i>
					<span>Edit this page on Github</span>
				</a>
				<span class="margin:0_12px">|</span>
				<GithubButton />
		</div>
		<div class="display:flex justify-content:center margin-top:24px"><Affiliate /></div>
	</div>
</template>

<script>

export default {
	props: {
		page: undefined,
		nextPage: undefined,
		previousPage: undefined
	}
}

</script>
