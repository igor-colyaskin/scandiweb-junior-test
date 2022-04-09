import {cartSelector} from './cart.selector'
import {mockState01} from '../constants/mocks-for-tests/state-01'

test('should return cart array', () => {
    const result = cartSelector(mockState01)
    expect(result).toEqual(mockState01.cart)
})