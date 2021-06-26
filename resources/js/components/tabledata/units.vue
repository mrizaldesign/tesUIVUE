<template>
    <tr>
        <td><input v-model="dataunit.desc" type="text" class="form-control" placeholder="Description" /></td>
        <td><input type="text" class="form-control" placeholder="Qty" /></td>
        <td>
            <uom />
        </td>
        <td><input type="text" class="form-control" placeholder="Unit Price" /></td>
        <td><input type="text" class="form-control" placeholder="0" /></td>
        <td><input type="text" class="form-control" placeholder="0" /></td>
        <td><i class="fa fa-arrow-right"></i></td>
        <td>
            <currency />
        </td>
        <td>0.00</td>
        <td>0.00</td>
        <td>0.00</td>
        <td>
            <chargeto />
        </td>
        <td><button type="button" class="btn btn-secondary"><i class="fa fa-minus"></i></button></td>
    </tr>
</template>

<script>
import {mapState} from 'vuex';
import uom from './uom';
import currency from './currency';
import chargeto from './chargeto';

export default {
	props: ['dataunit'],
	components: {
		uom,
		currency,
		chargeto,
	},
	computed: {
		...mapState({
			currencys: state => state.tabledata.currency,
		}),
	},
};
</script>
