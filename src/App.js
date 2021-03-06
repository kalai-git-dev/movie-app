import React, { useEffect, useState } from "react";
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
import { faStar, faPlay, faBars } from "@fortawesome/free-solid-svg-icons";
library.add(faStar, faPlay, faBars);

function App() {
  const [movieFav, setMovieFav] = useState([]);
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  // local storage
  const saveLocalStorage = (items) => {
    localStorage.setItem("movie-favorites", JSON.stringify(items));
  };
  // addFavorites
  const addFavorites = (movie) => {
    const newMovieFav = [...movieFav, movie];

    setMovieFav(newMovieFav);
    saveLocalStorage(newMovieFav);
  };
  // remove favorites
  const removeFavorites = (movie) => {
    const newMovieFav = movieFav.filter((item) => {
      return item.id !== movie.id;
    });
    setMovieFav(newMovieFav);
    saveLocalStorage(newMovieFav);
  };
  useEffect(() => {
    const moviesFavorites = JSON.parse(localStorage.getItem("movie-favorites"));
    setMovieFav(moviesFavorites);
  }, []);
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
            addFavorites={addFavorites}
          />
        </Route>

        <Route path="/movie/:id" exact>
          <Movie />
        </Route>
        <Route path="/topRated">
          <TopRated addFavorites={addFavorites} exact />
        </Route>
        <Route path="/favorite" exact>
          <Favories
            movieFav={movieFav}
            removeFavorites={removeFavorites}
            setMovieFav={setMovieFav}
          />
        </Route>

        <Route path="/search" exact>
          <Search movies={movies} search={search} addFavorites={addFavorites} />
        </Route>
        <Route path="/" component={Home} exact />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
