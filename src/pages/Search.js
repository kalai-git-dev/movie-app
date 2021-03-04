import React from "react";
import Card from "../components/Card";
function Search({ movies, addFavorites }) {
  return (
    <div className="search-page">
      <p>les resultats de la recherche :</p>
      <hr />
      <div className="search-card">
        {movies.map((movie) => {
          return <Card movie={movie} handleClick={addFavorites} />;
        })}
      </div>
    </div>
  );
}

export default Search;
