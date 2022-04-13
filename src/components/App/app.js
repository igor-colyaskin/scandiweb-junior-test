import React, {Component} from "react"
import {Header} from "../Header/header"
import {Page} from "../Page/page"
import {ModalMiniCart} from "../ModalMiniCart/modal-mini-cart"
import CartHocRedux from "../../containers/cart.hoc.redux";

export class App extends Component {

    state = {
        isCurrencySelectorOpen: false
    }

    onClick = (event) => {
        const source = event.target

        if (source.classList.contains('custom-currency-selector-arrow') ||
            source.classList.contains('custom-current-currency')) {
            const prev = this.state.isCurrencySelectorOpen
            this.setState({isCurrencySelectorOpen: !prev})
            return
        }
        if (!this.state.isCurrencySelectorOpen) return
        this.setState({isCurrencySelectorOpen: false})
    }

    render() {
        const {
            isCartModalVisible,
            onModalMarginClick
        } = this.props

        return (
            <div
                className='app-wrapper'
                onClick={this.onClick}>
                <Header
                    isCurrencySelectorOpen={this.state.isCurrencySelectorOpen}
                />
                <Page {...this.props}/>
                {isCartModalVisible && <ModalMiniCart onModalMarginClick={onModalMarginClick}/>}
                {isCartModalVisible && <CartHocRedux view='for-mini-cart'/> }
            </div>
        )
    }
}
