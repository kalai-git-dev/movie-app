import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Credits() {
  const [isLoading, setIsLoading] = useState(true);
  const [credits, setCredits] = useState([]);

  const urlImg = "https://image.tmdb.org/t/p/w500";

  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=0c768e12c4195fb75249a2aa9748f0a1`
      );
      //   console.log(response.data);
      setCredits(response.data);
      setIsLoading(false);
    };

    fetchData();
  }, [id, credits]);
  return isLoading ? (
    <p>en chargement....</p>
  ) : (
    <div className="credits">
      {credits.cast.slice(0, 6).map((credit) => {
        return (
          <div className="credit-item" key={credit.id}>
            <img
              className="credit-image"
              src={urlImg + credit.profile_path}
              alt={credit.name}
            />

            <p className="credit-character"> {credit.character}</p>
            <h3 className="credit-name">{credit.name}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default Credits;
