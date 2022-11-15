import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from "redux-thunk";
import {newsReducer} from "./newsReducer";
import {loaderReducer} from "./loaderReducer";
import {commentsReducer} from "./commentsReducer";

const rootReducer = combineReducers({
    newsReducer,
    commentsReducer,
    loaderReducer
})
export const store = createStore(rootReducer, applyMiddleware(thunk))
