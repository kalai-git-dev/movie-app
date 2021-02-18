import React, { useState, useEffect } from "react";

import axios from "axios";
import Loader from "../components/Loader";

function Home() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://api.themoviedb.org/3/movie/popular?api_key=0c768e12c4195fb75249a2aa9748f0a1&page=all"
      );
      // console.log(response.data.results);
      setMovies(response.data.results);
      setIsLoading(false);
    };
    fetchData();
  }, []);
  const urlImg = "https://image.tmdb.org/t/p/w500";

  let tabImages = [];
  const background = () => {
    const tabMovies = movies.slice(0, 8);
    // console.log(tabMovies);
    for (let i = 0; i < tabMovies.length; i++) {
      tabImages.push(`${urlImg}${tabMovies[i].poster_path}`);
    }
    // console.log(tabImages);
    return tabImages;
  };

  return isLoading ? (
    <Loader />
  ) : (
    <div className="banner">
      <div className="banner__left">
        <h1>app movie</h1>
        <p>
          Vous trouverez sur notre site tous les films Box-Office récemment
          sortis : Netflix, IMDB, HBO… en streaming français complet gratuit et
          illimité.
        </p>
      </div>
    </div>
  );
}

export default Home;
