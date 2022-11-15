import React, {useEffect, useState} from 'react';

import './comments.scss'
import CommentItem from "../CommentItem";
import {useDispatch, useSelector} from "react-redux";
import {loaderOnAction} from "../../reducer/loaderReducer";
import Listing from "./Listing";

const CommentList = () => {
    const dispatch = useDispatch()
    const {loading} = useSelector(state => state.loaderReducer)
    const {comments} = useSelector(state => state.commentsReducer)
    useEffect(()=> {

    }, [comments])

    return (
        <div className='wrapper-commentlist'>
            {loading
                ? [...new Array(3)].map((_, index) => (
                    <Listing key={index} />))
                :comments.map(comm => <CommentItem key={comm.id} data = {comm}/>)}
        </div>
    );
};

export default CommentList;
