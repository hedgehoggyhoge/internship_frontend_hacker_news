const initialState = {
    comments: []
}

const ADD_COMMENTS_SUCCESS = 'ADD_COMMENTS_SUCCESS'

export const commentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_COMMENTS_SUCCESS:
            return {
                ...state,
                comments: action.payload
            }
        default:
            return state
    }
}

export const addCommentsSuccessAction = (payload) => ({type: ADD_COMMENTS_SUCCESS, payload })