import { combineReducers } from 'redux'
import todos from './todos'
import categories from './categories'
import selection from './selection'
import visibilityFilter from './visibilityFilter'
import { reducer as formReducer } from 'redux-form'
import { routerReducer } from 'react-router-redux'

const rootReducer = combineReducers({
    selection,
    todos,
    categories,
    visibilityFilter,
    form: formReducer,
    routing: routerReducer
})

export default rootReducer