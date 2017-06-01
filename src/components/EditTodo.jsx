import React from 'react';
const { DOM: { input, select, textarea } } = React
import { Field, reduxForm } from 'redux-form';
import LabelledInput from './LabelledInput';

const EditTodo = (props) => {
    const {
        reset,
        handleSubmit,
        pristine,
        submitting,
        errors,
        invalid,
        submitSucceeded,
        submitFailed,
    } = props;

    return (
        <form className="editTodo" onSubmit={handleSubmit}>
          <button type="submit" className="btnPrimary" disabled={pristine || submitting || invalid}>Save changes</button>
          <button type="button" className="btn-default" onClick={reset} disabled={pristine || submitting}>Cancel</button>
          <Field name="title" label="" component={LabelledInput} />
          <div>
            <Field name="completed" id="done" component="input" type="checkbox"/>
          </div>
            <label htmlFor="done">Done</label>
          <div>
            <Field name="description" label="Description:" component="TextArea" placeholder="Description"/>
          </div>
          {' '}
        </form>
    )
};

export default reduxForm({
    form: 'editTodo',
})(EditTodo);