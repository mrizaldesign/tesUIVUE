<template>
    <tr>
        <td><input v-model="dataunit.desc" @change="descChange" type="text" class="form-control" placeholder="Description" />{{this.$vnode.key}}</td>
        <td><input v-model="dataunit.qty" @change="qtyChange" type="text" class="form-control" placeholder="Qty" /></td>
        <td>
            <uom />
        </td>
        <td><input v-model="dataunit.unitPrice" @change="priceChange" type="text" class="form-control" placeholder="Unit Price" /></td>
        <td><input v-model="dataunit.discount" @change="discountChange" type="text" class="form-control" placeholder="0" /></td>
        <td><input v-model="dataunit.vat" @change="vatChange" type="text" class="form-control" placeholder="0" /></td>
        <td><i class="fa fa-arrow-right"></i></td>
        <td>
            <currency :key="this.$vnode.key" />
        </td>
        <td>{{units[this.$vnode.key].vatamount}}</td>
        <td>{{units[this.$vnode.key].subtotal}}</td>
        <td>{{units[this.$vnode.key].total}}</td>
        <td>
            <chargeto />
        </td>
        <td><button type="button" class="btn btn-secondary" @click="deleteUnit"><i class="fa fa-minus"></i></button></td>
    </tr>
</template>

<script>
import {mapMutations, mapState} from 'vuex';
import uom from './uom';
import currency from './currency';
import chargeto from './chargeto';

import store from '../../stores/index';

export default {
	props: ['dataunit'],
	components: {
		uom,
		currency,
		chargeto,
	},
	computed: {
		...mapState({
			units: state => state.tabledata.units,
		}),
	},
	methods: {
		descChange() {
			const data = {
				name: 'desc',
				val: this.dataunit.desc,
				index: this.$vnode.key,
			};
			store.commit('tabledata/editUnit', data);
		},
        qtyChange() {
			const data = {
				name: 'qty',
				val: this.dataunit.qty,
				index: this.$vnode.key,
			};
			store.commit('tabledata/editUnit', data);
		},
		priceChange() {
			const data = {
				name: 'unitPrice',
				val: this.dataunit.unitPrice,
				index: this.$vnode.key,
			};
			store.commit('tabledata/editUnit', data);
		},
		discountChange() {
			const data = {
				name: 'discount',
				val: this.dataunit.discount,
				index: this.$vnode.key,
			};
			store.commit('tabledata/editUnit', data);
		},
		vatChange() {
			const data = {
				name: 'vat',
				val: this.dataunit.vat,
				index: this.$vnode.key,
			};
			store.commit('tabledata/editUnit', data);
		},
		deleteUnit() {
			store.commit('tabledata/removeUnit', this.$vnode.key);
		},
		...mapMutations({
			removeUnit: 'tabledata/removeUnit',
		}),
	},
};
</script>
