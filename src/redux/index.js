import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from "redux-thunk";
import {newsReducer} from "./reducer/newsReducer";
import {loaderReducer} from "./reducer/loaderReducer";
import {commentsReducer} from "./reducer/commentsReducer";

const rootReducer = combineReducers({
    newsReducer,
    commentsReducer,
    loaderReducer
})
export const store = createStore(rootReducer, applyMiddleware(thunk))
