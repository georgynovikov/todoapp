import { connect } from 'react-redux'
import { toggleTodo, editTodo, deleteTodo } from '../actions'
import TodoItemList from '../components/TodoItemList'
import { withRouter } from 'react-router-dom';

const getVisibleTodos = (todos, filter, categoryId) => {
    if (filter && (filter.isTodoCompleted || filter.searchText))
        return todos.filter(t =>
            (!filter.isTodoCompleted || t.completed === filter.isTodoCompleted) &&
            (!filter.searchText || (t.title && t.title.indexOf(filter.searchText) > -1)) &&
            t.categoryId === categoryId)
    else
        return todos.filter(t => t.categoryId === categoryId);
}

const mapStateToProps = (state, ownProps) => ({
    todos: getVisibleTodos(state.todos.present, state.visibilityFilter, ownProps.match? +ownProps.match.params.selectedCategoryId || state.selection.categoryId : undefined)
})

const mapDispatchToProps = ({
    toggleTodo: toggleTodo,
    deleteTodo: deleteTodo,
    editTodo: editTodo
})

const VisibleTodoList = withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoItemList))


export default VisibleTodoList