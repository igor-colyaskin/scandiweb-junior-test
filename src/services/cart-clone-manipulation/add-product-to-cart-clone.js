import _ from "lodash"

export const addProductToCartClone = (cartClone, newCartItem) => {
    const findEqual = cartClone.filter(cartItem =>
        (cartItem.productData.id === newCartItem.productData.id)
        && (_.isEqual(cartItem.attributes, newCartItem.attributes))
    )

    if (findEqual.length) {
        return cartClone.map(cartItem => {
                if ((cartItem.productData.id === newCartItem.productData.id)
                    && (_.isEqual(cartItem.attributes, newCartItem.attributes))) {
                    return {...cartItem, amount: cartItem.amount + 1}
                } else {
                    return cartItem
                }
            }
        )
    } else {
        return [...cartClone, {...newCartItem, amount: 1}]
    }
}

