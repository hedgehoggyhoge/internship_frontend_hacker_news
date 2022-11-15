import {
    GET_POST,
    GET_POSTS,
    SET_LOADING,
    GET_COMMENTS,
    HIDE_LOADER,
    CHANGE_PAGE,
} from "../action/types";

const initialState = {
    post: {},
    posts: [],
    comments: [],
    loading: false,
    currentPage: 1,
};
// prettier-ignore
const handlers = {
    [GET_POSTS]:(state,action) =>({...state, posts:action.payload, loading:false}),
    [GET_POST]:(state,action) =>({...state, post:action.payload, loading:false}),
    [GET_COMMENTS]:(state,action)=>({...state,  comments:action.payload, loading:false}),
    [SET_LOADING]:(state)=>({...state,  loading:true}),
    [HIDE_LOADER]:(state) =>({...state,loading:false}),
    [CHANGE_PAGE]:(state,action) =>({...state,currentPage:action.payload}),
    DEFAULT:(state) => state
}

export const RootReducer = (state = initialState, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT;
    return handle(state, action);
};
