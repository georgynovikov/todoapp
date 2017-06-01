import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../components/Header'
import MainSectionContainer from '../containers/MainSectionContainer'
import ProgressContainer from "../containers/ProgressContainer";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect,

} from 'react-router-dom'   

import CategoryList from '../components/CategoryList'
import CategoryItem from '../components/CategoryList'
import VisibleTodoList from '../containers/VisibleTodoList'
import NotFound from '../components/NotFound'
export default class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <ProgressContainer/>
                <Switch>
                        <Route path="/categories/:selectedCategoryId/todos/:todoId"
                            component={MainSectionContainer} />
                        <Route path="/categories/:selectedCategoryId"
                            component={MainSectionContainer} />
                        <Route path="/"
                            component={MainSectionContainer} />
                </Switch>
            </div>
        )
    }
}