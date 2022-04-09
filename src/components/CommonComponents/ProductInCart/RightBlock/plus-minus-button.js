import React, {Component} from 'react';
import {PlusMinusButtonWrapper} from "../styled/plus-minus-button-wrapper";

export class PlusMinusButton extends Component {

    render() {
        const {onClickPlusMinus, value, view} = this.props

        return (
            <PlusMinusButtonWrapper
                view={view}
                isPlus={value > 0}
                onClick={() => onClickPlusMinus(value)}>
            </PlusMinusButtonWrapper>
        )
    }
}
