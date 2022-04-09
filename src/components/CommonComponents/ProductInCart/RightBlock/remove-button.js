import React, {Component} from 'react';
import {RemoveButtonWrapper} from "../styled/remove-button-wrapper";

export class RemoveButton extends Component {

    render() {
        const {onClickRemove, view} = this.props

        return (
            <RemoveButtonWrapper view={view} onClick={onClickRemove}/>
        )
    }
}
