import React from "react";
import Card from "../components/Card";
function Search({ movies }) {
  return (
    <>
      {movies.map((movie) => {
        return <Card movie={movie} />;
      })}
    </>
  );
}

export default Search;
