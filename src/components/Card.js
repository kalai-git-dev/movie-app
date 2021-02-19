import React from "react";
import ReactStars from "react-rating-stars-component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Card({ movie }) {
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
    <div className="card" key={movie.id}>
      <img
        className="card-image"
        src={urlImg + movie.poster_path}
        alt="img"
        style={{ width: 300, height: 400 }}
      />

      <FontAwesomeIcon icon="star" className="icon-star" />
      <p className={voteColor(movie.vote_average)}>{movie.vote_average}</p>

      <p className="card-title">{movie.title}</p>
      <div className="stars">
        <ReactStars count={movie.vote_average} size={24} color="#F5ED06" />
      </div>
    </div>
  );
}

export default Card;
