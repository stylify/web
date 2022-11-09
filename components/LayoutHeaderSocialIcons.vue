<template>
	<nav class="display:flex align-items:center">
		<div class="display:flex height:28px width:100px"><GithubButton type="sponsor" /></div>
		<div class="display:flex height:28px width:100px"><GithubButton /></div>
		<a :href="project.config.discordUrl" target="_blank" rel="noopener" title="Discord" class="display:inline-flex"><img src="/images/brands/discord-icon.svg" height="25" width="31" class="margin-left:12px object-fit:cover" alt="" loading="lazy" decoding="async" /></a>
		<a :href="project.config.twitterUrl" target="_blank" rel="noopener" title="Twitter" class="display:inline-flex"><img src="/images/brands/twitter-icon.svg" height="25" width="25" class="margin-left:12px object-fit:cover" alt="" loading="lazy" decoding="async"/></a>
		<a :href="project.config.redditUrl" target="_blank" rel="noopener" title="Reddit" class="display:inline-flex"><img src="/images/brands/reddit.svg" height="25" width="25" class="margin-left:12px object-fit:cover" alt="" loading="lazy" decoding="async"/></a>
		<a :href="project.config.youtubeUrl" target="_blank" rel="noopener" title="Youtube" class="display:inline-flex"><img src="/images/brands/youtube.svg" height="24" width="32" class="margin-left:12px object-fit:cover" alt="" loading="lazy" decoding="async" /></a>
	</nav>
</template>
