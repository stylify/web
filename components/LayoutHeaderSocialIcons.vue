<!--
stylify-components
	'layout-header-icon-link': 'margin-left:12px object-fit:cover'
/stylify-components
 -->
<template>
	<nav class="display:flex align-items:center">
		<div class="display:flex height:40px width:84px"><GithubButton /></div>
		<div class="display:flex height:40px width:100px"><GithubButton type="sponsor" /></div>
		<a :href="project.config.discordUrl" target="_blank" rel="noopener" title="Discord" aria-label="Discord" class="display:inline-flex"><img src="/images/brands/discord-icon.svg" height="25" width="31" class="layout-header-icon-link" alt="" loading="lazy" /></a>
		<a :href="project.config.twitterUrl" target="_blank" rel="noopener" title="Twitter" aria-label="Twitter" class="display:inline-flex"><img src="/images/brands/twitter-icon.svg" height="25" width="25" class="layout-header-icon-link" alt="" loading="lazy" fetchpriority="low"/></a>
		<a :href="project.config.redditUrl" target="_blank" rel="noopener" title="Reddit" aria-label="Reddit" class="display:inline-flex"><img src="/images/brands/reddit.svg" height="25" width="25" class="layout-header-icon-link" alt="" loading="lazy"/></a>
		<a :href="project.config.youtubeUrl" target="_blank" rel="noopener" title="Youtube" aria-label="Youtube" class="display:inline-flex"><img src="/images/brands/youtube.svg" height="24" width="32" class="layout-header-icon-link" alt="" loading="lazy" /></a>
	</nav>
</template>
