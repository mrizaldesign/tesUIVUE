<template>
<div class="tabledata-container">
    <div class="row">
        <h3 class="title">Cost Detail <i class="fa fa-chevron-down"></i></h3>
       <table class="table" id="tablecost">
            <thead>
                <tr>
                    <th scope="col" style="width:10%">Description</th>
                    <th scope="col" style="width:6%">Qty</th>
                    <th scope="col" style="width:10%">UOM</th>
                    <th scope="col" style="width:8%">Unit Price</th>
                    <th scope="col" style="width:8%">Discount (%)</th>
                    <th scope="col" style="width:6%">VAT (%)</th>
                    <th></th>
                    <th scope="col" style="width:8%">Currency</th>
                    <th scope="col" style="width:8%">VAT Amount</th>
                    <th scope="col" style="width:8%">Sub Total</th>
                    <th scope="col" style="width:7%">Total</th>
                    <th scope="col" style="width:13%">Charge To</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>

                <units v-for="(unit, index) in units" :key="index" :dataunit="unit" />

                <tr>
                    <td colspan="7" rowspan="2">lorem ipsum</td>
                    <td colspan="4">
                        <table class="totaltable">
                            <totalRow v-for="(currencysum, index) in currencysums" :key="index" :currencysum="currencysum" />
                        </table>
                    </td>
                    <td></td>
                    <td><button type="button" class="btn btn-primary" @click="addUnit"><i class="fa fa-plus"></i></button></td>

                </tr>

            </tbody>
        </table>

    </div>

</div>
</template>

<script>

import {mapState} from 'vuex';

import units from './tabledata/units';
import totalRow from './tabledata/totalRow';

import store from '../stores/index';

export default {
	components: {
		units,
		totalRow,
	},
	computed: {
		...mapState({
			units: state => state.tabledata.units,
			currencysums: state => state.tabledata.currencysum,
		}),
	},
	methods: {
		addUnit() {
			store.commit('tabledata/addUnit');
		},
	},
};

</script>
