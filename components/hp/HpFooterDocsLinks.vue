<template>
	<section v-if="links.length" class="display:flex width:100% margin-bottom:18px align-items:center flex-direction:column md:align-items:flex-start">
		<h3 class="margin-top:0 margin-bottom:4px font-size:16px line-height:24px">
			<nuxt-link v-if="titleLinkEnabled" :to="links[0].dir" class="color:$grey3 hover:color:$blue1 text-decoration:none">{{ links[0].navigationTitle }}</nuxt-link>
			<span v-else>{{ sectionTitle }}</span>
		</h3>
		<div class="margin-left:-24px">
			<nuxt-link
					v-for="(link, key) in links.slice(1)"
					:key="key"
					:to="link.path"
					class="margin-bottom:8px margin-left:24px font-size:14px line-height:24px color:lighten($blue4,20) display:inline-block text-decoration:none hover:color:$blue1"
				>{{ link.navigationTitle }}
			</nuxt-link>
		</div>
	</section>
</template>

<script>

export default {
	props: {
		links: {
			type: Array
		},
		titleLinkEnabled: {
			type: Boolean,
			default: true
		},
		title: {
			type: String,
			default: null
		}
	},
	computed: {
		linksForLoop() {
			return this.titleLinkEnabled ? links.slice(1) : links;
		},
		sectionTitle() {
			return this.title || this.links[0].navigationTitle;
		}
	}
}

</script>
