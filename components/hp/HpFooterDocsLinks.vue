<template>
	<section v-if="links.length" class="display:flex align-items:center width:100% max-width:calc(50%__-__8px) flex-direction:column md:align-items:flex-start md:width:calc(25%__-__8px)">
		<h3 class="margin-bottom:18px font-size:14px line-height:24px">
			<nuxt-link v-if="titleLinkEnabled" :to="links[0].dir" class="color:#000 text-decoration:none">{{ links[0].navigationTitle }}</nuxt-link>
			<span v-else>{{ sectionTitle }}</span>
		</h3>
		<nuxt-link
			v-for="(link, key) in links.slice(1)"
			:key="key"
			:to="link.path"
			class="margin-bottom:8px font-size:12px line-height:21px color:#000 display:inline-block text-decoration:none hover:color:$blue1"
		>{{ link.navigationTitle }}</nuxt-link>
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
