import React from "react";
import ReactStars from "react-rating-stars-component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
function Card({ movie, setMovieFav, movieFav }) {
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
          src={urlImg + movie.poster_path}
          alt="img"
          style={{ width: 300, height: 400 }}
        />

        <p className={voteColor(movie.vote_average)}>{movie.vote_average}</p>

        <p className="card-title">{movie.title}</p>
        <div className="stars">
          <ReactStars count={movie.vote_average} size={24} color="#F5ED06" />
        </div>
      </Link>
      <FontAwesomeIcon
        icon="star"
        className="icon-star"
        // onClick={() => {
        //   let newMovieFav;
        //   for (let i = 0; i < movieFav.length; i++) {
        //     if (movieFav[i].id === movie.id) {
        //       newMovieFav = [...movieFav];
        //       newMovieFav.slice(i, 1);
        //       setMovieFav(newMovieFav);
        //       console.log(newMovieFav);
        //     } else {
        //       newMovieFav = [...movieFav];
        //       newMovieFav.push(movie);
        //       setMovieFav(newMovieFav);
        //       console.log(newMovieFav);
        //     }
        //   }
        // }}
      />
    </div>
  );
}

export default Card;
