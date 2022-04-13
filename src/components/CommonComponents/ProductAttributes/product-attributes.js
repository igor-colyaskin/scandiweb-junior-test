import React, {Component} from 'react'
import {ProductAttribute} from "./ProductAttribute/product-attribute"

export class ProductAttributes extends Component {

    render() {
        const {
            attributesArray,
            view,
            selectedAttributes,
            onAttributeClick
        } = this.props

        const isCaptionVisible =
            view === 'for-product-card' ||
            view === 'for-big-cart' ||
            view === 'for-mini-cart'

        return (
            <div className={`product-attributes product-attributes-${view}`}>
                {attributesArray.map(attribute => {
                    return (<ProductAttribute
                        key={attribute.id}
                        attributeId={attribute.id}
                        name={attribute.name}
                        items={attribute.items}
                        selectedItemIndex={selectedAttributes[attribute.id]}
                        attrType={attribute.type}
                        isCaptionVisible={isCaptionVisible}
                        view={view}
                        onAttributeClick={onAttributeClick}
                    />)
                })}
            </div>
        )
    }
}
