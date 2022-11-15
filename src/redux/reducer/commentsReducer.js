const initialState = {comments: []}

const addingComments = 'addingComments'

export const commentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case addingComments:
            return {...state, comments: action.payload }
        default: return state
    }
}

export const addCommentsSuccessAction = (payload) => ({type: addingComments, payload })
