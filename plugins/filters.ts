import { filters } from '../services';

export const filtersPlugin = {
	install(Vue: any) {
		Vue.prototype.filters = filters;
	}
}
