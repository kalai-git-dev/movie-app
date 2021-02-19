import React from "react";

function Cardslider({ movie }) {
  const urlImg = "https://image.tmdb.org/t/p/w500";
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
    <div className="card-slider">
      {movie.poster_path ? (
        <img
          src={urlImg + movie.poster_path}
          alt="img"
          style={{ width: 250, height: 300 }}
        />
      ) : (
        <img
          src={
            "https://static.dribbble.com/users/895647/screenshots/3861074/008_-_404_1x.png"
          }
          alt="img"
          style={{ width: 250, height: 300 }}
        />
      )}

      <div className={voteColor(movie.vote_average)}>{movie.vote_average}</div>

      <p>{movie.title}</p>
    </div>
  );
}

export default Cardslider;
