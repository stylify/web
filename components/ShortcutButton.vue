<template>
	<a :href="link" class="btn btn--transparent color:$blue1 border:2px_solid_$blue1 md:padding:8px_12px margin-bottom:12px margin-left:12px">
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
