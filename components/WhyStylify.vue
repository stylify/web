<template>
	<div :style="`text-align:${textAlign}`">
		<h2 class="margin-bottom:8px">Why Stylify CSS?</h2>
		<p>
			To style websites we need CSS. Writing CSS in optimized way is not easy. It requires skills.
			<br> Stylify may look like inline styles. Why not use them? Because they cannot be efficiently optimized.
		</p>
		<div class="hp__info-boxes text-align:left margin-top:8px font-size:14px display:grid grid-template-columns:repeat(auto-fit,minmax(300px,1fr)) gap:12px">
			<div>
				<strong class="color:#fff">Problems when writing CSS</strong>
				<br>Splitting CSS, clearing unused classes, duplicates in CSS property:value, duplicated media queries, unnecessary selectors chaining, counterintuitive nesting in preprocessors, unnecessary high CSS specificity, maintaining selectors that are modified on multiple places, creating self-explanatory selectors for cases where you need to style only one element and change only it's margin, combining files so only used CSS is imported, CSS files organization and naming, minifying selectors in CSS+HTML, etc.
			</div>
			<div>
				<strong class="color:#fff">How Stylify CSS solves this?</strong>
				<br>Stylify uses CSS-like syntax to stay as close to CSS syntax as possible (so <strong>devs don't have to study random shortcuts or create them</strong>, even though it makes selectors longer) and in the same time it focuses on optimization problems (so it is easier for devs to maintain the CSS size) providing <strong>simple bundles splitting, automated bundles mapping, generating used CSS, components, variables, selectors shrinking</strong>, etc.
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		textAlign: 'left'
	}
}
</script>
