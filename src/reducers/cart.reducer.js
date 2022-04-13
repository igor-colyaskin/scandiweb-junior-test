import _ from "lodash"

const cartReducerDefaultState = []

const cartReducer = (state = cartReducerDefaultState, action) => {
    switch (action.type) {
        case 'REPLACE_CART_WITH_UPDATED_CLONE':
               return action.payload

        case 'ADD_PRODUCT_TO_CART':
            const findEqual = state.filter(cartItem =>
                (cartItem.productData.id === action.cartItem.productData.id)
                && (_.isEqual(cartItem.attributes, action.cartItem.attributes))
            )
            if (findEqual.length) {
                return state.map(cartItem => {
                        if ((cartItem.productData.id === action.cartItem.productData.id)
                            && (_.isEqual(cartItem.attributes, action.cartItem.attributes))) {
                            const prevAmount = cartItem.amount
                            return {...cartItem, amount: prevAmount + 1}
                        } else {
                            return cartItem
                        }
                    }
                )
            } else {
                return [...state, {...action.cartItem, amount: 1}]
            }

        case 'CHANGE_AMOUNT_ON_CART_ID':
            return state
                .map(cartItem => {
                    if (cartItem.cartId === action.cartId) {
                        const prevAmount = cartItem.amount
                        return {...cartItem, amount: prevAmount + action.value}
                    } else {
                        return cartItem
                    }
                })
                .filter(cartItem => cartItem.amount > 0)

        case 'REMOVE_ITEM_FROM_CART':
            return state.filter(cartItem => cartItem.cartId !== action.itemId)

        default:
            return state
    }
}

export default cartReducer