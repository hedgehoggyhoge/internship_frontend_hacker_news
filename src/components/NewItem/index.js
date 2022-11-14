import React from "react";
import star from "../../assets/img/circle-button.svg";
import { dateFormatting } from "../../utils/dateFormatting";

const NewItem = ({ title, score, time, by, descendants }) => {
  return (
    <li className="new-item">
      <h3 className="new-item__title">{title}</h3>
      <div className="new-item__info">
        <p className="new-item__author">{by}</p>
        <time className="new-item__date">{dateFormatting(time)}</time>
        <div className="new-item__score">
          <img src={star} width="20" alt="картинка рейтинга" />
          <span>{score}</span>
        </div>
      </div>
      <b>{descendants}</b>
    </li>
  );
};

export default NewItem;
