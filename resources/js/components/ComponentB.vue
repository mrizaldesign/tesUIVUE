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
                <tr>
                    <td><input type="text" class="form-control" placeholder="Description" /></td>
                    <td><input type="text" class="form-control" placeholder="Qty" /></td>
                    <td>
                        <uom/>
                    </td>
                    <td><input type="text" class="form-control" placeholder="Unit Price" /></td>
                    <td><input type="text" class="form-control" placeholder="0" /></td>
                    <td><input type="text" class="form-control" placeholder="0" /></td>
                    <td><i class="fa fa-arrow-right"></i></td>
                    <td>
                        <select class="form-control">
                            <option>USD</option>
                            <option>AED</option>
                            <option>SGD</option>
                        </select>
                    </td>
                    <td>0.00</td>
                    <td>0.00</td>
                    <td>0.00</td>
                    <td>
                        <select class="form-control">
                            <option>Select an option</option>
                            <option>USD</option>
                            <option>AED</option>
                            <option>SGD</option>
                        </select>
                    </td>
                    <td><button type="button" class="btn btn-secondary"><i class="fa fa-minus"></i></button></td>
                </tr>
                <tr>
                    <td><input type="text" class="form-control" placeholder="" /></td>
                    <td><input type="text" class="form-control" placeholder="" /></td>
                    <td>
                        <select class="form-control">
                            <option>SHP</option>
                            <option>HSP</option>
                            <option>SHH</option>
                        </select>
                    </td>
                    <td><input type="text" class="form-control" placeholder="" /></td>
                    <td><input type="text" class="form-control" placeholder="" /></td>
                    <td><input type="text" class="form-control" placeholder="" /></td>
                    <td><i class="fa fa-arrow-right"></i></td>
                    <td>
                        <select class="form-control">
                            <option>USD</option>
                            <option>AED</option>
                            <option>SGD</option>
                        </select>
                    </td>
                    <td>0.00</td>
                    <td>0.00</td>
                    <td>0.00</td>
                    <td>
                        <select class="form-control">
                            <option>Select an option</option>
                            <option>USD</option>
                            <option>AED</option>
                            <option>SGD</option>
                        </select>
                    </td>
                    <td><button type="button" class="btn btn-secondary"><i class="fa fa-minus"></i></button></td>
                </tr>
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

import { mapMutations } from 'vuex';
import uom from './tabledata/uom';
export default {
    components: {
        uom
    },
    methods: {
        ...mapMutations({
            increment: 'tabledata/increment'
        })
    }
}

</script>