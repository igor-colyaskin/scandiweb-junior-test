import React, {Component} from 'react'
import NavHocRedux from "../../containers/nav.hoc.redux"
import HeaderRightBlockHocRedux from "../../containers/header-right-block.hoc.redux"

export class Header extends Component {

    render() {
        return (
            <header className='header-wrapper'>
                <NavHocRedux/>
                <HeaderRightBlockHocRedux {...this.props}/>
            </header>
        )
    }
}
