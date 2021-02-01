import React, { useState, useEffect } from "react";
import axios from "axios";
import Movie from "../components/Movie";

function Home() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://api.themoviedb.org/3/movie/popular?api_key=0c768e12c4195fb75249a2aa9748f0a1&page=12"
      );
      console.log(response.data.results);
      setMovies(response.data.results);
      setIsLoading(false);
    };
    fetchData();
  }, []);
  return isLoading ? (
    <p> loading</p>
  ) : (
    <div>
      {movies.map((movie) => {
        return <Movie key={movie.id} movie={movie} />;
      })}
    </div>
  );
}

export default Home;
//https://api.themoviedb.org/3/movie/popular?api_key=0c768e12c4195fb75249a2aa9748f0a1
