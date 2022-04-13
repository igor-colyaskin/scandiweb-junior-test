import {Component} from "react"
import {connect} from "react-redux"
import {cartSelector, cloneDeepCartSelector} from "../selectors/cart.selector"
import {Cart} from "../components/Cart/cart"
import {replaceCartWithUpdatedClone} from "../actions/cart.actions"
import {currentCurrencyNumberSelector} from "../selectors/current-config.selector"
import {currenciesArraySelector} from "../selectors/general-config..selector"
import {setCartModalVisibility} from "../actions/current-config.actions"
import {changeAmountOnCartId} from "../services/cart-clone-manipulation/change-amount-on-cart-id"
import {removeItemFromCartClone} from "../services/cart-clone-manipulation/remove-item-from-cart-clone"
import {replaceLocalStorageWithUpdatedCart} from "../services/local-storage-manipulation/replace-local-storage-with-updated-cart"

class CartHocRedux extends Component {
    onClickRemove = (itemId) => {
        const {dispatch, cloneDeepCart} = this.props
        const updatedCartClone = removeItemFromCartClone(cloneDeepCart, itemId)

        replaceLocalStorageWithUpdatedCart(updatedCartClone)
        dispatch(replaceCartWithUpdatedClone(updatedCartClone))
    }

    onClickPlusMinus = (itemId, value) => {
        const {dispatch, cloneDeepCart} = this.props
        const updatedCartClone = changeAmountOnCartId(cloneDeepCart, itemId, value)

        replaceLocalStorageWithUpdatedCart(updatedCartClone)
        dispatch(replaceCartWithUpdatedClone(updatedCartClone))
    }

    closeMiniCartModal = () => this.props.dispatch(setCartModalVisibility())

    render() {
        const {
            view,
            currentCart,
            currentCurrencyNumber,
            currenciesArray,
        } = this.props

        return (
            <Cart
                productsArray={currentCart}
                onClickRemove={this.onClickRemove}
                onClickPlusMinus={this.onClickPlusMinus}
                closeMiniCartModal={this.closeMiniCartModal}
                currentCurrencyNumber={currentCurrencyNumber}
                currenciesArray={currenciesArray}
                view={view}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currentCart: cartSelector(state),
        currentCurrencyNumber: currentCurrencyNumberSelector(state),
        currenciesArray: currenciesArraySelector(state),
        cloneDeepCart: cloneDeepCartSelector(state)
    }
}

export default connect(mapStateToProps)(CartHocRedux)