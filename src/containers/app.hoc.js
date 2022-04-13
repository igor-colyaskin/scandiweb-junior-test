import {Component} from "react"
import {graphql} from "@apollo/client/react/hoc"
import {flowRight as compose} from 'lodash'
import {allCategoriesAndAllCurrencies} from "../queries/allCategoriesAndAllCurrencies.query"
import {App} from "../components/App/app"
import {connect} from "react-redux"
import {setCategoriesAction, setCurrenciesAction} from "../actions/general-config.actions"
import {setCartModalVisibility} from "../actions/current-config.actions"
import {replaceCartWithUpdatedClone} from "../actions/cart.actions"

class AppHoc extends Component {
    onModalMarginClick = (e) => {
        if(e.target.id === 'modal-mini-cart-wrapper') {
            this.props.dispatch(setCartModalVisibility())
        }
    }
    componentDidMount() {
        const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart')) || []
        this.props.dispatch(replaceCartWithUpdatedClone(cartFromLocalStorage))
    }

    render() {
        const {data, isCartModalVisible, dispatch} = this.props;

        if (data.loading) {
            return <div>We are loading your items...</div>
        }

        dispatch(setCategoriesAction({
            categories: data.categories.map(category => category.name)
        }))
        dispatch(setCurrenciesAction({
            currencies: data.currencies.map(currency => ({
                label: currency.label,
                symbol: currency.symbol
            }))
        }))
        return <App
            initialCategory={data.categories[0].name}
            isCartModalVisible={isCartModalVisible}
            onModalMarginClick={this.onModalMarginClick}
        />
    }
}

const mapStateToProps = (state) => {
    return {
        isCartModalVisible: state.currentConfig.isCartModalVisible
    }
}

export default compose(connect(mapStateToProps), graphql(allCategoriesAndAllCurrencies))(AppHoc)