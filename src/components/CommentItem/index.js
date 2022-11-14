import React, {useState} from 'react';
import './commentItem.css'
import arrow from '../../assets/img/arrow-down.svg'

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
            {(data?.dead || data?.deleted)
                ? null
                :<div onClick={() => handlerSubComments(data?.kids)} className='comment'>
                    <p className='text-comment' dangerouslySetInnerHTML={{__html: data.text}}/>
                    {data?.kids && <img src={arrow} style={{width:20, marginLeft: 20}}/>}
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