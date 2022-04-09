export const changeAmountOnCartId = (cartClone, itemId, value) => {

    return cartClone
        .map(cartItem => {
            if (cartItem.cartId === itemId) {
                return {...cartItem, amount: cartItem.amount + value}
            } else {
                return cartItem
            }
        })
        .filter(cartItem => cartItem.amount > 0)
}

