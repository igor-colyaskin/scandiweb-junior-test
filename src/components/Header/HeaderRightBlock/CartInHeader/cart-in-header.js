import React, {Component} from 'react'

export class CartInHeader extends Component {

    render() {
        const {itemsAmount, onCartIconClick} = this.props

        return <button
            className='cart-in-header-wrapper'
            onClick={onCartIconClick}
        >
            {itemsAmount
                ? <div className='items-in-cart-amount'>{itemsAmount}</div>
                : null}
        </button>
    }
}
