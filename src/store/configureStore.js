import { createStore, combineReducers, applyMiddleware } from 'redux'
import reducer from '../reducers'
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
const history = createHistory()
    // const middleware = routerMiddleware(history)

export const configureStore = () => {
    var store = createStore(
        reducer,
        // applyMiddleware(middleware)
    );
    return store;
}