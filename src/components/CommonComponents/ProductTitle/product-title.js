import React, {Component} from 'react';
import {ProductTitleWrapper} from "./styled/product-title-wrapper";
import {ProductBrand} from "./styled/product-brand";
import {ProductName} from "./styled/product-name";

export class ProductTitle extends Component {

    render() {
        const {brand, name, view} = this.props

        return (
            <ProductTitleWrapper className='product-title-wrapper' view={view}>
                <ProductBrand view={view}>{brand}</ProductBrand>
                <ProductName view={view}>{name}</ProductName>
            </ProductTitleWrapper>
        )
    }
}
