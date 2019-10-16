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
        data() {
            return {
                stocks: [
                    { id: 1, name: 'BMW', price: 110 },
                    { id: 2, name: 'Google', price: 250 },
                    { id: 3, name: 'Apple', price: 275 },
                    { id: 4, name: 'Audi', price: 85 },
                    { id: 5, name: 'Lenovo', price: 100 }
                ]
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
