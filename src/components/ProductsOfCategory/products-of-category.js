import React, {Component} from 'react'
import {Link} from "react-router-dom"
import {ProductPrice} from "../CommonComponents/ProductPrice/product-price"
import {ProductTitle} from "../CommonComponents/ProductTitle/product-title"
import {GreenCircleWithCart} from "./GreenCircleWithCart/green-circle-with-cart"

export class ProductsOfCategory extends Component {

    lockClickOnGreenCircle = (event, product) => {
        if (event.target.id === 'green-circle-with-cart') {
            this.props.onGreenCircleClick(product)
            event.preventDefault()
        }
    }

    render() {
        const {products, id} = this.props;
        const view = 'for-product-in-category'

        return (
            <div className='category-wrapper'>
                <div className='category-caption'>{id}</div>
                <div className='category-products'>
                    {products.map((product) => {
                        return (
                            <Link
                                to={`/product/${product.id}`}
                                key={product.id}
                                className={`product-wrapper${product.inStock ? '' : ' not-in-stock'}`}
                                onClick={(event) => this.lockClickOnGreenCircle(event, product)}
                            >
                                <div className='product-image-wrapper'>
                                    <img
                                        src={`${product.gallery[0]}`}
                                        alt={`product ${product.name}}`}
                                    />
                                </div>
                                <ProductTitle
                                    brand={product.brand}
                                    name={product.name}
                                    view={view}/>
                                <ProductPrice
                                    productPrices={product.prices}
                                    view={view}
                                />
                                {(!product.attributes.length && product.inStock) && <GreenCircleWithCart/>}
                                {!product.inStock && <div className='out-of-stock-warning'>OUT OF STOCK</div>}
                            </Link>
                        )
                    })}
                </div>
            </div>
        )
    }
}
