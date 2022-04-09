import React, {Component} from 'react';
import {PlusMinusBlockWrapper} from "../styled/plus-minus-block-wrapper";
import {PlusMinusButton} from "./plus-minus-button";
import {Amount} from "./amount";
import {RemoveButton} from "./remove-button";

export class PlusMinusBlock extends Component {

    render() {
        const {amount, view, onClickPlusMinus, onClickRemove} = this.props

        return (
            <PlusMinusBlockWrapper view={view}>
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
            </PlusMinusBlockWrapper>
        )
    }
}
