import React, {Component} from 'react'
import {AttributeBodyItemWrapper} from "../styled/attribute-body-item-wrapper"

export class AttributeBodyItem extends Component {


    render() {
        const {
            value,
            attributeId,
            itemId,
            attrType,
            isSelected,
            view,
            onAttributeClick
        } = this.props

        return (
            <AttributeBodyItemWrapper
                className='attribute-body-item'
                attrType={attrType}
                value={value}
                isSelected={isSelected}
                view={view}
                onClick={() => onAttributeClick(attributeId, itemId)}
            >
                {!(attrType === 'swatch') && value}
            </AttributeBodyItemWrapper>
        )
    }
}
