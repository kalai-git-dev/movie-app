import React, { useState, useEffect } from "react";
import axios from "axios";
<<<<<<< HEAD

import Card from "../components/Card";

import { Link } from "react-router-dom";
import Genres from "../components/Genres";
=======
import Card from "../components/Card";
import { Link } from "react-router-dom";
>>>>>>> aa70b9baa22a13cf0ce30ab6e18dcb686a62242f

function Home() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://api.themoviedb.org/3/movie/popular?api_key=0c768e12c4195fb75249a2aa9748f0a1&page=all"
      );
<<<<<<< HEAD
      // console.log(response.data.results);
=======
      //   console.log(response.data.results);
>>>>>>> aa70b9baa22a13cf0ce30ab6e18dcb686a62242f
      setMovies(response.data.results);
      setIsLoading(false);
    };
    fetchData();
  }, []);
<<<<<<< HEAD
  console.log(movies);
=======
>>>>>>> aa70b9baa22a13cf0ce30ab6e18dcb686a62242f
  return isLoading ? (
    <p> loading</p>
  ) : (
    <div>
<<<<<<< HEAD
      <Genres />
=======
>>>>>>> aa70b9baa22a13cf0ce30ab6e18dcb686a62242f
      {movies.map((movie) => {
        return (
          <Link to={`/movie/${movie.id}`} key={movie.id}>
            <Card movie={movie} />
          </Link>
        );
      })}
    </div>
  );
}

export default Home;
//https://api.themoviedb.org/3/movie/popular?api_key=0c768e12c4195fb75249a2aa9748f0a1
