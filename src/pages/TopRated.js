import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/Card";

function TopRated() {
  const [topRated, setTopRated] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=0c768e12c4195fb75249a2aa9748f0a1&language=en-US&page=1"
      );
      //   console.log(response.data);
      setTopRated(response.data.results);
    };
    fetchData();
  }, []);

  return (
    <>
      {topRated.map((movie) => {
        return <Card movie={movie} key={movie.id} />;
      })}
    </>
  );
}

export default TopRated;
