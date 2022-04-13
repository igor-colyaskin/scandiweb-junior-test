import React, {Component} from 'react'
import {Route, Switch} from "react-router-dom"
import ProductHocApollo from "../../containers/product.hoc.apollo"
import CategoryHoc from "../../containers/category.hoc"
import CartHocRedux from "../../containers/cart.hoc.redux"
import {CheckoutPage} from "../CheckoutPage/chekout-page"

export class Page extends Component {
    render() {

        return (
            <main className='page-wrapper'>
                <Switch>
                    <Route
                        path='/category/:id'
                        render={({match: {params: {id}}}) => {
                            return  <CategoryHoc id={id} />
                        }}
                    />
                    <Route
                        path='/product/:id'
                        render={({match: {params: {id}}}) => {
                            return <ProductHocApollo id={id}/>
                        }}
                    />
                    <Route path='/cart' render={() => {
                        return  <CartHocRedux view='for-big-cart' />
                    }}/>
                    <Route path='/checkout-page' render={() => {
                        return  <CheckoutPage />
                    }}/>
                    <Route path='/' render={() => {
                        return  <CategoryHoc id={this.props.initialCategory} />
                    }}/>
                </Switch>
            </main>
        )
    }
}
