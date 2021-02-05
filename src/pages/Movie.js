import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Credits from "../components/Credits";
import axios from "axios";
<<<<<<< HEAD
import ReactStars from "react-rating-stars-component";
=======
>>>>>>> aa70b9baa22a13cf0ce30ab6e18dcb686a62242f

function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const urlImg = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=0c768e12c4195fb75249a2aa9748f0a1`
      );
<<<<<<< HEAD
      console.log(response.data);
=======
      //   console.log(response.data);
>>>>>>> aa70b9baa22a13cf0ce30ab6e18dcb686a62242f
      setMovie(response.data);
      setIsLoading(false);
    };

    fetchData();
  }, [id]);

  //   console.log(credits.cast.slice(0, 2));

  const countries = (production) => {
    let str = "";
    for (let i = 0; i < production.length; i++) {
      if (i === production.length - 1) {
        str += production[i].name + ".";
      } else {
        str += production[i].name + ",";
      }
    }
    return str;
  };

  return isLoading ? (
    <p>en chargement</p>
  ) : (
    <>
      <div>
        <p>{movie.title}</p>
<<<<<<< HEAD
        <div>
          <span>{movie.vote_average}</span>
          <ReactStars count={movie.vote_average} size={24} color="#F5ED06" />
        </div>
=======
>>>>>>> aa70b9baa22a13cf0ce30ab6e18dcb686a62242f

        <img src={urlImg + movie.poster_path} alt={movie.title} />
        <div className="infos">
          <ul>
            {movie.genres.map((genre) => {
              return <li key={genre.id}>{genre.name}</li>;
            })}
          </ul>
          <p>Pays :{countries(movie.production_countries)}</p>
          <p>Sortie : {movie.release_date}</p>
          <p>Langues : {countries(movie.spoken_languages)}</p>
          <p>Time : {movie.runtime} min</p>
          <p>Description : {movie.overview}</p>
          {movie.homepage && (
            <div>
              <span>Home page :</span>
              <a href={movie.homepage} target="_blank" rel="noreferrer">
                {movie.homepage}
              </a>
            </div>
          )}
        </div>
        <hr />
        <Credits />
      </div>
    </>
  );
}

export default Movie;
//`https://api.themoviedb.org/3/movie/${id}/credits?api_key=0c768e12c4195fb75249a2aa9748f0a1` acteurs

//
