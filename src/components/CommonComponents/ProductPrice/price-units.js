import React, {Component} from 'react';
import {PriceUnitsWrapper} from "./styled/price-units-wrapper";
import {getLocalizedPrice} from "../../../services/get-localized-price-with-currency-label";

export class PriceUnits extends Component {

    render() {
        const {productPrices, view} = this.props

        return (
            <PriceUnitsWrapper view={view}>
                {productPrices.map(({amount, currency}, index) => {
                    return (
                        <div key={amount} className={`price-unit-wrapper price-unit-${index}`}>
                            {getLocalizedPrice(amount, currency.label)}
                        </div>
                    )
                })}
            </PriceUnitsWrapper>
        )
    }
}
