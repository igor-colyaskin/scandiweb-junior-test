import {Component} from "react"
import {graphql} from "@apollo/client/react/hoc"
import {flowRight as compose} from 'lodash'
import {ProductsOfCategory} from "../components/ProductsOfCategory/products-of-category"
import {categoryProducts} from "../queries/categoryProducts.query"
import {connect} from "react-redux"
import {setCategoryAction} from "../actions/current-config.actions"
import {replaceCartWithUpdatedClone} from "../actions/cart.actions"
import {v4 as uuidv4} from "uuid"
import {addProductToCartClone} from "../services/cart-clone-manipulation/add-product-to-cart-clone"
import {cloneDeepCartSelector} from "../selectors/cart.selector"
import {replaceLocalStorageWithUpdatedCart} from "../services/local-storage-manipulation/replace-local-storage-with-updated-cart"

class CategoryHoc extends Component {

    onGreenCircleClick = (productData) => {
        const {dispatch, cloneDeepCart} = this.props
        const attributes = productData.attributes.reduce((acc, attribute) => {
            return {...acc, [attribute.id]: attribute.items[0].id}
        }, {})

        const payload = {
            cartId: uuidv4(),
            productData,
            attributes
        }
        const updatedCartClone = addProductToCartClone(cloneDeepCart, payload)

        replaceLocalStorageWithUpdatedCart(updatedCartClone)
        dispatch(replaceCartWithUpdatedClone(updatedCartClone))
    }

    render() {
        const {
            data,
            id,
            currentCategory,
            categoriesArray,
            dispatch
        } = this.props

        const incomingCategoryNumber = categoriesArray.indexOf(id)
        let warning = false

        let correctedId = id
        if (incomingCategoryNumber === -1) {
            correctedId = 'all'
            warning = true
            dispatch(setCategoryAction({num: 0}))
        } else if (incomingCategoryNumber !== currentCategory) {
            dispatch(setCategoryAction({num: incomingCategoryNumber}))
        }

        if (data.loading) {
            return <div>We are loading your items...</div>
        }
        const productsArray = data.category.products

        if (warning) return <div>Problem, incorrect url</div>
        return <ProductsOfCategory
            products={productsArray}
            id={correctedId}
            onGreenCircleClick={this.onGreenCircleClick}
        />
    }
}

const mapStateToProps = (state) => {
    return {
        currentCategory: state.currentConfig.category,
        categoriesArray: state.generalConfig.categories,
        cloneDeepCart: cloneDeepCartSelector(state)
    }
}

export default compose(connect(mapStateToProps), graphql(categoryProducts, {
    options: props => ({
        variables: {id: props.categoriesArray.indexOf(props.id) !== -1 ? props.id : 'all'},
        fetchPolicy: 'no-cache'
    })
}))(CategoryHoc)