import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Todo from './TodoItem'

export default class TodoItemList extends Component {
    static propTypes = {
        todos: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number.isRequired,
            completed: PropTypes.bool.isRequired,
            text: PropTypes.string.isRequired
        }).isRequired).isRequired,
        editTodo: PropTypes.func.isRequired,
        deleteTodo: PropTypes.func.isRequired,
        toggleTodo: PropTypes.func.isRequired
    }

    render() {
        const { todos, editTodo, deleteTodo, toggleTodo } = this.props
        const c = this.props.match.params.todoId;
        return (
            <div className="todo-list">
        <ul>
          {todos.map(todo =>
            <Todo key={todo.id}
              todo={todo}
              editTodo={editTodo}
              deleteTodo={deleteTodo}
              toggleTodo={toggleTodo} />
          )}
        </ul>
      </div>
        )
    }
}