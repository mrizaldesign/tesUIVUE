const axios = require('axios');

export default {
	namespaced: true,
	state: {
		count: 0,
		uom: [],
		currency: [],
		chargeto: [],
	},
	mutations: {
		increment: state => state.count++,
		decrement: state => state.count--,
		setUOM(state, payload) {
			state.uom = payload;
		},
		setCurrency(state, payload) {
			state.currency = payload;
		},
		setChargeto(state, payload) {
			state.chargeto = payload;
		},

	},
	actions: {
		async getData({commit}) {
			await axios
				.get('/tabledata')
				.then(response => {
					commit('setUOM', response.data.uom);
					commit('setCurrency', response.data.currency);
					commit('setChargeto', response.data.chargeto);
				});
		},
	},
};
