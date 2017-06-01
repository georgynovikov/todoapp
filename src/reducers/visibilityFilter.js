import { SET_VISIBILITY_FILTER, SEARCH_TODO } from '../constants/ActionTypes'

let initialState = {
    searchText: '',
    isTodoCompleted: false
}

const visibilityFilter = (state = initialState, action) => {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter
        default:
            return state
    }
}

export default visibilityFilter