import "./css/mainPage.scss";

import {BrowserRouter, Route, Switch} from "react-router-dom";

import News from "./pages/News";
import SinglePage from "./pages/SinglePage";

function App() {

  return (
      <BrowserRouter>
    <Switch>
      <Route exact path="/" component={News} />
      <Route path="/carditem/:id" component={SinglePage} />
    </Switch>
      </BrowserRouter>
  );
}

export default App;
