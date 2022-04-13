import React, {Component} from 'react'
import {PriceUnits} from "./price-units"

export class ProductPrice extends Component {

    render() {
        const {productPrices, view} = this.props
        const isCaptionVisible = view === 'forProductCard'

        return (
            <div className={`product-price-wrapper-${view}`}>
                {isCaptionVisible &&
                <div className={`price-caption price-caption-${view}`} >
                    PRICE:
                </div>}
                <PriceUnits
                    productPrices={productPrices}
                    view={view}
                />
            </div>

        )
    }
}
