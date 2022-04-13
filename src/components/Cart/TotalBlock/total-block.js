import React, {Component} from 'react'
import {getLocalizedPrice} from "../../../services/get-localized-price-with-currency-label"

export class TotalBlock extends Component {

    render() {
        const {
            total,
            view,
            currentCurrencyNumber,
            currenciesArray
        } = this.props

        const {label} = currenciesArray[currentCurrencyNumber]

        return (
            <div className={`total-block-wrapper total-block-wrapper-${view}`}>
                <div className={`total-block-caption-wrapper-${view}`}>Total</div>
                <div className={`total-block-amount-wrapper total-block-amount-wrapper-${view}`}>
                    {`${getLocalizedPrice(total, label)}`}
                </div>
            </div>)
    }
}
