import React, {Component} from 'react';
import {AmountWrapper} from "../styled/amount-wrapper";

export class Amount extends Component {

    render() {
        const {amount, view} = this.props

        return (
            <AmountWrapper view={view}>
                {amount}
            </AmountWrapper>
        )
    }
}
