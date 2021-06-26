<template>
    <select class="form-control">
        <option v-for="chargeto in chargetos" :key="chargeto">
            <option>Select an option</option>
            {{ chargeto }}
        </option>
    </select>
</template>

<script>
import {mapState} from 'vuex';

export default {
	computed: {
		...mapState({
			chargetos: state => state.tabledata.chargeto,
		}),
	},
};
</script>
