import React, { useState, useEffect } from "react";

import axios from "axios";

import Card from "../components/Card";
import Loader from "../components/Loader";
import { Link } from "react-router-dom";
import Genres from "../components/Genres";
import BestFilms from "../components/BestFilms";

function Movies() {
  const [bestFilms, setBestFilms] = useState([]);
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://api.themoviedb.org/3/movie/popular?api_key=0c768e12c4195fb75249a2aa9748f0a1&page=2"
      );
      // console.log(response.data.results);
      setMovies(response.data.results);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return isLoading ? (
    <Loader />
  ) : (
    <div>
      <Genres />
      <BestFilms bestFilms={bestFilms} setBestFilms={setBestFilms} />
      <div className="container-movies">
        {movies.map((movie) => {
          return (
            <Link to={`/movie/${movie.id}`} key={movie.id}>
              <Card movie={movie} />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Movies;
//https://api.themoviedb.org/3/movie/popular?api_key=0c768e12c4195fb75249a2aa9748f0a1