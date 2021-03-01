import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Credits from "../components/Credits";
import axios from "axios";
import ReactStars from "react-rating-stars-component";
import Loader from "../components/Loader";
import ReactPlayer from "react-player";
import YouTubeIcon from "@material-ui/icons/YouTube";

function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [linkYoutube, setLinkYoutube] = useState("");
  const urlYoutube = "https://www.youtube.com/watch?v=";
  const urlImg = "https://image.tmdb.org/t/p/w500";

  console.log(linkYoutube);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=0c768e12c4195fb75249a2aa9748f0a1`
      );
      // console.log(response.data);
      setMovie(response.data);
      setIsLoading(false);
    };

    fetchData();
  }, [id]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=0c768e12c4195fb75249a2aa9748f0a1`
      );
      console.log(response.data.results);
      setLinkYoutube(
        response.data.results.length > 0 ? response.data.results[0].key : null
      );
    };

    fetchData();
  }, [id]);

  const countries = (production) => {
    let str = "";
    for (let i = 0; i < production.length; i++) {
      if (i === production.length - 1) {
        str += production[i].name + ".";
      } else {
        str += production[i].name + ",";
      }
    }
    return str;
  };

  return isLoading ? (
    <Loader />
  ) : (
    <>
      <div className="movie-container">
        <div className="movie-body">
          <img src={urlImg + movie.poster_path} alt={movie.title} />

          <div className="movie-infos">
            <p className="movie-title">{movie.title}</p>
            <div className="movie-rating">
              <ReactStars
                className="stars"
                count={movie.vote_average}
                size={24}
                color="#F5ED06"
              />
            </div>
            <div>
              <div className="categories">
                <span>Catégories : </span>
                <ul className="categorie-list">
                  {movie.genres.map((genre) => {
                    return (
                      <li key={genre.id}>
                        {genre.name} <span>|</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <p className="movie-country">
                <span>Pays : </span> {countries(movie.production_countries)}
              </p>
              <p className="movie-date">
                <span>Sortie : </span> {movie.release_date}
              </p>
              <p className="movie-languages">
                <span> Langues : </span> {countries(movie.spoken_languages)}
              </p>
              <p className="movie-time">
                <span>Time : </span> {movie.runtime} min
              </p>
              <div className="movie-vote">
                <span> Vote : </span>
                <p>{movie.vote_average}</p>
              </div>
              <p className="movie-description">
                <span>Description : </span> {movie.overview}
              </p>
            </div>
            {movie.homepage && (
              <div className="movie-homepage">
                <span>Home page :</span>
                <a href={movie.homepage} target="_blank" rel="noreferrer">
                  {movie.homepage}
                </a>
              </div>
            )}
          </div>
        </div>
        <div className="video">
          <div className="video__infos">
            <p className="video__title">{movie.title}</p>
            <YouTubeIcon fontSize="large" color="secondary"></YouTubeIcon>
          </div>
          <ReactPlayer
            className="player"
            controls
            width="1200px"
            height="800px"
            url={urlYoutube + linkYoutube}
          />
        </div>

        <hr />
        <h2 className="acteurs">Acteurs</h2>
        <Credits />
      </div>
    </>
  );
}

export default Movie;
