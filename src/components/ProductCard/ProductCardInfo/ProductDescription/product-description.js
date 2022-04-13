import React, {Component} from 'react'
import {DescriptionWrapper} from "./styled/description-wrapper"
import {Markup} from "interweave";

export class ProductDescription extends Component {

    state = {
        descriptionHeight: 0,
        wrapperHeight: 0,
        wrapperToTop: 0,
        isDescriptionWrapperCollapsed: true
    };
    descriptionRef = React.createRef();
    wrapperRef = React.createRef();

    doSpread = () => this.setState({isDescriptionWrapperCollapsed: false})
    doCollapse = () => this.setState({isDescriptionWrapperCollapsed: true})

    componentDidMount() {
        this.setState({
            descriptionHeight: this.descriptionRef.current.clientHeight,
            wrapperToTop: this.wrapperRef.current.offsetTop
        });
    }

    render() {
        const {description} = this.props
        const isTextOverflow = (511 - this.state.wrapperToTop - 40) < this.state.descriptionHeight

        return (
            <DescriptionWrapper
                ref={this.wrapperRef}
                className='description-wrapper'
                height={511 - this.state.wrapperToTop}
                isDescriptionWrapperCollapsed={this.state.isDescriptionWrapperCollapsed}
            >
                <div className='expand-description'>
                    {(isTextOverflow && this.state.isDescriptionWrapperCollapsed) &&
                    <button className='expand-button' onClick={this.doSpread}>
                        expand description  &nbsp;<img src={"data:image/svg+xml,%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 512 512' style='enable-background:new 0 0 512 512;' xml:space='preserve'%3E%3Cstyle type='text/css'%3E .st0%7Bfill-rule:evenodd;clip-rule:evenodd;%7D%0A%3C/style%3E%3Cg%3E%3Cpath class='st0' d='M36.6,256c0-10.1,8.2-18.3,18.3-18.3h402.2c10.1,0,18.3,8.2,18.3,18.3c0,10.1-8.2,18.3-18.3,18.3H54.9 C44.8,274.3,36.6,266.1,36.6,256z M256,201.2c10.1,0,18.3-8.2,18.3-18.3V18.3C274.3,8.2,266.1,0,256,0c-10.1,0-18.3,8.2-18.3,18.3 v164.5C237.7,193,245.9,201.2,256,201.2z'/%3E%3Cpath class='st0' d='M342.1,104.4c7.1-7.1,7.2-18.7,0-25.9l0,0L269,5.4c-7.1-7.1-18.7-7.2-25.9,0l0,0l-73.1,73.1 c-7.1,7.2-7.1,18.7,0,25.9c7.2,7.1,18.7,7.1,25.9,0L256,44.2l60.2,60.2C323.3,111.5,334.9,111.6,342.1,104.4L342.1,104.4z M256,310.8c10.1,0,18.3,8.2,18.3,18.3v164.5c0,10.1-8.2,18.3-18.3,18.3c-10.1,0-18.3-8.2-18.3-18.3V329.1 C237.7,319,245.9,310.8,256,310.8z'/%3E%3Cpath class='st0' d='M342.1,407.6c7.1,7.1,7.2,18.7,0,25.9l0,0L269,506.6c-7.1,7.1-18.7,7.2-25.9,0l0,0l-73.1-73.1 c-7.1-7.2-7.1-18.7,0-25.9c7.2-7.1,18.7-7.1,25.9,0l60.2,60.2l60.2-60.2C323.3,400.5,334.9,400.4,342.1,407.6L342.1,407.6z'/%3E%3C/g%3E%3C/svg%3E"} alt='expand icon'/>
                    </button>
                    }
                    {(isTextOverflow && !this.state.isDescriptionWrapperCollapsed) &&
                    <button className='collapse-button' onClick={this.doCollapse}>
                        collapse description  &nbsp;<img src={"data:image/svg+xml,%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 512 512' style='enable-background:new 0 0 512 512;' xml:space='preserve'%3E%3Cstyle type='text/css'%3E .st0%7Bfill-rule:evenodd;clip-rule:evenodd;%7D%0A%3C/style%3E%3Cg%3E%3Cpath class='st0' d='M36.6,256c0-10.1,8.2-18.3,18.3-18.3h402.3c10.1,0,18.3,8.2,18.3,18.3s-8.2,18.3-18.3,18.3H54.9 C44.8,274.3,36.6,266.1,36.6,256z M256,0c10.1,0,18.3,8.2,18.3,18.3v164.6c0,10.1-8.2,18.3-18.3,18.3s-18.3-8.2-18.3-18.3V18.3 C237.7,8.2,245.9,0,256,0z'/%3E%3Cpath class='st0' d='M342.1,96.8c7.1,7.1,7.2,18.7,0,25.9l0,0L269,195.8c-7.1,7.1-18.7,7.2-25.9,0l0,0l-73.1-73.1 c-7.1-7.2-7.1-18.7,0-25.9c7.2-7.1,18.7-7.1,25.9,0L256,157l60.2-60.2C323.3,89.6,334.9,89.6,342.1,96.8L342.1,96.8z M256,512 c10.1,0,18.3-8.2,18.3-18.3V329.1c0-10.1-8.2-18.3-18.3-18.3s-18.3,8.2-18.3,18.3v164.6C237.7,503.8,245.9,512,256,512z'/%3E%3Cpath class='st0' d='M342.1,415.2c7.1-7.1,7.2-18.7,0-25.9l0,0L269,316.2c-7.1-7.1-18.7-7.2-25.9,0l0,0l-73.1,73.1 c-7.1,7.2-7.1,18.7,0,25.9c7.2,7.1,18.7,7.1,25.9,0L256,355l60.2,60.2C323.3,422.4,334.9,422.4,342.1,415.2L342.1,415.2z'/%3E%3C/g%3E%3C/svg%3E"} alt='collapse icon'/>
                    </button>
                    }
                </div>
                <div
                    ref={this.descriptionRef}
                    className='product-description'
                >
                   <Markup content={description} noWrap={true}/>
                </div>
                <div className='collapse-description'>
                    {(isTextOverflow && !this.state.isDescriptionWrapperCollapsed) &&
                    <button className='collapse-button' onClick={this.doCollapse}>
                        collapse description  &nbsp;<img src={"data:image/svg+xml,%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 512 512' style='enable-background:new 0 0 512 512;' xml:space='preserve'%3E%3Cstyle type='text/css'%3E .st0%7Bfill-rule:evenodd;clip-rule:evenodd;%7D%0A%3C/style%3E%3Cg%3E%3Cpath class='st0' d='M36.6,256c0-10.1,8.2-18.3,18.3-18.3h402.3c10.1,0,18.3,8.2,18.3,18.3s-8.2,18.3-18.3,18.3H54.9 C44.8,274.3,36.6,266.1,36.6,256z M256,0c10.1,0,18.3,8.2,18.3,18.3v164.6c0,10.1-8.2,18.3-18.3,18.3s-18.3-8.2-18.3-18.3V18.3 C237.7,8.2,245.9,0,256,0z'/%3E%3Cpath class='st0' d='M342.1,96.8c7.1,7.1,7.2,18.7,0,25.9l0,0L269,195.8c-7.1,7.1-18.7,7.2-25.9,0l0,0l-73.1-73.1 c-7.1-7.2-7.1-18.7,0-25.9c7.2-7.1,18.7-7.1,25.9,0L256,157l60.2-60.2C323.3,89.6,334.9,89.6,342.1,96.8L342.1,96.8z M256,512 c10.1,0,18.3-8.2,18.3-18.3V329.1c0-10.1-8.2-18.3-18.3-18.3s-18.3,8.2-18.3,18.3v164.6C237.7,503.8,245.9,512,256,512z'/%3E%3Cpath class='st0' d='M342.1,415.2c7.1-7.1,7.2-18.7,0-25.9l0,0L269,316.2c-7.1-7.1-18.7-7.2-25.9,0l0,0l-73.1,73.1 c-7.1,7.2-7.1,18.7,0,25.9c7.2,7.1,18.7,7.1,25.9,0L256,355l60.2,60.2C323.3,422.4,334.9,422.4,342.1,415.2L342.1,415.2z'/%3E%3C/g%3E%3C/svg%3E"} alt='collapse icon'/>
                    </button>
                    }
                </div>
            </DescriptionWrapper>
        )
    }
}
