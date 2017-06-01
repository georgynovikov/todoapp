import { SELECT_CATEGORY } from '../constants/ActionTypes'

let initialState = {
    categoryId: undefined
}

const selection = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_CATEGORY:
            return {
                categoryId: action.id
            }
        default:
            return state
    }
}

export default selection