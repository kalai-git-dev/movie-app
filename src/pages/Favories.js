import React from "react";
import Card from "../components/Card";

function Favories({ movieFav }) {
  return (
    <div>
      <h2 className="bestFilms__title">meilleurs films en 2020</h2>
      {movieFav.map((movie) => {
        return <Card key={movie.id} movie={movie} />;
      })}
    </div>
  );
}

export default Favories;
