import gReact from "react";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import NewItem from "../components/NewItem";
import { loaderOnAction } from "../reducer/loaderReducer";
import { fetchNews } from "./Main";
import Listing from "../components/Comments/Listing";

const News = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.loaderReducer);
  const { news } = useSelector((state) => state.newsReducer);

  const handledBtnRefresh = () => {
    dispatch(loaderOnAction());
    dispatch(fetchNews());
  };

  return (
    <>
      <div className="header">
        <button disabled={loading} onClick={handledBtnRefresh}>
          Обновить новости
        </button>
      </div>
      <div className="main">
        {!loading ? (
          <ul className="listItem">
            {news.map((storie) => {
              return (
                <Link to={`/carditem/${storie.id}`} key={storie.id}>
                  <NewItem {...storie} />
                </Link>
              );
            })}
          </ul>
        ) : (
          [...new Array(6)].map((_, index) => <Listing key={index} />)
        )}
      </div>
    </>
  );
};

export default News;
