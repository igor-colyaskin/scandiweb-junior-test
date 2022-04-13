const generalConfigReducerDefaultState = {
    categories: [],
    currencies: []
}

const generalConfigReducer = (state = generalConfigReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_CATEGORIES':
            return {...state, categories: action.categories}
        case 'SET_CURRENCIES':
            return {...state, currencies: action.currencies}
        default:
            return state
    }
}

export default generalConfigReducer