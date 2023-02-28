<template>
	<a  :href="`https://stackblitz.com/edit/${link}`"
		target="_blank"
		rel="noopener"
		class="border-radius:8px line-height:1 font-size:16px display:inline-flex padding:8px_0px_8px_12px align-items:center color:#fefefe text-decoration:none font-weight:bold background:#3b98fc"
	>
		<span class="line-height:1">Try it on StackBlitz</span>
		<img src="/images/brands/stackblitz-icon.jpg" alt="" width="34" height="34" class="margin:0_8px border-radius:34px">
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
