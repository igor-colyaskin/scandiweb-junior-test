const currentConfigReducerDefaultState = {
    currency: 0,
    category: 0,
    isCartModalVisible: false
}

export default (state = currentConfigReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_CURRENCY':
            return {...state, currency: action.currency}
        case 'SET_CATEGORY':
            return {...state, category: action.num}
        case 'SET_CART_MODAL_VISIBILITY':
            const prevVisibility = state.isCartModalVisible
            return {...state, isCartModalVisible: !prevVisibility}
        default:
            return state
    }
}
