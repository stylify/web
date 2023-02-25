<template>
	<div class="
		margin:32px_0 display:grid grid-template-columns:repeat(auto-fit,minmax(300px,1fr)) gap:24px
		[img]{width:200px;height:60px;object-fit:contain}
		[>div]{display:flex;flex-direction:column;align-items:center}
		[>div>div]{width:100%;margin-top:32px}
		[>div>div_p:first-of-type]{margin-top:0}
	">
		<div>
			<img :src="`/images/brands/${image}`" alt="" width="200" height="60" loading="lazy" fetchpriority="low">
			<div><slot name="tool"></slot></div>
		</div>
		<div>
			<img src="/images/logo/horizontal-dark.svg" alt="" width="200" height="60" loading="lazy" fetchpriority="low">
			<div><slot name="stylify"></slot></div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		image: {
			type: String,
		}
	}
}
</script>
