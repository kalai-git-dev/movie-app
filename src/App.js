import React, { useState } from "react";
import "./App.css";
import axios from "axios";
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
import { faStar } from "@fortawesome/free-solid-svg-icons";
library.add(faStar);

function App() {
  const [movieFav, setMovieFav] = useState([]);
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  const handlesubmit = async (event) => {
    event.preventDefault();
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=0c768e12c4195fb75249a2aa9748f0a1&language=en-US&query=${search}`
    );
    // console.log(response.data.results);
    setMovies(response.data.results);
    setSearch("");
  };

  return (
    <Router>
      <Header
        setSearch={setSearch}
        handlesubmit={handlesubmit}
        search={search}
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

        <Route path="/movie/:id" component={Movie} exact />
        <Route path="/topRated" component={TopRated} exact />
        <Route path="/favorite" exact>
          <Favories movieFav={movieFav} />
        </Route>

        <Route path="/movies/search">
          <Search />
        </Route>
        <Route path="/" component={Home} exact />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
