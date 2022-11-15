import "./css/mainPage.scss";

import { useEffect } from "react";
import { fetchNews } from "./pages/Main";
import { useDispatch } from "react-redux";
import News from "./pages/News";
import { loaderOnAction } from "./reducer/loaderReducer";

import { Route, Switch } from "react-router-dom";
import SinglePage from "./pages/SinglePage";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loaderOnAction());
    dispatch(fetchNews());

    const timerID = setInterval(() => dispatch(fetchNews()), 60000);
    return () => clearInterval(timerID);
  }, []);

  return (
    <Switch>
      <Route exact path="/" component={News} />
      <Route path="/carditem/:id" component={SinglePage} />
    </Switch>
  );
}

export default App;
