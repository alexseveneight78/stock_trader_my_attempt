<template>
    <div>
        <h3>Stocks</h3>
        <hr>
        <ul>
            <app-stock v-for="stock in stocks" :propsStock="stock" :key="stock.id"></app-stock>
        </ul>
    </div>
</template>

<script>
    import Stock from './Stock';

    export default {
        components: {
            appStock: Stock
        },
        computed: {
            stocks(){
                return this.$store.getters.stocks;
            }
        }
    }
</script>

<style scoped>
    ul {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
    }
</style>
