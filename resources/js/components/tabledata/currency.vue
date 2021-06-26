<template>
    <select class="form-control">
        <option v-for="currency in currencys" :key="currency">
            {{ currency }}
        </option>
    </select>
</template>

<script>
import {mapState} from 'vuex';

export default {
	computed: {
		...mapState({
			currencys: state => state.tabledata.currency,
		}),
	},
};
</script>
