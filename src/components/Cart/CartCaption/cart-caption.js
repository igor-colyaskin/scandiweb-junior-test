import {Component} from "react";
import {CartCaptionWrapper} from "../styled/cart-caption-wrapper";

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
            <CartCaptionWrapper
                className='cart-caption-wrapper'
                view={view}
            >
                {view === 'forBigCart' && 'CART'}
                {view === 'forMiniCart' && textForMiniCart()}
            </CartCaptionWrapper>
        )
    }
}