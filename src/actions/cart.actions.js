export const replaceCartWithUpdatedClone = ( payload = []) => ({
    type: 'REPLACE_CART_WITH_UPDATED_CLONE',
    payload
})

export const addProductToCartAction = (
    {
        productData = {},
        attributes = {},
        cartId
    } = {}) => ({
    type: 'ADD_PRODUCT_TO_CART',
    cartItem: {
        cartId,
        productData,
        attributes
    }
})

export const changeAmountOnCartIdAction = (
    cartId = 0,
    value = 0
) => ({
    type: 'CHANGE_AMOUNT_ON_CART_ID',
    cartId,
    value
})

export const removeItemFromCartCartAction = (
    itemId = '') => ({
    type: 'REMOVE_ITEM_FROM_CART',
    itemId
})
