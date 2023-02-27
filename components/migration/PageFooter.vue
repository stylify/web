<template>
	<div>
		<h2>Integrate Stylify into your favorite tool</h2>
		<p>Stylify can be used in various tools. Pick your favorite tool and start using Stylify CSS in a minute.</p>
		<integration-blocks />

		<where-to-next title="Get Started" :package="null" />

		<h2>Speed up development with prepared Headless CSS Components</h2>
		<p>Copy&Paste, unstyled components inspired by the Material Design V3.</p>
		<components-preview-grid />
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
