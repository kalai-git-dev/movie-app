import React, { useEffect, useState } from "react";
import axios from "axios";

import Carousel, { Dots } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import CardSlider from "../components/CardSlider";
import Loader from "./Loader";

function BestFilms({ bestFilms, setBestFilms }) {
  const [isLoading, setIsLoading] = useState(true);

  const [value, setValue] = useState(0);
  function onChange(value) {
    setValue(value);
  }

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://api.themoviedb.org/3/discover/movie?api_key=0c768e12c4195fb75249a2aa9748f0a1&primary_release_year=2020&sort_by=vote_average.desc"
      );
      // console.log(response.data.results);
      setBestFilms(response.data.results);
      setIsLoading(false);
    };
    fetchData();
  }, [setBestFilms]);

  return isLoading ? (
    <Loader />
  ) : (
    <div className="bestFilms__container">
      <h2 className="bestFilms__title">meilleurs films en 2020</h2>

      <Carousel
        autoPlay={7000}
        // animationSpeed={500}
        value={value}
        onChange={onChange}
        infinite
        slidesPerPage={5}
      >
        {bestFilms.map((movie) => {
          return (
            <div key={movie.id}>
              <CardSlider movie={movie} />
            </div>
          );
        })}
      </Carousel>
      <Dots value={value} onChange={onChange} number={0} />
    </div>
  );
}

export default BestFilms;
