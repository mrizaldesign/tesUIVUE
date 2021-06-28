<template>
    <select class="form-control" @change="onChange($event)">
        <option v-for="uom in uoms" :key="uom">
            {{ uom }}
        </option>
    </select>
</template>

<script>
import {mapState} from 'vuex';
import store from '../../stores/index';

export default {
	computed: {
		...mapState({
			uoms: state => state.tabledata.uom,
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
