<template>
    <div class="workplaceComponent">
        <div class="header">Brand: {{ myStock.name }}</div>
        <hr>
        <div class="price+amount">Price: {{ myStock.price }} || Quantity: {{ myStock.quantity }}</div>
        <hr>
        <div class="sellOptions">
            <input 
                type="number"
                v-model="quantity"
            >
            <button 
                @click="sellStocks"
                :disabled="this.quantity <= 0"
                >Sell</button>        
        </div>
    </div>
</template>

<script>
    export default {
        props: ['myStock'],
        data(){
            return {
                quantity: 0
            }
        },
        methods: {
            sellStocks(){
                console.log(this.myStock)
            }
        }
    }
</script>

<style scoped>
    .workplaceComponent {
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