import React, {Component} from 'react'
import {Link} from "react-router-dom"

export class CartButtonBlock extends Component {

    render() {

        const {view, closeMiniCartModal} = this.props

        return (
            <div className={`button-block-wrapper-${view}`}>
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
            </div>
        )
    }
}
