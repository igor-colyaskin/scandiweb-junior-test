import React, {Component} from 'react'

export class ProductTitle extends Component {

    render() {
        const {brand, name, view} = this.props

        return (
            <div className={`product-title-wrapper product-title-wrapper-${view}`}>
                <div  className={`product-brand product-brand-${view}`}>{brand}</div>
                <div  className={`product-name-${view}`}>{name}</div>
            </div>
        )
    }
}
