import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from "redux-thunk";
import {newsReducer} from "./reducers/newsReducer";
import {loaderReducer} from "./reducers/loaderReducer";
import {commentsReducer} from "./reducers/commentsReducer";

const rootReducer = combineReducers({
    newsReducer,
    commentsReducer,
    loaderReducer
})
export const store = createStore(rootReducer, applyMiddleware(thunk))
