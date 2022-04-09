export const removeItemFromCartClone = (cartClone, itemId) => {
   return cartClone.filter(cartItem => cartItem.cartId !== itemId)
}

