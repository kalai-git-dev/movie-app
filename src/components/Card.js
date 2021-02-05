import React from "react";
<<<<<<< HEAD
import ReactStars from "react-rating-stars-component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
=======
>>>>>>> aa70b9baa22a13cf0ce30ab6e18dcb686a62242f

function Card({ movie }) {
  const urlImg = "https://image.tmdb.org/t/p/original";

  return (
    <div key={movie.id}>
<<<<<<< HEAD
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
=======
      <img
        src={urlImg + movie.backdrop_path}
        alt="img"
        style={{ width: 250, height: 300, objectFit: "cover" }}
      />
      <p>{movie.title}</p>
>>>>>>> aa70b9baa22a13cf0ce30ab6e18dcb686a62242f
    </div>
  );
}

export default Card;
