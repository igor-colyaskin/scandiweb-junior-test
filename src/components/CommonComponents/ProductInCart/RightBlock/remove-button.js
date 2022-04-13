import React, {Component} from 'react'

export class RemoveButton extends Component {

    render() {
        const {onClickRemove, view} = this.props

        return (
            <button className={`remove-button remove-button-${view}`} onClick={onClickRemove}/>
        )
    }
}
