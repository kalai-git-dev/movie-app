import React, { useState } from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Footer from "./components/Footer";
import Movies from "./pages/Movies";
import Home from "./pages/Home";
import Favories from "./pages/Favories";
import Header from "./components/Header";
import Movie from "./pages/Movie";
import TopRated from "./pages/TopRated";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar } from "@fortawesome/free-solid-svg-icons";
library.add(faStar);

function App() {
  const [movieFav, setMovieFav] = useState([]);
  console.log(movieFav);
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/movies">
          <Movies setMovieFav={setMovieFav} movieFav={movieFav} />
        </Route>

        <Route path="/movie/:id" component={Movie} exact />
        <Route path="/topRated" component={TopRated} exact />
        <Route path="/favorite" exact>
          <Favories movieFav={movieFav} />
        </Route>

        <Route path="/" component={Home} exact />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
