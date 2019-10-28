<template>
    <div>
        <h3>Workplace</h3>
        <app-workplaceItem v-for="myStock in myStocks" :myStock="myStock" :key="myStock.id"></app-workplaceItem>
    </div>
</template>

<script>
    import WorkplaceItem from './WorkplaceItem'
    export default {
        components: {
            appWorkplaceItem: WorkplaceItem
        },
        computed: {
            myStocks(){
                return this.$store.getters.myStocks;
            }
        }
    }
</script>

<style scoped>

</style>