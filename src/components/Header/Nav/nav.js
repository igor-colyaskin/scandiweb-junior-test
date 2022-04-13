import React, {Component} from 'react'
import {Link} from "react-router-dom"

export class Nav extends Component {

    render() {
        const {
            categoriesArray,
            currentCategoryNumber,
            onLinkClick,
            onLogoClick
        } = this.props

        return (
            <div className='nav-wrapper'>
                <nav className='navbar'>
                    {categoriesArray.map((category, index) => {
                        return (
                            <Link
                                to={`/category/${category}`}
                                key={category}
                                onClick={() => onLinkClick(category)}
                                className={currentCategoryNumber === index ? 'link active' : 'link'}
                            >
                                {category}
                            </Link>
                        )
                    })}
                </nav>
                <div className='logo'>
                    <Link
                        to='/'
                        onClick={onLogoClick}
                    />
                </div>
            </div>
        )
    }
}
