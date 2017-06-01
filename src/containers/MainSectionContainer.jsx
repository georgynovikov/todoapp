import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Actions from '../actions'
import MainSection from '../components/MainSection'

const mapStateToProps = (state, ownProps) => ({
    categories: state.categories,
    selectedCategoryId: ownProps.match? ownProps.match.params.selectedCategoryId || state.selection.categoryId : undefined,
    todoId: ownProps.match ? ownProps.match.params.todoId : undefined
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Actions, dispatch)
})

const MainSectionContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(MainSection)

export default MainSectionContainer