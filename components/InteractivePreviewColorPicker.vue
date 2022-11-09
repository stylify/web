<template>
	<div>
		<strong class="display:block font-size:24px margin-bottom:8px">Choose your collor palette</strong>
		<div class="[span:not(:first-of-type)]{md:margin-left:8px;display:inline-flex;align-items:center} display:flex flex-direction:column md:flex-direction:row">
			<span><span>Primary:</span>&nbsp;<input type="color" v-model="primary"></span>
			<span v-if="typeof disableSecondary === 'unfefined'"><span>Secondary:</span>&nbsp;<input type="color" v-model="secondary"></span>
			<span v-if="typeof disableTertiary === 'unfefined'"><span>Tertiary:</span>&nbsp;<input type="color" v-model="tertiary"></span>
		</div>
	</div>
</template>

<script>
import { dispatchEvent } from '~/services/customEvent';

export default {
	props: {
		disableSecondary: undefined,
		disableTertiary: undefined
	},
	data: () => ({
		primary: '#1890ff',
		secondary: '#52c41a',
		tertiary: '#faad14'
	}),
	methods: {
		emitColorChange() {
			if (typeof window === 'undefined') {
				return;
			}

			dispatchEvent('colorPicker:changed', {
				primary: this.primary,
				secondary: this.secondary,
				tertiary: this.tertiary
			});
		}
	},
	mounted() {
		this.emitColorChange();
	},
	watch: {
		primary() {
			this.emitColorChange();
		},
		secondary() {
			this.emitColorChange();
		},
		tertiary() {
			this.emitColorChange();
		}
	}
}
</script>
