import React, {Component} from 'react'
import {Gallery} from "../CommonComponents/Gallery/gallery"
import ProductCardInfoHocRedux from "../../containers/product-card-info.hoc.redux"
import {largeGalleryParameters, smallGalleryParameters} from "../../constants/gallery-props"

const {windowHeight, gap, frameHeight} = smallGalleryParameters
const framesInWidowSmallGallery = (windowHeight + gap) / (frameHeight + gap)

export class ProductCard extends Component {
    state = {
        smallGalleryShift: 0,
        largeGalleryShift: 0
    }

    onClickPointerSmallGallery = (diff) => {
        const prevShift = this.state.smallGalleryShift
        this.setState({smallGalleryShift: prevShift + diff})
    }

    onClickPointerLargeGallery = (diff) => {
        const prevLargeGalleryShift = this.state.largeGalleryShift
        const prevSmallGalleryShift = this.state.smallGalleryShift

        const newActiveItem = prevLargeGalleryShift + diff

        const firstFrameInSmallWindow = this.state.smallGalleryShift
        const lastFrameInSmallWindow = firstFrameInSmallWindow + framesInWidowSmallGallery - 1

        let toMoveSmall = 0;
        if (newActiveItem < firstFrameInSmallWindow) {
            toMoveSmall = newActiveItem - firstFrameInSmallWindow
        } else if (newActiveItem > lastFrameInSmallWindow) {
            toMoveSmall = newActiveItem - lastFrameInSmallWindow
        }

        this.setState({
            largeGalleryShift: newActiveItem,
            smallGalleryShift: prevSmallGalleryShift + toMoveSmall})
    }

    onClickFrameSmallGallery = (index) => {
        this.setState({largeGalleryShift: index})
    }

    render() {
        const {gallery} = this.props.productData;

        return (
            <div className='product-card-wrapper'>
                <Gallery
                    galleryPictures={gallery}
                    {...smallGalleryParameters}
                    shift={this.state.smallGalleryShift}
                    isVertical={true}
                    frameCursorPointer={gallery.length > 1}
                    onClickPointer={this.onClickPointerSmallGallery}
                    onClickFrame={this.onClickFrameSmallGallery}
                    activeItemNumber={this.state.largeGalleryShift}
                    isGallerySelfManaged={false}
                />
                <Gallery
                    galleryPictures={gallery}
                    {...largeGalleryParameters}
                    shift={this.state.largeGalleryShift}
                    isVertical={false}
                    frameCursorPointer={false}
                    onClickPointer={this.onClickPointerLargeGallery}
                    isGallerySelfManaged={false}
                />
                <ProductCardInfoHocRedux productData={this.props.productData}/>
            </div>
        )
    }
}
