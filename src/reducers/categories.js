import { ADD_CATEGORY, ADD_NESTED_CATEGORY, DELETE_CATEGORY, EDIT_CATEGORY, EXPAND_COLLAPSE_CATEGORY } from '../constants/ActionTypes'

let nextCategoryId = 5

const initialState = [{
        text: 'Category 1',
        completed: false,
        id: 1,
        subcategories: [{
            text: 'Category 1-1',
            completed: false,
            id: 3,
        }]
    },
    {
        text: 'Category 2',
        completed: false,
        id: 2,
        subcategories: [{
            text: 'Category 2-1',
            completed: false,
            id: 4,
        }]
    }
]

export default function categories(state = initialState, action) {
    switch (action.type) {
        case ADD_CATEGORY:
            return [{
                    id: nextCategoryId++,
                    completed: false,
                    text: action.args.text,
                    subcategories: []
                },
                ...state
            ]

        case DELETE_CATEGORY:
            return state.filter(category =>
                category.id !== action.id
            )

        case ADD_NESTED_CATEGORY:
            return state.map(category => {
                if (category.id === action.id) {
                    return {
                        ...category,

                        subcategories: [{
                                id: nextCategoryId++,
                                expanded: false,
                                text: action.text
                            },
                            ...category.subcategories
                        ]
                    }
                } else
                    return {...category }
            })

        case EDIT_CATEGORY:
            return state; //*

        case EXPAND_COLLAPSE_CATEGORY:
            return state.map(category => ({
                ...category,
                expanded: !category.expanded
            }))

        default:
            return state
    }
}