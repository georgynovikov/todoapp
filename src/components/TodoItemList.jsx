import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Todo from './TodoItem'
import EditTodo from './EditTodo'

export default class TodoItemList extends Component {
    static propTypes = {
        todos: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number.isRequired,
            completed: PropTypes.bool.isRequired,
            text: PropTypes.string.isRequired
        }).isRequired).isRequired,
        editTodo: PropTypes.func.isRequired,
        deleteTodo: PropTypes.func.isRequired,
        toggleTodo: PropTypes.func.isRequired,
        editTodoId: PropTypes.number
    }

    handleSave = (props) => {
        const { id, title, description, completed } = props;
        if (title.length === 0) {
            this.props.deleteTodo(id)
        } else {
            this.props.editTodo(id, title, description, completed)
        }
        const history = this.props.history;
        history.goBack();
    }

    handleCancel = (props) => {
        const selectedCategoryid = this.props.selectedCategoryId;
        const history = this.props.history;
        history.goBack();
    }

    render() {
        const { todos, editTodo, deleteTodo, toggleTodo, editTodoId } = this.props
        const editingTodo = todos.filter(t => t.id === editTodoId).shift();
        let element
        if (editTodoId) {
            element = (
                <EditTodo
                  onSubmit={this.handleSave}
                  handleCancel={this.handleCancel.bind(this)}
                  initialValues={{...editingTodo}}
                  data={{...editingTodo}}/>
            )
        } else {
            element = (
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

        return (element)
    }
}