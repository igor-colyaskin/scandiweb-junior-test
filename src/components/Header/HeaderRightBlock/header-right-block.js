import React, {Component} from 'react'
import {CartInHeader} from "./CartInHeader/cart-in-header"
import {CustomCurrencySelector} from "./CustomCurrencySelector/custom-currency-selector"

export class HeaderRightBlock extends Component {

    render() {
        const {
            currenciesArray,
            currentCurrencyNumber,
            onCurrencyClick,
            onCartIconClick,
            itemsAmount,
            isCurrencySelectorOpen
        } = this.props

        return (
            <div className='header-right-block-wrapper'>
                <div className='theme-wrapper'/>
                <CustomCurrencySelector
                    currenciesArray={currenciesArray}
                    currentCurrencyNumber={currentCurrencyNumber}
                    onCurrencyClick={onCurrencyClick}
                    isCurrencySelectorOpen={isCurrencySelectorOpen}
                />
                <CartInHeader
                    itemsAmount={itemsAmount}
                    onCartIconClick={onCartIconClick}
                />
            </div>
        )
    }
}
