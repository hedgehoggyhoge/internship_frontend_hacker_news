import React from "react";
import circle from "./circle.svg";
import { dateLogic } from "../Comments/DateLogic";

const NewItem = ({ title, score, time, by, descendants }) => {
  return (
    <li className="new-item">
        <div className="new-item__header">
            <h3 className="new-item__title">{title}</h3>
            <div className="new-item__score">
                <img src={circle} width="20" alt="картинка рейтинга" />
                <span>{score}</span>
            </div>
        </div>
      <div className="new-item__info">
        <p className="new-item__author">{by}</p>
        <span className="new-item__date">{dateLogic(time)}</span>
      </div>
      <b className="new-item__desc">{descendants}</b>
    </li>
  );
};

export default NewItem;
