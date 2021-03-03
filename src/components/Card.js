import React from "react";
import ReactStars from "react-rating-stars-component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import image from "../assets/empty.jpg";

function Card({ movie, movieFav, setMovieFav, handleClick }) {
  const urlImg = "https://image.tmdb.org/t/p/original";
  const voteColor = (number) => {
    let str = " ";
    if (number > 7) {
      str = "vote green";
    } else if (number > 5) {
      str = "vote orange";
    } else {
      str = "vote red";
    }
    return str;
  };

  return (
    <div className="card">
      <Link to={`/movie/${movie.id}`} key={movie.id}>
        <img
          className="card-image"
          src={movie.poster_path ? urlImg + movie.poster_path : image}
          alt="img"
          style={{ width: 300, height: 400 }}
        />

        <p className={voteColor(movie.vote_average)}>{movie.vote_average}</p>

        <p className="card-title">{movie.title}</p>
        <div className="stars">
          <ReactStars count={movie.vote_average} size={24} color="#F5ED06" />
        </div>
        <div className="icon">
          <FontAwesomeIcon icon="play" className="icon-play" />
        </div>
      </Link>
      <FontAwesomeIcon
        icon="star"
        className="icon-star"
        onClick={() => handleClick(movie)}
      />
    </div>
  );
}

export default Card;
