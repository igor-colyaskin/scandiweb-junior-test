import React, {Component} from 'react';
import {LeftBlockWrapper} from "./styled/left-block-wrapper";
import {ProductAttributes} from "../ProductAttributes/product-attributes";
import {ProductTitle} from "../ProductTitle/product-title";
import {ProductPrice} from "../ProductPrice/product-price";

export class LeftBlock extends Component {

    render() {
        const {brand, name, attributesArray, selectedAttributes, prices: productPrices, view} = this.props
        const titleProps = {brand, name, view}
        const priceProps = {productPrices, view}
        const attributesProps = {attributesArray, selectedAttributes, view}

        return (
            <LeftBlockWrapper
                className='left-block-wrapper'
                view={view}
            >
                <ProductTitle {...titleProps} />
                <ProductPrice {...priceProps} />
                <ProductAttributes
                    {...attributesProps}
                    onAttributeClick={() => null}
                />
            </LeftBlockWrapper>
        )
    }
}
