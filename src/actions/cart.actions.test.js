import {
    addProductToCartAction,
    changeAmountOnCartIdAction,
    removeItemFromCartCartAction
} from './cart.actions'

test('should setup changeAmountOnCartIdAction object', () => {
    const action = changeAmountOnCartIdAction('123qwerty', 5)
    expect(action).toEqual({
        type: 'CHANGE_AMOUNT_ON_CART_ID',
        cartId: '123qwerty',
        value: 5
    })
})

test('should setup addProductToCartAction object with provided values', () => {
    const incomingData = {
        productData: {a: 'yes', b: 15, c: true},
        attributes: {color: 'red', size: 'large'}
    }
    const action = addProductToCartAction(incomingData)
    expect(action).toEqual({
        type: 'ADD_PRODUCT_TO_CART',
        cartItem: {cartId: expect.any(String), ...incomingData}
    })
})

test('should setup addProductToCartAction object with default values', () => {
    const action = addProductToCartAction()
    expect(action).toEqual({
        type: 'ADD_PRODUCT_TO_CART',
        cartItem: {
            cartId: expect.any(String),
            productData: {},
            attributes: {}
        }
    })
})

test('should setup removeItemFromCartCartAction object with provided values', () => {
    const action = removeItemFromCartCartAction('abc')
    expect(action).toEqual({
        type: 'REMOVE_ITEM_FROM_CART',
        itemId: 'abc'
    })
})

test('should setup removeItemFromCartCartAction object with default values', () => {
    const action = removeItemFromCartCartAction()
    expect(action).toEqual({
        type: 'REMOVE_ITEM_FROM_CART',
        itemId: ''
    })
})