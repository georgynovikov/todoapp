import React from 'react';
const { DOM: { input, select, textarea } } = React
import { Field, reduxForm } from 'redux-form';
import EditTodo from '../components/EditTodo'
import { connect } from 'react-redux'

const mapStateToProps = (state, ownProps) => ({
    initialValues: state.account.data
})

const mapDispatchToProps = (dispatch, ownProps) => ({

})

const EditTodoContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(EditTodo)

export default EditTodoContainer