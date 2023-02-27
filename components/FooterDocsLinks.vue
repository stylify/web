<!--
stylify-components
	'footer-docs-section': 'display:flex width:100% margin-bottom:18px align-items:center flex-direction:column md:align-items:flex-start',
	'footer-docs-section__title': 'margin-top:0 margin-bottom:4px font-size:16px',
	'footer-docs-section__link': 'margin-bottom:8px margin-left:24px font-size:14px color:lighten($grey5,20) display:inline-block text-decoration:none hover:color:$blue1'
/stylify-components
-->
<template>
	<section v-if="links.length" class="footer-docs-section">
		<h3 class="footer-docs-section__title">
			<nuxt-link v-if="titleLinkEnabled" :to="links[0].dir" class="color:$grey3 hover:color:$blue1 text-decoration:none">{{ links[0].navigationTitle }}</nuxt-link>
			<span v-else>{{ sectionTitle }}</span>
		</h3>
		<div class="margin-left:-24px">
			<nuxt-link
					v-for="(link, key) in links.slice(1)"
					:key="key"
					:to="link.path"
					class="footer-docs-section__link"
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
