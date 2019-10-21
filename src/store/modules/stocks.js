import data from '../../data/data'

const state = {
    stocks: []
};

const getters = {
    stocks: state => {
        return state.stocks;
    }
};

const mutations = {
    setStocks(state,data){
        state.stocks = data;
    }
};

const actions = {
    initStocks: ({ commit }) => {
        console.log({commit})
        commit('setStocks', data)
    }
};

export default {
    state,
    getters,
    mutations,
    actions
}

