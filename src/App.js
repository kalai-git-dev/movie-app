import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Header from "./components/Header";
import Movie from "./pages/Movie";
import TopRated from "./pages/TopRated";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar } from "@fortawesome/free-solid-svg-icons";
library.add(faStar);

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/movie/:id" component={Movie} exact />
        <Route path="/topRated" component={TopRated} exact />
      </Switch>
    </Router>
  );
}

export default App;
