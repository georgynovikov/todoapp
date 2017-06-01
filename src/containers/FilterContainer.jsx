import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import Filter from '../components/Filter'

const mapStateToProps = (state, ownProps) => ({
    active: ownProps.filter === state.visibilityFilter,
    isTodoCompleted: state.visibilityFilter.isTodoCompleted,
    searchText: state.visibilityFilter.searchText
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onShowDoneChange: (isTodoCompleted) => {
        dispatch(setVisibilityFilter({
            searchText: ownProps.searchString,
            isTodoCompleted: isTodoCompleted
        }))
    },
    onSearchStringChange: (searchString) => {
        dispatch(setVisibilityFilter({
            searchText: searchString,
            isTodoCompleted: ownProps.isTodoCompleted
        }))
    }
})

const FilterContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Filter)

export default FilterContainer