import {Component} from "react"
import {connect} from "react-redux"
import {currentCategoryNumberSelector} from "../selectors/current-config.selector"
import {Nav} from "../components/Header/Nav/nav"
import {categoriesArraySelector} from "../selectors/general-config..selector"
import {setCategoryAction} from "../actions/current-config.actions"

class NavHocRedux extends Component {
    onLinkClick = (categoryName) =>
        this.props.dispatch(setCategoryAction(
            {num: this.props.categoriesArray.indexOf(categoryName)}
        ))

    onLogoClick = () => this.props.dispatch(setCategoryAction({num: 0}))

    render() {

        return (
            <Nav
                categoriesArray={this.props.categoriesArray}
                currentCategoryNumber={this.props.currentCategoryNumber}
                onLinkClick={this.onLinkClick}
                onLogoClick={this.onLogoClick}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currentCategoryNumber: currentCategoryNumberSelector(state),
        categoriesArray: categoriesArraySelector(state),
    }
}

export default connect(mapStateToProps)(NavHocRedux)