<template>
	<a :href="`#${href}`" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a>
</template>

<script>
export default {
	props: {
		href: {
			type: String
		}
	}
}
</script>
