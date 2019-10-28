const state = {
    funds: 10000,
    stocks: []
};

const getters = {
    getFunds: state => {
        return state.funds;
    },
    myStocks: (state,getters) => {
        return state.stocks.map(stock => {
            const record = getters.stocks.find(element => element.id === stock.id);
            return {
                id: stock.id,
                quantity: stock.quantity,
                brand: record.brand,
                price: record.price
            }
        })
    }
};

const mutations = {
    buyStocks (state, { stockIdToBuy, stockPriceToBuy, stockQuantityToBuy }) {
        const record = state.stocks.find(element => element.id === stockIdToBuy);
        if(record) {
            state.stocks.quantity += stockQuantityToBuy;
        } else {
            state.stocks.push({ 
                id: stockIdToBuy, 
                quantity: stockQuantityToBuy 
            })
        }
        state.getFunds -= stockIdToBuy * stockQuantityToBuy;
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