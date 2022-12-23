<template>
	<section id="why-stylify" class="container">
		<h2 class="hp-section-title text-align:center ">Why Stylify CSS?</h2>
		<p class="margin-bottom:8px text-align:center ">
			To style websites we need CSS. Writing CSS in optimized way is not easy. It requires skills and a lot of time.
		</p>
		<div class="
			text-align:left font-size:14px display:grid grid-template-columns:repeat(auto-fit,minmax(300px,1fr)) gap:12px
			[>_div]{border:1px_solid_#1e2431;padding:8px;border-radius:4px}
			[ul]{padding-left:0;margin-bottom:0}
			[li]{padding-left:28px;position:relative;list-style:none}
			[li:before]{position:absolute;left:0}
		">
			<div>
				<strong class="color:#fff">What problems arise when writing CSS</strong>
				<ul class="[li:before]{content:^❌^}">
					<li>Difficult CSS splitting</li>
					<li>Unused classes selectors in code</li>
					<li>Duplicates in CSS <code>property:value</code> and media queries</li>
					<li>Counterintuitive nesting in preprocessors</li>
					<li>Unnecessary high CSS specificity</li>
					<li>Maintaining selectors that are modified in multiple places</li>
					<li>Combining files so only used CSS is imported</li>
					<li>CSS files organization and naming</li>
				</ul>
			</div>
			<div>
				<strong class="color:#fff">How Stylify CSS solves this</strong>
				<ul class="[li:before]{content:^✅^}">
					<li><strong class="color:#fff">CSS-like syntax</strong>: No random shortcuts, selectors are self-explanatoryand intutive</li>
					<li><strong class="color:#fff">Utility-First Approach</strong>: This eliminates unnecessary selectors created just because of one property:value</li>
					<li><strong class="color:#fff">Components, Variables, Custom Selectors</strong>: Define reusable selectors and variables to avoid hardcoded values and bloated templates</li>
					<li><strong class="color:#fff">Automated optimization</strong>: simple bundles splitting, generating only used CSS, selectors minification, utilities are reused in components and custom selectors definition to eliminate duplicates</li>
				</ul>
			</div>
		</div>
	</section>
</template>
