import {gql} from "@apollo/client"

export const ProductData = gql`
    query ProductData ($id: String!) {
       product(id: $id) {
          id
          brand
          name
          category
          description
          gallery
          inStock
          prices {
            currency {
              label
              symbol
            }
            amount
          }
          attributes {
            id
            name
            type
            items {
                displayValue
                id
                value
            }
          }
          
       }
    }
`