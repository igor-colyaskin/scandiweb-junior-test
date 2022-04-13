import React, {Component} from 'react'
import {PlusMinusButton} from "./plus-minus-button"
import {Amount} from "./amount"
import {RemoveButton} from "./remove-button"

export class PlusMinusBlock extends Component {

    render() {
        const {amount, view, onClickPlusMinus, onClickRemove} = this.props

        return (
            <div className={`plus-minus-block-wrapper plus-minus-block-wrapper-${view}`} >
                <PlusMinusButton
                    value={1}
                    view={view}
                    onClickPlusMinus={onClickPlusMinus}
                />
                <Amount
                    amount={amount}
                    view={view}/>
                <PlusMinusButton
                    value={-1}
                    view={view}
                    onClickPlusMinus={onClickPlusMinus}
                />
                <RemoveButton
                    view={view}
                    onClickRemove={onClickRemove}/>
            </div>
        )
    }
}
