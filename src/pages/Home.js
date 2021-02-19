import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import axios from "axios";
import Loader from "../components/Loader";
import PlayCircleFilledSharpIcon from "@material-ui/icons/PlayCircleFilledSharp";

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

  // let tabImages = [];
  // const background = () => {
  //   const tabMovies = movies.slice(0, 8);
  //   // console.log(tabMovies);
  //   for (let i = 0; i < tabMovies.length; i++) {
  //     tabImages.push(`${urlImg}${tabMovies[i].poster_path}`);
  //   }
  //   // console.log(tabImages);
  //   return tabImages;
  // };

  return isLoading ? (
    <Loader />
  ) : (
    <>
      <div
        className="banner"
        style={{ backgroundImage: `url(${urlImg}${movies[0].poster_path})` }}
      ></div>
      <Link to="/movies" className="banner__text">
        <h1>APP MOVIES</h1>
        <p>
          Vous trouverez sur notre site tous les films Box-Office récemment
          sortis : Netflix, IMDB, HBO… en streaming français complet gratuit et
          illimité.
        </p>
        <PlayCircleFilledSharpIcon color="secondary"></PlayCircleFilledSharpIcon>
      </Link>
    </>
  );
}

export default Home;
