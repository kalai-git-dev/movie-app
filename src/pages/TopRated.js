import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";

function TopRated() {
  const [topRated, setTopRated] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageCount, setPageCount] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=0c768e12c4195fb75249a2aa9748f0a1&language=en-US&page=${pageNumber}`
      );
      console.log(response);
      setTopRated(response.data.results);

      setPageCount(response.data.total_pages);
    };
    fetchData();
  }, [pageNumber]);

  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    console.log(e);
    setPageNumber(selectedPage + 1);
  };

  return (
    <div className="topRated">
      <p className="toprated__title">Films mieux notés</p>
      <div className="container-movies">
        {topRated.map((movie) => {
          return (
            <Link to={`/movie/${movie.id}`} key={movie.id}>
              <Card movie={movie} />
            </Link>
          );
        })}
      </div>
      <ReactPaginate
        previousLabel={"prev"}
        nextLabel={"next"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={4}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active"}
      />
    </div>
  );
}

export default TopRated;
