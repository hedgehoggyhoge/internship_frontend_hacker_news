const initialState = {news: []}

const addingNews = 'addingsNews'

export const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case addingNews:
            return {...state, loading: false, news: action.payload}
        default: return state
    }
}

export const addNewsSuccessAction = (payload) => ({type: addingNews, payload })
