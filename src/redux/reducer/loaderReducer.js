const firstState = {loading: false,}
const loader_true = 'loader_true'
const loader_false = 'loader_false'

export const loaderReducer = (state = firstState, action) => {
    switch (action.type){
        case loader_true:
            return {...state, loading: true}

        case loader_false:
            return {...state, loading: false}
        default:
            return state
    }
}

export const loaderOnAction = () => ({type: loader_true})
export const loaderOffAction = () => ({type: loader_false})
