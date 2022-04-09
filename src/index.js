import React from 'react';
import ReactDOM from 'react-dom';
import './styles/style.scss';
import configureStore from './store/configureStore'
import {ApolloClient, ApolloProvider, InMemoryCache,} from "@apollo/client";
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from "react-redux";
import AppHoc from "./containers/app.hoc";

const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache()
});

const store = configureStore()
const root = document.getElementById('root')
root.className = `variables-set-0`

export const iChangeCurrency = (currency) => {
    root.className = `variables-set-${currency}`
}

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <ApolloProvider client={client}>
                <AppHoc/>
            </ApolloProvider>
        </Router>
    </Provider>, root)
