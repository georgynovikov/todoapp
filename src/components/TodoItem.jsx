import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import TextInput from './TextInput'
import EditTodo from './EditTodo'
import { reset } from 'redux-form';
import { withRouter } from 'react-router-dom';

class TodoItem extends Component {
    static propTypes = {
        todo: PropTypes.object.isRequired,
        editTodo: PropTypes.func.isRequired,
        deleteTodo: PropTypes.func.isRequired,
        toggleTodo: PropTypes.func.isRequired
    }

    handleEditButtonClick = () => {
        const todo = this.props.todo;
        this.props.history.push('/categories/' + todo.categoryId + '/todos/' + todo.id);
    }

    render() {
        const { todo, editTodo, toggleTodo } = this.props

        return (
            <li className={classnames({
              completed: todo.completed
            })}>
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
                    onClick={this.handleEditButtonClick.bind(this)} />
                </div>
            </li>
        )
    }
}

export default withRouter(TodoItem)