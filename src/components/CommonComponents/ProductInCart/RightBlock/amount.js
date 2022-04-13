import React, {Component} from 'react'

export class Amount extends Component {

    render() {
        const {amount, view} = this.props

        return (
            <div className={`amount-wrapper amount-wrapper-${view}`}>
                {amount}
            </div>
        )
    }
}
