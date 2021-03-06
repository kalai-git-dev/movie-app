import React, { useState, useEffect } from "react";

import axios from "axios";
import ReactPaginate from "react-paginate";

import Card from "../components/Card";
import Loader from "../components/Loader";

import Genres from "../components/Genres";
import BestFilms from "../components/BestFilms";

function Movies({ setMovieFav, movieFav, movies, setMovies, addFavorites }) {
  const [bestFilms, setBestFilms] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageCount, setPageCount] = useState("");

  const [selectedValue, setSelectedValue] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=0c768e12c4195fb75249a2aa9748f0a1&page=${pageNumber}`
      );
      // console.log(response.data);
      setMovies(response.data.results);
      setIsLoading(false);
      setPageCount(response.data.total_pages);
    };
    fetchData();
  }, [pageNumber, setMovies]);
  // console.log(pageCount);
  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    // console.log(e);
    setPageNumber(selectedPage + 1);
  };

  return isLoading ? (
    <Loader />
  ) : (
    <div className="home">
      <Genres
        selectedValue={selectedValue}
        setSelectedValue={setSelectedValue}
      />
      <BestFilms bestFilms={bestFilms} setBestFilms={setBestFilms} />
      <p className="films">Films</p>

      <div className="container-movies">
        {selectedValue === ""
          ? movies.map((movie) => {
              return (
                <Card
                  setMovieFav={setMovieFav}
                  movieFav={movieFav}
                  key={movie.id}
                  movie={movie}
                  handleClick={addFavorites}
                />
              );
            })
          : movies
              .filter((movie) => movie.genre_ids.includes(selectedValue))
              .map((movie) => {
                return (
                  <Card
                    setMovieFav={setMovieFav}
                    movieFav={movieFav}
                    key={movie.id}
                    movie={movie}
                    handleClick={addFavorites}
                  />
                );
              })}
      </div>

      <ReactPaginate
        previousLabel={"Prev"}
        nextLabel={"Next"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active"}
      />
    </div>
  );
}

export default Movies;
