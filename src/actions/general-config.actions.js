export const setCategoriesAction = ({categories = []}) => ({
    type: 'SET_CATEGORIES',
    categories
})

export const setCurrenciesAction = ({currencies = []}) => ({
    type: 'SET_CURRENCIES',
    currencies
})
