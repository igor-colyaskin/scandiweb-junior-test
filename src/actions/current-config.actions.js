export const setCurrencyAction = (currency = 0) => ({
    type: 'SET_CURRENCY',
    currency
})

export const setCategoryAction = ({num = 0}) => ({
    type: 'SET_CATEGORY',
    num
})

export const setCartModalVisibility = () => ({
    type: 'SET_CART_MODAL_VISIBILITY'
})
