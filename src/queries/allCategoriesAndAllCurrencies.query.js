import {gql} from "@apollo/client"

export const allCategoriesAndAllCurrencies = gql`
    query AllCategories {
        categories {
            name
        }
        currencies {
            label
            symbol
        }
    }
`