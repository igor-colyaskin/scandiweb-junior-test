import React, {Component} from 'react';
import {ProductPriceWrapper} from "./styled/product-price-wrapper";
import {CaptionInProductCard} from "../CaptionInProductCard/caption-in-product-card";
import {PriceUnits} from "./price-units";

export class ProductPrice extends Component {

    render() {
        const {productPrices, view} = this.props
        const isCaptionVisible = view === 'forProductCard'

        return (
            <ProductPriceWrapper
                className='product-price-wrapper'
                view={view}
            >
                {isCaptionVisible &&
                <CaptionInProductCard view={view}>
                    PRICE:
                </CaptionInProductCard>}
                <PriceUnits
                    productPrices={productPrices}
                    view={view}
                />
            </ProductPriceWrapper>

        )
    }
}
