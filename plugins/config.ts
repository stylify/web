import { config } from '../configs';

export const configPlugin = {
	install(Vue: any) {
		Vue.prototype.project = {
			config: config
		}
	}
}
