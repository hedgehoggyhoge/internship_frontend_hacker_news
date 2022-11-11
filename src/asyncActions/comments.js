import {addCommentsSuccessAction} from "../store/reducers/commentsReducer";
import {loaderOffAction} from "../store/reducers/loaderReducer";


export const fetchComments =  (storieId) => {
    return async dispatch => {
        const storie = await fetch(`https://hacker-news.firebaseio.com/v0/item/${storieId}.json`)
            .then(response => response.json())
        const storieRootComments = storie.kids

        if (storieRootComments){
            const rootComments = await Promise.all(
                storieRootComments.map(commentId => {
                    return fetch(`https://hacker-news.firebaseio.com/v0/item/${commentId}.json`)
                        .then(data => data.json())
                })
            );
            dispatch(addCommentsSuccessAction(rootComments))
        }else{
            dispatch(addCommentsSuccessAction([]))
        }
        dispatch(loaderOffAction())
    }
}