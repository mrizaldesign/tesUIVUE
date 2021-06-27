<template>
    <select class="form-control" @change="onChange($event)" >
        <option v-for="currency in currencys" :key="currency">
            {{ currency }}
        </option>
    </select>
</template>

<script>
import {mapState} from 'vuex';
import store from '../../stores/index';

export default {

	computed: {
		...mapState({
			currencys: state => state.tabledata.currency,
		}),
	},
	methods: {
		onChange(event) {
			console.log(event.target.value);
			const data = {
				name: 'currency',
				val: event.target.value,
				index: this.$vnode.key,
			};
			store.commit('tabledata/editUnit', data);
		},
	},
};
</script>
