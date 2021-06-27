<template>
    <tr>
        <td style="width:29%;">{{currencysum.name}} in Total</td>
        <td style="width:29%;">{{currencysum.vat}}</td>
        <td style="width:25%;">{{currencysum.subtotal}}</td>
        <td style="width:25%;">{{currencysum.total}}</td>
    </tr>
</template>

<script>

export default {
	props: ['currencysum'],
};
</script>
