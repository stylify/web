<template>
	<div>
		<div class="tolg:padding-left:8px tolg:padding-right:8px tolg:margin:0_-8px padding-bottom:12px display:flex flex-wrap:nowrap overflow:auto">
			<a
				v-for="(tabLabel, tab) in tabs"
				:key="tab"
				:data-id="tab"
				role="button"
				v-on:click="(event) => setFeaturedTab(event, tab)"
				:class="[
					featuresSelectedTab === tab ? 'color:$blue1' : 'color:$grey5',
					'transition:.3s font-weight:bold white-space:nowrap cursor:pointer margin-right:16px text-align:center display:inline-flex',
					'[i]{font-size:24px} [span]{font-size:14px}'
				]"
				v-html="tabLabel"
			></a>
		</div>
		<div>
			<div v-show="featuresSelectedTab === 'selectors'" class="display:flex flex-direction:column">
				<img v-show="!mounted" src="/images/hp/selectors-loading-placeholder-v4.jpg" height="513" class="width:100% height:513px object-fit:cover object-position:left" loading="eager" fetchpriority="high" />
				<GetStartedSelectors v-show="mounted" />
			</div>
			<div v-show="featuresSelectedTab === 'components'">
				<GetStartedComponents />
			</div>
			<div v-show="featuresSelectedTab === 'customSelectors'">
				<GetStartedCustomSelectors />
			</div>
			<div v-show="featuresSelectedTab === 'variables'">
				<GetStartedVariables />
			</div>
			<div v-show="featuresSelectedTab === 'dynamicScreens'">
				<GetStartedScreens />
			</div>
			<div v-show="featuresSelectedTab === 'helpers'">
				<GetStartedHelpers />
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data: () => ({
		mounted: false,
		// Features tabs
		featuresSelectedTab: 'selectors',

		tabs: {
			selectors: '<span><i class="icon icon-target"></i><br>Selectors</span>',
			components: '<span><i class="icon icon-link"></i><br>Components</span>',
			customSelectors: '<span><i class="icon icon-crosshair"></i><br>Global Selectors</span>',
			variables: '<span><i class="icon icon-dollar-sign"></i><br>Variables</span>',
			dynamicScreens: '<span><i class="icon icon-monitor"></i><br>Screens</span>',
			helpers: '<span><i class="icon icon-settings"></i><br>Functions</span>'
		},
	}),
	methods: {
		setFeaturedTab(event, tab) {
			const el = event.target;
			el.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
			this.featuresSelectedTab = tab;
		}
	},
	mounted() {
		this.mounted = true;
	}
}
</script>
