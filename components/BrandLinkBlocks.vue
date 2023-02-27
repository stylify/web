<!--
stylify-components
	'integration-block__image-wrapper': `max-height:40px max-width:100%`,
	'integration-block': `
		display:flex color:$grey3 flex-direction:row justify-content:center align-items:center
		border-radius:$radius2 background:lighten($blue3,20)
		padding:8px text-decoration:none min-height:60px
	`
/stylify-components
-->
<template>
	<div
		class="display:grid grid-template-columns:repeat(auto-fit,minmax(70px,1fr)) md:grid-template-columns:repeat(auto-fit,minmax(112px,1fr)) gap:12px"
	>
		<nuxt-link
			v-for="item of items"
			:key="item.label"
			:to="`/docs/${item.slug}`"
			:aria-label="item.label"
			:title="item.label"
			class="integration-block"
		>
			<div class="integration-block__image-wrapper">
				<img
					:src="`/images/${item.image}`"
					alt=""
					height="1"
					width="2"
					loading="lazy"
					fetchpriority="low"
					class="width:auto height:40px"
				/>
			</div>
		</nuxt-link>
	</div>
</template>

<script>
export default {
	props: {
		items: {
			type: Array
		}
	}
}
</script>
