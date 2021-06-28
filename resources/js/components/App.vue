<template>
    <div class="container">
        <componentB/>
        <div class="button-bottom text-right">
            <button class="btn btn-link">Cancel</button>
            <button class="btn btn-light">Save as Draft</button>
            <button class="btn btn-primary">Submit</button>
        </div>
    </div>
</template>

<script>

import ComponentB from './ComponentB';
export default {
	components: {
		ComponentB,
	},
};
</script>
