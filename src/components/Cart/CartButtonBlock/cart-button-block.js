import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {CartButtonBlockWrapper} from "./styled/cart-button-block-wrapper";

export class CartButtonBlock extends Component {

    render() {

        const {view, closeMiniCartModal} = this.props

        return (
            <CartButtonBlockWrapper
                className='button-block-wrapper'
                view={view}
            >
                <Link
                    to='/cart'
                    className='cart-button-view-bag'
                    onClick={closeMiniCartModal}
                >VIEW BAG</Link>
                <Link
                    to='/checkout-page'
                    className='cart-button-check-out'
                    onClick={closeMiniCartModal}
                >CHECK OUT</Link>
            </CartButtonBlockWrapper>
        )
    }
}
