import React from "react";

function Cardslider({ movie }) {
  const urlImg = "https://image.tmdb.org/t/p/w500";
  const voteColor = (number) => {
    let str = " ";
    if (number > 7.5) {
      str = "vote green";
    } else if (number > 5) {
      str = "vote orange";
    } else {
      str = "vote red";
    }
    return str;
  };
  return (
    <div className="card-slider">
      <img
        src={urlImg + movie.poster_path}
        alt="img"
        style={{ width: 250, height: 300 }}
      />

      <p className={voteColor(movie.vote_average)}>{movie.vote_average}</p>

      <p>{movie.title}</p>
    </div>
  );
}

export default Cardslider;
