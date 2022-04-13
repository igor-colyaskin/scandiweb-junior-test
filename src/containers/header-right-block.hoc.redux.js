import {Component} from "react"
import {connect} from "react-redux"
import {currentCurrencyNumberSelector} from "../selectors/current-config.selector"
import {currenciesArraySelector} from "../selectors/general-config..selector"
import {setCartModalVisibility, setCurrencyAction} from "../actions/current-config.actions"
import {iChangeCurrency} from "../index"
import {HeaderRightBlock} from "../components/Header/HeaderRightBlock/header-right-block"
import {amountInCartSelector} from "../selectors/cart.selector"

class HeaderRightBlockHocRedux extends Component {
    onCartIconClick = () => {
        this.props.dispatch(setCartModalVisibility())
    }

    render() {

        const {
            currenciesArray,
            currentCurrencyNumber,
            itemsAmount,
            isCurrencySelectorOpen,
            dispatch
        } = this.props

        const onCurrencyClick = (currencyNumber) => {
            iChangeCurrency(currencyNumber)
            dispatch(setCurrencyAction(currencyNumber))
        }
        return (
            <HeaderRightBlock
                currenciesArray={currenciesArray}
                currentCurrencyNumber={currentCurrencyNumber}
                onCurrencyClick={onCurrencyClick}
                itemsAmount={itemsAmount}
                isCurrencySelectorOpen={isCurrencySelectorOpen}
                onCartIconClick={this.onCartIconClick}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currentCurrencyNumber: currentCurrencyNumberSelector(state),
        currenciesArray: currenciesArraySelector(state),
        itemsAmount: amountInCartSelector(state)
    }
}

export default connect(mapStateToProps)(HeaderRightBlockHocRedux)