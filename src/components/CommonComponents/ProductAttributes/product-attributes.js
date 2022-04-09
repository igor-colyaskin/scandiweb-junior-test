import React, {Component} from 'react';
import {ProductAttributesWrapper} from "./styled/product-attributes-wrapper";
import {ProductAttribute} from "./ProductAttribute/product-attribute";

export class ProductAttributes extends Component {

    render() {
        const {
            attributesArray,
            view,
            selectedAttributes,
            onAttributeClick
        } = this.props

        const isCaptionVisible =
            view === 'forProductCard' ||
            view === 'forBigCart' ||
            view === 'forMiniCart'

        return (
            <ProductAttributesWrapper className='product-attributes-wrapper' view={view}>
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
            </ProductAttributesWrapper>
        )
    }
}
