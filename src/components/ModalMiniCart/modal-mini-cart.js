import {Component} from "react"

export class ModalMiniCart extends Component {
    onModalMarginClick = this.props.onModalMarginClick

    render() {

        return (
            <div
                id='modal-mini-cart-wrapper'
                className='modal-mini-cart-wrapper'
                onClick={this.onModalMarginClick}
            >
                {/*<CartHocRedux*/}
                {/*    view='for-mini-cart'*/}
                {/*/>*/}
            </div>
        )
    }
}