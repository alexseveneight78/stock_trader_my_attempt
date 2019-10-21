const state = {
    funds: 10000,
    stocks: []
};

const getters = {
    getFunds: state => {
        return state.funds;
    }
};

const mutations = {
    buyStocks (state, { stockIdToBuy, stockPriceToBuy, stockQuantityToBuy }) {
        const record = state.stocks.find(element => element.id === stockIdToBuy);
        if(record) {
            stocks.quantity += stockQuantityToBuy;
        }
    }
};

const actions = {

};

export default {
    state,
    mutations,
    actions,
    getters
}