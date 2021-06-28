<template>
    <select class="form-control" @change="onChange($event)">
        <option>Select an option</option>
        <option v-for="chargeto in chargetos" :key="chargeto">
            {{ chargeto }}
        </option>
    </select>
</template>

<script>
import {mapState} from 'vuex';
import store from '../../stores/index';

export default {
	computed: {
		...mapState({
			chargetos: state => state.tabledata.chargeto,
		}),
	},
	methods: {
		onChange(event) {
			console.log(event.target.value);
			const data = {
				name: 'chargeto',
				val: event.target.value,
				index: this.$vnode.key,
			};
			store.commit('tabledata/editUnit', data);
		},
	},
};
</script>
