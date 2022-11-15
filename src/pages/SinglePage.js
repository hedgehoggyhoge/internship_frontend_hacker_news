import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import CommentList from "../components/Comments";
import { useDispatch, useSelector } from "react-redux";
import { loaderOnAction } from "../redux/reducer/loaderReducer";
import { fetchComments } from "../components/Comments/Comments";
import { dateLogic } from "../components/Comments/DateLogic";
import envelope from "./envelope.svg";

const SinglePage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { comments } = useSelector((state) => state.commentsReducer);

  const [headerNew, setHeaderNew] = useState({});

  useEffect(() => {
    dispatch(loaderOnAction());
    dispatch(fetchComments(id));

    const storie = async () => {
      const res = await fetch(
        `https://hacker-news.firebaseio.com/v0/item/${id}.json`
      ).then((response) => response.json());
      setHeaderNew(res);
    };
    storie();
  });

  return (
    <>
      <div className="header">
        <div className="wrapper-btn">
          <Link to="/">
            <button>Назад</button>
          </Link>
          <button
            onClick={() => {
              dispatch(loaderOnAction());
              dispatch(fetchComments(id));
            }}
          >
            Обновить
          </button>
        </div>
      </div>
      <div className="main">
        <div className="new-card">
          <div className="new-card__title">
            <h2>{headerNew.title}</h2>
          </div>
          <div className="new-card__url">
            <a href={headerNew.url}>{headerNew.url}</a>
          </div>
          <div className="new-card__info">
            <div className="new-card__author">
              <b>
                <em>{headerNew.by}</em>
              </b>
            </div>
            <span className="new-card__data">
              {dateLogic(headerNew.time)}
            </span>
          </div>
          <div className="new-card__message">
            <img src={envelope} width="20" alt="иконка сообщения" />
            <p>{headerNew.descendants}</p>
          </div>
        </div>
        <div className="comments-list">
          {comments.length ? (
            <CommentList />
          ) : (
            "Нет комментариев"
          )}
        </div>
      </div>
    </>
  );
};

export default SinglePage;

//`https://hacker-news.firebaseio.com/v0/item/33488227.json?print=pretty`
