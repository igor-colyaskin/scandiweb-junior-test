import React, {Component} from 'react'
import {AttributeBodyItem} from "./attribute-body-item"
import {fixCapacityNames} from "../../../../fixtures/fix-capacity-name"

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
            <div className={`attribute-body attribute-body-${view}`}>
                {items.map(item => {
                    return (
                        <AttributeBodyItem
                            key={item.id}
                            attributeId={attributeId}
                            itemId={item.id}
                            attrType={attrType}
                            view={view}
                            onAttributeClick={onAttributeClick}
                            value={(attributeId === 'Capacity' && view === 'for-mini-cart')
                                ? fixCapacityNames[item.value]
                                : item.value}
                            displayValue={item.displayValue}
                            isSelected={selectedItemIndex === item.id}
                        />
                    )
                })}
            </div>
        )
    }
}
