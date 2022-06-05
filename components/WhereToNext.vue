<template>
	<section>
		<h2>Where to go next?</h2>
		<ul>
			<li>🚀 Learn <nuxt-link to="/docs/get-started/writting-first-css">how to get started</nuxt-link></li>
			<li v-if="package === 'unplugin'">🔌 Checkout <nuxt-link to="/docs/unplugin">@stylify/unplugin configuration</nuxt-link></li>
			<li v-else-if="package === 'bundler'">🔌 Checkout <nuxt-link to="/docs/bundler">@stylify/bundler configuration</nuxt-link></li>
			<li>
				⚙️ Or configure Stylify right away:
				<ul>
					<li><nuxt-link to="/docs/stylify/compiler#variables">Variables</nuxt-link></li>
					<li><nuxt-link to="/docs/stylify/compiler#screens">Screens</nuxt-link></li>
					<li><nuxt-link to="/docs/stylify/compiler#macros">Macros and selectors</nuxt-link></li>
					<li><nuxt-link to="/docs/stylify/compiler#components">Components</nuxt-link></li>
					<li><nuxt-link to="/docs/stylify/compiler#plainselectors">Global selectors</nuxt-link></li>
				</ul>
			</li>
		</ul>
	</section>
</template>

<script>
export default {
	props: {
		package: {
			type: String,
			default: 'unplugin'
		}
	}
}
</script>
