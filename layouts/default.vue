<template>
	<div>
		<header class="border-bottom:1px__solid__$grey3">
			<div class="
				display:flex flex-direction:column justify-content:center padding-top:16px
				padding-bottom:16px justify-content:space-between align-items:center container
				lg:flex-direction:row
			"
		>
				<div class="display:flex margin-bottom:12px width:100% lg:width:auto lg:margin-bottom:0 justify-content:space-between">
					<section class="display:flex align-items:center">
						<nuxt-link to="/" class="text-decoration:none display:flex"><img src="/images/logo.svg" width="180" height="42" class="width:120px md:width:180px" alt=""/></nuxt-link>
					</section>
					<section class="display:inline-flex justify-content:flex-end min-width:150px lg:display:none">
						<nav class="display:flex align-items:center">
							<a :href="project.config.githubUrl" target="_blank" rel="noopener" title="Github" class="display:inline-flex"><img src="/images/brands/github-icon.svg" height="24" width="24" class="margin-left:12px" alt="" /></a>
							<a :href="project.config.discordUrl" target="_blank" rel="noopener" title="Discord" class="display:inline-flex"><img src="/images/brands/discord-icon.svg" height="24" width="31" class="margin-left:12px" alt="" /></a>
							<a :href="project.config.twitterUrl" target="_blank" rel="noopener" title="Twitter" class="display:inline-flex"><img src="/images/brands/twitter-icon.svg" height="24" width="25" class="margin-left:12px" alt=""/></a>
						</nav>
					</section>
				</div>
				<section class="max-width:calc(100%__+__16px) overflow:auto margin-left:-8px margin-right:-8px display:inline-flex align-items:center position:relative lg:margin-left:-24px">
					<nav class="display:flex flex-wrap:nowrap white-space:nowrap">
						<nuxt-link to="/docs/get-started" class="margin-left:24px font-size:18px font-weight:bold color:#000 text-decoration:none hover:color:$blue1">Documentation</nuxt-link>
						<nuxt-link to="/blog" class="margin-left:24px font-size:18px font-weight:bold color:#000 text-decoration:none hover:color:$blue1">Blog</nuxt-link>
						<a href="https://codepen.io/Machy8/pen/Bawpvdy?editors=1010" target="_blank" rel="noopener" class="margin-left:24px font-size:18px font-weight:bold color:#000 text-decoration:none hover:color:$blue1">Playground</a>
					</nav>
					<span class="lg:display:none">&nbsp;</span>
				</section>
				<section class="display:none lg:display:inline-flex justify-content:flex-end min-width:150px">
					<nav class="display:flex align-items:center">
						<a :href="project.config.githubUrl" target="_blank" rel="noopener" title="Github" class="display:inline-flex"><img src="/images/brands/github-icon.svg" height="24" width="24" class="margin-left:12px" alt="" /></a>
						<a :href="project.config.discordUrl" target="_blank" rel="noopener" title="Discord" class="display:inline-flex"><img src="/images/brands/discord-icon.svg" height="24" width="31" class="margin-left:12px" alt="" /></a>
						<a :href="project.config.twitterUrl" target="_blank" rel="noopener" title="Twitter" class="display:inline-flex"><img src="/images/brands/twitter-icon.svg" height="24" width="25" class="margin-left:12px" alt=""/></a>
					</nav>
				</section>
			</div>
		</header>
		<main>
			<Nuxt />
		</main>
		<footer class="background-color:$grey1 padding:80px__0">
			<div class="container">
				<div class="display:flex align-items:flex-start flex-wrap:wrap margin-bottom:40px justify-content:space-between sm:flex-wrap:nowrap">
					<hp-footer-docs-links :links="getStartedLinks" />
					<hp-footer-docs-links :links="integrationLinks" />
					<hp-footer-docs-links :links="packagesLinks" :titleLinkEnabled="false" title="Packages" />
					<section class="display:flex align-items:center flex-direction:column width:100% max-width:calc(50%__-__8px) md:align-items:flex-start md:max-width:calc(25%__-__8px)">
						<h3 class="margin-bottom:18px font-size:14px line-height:24px">Community</h3>
						<a
							v-for="(communityLink, key) in communityLinks"
							:key="key"
							:href="communityLink.path"
							target="_blank"
							rel="noopener"
							class="margin-bottom:8px font-size:12px line-height:21px display:inline-block color:#000 text-decoration:none hover:color:$blue1"
						>{{ communityLink.navigationTitle }}</a>
					</section>
				</div>
				<hr class="margin-bottom:40px">
				<section class="display:flex flex-direction:column justify-content:center align-items:center md:flex-direction:row md:justify-content:space-between">
					<div class="margin-bottom:24px md:margin-bottom:0">
						<img src="/images/logo.svg" alt="" width="180" height="42" loading="lazy"/>
					</div>
					<div class="text-align:center md:text-align:left">
						Released under the MIT license
						<br>
						Copyright @ {{ new Date().getFullYear() }} Vladimír Macháček
					</div>
				</section>
			</div>
		</footer>
	</div>
</template>

<script>
import { DocsRepository } from '~/services/model';

export default {
	fetch: async function () {
		const linksRequiredData = ['navigationTitle', 'path', 'dir'];
		const docsRepository = new DocsRepository(this.$root.context.$content);

		const getStartedLinks = await docsRepository.findBySection({ section: 'get-started', only: linksRequiredData });
		const integrationLinks = await docsRepository.findBySection({ section: 'integrations', only: linksRequiredData });

		this.getStartedLinks = getStartedLinks;
		this.integrationLinks = integrationLinks;
	},
	data() {
		return {
			getStartedLinks: [],
			integrationLinks: [],
			packagesLinks: [
				{
					navigationTitle: '@stylify/autoprefixer',
					path: '/docs/autoprefixer'
				},
				{
					navigationTitle: '@stylify/bundler',
					path: '/docs/bundler'
				},
				{
					navigationTitle: '@stylify/nuxt-module',
					path: '/docs/nuxt-module'
				},
				{
					navigationTitle: '@stylify/profiler',
					path: '/docs/profiler'
				},
				{
					navigationTitle: '@stylify/stylify',
					path: '/docs/stylify'
				}
			],

			communityLinks: [
				{
					navigationTitle: 'Github',
					path: this.project.config.githubUrl
				},
				{
					navigationTitle: 'Discord',
					path: this.project.config.discordUrl
				},
				{
					navigationTitle: 'Twitter',
					path: this.project.config.twitterUrl
				}
			]
		}
	}
}
</script>

<style lang="scss">
body {
	font-family: 'Poppins', sans-serif;
	font-size: 16px;
	-webkit-font-smoothing: antialiased;
}
</style>
