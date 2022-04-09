import React, {Component} from 'react';
import {AttributeWrapper} from "../styled/attribute-wrapper";
import {ProductAttributeBody} from "./product-attribute-body";
import {CaptionInProductCard} from "../../CaptionInProductCard/caption-in-product-card";

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
            <AttributeWrapper className='attribute-wrapper' view={view}>
                {isCaptionVisible &&
                <CaptionInProductCard className='price-or-attr-caption' view={view}>
                    {`${name}:`}
                </CaptionInProductCard>}
                <ProductAttributeBody
                    attributeId={attributeId}
                    items={items}
                    selectedItemIndex={selectedItemIndex}
                    attrType={attrType}
                    view={view}
                    onAttributeClick={onAttributeClick}
                />
            </AttributeWrapper>
        )
    }
}
