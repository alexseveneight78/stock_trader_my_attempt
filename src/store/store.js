import Vue from 'vue'
import Vuex from 'Vuex'

import stocks from './modules/stocks';
import workplace from './modules/workplace';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        stocks,
        workplace
    }
})

