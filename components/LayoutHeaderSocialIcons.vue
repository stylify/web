<!--
stylify-components
	'layout-header-icon-link': 'margin-left:12px width:100% object-fit:cover'
/stylify-components
 -->
<template>
	<nav class="display:flex align-items:center">
		<div class="display:flex height:40px width:84px margin-right:8px"><GithubButton /></div>
		<div class="display:none minw410px:display:flex height:40px width:92px"><GithubButton type="sponsor" /></div>
		<a :href="project.config.discordUrl" target="_blank" rel="noopener" title="Discord" aria-label="Discord" class="display:inline-flex"><img src="/images/brands/discord-icon.svg" height="25" width="31" class="layout-header-icon-link" alt="" loading="lazy" /></a>
		<a :href="project.config.twitterUrl" target="_blank" rel="noopener" title="Twitter" aria-label="Twitter" class="display:inline-flex"><img src="/images/brands/twitter-icon.svg" height="25" width="25" class="layout-header-icon-link" alt="" loading="lazy" fetchpriority="low"/></a>
		<a :href="project.config.facebookUrl" target="_blank" rel="noopener" title="Facebook" aria-label="Youtube" class="display:inline-flex"><img src="/images/brands/facebook-icon.svg" height="24" width="32" class="layout-header-icon-link" alt="" loading="lazy" /></a>
		<a :href="project.config.instagramUrl" target="_blank" rel="noopener" title="Instagram" aria-label="Youtube" class="display:inline-flex"><img src="/images/brands/instagram-icon.svg" height="24" width="32" class="layout-header-icon-link" alt="" loading="lazy" /></a>
		<a :href="project.config.youtubeUrl" target="_blank" rel="noopener" title="Youtube" aria-label="Youtube" class="display:inline-flex"><img src="/images/brands/youtube.svg" height="24" width="32" class="layout-header-icon-link" alt="" loading="lazy" /></a>
	</nav>
</template>
