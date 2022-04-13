import {createStore, combineReducers} from "redux"
import cartReducer from '../reducers/cart.reducer'
import currentConfigReducer from '../reducers/current-config.reducer'
import generalConfigReducer from '../reducers/general-config.reducer'

const getStore = () => {
    return createStore(combineReducers({
        cart: cartReducer,
        generalConfig: generalConfigReducer,
        currentConfig: currentConfigReducer
    }), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
}

export default getStore