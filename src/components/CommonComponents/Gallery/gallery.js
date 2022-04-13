import React, {Component} from 'react'
import {
    GalleryWindow,
    GalleryStrip,
    GalleryFrame,
    PointerLeft,
    PointerRight,
    PointerUp,
    PointerDown
} from "./styled"

export class Gallery extends Component {
    state = {
        shift: 0
    }

    clickPointer = (diff) => {
        const prevShift = this.state.shift
        this.setState({shift: prevShift + diff})
    }

    render() {

        const {
            galleryPictures,
            windowWidth,
            windowHeight,
            shift = 0,
            frameHeight,
            frameWidth,
            gap,
            margin,
            isVertical,
            frameCursorPointer,
            onClickPointer = () => null,
            activeItemNumber,
            isGallerySelfManaged,
            onClickFrame = (x) => x
        } = this.props;

        const currentShift = isGallerySelfManaged ? this.state.shift : shift

        const isRightDownPointerVisible = currentShift > 0
        const isLeftUpPointerVisible = isVertical ?
            ((galleryPictures.length - currentShift) * (frameHeight + gap) - gap) > windowHeight :
            ((galleryPictures.length - currentShift) * (frameWidth + gap) - gap) > windowWidth

        const propsPointer = {windowHeight, windowWidth}
        const onClick = (x) => {
            isGallerySelfManaged ? this.clickPointer(x) : onClickPointer(x)
        }

        return (
            <GalleryWindow
                windowHeight={windowHeight}
                windowWidth={windowWidth}
                margin={margin}
            >
                {isLeftUpPointerVisible && (isVertical ?
                    <PointerUp {...propsPointer} onClick={() => onClick(1)}/> :
                    <PointerLeft {...propsPointer} onClick={() => onClick(1)}/>)
                }
                {isRightDownPointerVisible && (isVertical ?
                    <PointerDown {...propsPointer} onClick={() => onClick(-1)}/> :
                    <PointerRight {...propsPointer} onClick={() => onClick(-1)}/>)
                }
                <GalleryStrip
                    shift={currentShift * ((isVertical ? frameHeight : frameWidth) + gap)}
                    frameWidth={frameWidth}
                    frameHeight={frameHeight}
                    gap={gap}
                    frameNumber={galleryPictures.length}
                    isVertical={isVertical}
                >
                    {galleryPictures.map((picture, index) => {
                        return (
                            <GalleryFrame
                                key={index}
                                className='gallery-frame'
                                frameHeight={frameHeight}
                                frameWidth={frameWidth}
                                gap={gap}
                                isVertical={isVertical}
                                active={activeItemNumber === index && galleryPictures.length > 1}
                                onClick={() => onClickFrame(index)}
                            >
                                <img
                                    src={picture}
                                    className={`gallery-img 
                                        ${frameCursorPointer
                                        ? 'gallery-img-cursor-pointer'
                                        : 'gallery-img-cursor-default'}`}
                                    alt={`large view number ${index} of product`}
                                />
                            </GalleryFrame>
                        )
                    })}
                </GalleryStrip>
            </GalleryWindow>
        )
    }
}
