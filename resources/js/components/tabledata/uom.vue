<template>
    <select class="form-control">
        <option v-for="uom in uoms" :key="uom">
            {{ uom }}
        </option>
    </select>
</template>

<script>
import {mapState} from 'vuex';

export default {
	computed: {
		...mapState({
			uoms: state => state.tabledata.uom,
		}),
	},
};
</script>
