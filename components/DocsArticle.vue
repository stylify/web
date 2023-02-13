<template>
	<div class="lg:{gap:24px;grid-template-columns:calc(100%_-_224px)_200px;display:grid}">
		<article v-if="(typeof page !== 'undefined')" class="max-width:100% margin-bottom:24px">
			<h1 class="margin-bottom:24px">{{ page.title }}</h1>
			<div v-if="shortcuts.length" class="margin-top:8px min-height:38px md:display:none">
				<span>Shortcuts:</span>
				<a
					v-for="shortcutLink in shortcuts"
					:key="shortcutLink.label"
					:href="shortcutLink.link"
					class="color:$blue4 border-radius:0 font-weight:normal hover:color:$blue1 padding:0 margin-bottom:8px margin-left:8px"
				>
					{{ shortcutLink.label }}
				</a>
			</div>
			<nuxt-content :document="page" />
		</article>
		<div class="tolg:display:none min-height:100% width:200px">
			<aside v-if="shortcuts.length" class="position:sticky top:$stickyHeaderMargin max-height:calc(100vh_-_$stickyHeaderMargin) left:0 heivht:100vh">
				<strong class="color:#f1f1f1">Shortcuts:</strong>
				<div class="display:flex flex-direction:column gap:4px margin-top:12px overflow:auto max-height:calc(100vh_-_$stickyHeaderMargin_-_30px)">
					<a
						v-for="shortcutLink in shortcuts"
						:key="shortcutLink.label"
						:href="shortcutLink.link"
						class="color:$blue4 border-radius:0 font-weight:normal hover:color:$blue1 padding:0 margin-bottom:8px margin-left:8px"
					>
						{{ shortcutLink.label }}
					</a>
				</div>
			</aside>
		</div>
	</div>
</template>

<script>
export default {
	data: () => ({
		shortcuts: []
	}),
	props: {
		page: undefined,
	},
	mounted() {
		document.querySelectorAll('h2, h3, h4, h5, h6').forEach((title) => {
			title.addEventListener('click', () => {
				const link = title.querySelector('a');

				if (!link) {
					return;
				}

				link.click();
			});
		});

		const shortcutLinks = [];
		const h2Titles = document.querySelectorAll('article h2');

		if (h2Titles.length > 1) {
			document.querySelectorAll('article h2').forEach((title) => {
				const titleId = title.getAttribute('id');
				if (titleId) {
					shortcutLinks.push({
						link: '#' + titleId,
						label: title.textContent
					})
				}
			});

			if (shortcutLinks.length > 1) {
				this.shortcuts = shortcutLinks;
			}
		}
	}
}
</script>
