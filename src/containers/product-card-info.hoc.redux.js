import {Component} from "react"
import {connect} from "react-redux"
import {ProductCardInfo} from "../components/ProductCard/ProductCardInfo/product-card-info"
import {replaceCartWithUpdatedClone} from "../actions/cart.actions"
import {v4 as uuidv4} from "uuid"
import {cloneDeepCartSelector} from "../selectors/cart.selector"
import {addProductToCartClone} from "../services/cart-clone-manipulation/add-product-to-cart-clone"
import {replaceLocalStorageWithUpdatedCart} from "../services/local-storage-manipulation/replace-local-storage-with-updated-cart"

class ProductCardInfoHocRedux extends Component {

    state = {}

    updateState = (obj) => this.setState(obj)

    componentDidMount() {
        const {attributes} = this.props.productData
        this.updateState(attributes
            .reduce((a, attribute) => ({...a, [attribute.name]: attribute.items[0].id}), {}))
    }

    onAttributeClick = (attributeId, itemId) => {
        this.updateState({[attributeId]: itemId})
    }

    onButtonAddClick = () => {
        const {dispatch, productData, cloneDeepCart} = this.props
        const payload = {
            cartId: uuidv4(),
            productData,
            attributes: this.state
        }
        const updatedCartClone = addProductToCartClone(cloneDeepCart, payload)
        replaceLocalStorageWithUpdatedCart(updatedCartClone)
        dispatch(replaceCartWithUpdatedClone(updatedCartClone))
    }

    render() {

        return (
            <ProductCardInfo
                {...this.props.productData}
                onAttributeClick={this.onAttributeClick}
                onButtonAddClick={this.onButtonAddClick}
                selectedAttributes={this.state}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currentState: state,
        cloneDeepCart: cloneDeepCartSelector(state)
    }
}

export default connect(mapStateToProps)(ProductCardInfoHocRedux)