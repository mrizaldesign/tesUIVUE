<template>
<div>
    <div class="row">
        <h1>{{$store.state.tabledata.count}}</h1>
        <h3>Cost Detail <i class="fa fa-chevron-down"></i></h3>
        <button @click="increment">Submit</button>
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
                
                <units v-for="unit in units" v-bind:dataunit="unit" />

                <tr>
                    <td colspan="7" rowspan="2">lorem ipsum</td>
                    <td colspan="4">
                        <table class="totaltable">
                            <tr>
                                <td style="width:29%;">USD in Total</td>
                                <td style="width:29%;">0.00</td>
                                <td style="width:25%;">0.00</td>
                                <td style="width:25%;">0.00</td>
                            </tr>
                             <tr>
                                <td style="width:29%;">AED in Total</td>
                                <td style="width:29%;">0.00</td>
                                <td style="width:25%;">0.00</td>
                                <td style="width:25%;">0.00</td>
                            </tr>
        
                        </table>
                    </td>
                    <td></td>
                    <td><button type="button" class="btn btn-primary"><i class="fa fa-plus"></i></button></td>

                </tr>
                
               
            </tbody>
        </table>
        
    </div>

</div>
</template>


<script>

import { mapMutations, mapState } from 'vuex';

import units from './tabledata/units';

export default {
    components: {
        units
    },
    methods: {
        ...mapMutations({
            increment: 'tabledata/increment'
        })
    },
    computed: {
		...mapState({
			units: state => state.tabledata.units,
		}),
	},
}

</script>