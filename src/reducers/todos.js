import { ADD_TODO, DELETE_TODO, EDIT_TODO, MOVE_TODO, TOGGLE_TODO } from '../constants/ActionTypes'
import undoable from 'redux-undo'

let nextTodoId = 5

const initialState = [{
        id: 1,
        title: 'Todo #1',
        completed: false,
        description: 'Description',
        categoryId: 1
    },
    {
        id: 2,
        title: 'Todo #2',
        completed: false,
        description: 'Description',
        categoryId: 1
    },
    {
        id: 3,
        title: 'Todo #3',
        completed: false,
        description: 'Description',
        categoryId: 1
    },
    {
        id: 1,
        title: 'Todo #1',
        completed: false,
        description: 'Description',
        categoryId: 2
    },
]

const todo = (state, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                id: nextTodoId++,
                title: action.args.text,
                completed: false,
                description: '',
                categoryId: action.args.categoryId
            }
        case TOGGLE_TODO:
            if (state.id !== action.id) {
                return state
            }

            return {
                ...state,
                completed: !state.completed
            }
        case EDIT_TODO:
            return {
                ...state,
                id: action.id,
                title: action.title,
                description: action.description,
                completed: action.completed
            }
        default:
            return state
    }
}

const todos = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                todo(undefined, action)
            ]
        case EDIT_TODO:
            return state.map(t =>
                t.id !== action.id ? t : todo(t, action)
            )
        case TOGGLE_TODO:
            return state.map(t =>
                t.id !== action.id ? t : todo(t, action)
            )
        case DELETE_TODO:
            return state.filter(todo =>
                todo.id !== action.id
            )
        case MOVE_TODO:
            return state;
        default:
            return state
    }
}

const undoableTodos = undoable(todos)

export default undoableTodos