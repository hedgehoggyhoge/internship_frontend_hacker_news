import { put, call, all, takeLatest, select } from "redux-saga/effects";
import {
    CHANGE_PAGE,
    FETCH_COMMENTS,
    FETCH_POSTS,
    GET_COMMENTS,
    GET_POSTS,
    HIDE_LOADER,
    SET_LOADING,
} from "./action/types";

import axios from "axios";
import { timestamp } from "../utils/timestamp";
import { sdvigPagePagination } from "../utils/sdvigPagePag";

function* sagaFetchPosts() {
    yield takeLatest(FETCH_POSTS, sagaWorkerPosts);
}

function* sagaChangePage() {
    yield takeLatest(CHANGE_PAGE, sagaWorkerPages);
}

function* sagaWorkerPosts() {
    try {
        yield put({ type: SET_LOADING }); // показать loader
        const { currentPage } = yield select((state) => state);
        console.log("стр которую передаю", currentPage);
        const payload = yield call(fetchPosts, currentPage);
        yield put({ type: GET_POSTS, payload });

        yield put({ type: HIDE_LOADER });
    } catch (e) {
        console.log("ошибОчка", e);
    }
}

function* sagaWorkerPages() {
    try {
        yield put({ type: SET_LOADING }); // показать loader
        const { currentPage } = yield select((state) => state);
        console.log("страница передается", currentPage);
        const payload = yield call(fetchPosts, currentPage);
        yield put({ type: GET_POSTS, payload });

        yield put({ type: HIDE_LOADER });
    } catch (e) {
        console.log("ошибОчка", e);
    }
}

function* sagaFetchComments() {
    yield takeLatest(FETCH_COMMENTS, sagaWorkerComments);
}

function* sagaWorkerComments() {
    try {
        //yield put({type:SET_LOADING})  // показать loader
        const { kids } = yield select((state) => state.post);

        const payload = yield call(fetchComments, kids);
        console.log("пейлоад", payload);

        yield put({ type: GET_COMMENTS, payload });

        yield put({ type: HIDE_LOADER });
    } catch (e) {
        console.log("ошибОчка", e);
    }
}

export default function* rootSaga() {
    yield all([sagaFetchPosts(), sagaFetchComments(), sagaChangePage()]);
}
console.log("secret", process.env.REACT_APP_URLC);
const initialUrl = `https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty&orderBy="$key"&limitToFirst=100`;
const fetchPosts = async (currentPage = 1, url = initialUrl) => {
    const response = await axios.get(url);
    let arrPosts = response.data;

    sdvigPagePagination(currentPage, arrPosts);
    const result = await Promise.all(
        arrPosts.map(async (postIndex) => {
            console.log(postIndex);
            const response = await axios.get(
                `https://hacker-news.firebaseio.com/v0/item/${postIndex}.json?print=pretty`
            );

            return { ...response.data, time: timestamp(response.data.time) };
        })
    );
    console.log(result);

    return result;
};

const fetchComments = async (kids) => {
    let result = [];
    if (kids) {
        result = await Promise.all(
            kids.map(async (commentsIndex) => {
                const response = await axios.get(
                    `https://hacker-news.firebaseio.com/v0/item/${commentsIndex}.json?print=pretty`
                );
                console.log("к получен", response.data);
                return response.data;
            })
        );
    } else {
        console.log("коммент но пока пусто");
        return "комментариев пока нет";
    }
    console.log("коммент", result);

    return result;
};
