import {addNewsSuccessAction} from "../store/reducers/newsReducer";
import {loaderOffAction} from "../store/reducers/loaderReducer";

export const fetchNews =  () => {
    return async dispatch => {
        const storiesIds = await fetch(`https://hacker-news.firebaseio.com/v0/newstories.json`)
            .then(response => response.json())
        const storiesIds100 = storiesIds.slice(0, 100)

        const stories = await Promise.all(
            storiesIds100.map(storieId => {
                return fetch(`https://hacker-news.firebaseio.com/v0/item/${storieId}.json`)
                    .then(data => data.json())
            })
        );
        dispatch(loaderOffAction())
        dispatch(addNewsSuccessAction(stories))
    }
}
