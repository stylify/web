<!--
@stylify-plainSelectors
	"ul.share-buttons": 'display:flex align-items:center margin-left:-8px justify-content:center list-style:none padding:0',
	"ul.share-buttons li": 'display:inline-flex margin-left:8px',
	"ul.share-buttons a": 'line-height:1 display:inline-flex',
	"ul.share-buttons .sr-only": `
		position:absolute
		clip:rect(1px__1px__1px__1px)
		clip:rect(1px,1px,1px,1px)
		padding:0
		border:0
		height:1px
		width:1px
		overflow:hidden
	`,
	"ul.share-buttons img": 'width:32px'
/@stylify-plainSelectors
-->
<template>
	<ul class="share-buttons" data-source="simplesharingbuttons.com">
		<li><a :href="`https://www.facebook.com/sharer/sharer.php?u=${postUrl}&quote=${postTitle}`" title="Share on Facebook" target="_blank" rel="noopener"><img width="32" height="32" loading="lazy" alt="Share on Facebook" src="/images/share-icons/Facebook.svg" /></a></li>
		<li><a :href="`https://twitter.com/intent/tweet?source=${postUrl}&text=${postTitle}:+${postUrl}&via=stylify_dev`" target="_blank" rel="noopener" title="Tweet"><img width="32" height="32" loading="lazy" alt="Tweet" src="/images/share-icons/Twitter.svg" /></a></li>
		<li><a :href="`http://www.tumblr.com/share?v=3&u=${postUrl}&quote=${postTitle}&s=`" target="_blank" rel="noopener" title="Post to Tumblr"><img width="32" height="32" loading="lazy" alt="Post to Tumblr" src="/images/share-icons/Tumblr.svg" /></a></li>
		<li><a :href="`http://pinterest.com/pin/create/button/?url=${postUrl}&media=${postImage}&description=${postDescription}`" target="_blank" rel="noopener" title="Pin it"><img width="32" height="32" loading="lazy" alt="Pin it" src="/images/share-icons/Pinterest.svg" /></a></li>
		<li><a :href="`https://getpocket.com/save?url=${postUrl}&title=${postTitle}`" target="_blank" rel="noopener" title="Add to Pocket"><img width="32" height="32" loading="lazy" alt="Add to Pocket" src="/images/share-icons/Pocket.svg" /></a></li>
		<li><a :href="`http://www.reddit.com/submit?url=${postUrl}&title=${postTitle}`" target="_blank" rel="noopener" title="Submit to Reddit"><img width="32" height="32" loading="lazy" alt="Submit to Reddit" src="/images/share-icons/Reddit.svg" /></a></li>
		<li><a :href="`http://www.linkedin.com/shareArticle?mini=true&url=${postUrl}&title=${postTitle}&summary=${postDescription}&source=${postUrl}`" target="_blank" rel="noopener" title="Share on LinkedIn"><img width="32" height="32" loading="lazy" alt="Share on LinkedIn" src="/images/share-icons/LinkedIn.svg" /></a></li>
		<li><a :href="`http://wordpress.com/press-this.php?u=${postUrl}&quote=${postTitle}&s=${postDescription}&i=${postImage}`" target="_blank" rel="noopener" title="Publish on WordPress"><img width="32" height="32" loading="lazy" alt="Publish on WordPress" src="/images/share-icons/Wordpress.svg" /></a></li>
		<li><a :href="`https://pinboard.in/popup_login/?url=${postUrl}&title=${postTitle}&description=${postDescription}`" target="_blank" rel="noopener" title="Save to Pinboard"><img width="32" height="32" loading="lazy" alt="Save to Pinboard" src="/images/share-icons/Pinboard.svg" /></a></li>
		<li><a :href="`mailto:?subject=${postTitle}&body=${postDescription}:+${postUrl}`" target="_blank" rel="noopener" title="Send email"><img width="32" height="32" loading="lazy" alt="Send email" src="/images/share-icons/Email.svg" /></a></li>
	</ul>
</template>

<script>
export default {
	props: {
		url: '',
		title: '',
		description: '',
		image: ''
	},
	computed: {
		postUrl() {
			return encodeURIComponent(this.url);
		},
		postTitle() {
			return encodeURIComponent(this.title);
		},
		postDescription() {
			return encodeURIComponent(this.description);
		},
		postImage() {
			return encodeURIComponent(this.image);
		}
	}
}
</script>
