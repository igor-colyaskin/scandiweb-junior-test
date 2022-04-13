import _ from "lodash"

export const cartSelector = (state) => state.cart

export const cloneDeepCartSelector = (state) => {
    return _.cloneDeep(state.cart)
}

export const amountInCartSelector = (state) => {
    return state.cart.reduce((acc, item) =>{
        return acc + item.amount
    }, 0)
}