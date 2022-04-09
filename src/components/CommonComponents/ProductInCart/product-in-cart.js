import React, {Component} from 'react';
import {ProductInCartWrapper} from "./styled/product-in-cart-wrapper";
import {LeftBlock} from "./left-block";
import {RightBlock} from "./RightBlock/right-block";

export class ProductInCart extends Component {
    onClickPlusMinus = (x) => this.props.onClickPlusMinus(this.props.cartId, x)
    onClickRemove = () => this.props.onClickRemove(this.props.cartId)

    render() {
        const {
            amount,
            gallery: galleryPictures,
            brand,
            name,
            attributesArray,
            selectedAttributes,
            prices,
            view
        } = this.props
        const propsForLeftBlock = {
            brand,
            name,
            attributesArray,
            selectedAttributes,
            prices,
            view
        }
        const propsForRightBlock = {
            amount,
            galleryPictures,
            view,
            onClickPlusMinus: this.onClickPlusMinus,
            onClickRemove: this.onClickRemove
        }

        return (
            <ProductInCartWrapper
                className='product-in-cart-wrapper'
                view={view}
            >
                <LeftBlock {...propsForLeftBlock}/>
                <RightBlock {...propsForRightBlock}/>
            </ProductInCartWrapper>
        )
    }
}
