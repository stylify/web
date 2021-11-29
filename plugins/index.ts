import Vue from 'vue';
import { filtersPlugin } from './filters';
import { configPlugin } from './config';

Vue.use(configPlugin);
Vue.use(filtersPlugin);
