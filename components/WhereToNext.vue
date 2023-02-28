<template>
	<section>
		<h2 id="where-to-next">
			<DocsTitleLink href="where-to-next" />
			{{ title }}
		</h2>
		<ul>
			<li>🚀 Learn <nuxt-link to="/docs/get-started">how to get started</nuxt-link></li>
			<li v-if="package === 'unplugin'">🔌 Check out <nuxt-link to="/docs/unplugin">@stylify/unplugin configuration</nuxt-link></li>
			<li v-else-if="package === 'bundler'">🔌 Check out <nuxt-link to="/docs/bundler">@stylify/bundler configuration</nuxt-link></li>
			<li>
				⚙️ Or configure Stylify right away:
				<ul>
					<li><nuxt-link to="/docs/stylify/compiler#variables">Variables</nuxt-link></li>
					<li><nuxt-link to="/docs/stylify/compiler#screens">Screens</nuxt-link></li>
					<li><nuxt-link to="/docs/stylify/compiler#macros">Macros and selectors</nuxt-link></li>
					<li><nuxt-link to="/docs/stylify/compiler#components">Components</nuxt-link></li>
					<li><nuxt-link to="/docs/stylify/compiler#customselectors">Global selectors</nuxt-link></li>
				</ul>
			</li>
		</ul>
	</section>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			default: 'Where to go next?'
		},
		package: {
			type: String,
			default: 'unplugin'
		}
	}
}
</script>
