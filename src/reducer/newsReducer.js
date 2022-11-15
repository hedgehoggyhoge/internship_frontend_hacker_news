const initialState = {
    news: []
}

const ADD_NEWS_SUCCESS = 'ADD_NEWS_STARTED'

export const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEWS_SUCCESS:
            return {
                ...state,
                loading: false,
                news: action.payload
            }
        default:
            return state
    }
}

export const addNewsSuccessAction = (payload) => ({type: ADD_NEWS_SUCCESS, payload })
