import {Component} from "react"
import {graphql} from "@apollo/client/react/hoc"
import {ProductData} from "../queries/queryProductData"
import {ProductCard} from "../components/ProductCard/product-card"

class ProductHocApollo extends Component {

    render() {
        const data = this.props.data;

        if (data.loading) {
            return <div>We are loading your items...</div>
        }
        const productData = data.product

        return <ProductCard productData={productData}/>
    }
}

export default graphql(ProductData, {
    options: props => ({
            variables: {id: props.id}
        }
    )
})(ProductHocApollo)