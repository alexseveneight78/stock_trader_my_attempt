import Vue from 'vue'
import Vuex from 'Vuex'

import stocks from './modules/stocks';
import workplace from './modules/workplace';

Vue.use(Vuex);
console.log(workplace)
export default new Vuex.Store({
    modules: {
        stocks,
        workplace
    }
})

