<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <ComponentB />
                <div class="card">
                    <div class="card-header">Example Component</div>
                    
                    <div class="card-body">
                        I'm an example component
                    </div>
                </div>
            </div>
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
        }
    }
</script>
