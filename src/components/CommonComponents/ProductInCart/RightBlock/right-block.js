import React, {Component} from 'react';
import {RightBlockWrapper} from "../styled/right-block-wrapper";
import {PlusMinusBlock} from "./plus-minus-block";
import {Gallery} from "../../Gallery/gallery";
import {galleryPropsBigCart, galleryPropsMiniCart} from "../../../../constants/gallery-props";

export class RightBlock extends Component {

    render() {
        const {amount, galleryPictures, view, onClickPlusMinus, onClickRemove} = this.props

        const galleryProps = view === 'forBigCart' ? galleryPropsBigCart : galleryPropsMiniCart

        const plusMinusProps = {
            amount,
            view,
            onClickPlusMinus,
            onClickRemove
        }

        return (
            <RightBlockWrapper
                className='right-block-wrapper'
                view={view}
            >
                <PlusMinusBlock  {...plusMinusProps} />
                <Gallery {...galleryProps} galleryPictures={galleryPictures} />
            </RightBlockWrapper>
        )
    }
}
