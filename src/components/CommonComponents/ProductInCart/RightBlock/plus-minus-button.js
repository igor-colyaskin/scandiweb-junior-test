import React, {Component} from 'react'

export class PlusMinusButton extends Component {

    render() {
        const {onClickPlusMinus, value, view} = this.props

        return (
            <button className={`
            plus-minus-button 
            plus-minus-button-${view}
            ${value > 0 ? 'plus' : 'minus'}-button 
            `}
                    onClick={() => onClickPlusMinus(value)}>
            </button>
        )
    }
}
