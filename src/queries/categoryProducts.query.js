import {gql} from "@apollo/client"

export const categoryProducts = gql`
    query CategoryProducts ($id: String!) {
        category(input: {title: $id}) {
            products {
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
    }
`
