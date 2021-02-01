import React from "react";

function Movie({ movie }) {
  const urlImg = "https://image.tmdb.org/t/p/original";

  return (
    <div key={movie.id}>
      <img
        src={urlImg + movie.backdrop_path}
        alt="img"
        style={{ width: 250, height: 300, objectFit: "cover" }}
      />
      <p>{movie.title}</p>
    </div>
  );
}

export default Movie;
