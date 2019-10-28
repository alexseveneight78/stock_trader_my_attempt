<template>
    <div class="header">
        <ul>
           <router-link to="/" tag="li"> <a>Stock Trader</a> </router-link>
           <router-link to="/workplace" tag="li"> <a>Workplace</a> </router-link>
           <router-link to="/stocks" tag="li"> <a>Stocks</a> </router-link>
        </ul>
        <hr>
        <p>Funds: {{ getFunds | currency }}</p>
        <hr>
        <ul>
          <li>
             <button>End Day</button>
           </li>
          <li>
             <button>Save & Load</button>
           </li>
        </ul>
    </div>
</template>

<script>
    import Home from '../Home'
    export default {
        components: {
            appHome: Home
        },
        computed: {
            getFunds(){
                return this.$store.getters.getFunds;
            }
        }
    }
</script>

<style scoped>
    .header {
        text-align: center;
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        width: 80%;
        margin: 5px auto;
        outline: 1px solid red;
    }
    ul {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }
    li {
        list-style: none;
        outline: 1px solid green;
    }
    li a {
        display: block;
        padding: 8px 13px;
        transition: 300ms;
    }
    li a:hover {
        background-color: salmon;
    }
    ul:last-child li {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    button {
        cursor: pointer;
    }
</style>