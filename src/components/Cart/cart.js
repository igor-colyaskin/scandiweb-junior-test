import React, {Component} from 'react';
import {ProductInCart} from "../CommonComponents/ProductInCart/product-in-cart";
import {CartCaption} from "./CartCaption/cart-caption";
import {TotalBlock} from "./TotalBlock/total-block";
import {CartButtonBlock} from "./CartButtonBlock/cart-button-block";

export class Cart extends Component {

    render() {
        const {
            productsArray,
            onClickRemove,
            onClickPlusMinus,
            closeMiniCartModal,
            view,
            currentCurrencyNumber,
            currenciesArray
        } = this.props

        const total = productsArray.reduce((prev, product) => {
            const nextPrice = product.productData.prices[currentCurrencyNumber].amount
            return prev + nextPrice * product.amount
        }, 0)

        const isCartButtonBlockVisible = view === 'for-mini-cart' && !!total

        return (
            <div className={`cart-wrapper-${view}`}>
                <CartCaption
                    view={view}
                    itemsAmount={productsArray.length}
                />
                {productsArray.map((product, index) => {
                    const {
                        id: productId,
                        name,
                        brand,
                        attributes: attributesArray,
                        gallery,
                        prices
                    } = product.productData

                    const {
                        cartId,
                        amount,
                        attributes: selectedAttributes
                    } = product

                    const props = {
                        cartId,
                        productId,
                        amount,
                        gallery,
                        brand,
                        name,
                        attributesArray,
                        selectedAttributes,
                        prices,
                        view,
                        onClickRemove,
                        onClickPlusMinus
                    }

                    return <ProductInCart key={index} {...props} />
                })}
                {/*{isTotalBlockVisible &&*/}
                {!!total &&
                <TotalBlock
                    total={total}
                    view={view}
                    currentCurrencyNumber={currentCurrencyNumber}
                    currenciesArray={currenciesArray}
                />
                }
                {isCartButtonBlockVisible &&
                <CartButtonBlock
                    view={view}
                    closeMiniCartModal={closeMiniCartModal}
                />
                }
            </div>)
    }
}
