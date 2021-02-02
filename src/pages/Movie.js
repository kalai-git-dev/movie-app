import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState("");
  const [Credits, setCredits] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=0c768e12c4195fb75249a2aa9748f0a1`
      );
      console.log(response.data);
      setMovie(response.data);
    };

    fetchData();
  }, [id]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=0c768e12c4195fb75249a2aa9748f0a1`
      );
      console.log(response.data);
      setCredits(response.data);
    };

    fetchData();
  }, [id]);
  return (
    <div>
      <div className="infos">{}</div>
    </div>
  );
}

export default Movie;
//`https://api.themoviedb.org/3/movie/${id}/credits?api_key=0c768e12c4195fb75249a2aa9748f0a1` acteurs
