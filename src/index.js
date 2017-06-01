import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import './stylesheets/index.css'
import { configureStore } from "./store/configureStore";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect
} from 'react-router-dom'
import App from './containers/App.jsx'

const store = configureStore()

render(
    <Provider store = { store } >        
        <Router>
            <Route path="/" component={App}/>
        </Router>
    </Provider>,
    document.getElementById('root')
)