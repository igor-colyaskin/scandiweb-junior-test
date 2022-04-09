import React, {Component} from "react";
import {Header} from "../Header/header";
import {Page} from "../Page/page";
import {ModalMiniCart} from "../ModalMiniCart/modal-mini-cart";

export class App extends Component {

    state = {
        isCurrencySelectorOpen: false
    }

    onClick = (event) => {
        const source = event.target

        if (source.classList.contains('custom-currency-selector-arrow')) {
            const prev = this.state.isCurrencySelectorOpen
            this.setState({isCurrencySelectorOpen: !prev})
            return
        }
        if (source.classList.contains('custom-currency-selector-symbol')) return
        if (source.classList.contains('custom-currency-selector-label')) return
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
                {isCartModalVisible && <ModalMiniCart
                    onModalMarginClick={onModalMarginClick}
                />}

            </div>
        )
    }
}
