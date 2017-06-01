import * as types from '../constants/ActionTypes'

export const addTodo = (args) => ({ type: types.ADD_TODO, args })
export const deleteTodo = id => ({ type: types.DELETE_TODO, id })
export const editTodo = (id, title, description, completed) => ({ type: types.EDIT_TODO, id, title, description, completed })
export const completeTodo = id => ({ type: types.COMPLETE_TODO, id })

export const setVisibilityFilter = (filter) => ({ type: types.SET_VISIBILITY_FILTER, filter })

export const toggleTodo = (id) => ({ type: types.TOGGLE_TODO, id })

export const showDoneTodos = text => ({ type: types.SHOW_DONE_TODOS, text })
export const addCategory = args => ({ type: types.ADD_CATEGORY, args })
export const addNestedCategory = id => ({ type: types.ADD_NESTED_CATEGORY, id })
export const deleteCategory = id => ({ type: types.DELETE_CATEGORY, id })
export const editCategory = (id, text) => ({ type: types.EDIT_CATEGORY, id, text })
export const selectCategory = (id) => ({ type: types.SELECT_CATEGORY, id })
export const expandCollapseCategory = (id, text) => ({ type: types.EXPAND_COLLAPSE_CATEGORY, id, text })