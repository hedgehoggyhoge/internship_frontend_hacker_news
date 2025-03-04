import React, {useState} from 'react';
import './commentItem.scss'
import arrow_symbol from './arrow_symbol.svg'

const CommentItem = ({data}) => {
const [showSubComments, setShowSubComments] = useState([])
const [isOpenComment, setOpenComments] = useState(false)


    const handlerSubComments = async (kids = []) => {
    if(isOpenComment) return
        if(kids.length ){
            const subComments = await Promise.all(
                kids.map(commentId => {
                    return fetch(`https://hacker-news.firebaseio.com/v0/item/${commentId}.json`)
                        .then(data => data.json())
                })
            );
            setShowSubComments(subComments)
            setOpenComments(true)
        }
    }

    return (
        <>
            {(data?.empty || data?.deleted)
                ? null
                :<div onClick={() => handlerSubComments([])} className='comment'>
                    <p className='text-comment' dangerouslySetInnerHTML={{__html: data.text}}/>
                    {[] && <img src={arrow_symbol} style={{width:20, marginLeft: 20}} alt="картинка "/>}
                    <br/>
                    <br/>
                    <br/>
                    {!!showSubComments.length && showSubComments.map(comm => (<CommentItem key={comm.id} data = {comm}/>))}
                </div>
            }
        </>
    );
};

export default CommentItem;