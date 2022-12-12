<template>
	<div :style="`text-align:${textAlign}`">
		<h2 class="margin-bottom:8px">Why Stylify CSS?</h2>
		<p>
			To style websites we need CSS. Writing CSS in optimized way is not easy. It requires skills and a lot of time.
		</p>
		<div class="hp__info-boxes text-align:left margin-top:8px font-size:14px display:grid grid-template-columns:repeat(auto-fit,minmax(300px,1fr)) gap:12px">
			<div>
				<strong class="color:#fff">Problems when writing CSS</strong>
				<br>Splitting CSS, clearing unused classes, duplicates in CSS property:value, duplicated media queries, unnecessary selectors chaining, counterintuitive nesting in preprocessors, unnecessary high CSS specificity, maintaining selectors that are modified in multiple places, combining files so only used CSS is imported, CSS files organization and naming, minifying selectors in CSS+HTML, etc.
			</div>
			<div>
				<strong class="color:#fff">How Stylify CSS solves this?</strong>
				<br><strong>CSS-like syntax</strong>: devs don't have to study random shortcuts or create them, even though it makes selectors longer
				<br><strong>Automated optimization</strong>: simple bundles splitting, automated bundles mapping, generating only used CSS, components, variables and selectors shrinking.
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		textAlign: {
			type: String,
			default: 'left'
		}
	}
}
</script>
