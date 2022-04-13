import cartReducer from './cart.reducer'
import
{
    mockState01,
    productDataItem0,
    attributesItem0,
    productDataItem1,
    attributesItem1
} from "../constants/mocks-for-tests/state-01"
import {addProductToCartAction} from "../actions/cart.actions"

test('should setup new cart object at initialization', () => {
    const cart = cartReducer(undefined, {type: '@@INIT'})
    expect(cart).toEqual([])
})

test('should add a new cart item into a empty cart', () => {
    const itemData = mockState01.cart[0]
    const cart = cartReducer([], addProductToCartAction(
        {productData: productDataItem0, attributes: attributesItem0}))
    expect(cart).toEqual([{...itemData, cartId: expect.any(String), amount: 1}])
})

test('should increment amount in cart item when adding the same product', () => {
    const itemData = mockState01.cart[0] // here amount is 1
    const initialCart = [itemData]
    const cart = cartReducer(initialCart, addProductToCartAction(
        {productData: productDataItem0, attributes: attributesItem0}))
    expect(cart[0].amount).toBe(2)
})

test('should add a new item into cart with amount 1 ' +
    'if a product with the same id, but other attributes is provided', () => {
    const itemData = mockState01.cart[0]
    const initialCart = [itemData]

    const cart = cartReducer(initialCart, addProductToCartAction(
        {productData: productDataItem1, attributes: attributesItem1}))
    expect(cart[1].amount).toBe(1)
})