import React, {Component} from 'react';
import {AttributeBodyWrapper} from "../styled/attribute-body-wrapper";
import {AttributeBodyItem} from "./attribute-body-item";
import {fixCapacityNames} from "../../../../fixtures/fix-capacity-name";

export class ProductAttributeBody extends Component {

    render() {
        const {
            items,
            selectedItemIndex,
            attributeId,
            attrType,
            view,
            onAttributeClick
        } = this.props

        return (
            <AttributeBodyWrapper
                className='attribute-body-wrapper'
                view={view}
            >
                {items.map(item => {
                    return (
                        <AttributeBodyItem
                            key={item.id}
                            attributeId={attributeId}
                            itemId={item.id}
                            attrType={attrType}
                            view={view}
                            onAttributeClick={onAttributeClick}
                            value={(attributeId === 'Capacity' && view === 'forMiniCart')
                                ? fixCapacityNames[item.value]
                                : item.value}
                            displayValue={item.displayValue}
                            isSelected={selectedItemIndex === item.id}
                        />
                    )
                })}
            </AttributeBodyWrapper>
        )
    }
}
