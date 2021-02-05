import React from "react";
import ReactStars from "react-rating-stars-component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Card({ movie }) {
  const urlImg = "https://image.tmdb.org/t/p/original";

  return (
    <div key={movie.id}>
      <div>
        <FontAwesomeIcon icon="star" />
        <img
          src={urlImg + movie.backdrop_path}
          alt="img"
          style={{ width: 250, height: 300, objectFit: "cover" }}
        />
        <p>{movie.vote_average}</p>
      </div>
      <p>{movie.title}</p>
      <ReactStars count={movie.vote_average} size={24} color="#F5ED06" />
    </div>
  );
}

export default Card;
