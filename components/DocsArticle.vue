<template>
	<article v-if="typeof page !== 'undefined'" class="margin-bottom:24px">
		<h1>{{ page.title }}</h1>
		<div v-if="shortcuts.length" class="margin-top:8px min-height:38px">
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
				title.querySelector('a').click();
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
