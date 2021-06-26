import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import tabledata from './modules/tabledata';

export default new Vuex.Store({
	modules: {
		tabledata,
	},
});
