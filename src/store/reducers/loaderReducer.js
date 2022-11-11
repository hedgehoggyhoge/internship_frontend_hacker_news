const initialState = {
    loading: false,
}

const LOADER_DISPLAY_ON = 'LOADER_DISPLAY_ON'
const LOADER_DISPLAY_OFF = 'LOADER_DISPLAY_OFF'

export const loaderReducer = (state = initialState, action) => {
    switch (action.type){

        case LOADER_DISPLAY_ON:
            return {
                ...state,
                loading: true
            }
        case LOADER_DISPLAY_OFF:
            return {
                ...state,
                loading: false
            }
        default:
            return state
    }
}
export const loaderOnAction = () => ({type: LOADER_DISPLAY_ON})
export const loaderOffAction = () => ({type: LOADER_DISPLAY_OFF})

