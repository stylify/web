<template>
	<a  :href="link"
		target="_blank"
		rel="noopener"
		class="border-radius:8px line-height:1 font-size:16px display:inline-flex padding:8px__0px__8px__12px align-items:center color:#fff text-decoration:none font-weight:bold background:#3b98fc"
	>
		<span class="line-height:1">Edit on StackBlitz</span>
		<img src="/images/brands/stackblitz-icon.jpg" alt="" width="34" height="34">
	</a>
</template>

<script>
export default {
	props: {
		link: {
			type: String,
			default: '#'
		}
	}
}
</script>
