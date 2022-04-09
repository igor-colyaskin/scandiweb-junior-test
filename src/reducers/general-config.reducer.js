const generalConfigReducerDefaultState = {
    categories: [],
    currencies: []
}

export default (state = generalConfigReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_CATEGORIES':
            return {...state, categories: action.categories}
        case 'SET_CURRENCIES':
            return {...state, currencies: action.currencies}
        default:
            return state
    }
}
