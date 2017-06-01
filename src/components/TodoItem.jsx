import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import TextInput from './TextInput'
import EditTodo from './EditTodo'
import { reset } from 'redux-form';

export default class TodoItem extends Component {
    static propTypes = {
        todo: PropTypes.object.isRequired,
        editTodo: PropTypes.func.isRequired,
        deleteTodo: PropTypes.func.isRequired,
        toggleTodo: PropTypes.func.isRequired
    }

    state = {
        editing: false
    }

    handleEditButtonClick = () => {
        this.setState({ editing: true })
    }

    handleSave = (props) => {
        const { id, title, description, completed } = props;
        if (title.length === 0) {
            this.props.deleteTodo(id)
        } else {
            this.props.editTodo(id, title, description, completed)
        }
        props.resetForm();
        this.setState({ editing: false })
    }

    render() {
        const { todo, editTodo, toggleTodo } = this.props

        let element
        if (this.state.editing) {
            element = (
                <EditTodo
                  onSubmit={this.handleSave}
                  initialValues={{...todo}}
                  data={{...todo}}/>
            )
        } else {
            element = (
                <div className="view-todo">
                  <input className="toggle"
                    type="checkbox"
                    checked={todo.completed}
                    onChange={e => {
                      toggleTodo(todo.id)
                    }}
                  />
                  <label
                    className="todo-text"
                    style={{
                      textDecoration: todo.completed ? 'line-through' : 'none'
                    }}
                    onClick={e => {
                      toggleTodo(todo.id)
                    }}
                  >
                    {todo.title}
                  </label>
                  <button className="edit-button"
                    onClick={this.handleEditButtonClick} />
                </div>
            )
        }

        return (
            <li className={classnames({
              completed: todo.completed,
              editing: this.state.editing
            })}>
              {element}
            </li>
        )
    }
}