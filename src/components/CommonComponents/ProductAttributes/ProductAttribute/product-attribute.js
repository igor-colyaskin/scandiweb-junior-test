import React, {Component} from 'react'
import {ProductAttributeBody} from "./product-attribute-body"

export class ProductAttribute extends Component {

    render() {
        const {
            name,
            isCaptionVisible,
            attributeId,
            items,
            selectedItemIndex,
            attrType,
            view,
            onAttributeClick
        } = this.props

        return (
            <div className={`attribute-wrapper attribute-wrapper-${view}`}>
                {isCaptionVisible &&
                <div className={`price-caption price-caption-${view}`}>
                    {`${name}:`}
                </div>}
                <ProductAttributeBody
                    attributeId={attributeId}
                    items={items}
                    selectedItemIndex={selectedItemIndex}
                    attrType={attrType}
                    view={view}
                    onAttributeClick={onAttributeClick}
                />
            </div>
        )
    }
}
