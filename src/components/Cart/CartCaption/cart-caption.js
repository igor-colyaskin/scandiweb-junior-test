import {Component} from "react"

export class CartCaption extends Component {

    render() {
        const {view, itemsAmount} = this.props
        const textForMiniCart = () => {
            return (
                <span>
                <span style={{'fontWeight': '700'}}>My Bag, </span>
                    {`${itemsAmount} item${itemsAmount !== 1 ? 's' : ''}`}
                 </span>
            )
        }

        return (
            <div className={`cart-caption-wrapper cart-caption-wrapper-${view}`}>
                {view === 'for-big-cart' && 'CART'}
                {view === 'for-mini-cart' && textForMiniCart()}
            </div>
        )
    }
}