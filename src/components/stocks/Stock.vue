<template>
    <div class="stockComponent">
        <div class="header">Brand: {{ propsStock.name }}</div>
        <hr>
        <div class="price">Price: {{ propsStock.price }}</div>
        <hr>
        <div class="buyOptions">
            <input 
                type="number"
                v-model="quantity"
            >
            <button 
                @click="buyStocks"
                :disabled="this.quantity <= 0"
                >Buy</button>        
        </div>
    </div>
</template>

<script>
    export default {
        props: ['propsStock'],
        data(){
            return {
                quantity: 0
            }
        },
        methods: {
            buyStocks(){
                const order = {
                    stockIdToBuy: this.propsStock.id,
                    stockPriceToBuy: this.propsStock.price,
                    stockQuantityToBuy: this.quantity,
                    stockName: this.propsStock.name
                };
                this.$store.commit('buyStocks', order);
            }
        }
    }
</script>

<style scoped>
    .stockComponent {
        width: 200px;
        outline: 1px dashed maroon;
        padding: 8px 13px;
        margin: 20px;
    }
    .header,.price {
        text-align: center;
    }
    .buyOptions {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    input {
        width: 150px;
    }
</style>