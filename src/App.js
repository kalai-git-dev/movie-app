import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Footer from "./components/Footer";
import Movies from "./pages/Movies";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Favories from "./pages/Favories";
import Header from "./components/Header";
import Movie from "./pages/Movie";
import TopRated from "./pages/TopRated";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar, faPlay } from "@fortawesome/free-solid-svg-icons";
library.add(faStar, faPlay);

function App() {
  const [movieFav, setMovieFav] = useState([]);
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  return (
    <Router>
      <Header
        setSearch={setSearch}
        search={search}
        setMovies={setMovies}
        movieFav={movieFav}
      />
      <Switch>
        <Route path="/movies">
          <Movies
            setMovieFav={setMovieFav}
            movieFav={movieFav}
            movies={movies}
            setMovies={setMovies}
            search={search}
          />
        </Route>

        <Route path="/movie/:id" exact>
          <Movie />
        </Route>
        <Route path="/topRated" component={TopRated} exact />
        <Route path="/favorite" exact>
          <Favories movieFav={movieFav} />
        </Route>

        <Route path="/search" exact>
          <Search movies={movies} search={search} />
        </Route>
        <Route path="/" component={Home} exact />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
