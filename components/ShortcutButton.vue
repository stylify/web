<template>
	<a :href="link" class="btn btn--transparent md:margin-bottom:0 color:$blue1 border:2px__solid__$blue1 md:padding:8px__12px margin-bottom:24px margin-left:12px">
		<slot />
	</a>
</template>

<script>
export default {
	props: {
		link: {
			type: String
		}
	}
}
</script>
