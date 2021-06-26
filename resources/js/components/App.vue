<template>
    <div class="container">
        <componentB/>
        <div>
            <button>Cancel</button>
            <button>Save as Draft</button>
            <button @click="increment">Submit</button>
            
        </div>
    </div>
</template>

<script>

    import ComponentB from './ComponentB';
    export default {
        mounted() {
            console.log('Component mounted.')
        },
        components: {
            ComponentB
        },
        methods: {
            increment(){
                this.$store.commit('increment');
            }
        } 
    }
</script>
