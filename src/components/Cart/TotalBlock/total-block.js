import React, {Component} from 'react'
import {
    TotalBlockAmountWrapper,
    TotalBlockCaptionWrapper,
    TotalBlockWrapper
} from "../styled/total-block-wrapper";
import {getLocalizedPrice} from "../../../services/get-localized-price-with-currency-label";

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
            <TotalBlockWrapper
                className='total-block-wrapper'
                view={view}
            >
                <TotalBlockCaptionWrapper view={view}>Total</TotalBlockCaptionWrapper>
                <TotalBlockAmountWrapper
                    view={view}
                >
                    {`${getLocalizedPrice(total, label)}`}
                </TotalBlockAmountWrapper>

            </TotalBlockWrapper>)
    }
}
