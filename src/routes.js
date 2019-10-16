import Home from './components/Home';
import Workplace from './components/workplace/Workplace'
import Stocks from './components/stocks/Stocks'

export const routes = [
    { path: '/', component: Home },
    { path: '/workplace', component: Workplace },
    { path: '/stocks', component: Stocks}
]