import React, {Component} from 'react'
import {PlusMinusBlock} from "./plus-minus-block"
import {Gallery} from "../../Gallery/gallery"
import {galleryPropsBigCart, galleryPropsMiniCart} from "../../../../constants/gallery-props"

export class RightBlock extends Component {

    render() {
        const {amount, galleryPictures, view, onClickPlusMinus, onClickRemove} = this.props

        const galleryProps = view === 'for-big-cart' ? galleryPropsBigCart : galleryPropsMiniCart

        const plusMinusProps = {
            amount,
            view,
            onClickPlusMinus,
            onClickRemove
        }

        return (
            <div className={`right-block-wrapper right-block-wrapper-${view}`}>
                <PlusMinusBlock  {...plusMinusProps} />
                <Gallery {...galleryProps} galleryPictures={galleryPictures}/>
            </div>
        )
    }
}
