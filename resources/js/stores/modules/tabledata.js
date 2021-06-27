const axios = require('axios');

export default {
	namespaced: true,
	state: {
		count: 0,
		uom: [],
		currency: [],
		chargeto: [],
		units: [{
			desc: null,
			qty: null,
			uom: null,
			unitPrice: null,
			discount: null,
			vat: null,
			currency: null,
			vatamount: 0,
			subtotal: 0,
			total: 0,
			chargeTo: null,
		}],
		currencysum: [],
	},
	mutations: {
		setDefaultCurrency(state, payload) {
			state.units[0].currency = payload;
		},
		setUOM(state, payload) {
			state.uom = payload;
		},
		setCurrency(state, payload) {
			state.currency = payload;
		},
		setChargeto(state, payload) {
			state.chargeto = payload;
		},
		removeUnit: (state, payload) => {
			state.units.splice(payload, 1);

			//Currency sum
			state.currencysum = [];

			for (let i = 0; i < state.units.length; i++) {
				let found = 0;
				state.currencysum.find((o, k) => {
					if (o.name === state.units[i].currency) {
						const data = {
							name: state.units[i].currency,
							vat: o.vat + state.units[i].vatamount,
							subtotal: o.subtotal + state.units[i].subtotal,
							total: o.total + state.units[i].total,
						};
						state.currencysum[k] = data;
						found = 1;
						return true; 
					}
				});
				if (found === 0) {
					const data = {
						name: state.units[i].currency,
						vat: state.units[i].vatamount,
						subtotal: state.units[i].subtotal,
						total: state.units[i].total,
					};
					state.currencysum.push(data);
				}

				found = 0;
			}
		},
		addUnit: state => {
			const data = {
				desc: null,
				qty: null,
				uom: null,
				unitPrice: null,
				discount: null,
				vat: null,
				vatamount: 0,
				subtotal: 0,
				total: 0,
				currency: state.currency[0],
				chargeTo: null,
			};
			state.units.push(data);
		},
		editUnit: (state, payload) => {
			switch (payload.name) {
				case 'desc':
				  	state.units[payload.index].desc = payload.val;
					break;
				case 'qty':
					state.units[payload.index].qty = parseInt(payload.val, 10);
				  	break;
				case 'uom':
					state.units[payload.index].uom = payload.val;
					break;
				case 'unitPrice':
					state.units[payload.index].unitPrice = parseInt(payload.val, 10);
					break;
				case 'discount':
					state.units[payload.index].discount = parseInt(payload.val, 10);
					break;
				case 'vat':
					state.units[payload.index].vat = parseInt(payload.val, 10);
					break;
				case 'currency':
					state.units[payload.index].currency = payload.val;
					break;
				case 'chargeTo':
					state.units[payload.index].chargeTo = payload.val;
					break;
				default:
			  }



			  if (state.units[payload.index].discount > 0) {
				state.units[payload.index].subtotal = state.units[payload.index].qty * (state.units[payload.index].unitPrice - (state.units[payload.index].unitPrice * state.units[payload.index].discount / 100));
			  } else {
				state.units[payload.index].subtotal = state.units[payload.index].qty * state.units[payload.index].unitPrice;
			  }

			  state.units[payload.index].vatamount = state.units[payload.index].subtotal * state.units[payload.index].vat / 100;

			  state.units[payload.index].total = state.units[payload.index].subtotal + state.units[payload.index].vatamount;

			  //currency sum
			  state.currencysum = [];
			  
			  for (let i = 0; i < state.units.length; i++) {
				let found = 0;
				state.currencysum.find((o, k) => {
					if (o.name === state.units[i].currency) {
						const data = {
							name: state.units[i].currency,
							vat: o.vat + state.units[i].vatamount,
							subtotal: o.subtotal + state.units[i].subtotal,
							total: o.total + state.units[i].total,
						};
						state.currencysum[k] = data;
						found = 1;
						return true;
					}
				});
				if (found === 0) {
					const data = {
						name: state.units[i].currency,
						vat: state.units[i].vatamount,
						subtotal: state.units[i].subtotal,
						total: state.units[i].total,
					};
					state.currencysum.push(data);
				}

				found = 0;
			  }
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
					commit('setDefaultCurrency', response.data.currency[0]);
				});
		},
	},
};
