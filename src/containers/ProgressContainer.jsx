import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Progress from '../components/Progress'

const mapStateToProps = (state, ownProps) => ({
    percent: (state.todos.present.filter(t => t.completed).length / state.todos.present.length) * 100
})

const ProgressContainer = connect(
    mapStateToProps
)(Progress)

export default ProgressContainer