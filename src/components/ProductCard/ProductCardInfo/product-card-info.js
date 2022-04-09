import React, {Component} from 'react';
import {ProductTitle} from "../../CommonComponents/ProductTitle/product-title";
import {ProductAttributes} from "../../CommonComponents/ProductAttributes/product-attributes";
import {ProductPrice} from "../../CommonComponents/ProductPrice/product-price";
import {ProductDescription} from "./ProductDescription/product-description";

export class ProductCardInfo extends Component {

    render() {
        const {
            brand,
            name,
            attributes,
            prices,
            description,
            selectedAttributes,
            onAttributeClick,
            onButtonAddClick
        } = this.props
        const view = 'forProductCard';

        return (
            <div className='product-card-info-wrapper'>
                <ProductTitle brand={brand} name={name} view='forProductCard'/>
                <ProductAttributes
                    attributesArray={attributes}
                    view={view}
                    onAttributeClick={onAttributeClick}
                    selectedAttributes={selectedAttributes}
                />
                <ProductPrice
                    productPrices={prices}
                    view={view}
                />
                <button
                    className='add-to-cart-button'
                    onClick={onButtonAddClick}
                >
                    ADD TO CART
                </button>
                <ProductDescription
                    description={description}
                />
            </div>
        )
    }
}
