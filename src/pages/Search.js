import React from "react";
import Card from "../components/Card";
function Search({ movies }) {
  return (
    <div className="search-page">
      <p>les resultats de recherche :</p>
      <hr />
      <div className="search-card">
        {movies.map((movie) => {
          return <Card movie={movie} />;
        })}
      </div>
    </div>
  );
}

export default Search;
