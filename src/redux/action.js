import { SET_LOADING } from "./action/types"

export const getPosts = () =>{
    console.log('вызвал')
    return {
        type:SET_LOADING
    }
}