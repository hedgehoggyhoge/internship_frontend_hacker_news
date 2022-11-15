import React from "react";
import circle from "./circle.svg";
import { dateLogic } from "../Comments/DateLogic";

const NewItem = ({ title, score, time, by, descendants }) => {
  return (
    <li className="new-item">
      <h3 className="new-item__title">{title}</h3>
      <div className="new-item__info">
        <p className="new-item__author">{by}</p>
        <time className="new-item__date">{dateLogic(time)}</time>
        <div className="new-item__score">
          <img src={circle} width="20" alt="картинка рейтинга" />
          <span>{score}</span>
        </div>
      </div>
      <b>{descendants}</b>
    </li>
  );
};

export default NewItem;
