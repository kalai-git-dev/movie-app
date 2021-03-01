import React, { useState, useEffect } from "react";
import axios from "axios";

function Genres({ setSelectedValue, selectedValue }) {
  const [genres, setGenres] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://api.themoviedb.org/3/genre/movie/list?api_key=0c768e12c4195fb75249a2aa9748f0a1&language=en-US&with_genres=" +
          selectedValue
      );
      // console.log(response.data.genres);
      setGenres(response.data.genres);
    };
    fetchData();
  }, [selectedValue]);
  // console.log(selectedValue);

  return (
    <div className="genres">
      {genres.map((genre) => {
        return (
          <span
            onClick={() => {
              setSelectedValue(genre.id);
            }}
            className="genres-item"
            key={genre.id}
          >
            {genre.name}
          </span>
        );
      })}
    </div>
  );
}

export default Genres;
