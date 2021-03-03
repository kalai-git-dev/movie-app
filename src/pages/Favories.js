import React from "react";
import Card from "../components/Card";

function Favories({ movieFav, setMovieFav }) {
  const removeFavorites = (movie) => {
    const newMovieFav = movieFav.filter((item) => {
      return item.id !== movie.id;
    });
    setMovieFav(newMovieFav);
  };
  console.log(movieFav);
  return (
    <div className="favories">
      <h2>Films Favoris</h2>
      {movieFav.length > 0 ? (
        <div className="favories-container">
          {movieFav.map((movie) => {
            return (
              <Card
                key={movie.id}
                movie={movie}
                handleClick={removeFavorites}
              />
            );
          })}
        </div>
      ) : (
        <p className="empty-favories">La liste de Favoris est vide !!!</p>
      )}
    </div>
  );
}

export default Favories;
