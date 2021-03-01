import React from "react";
import { useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom";
import axios from "axios";

function Header({ setSearch, search, setMovies, movieFav }) {
  const history = useHistory();
  const handlesubmit = async (event) => {
    event.preventDefault();
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=0c768e12c4195fb75249a2aa9748f0a1&language=en-US&query=${search}`
    );
    console.log(response.data.results);
    setMovies(response.data.results);
    setSearch("");
  };

  return (
    <div className="header">
      <p
        className="logo"
        onClick={() => {
          history.push("/");
        }}
      >
        APP <span>MOVIES</span>
      </p>
      <form onSubmit={handlesubmit}>
        <input
          value={search}
          type="text"
          placeholder="Search"
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        />
        <button
          onClick={() => {
            history.push("/search");
          }}
        >
          search
        </button>
      </form>
      <div className="navigation">
        <NavLink to="/movies" exact activeClassName="selected">
          MOVIES
        </NavLink>
        <NavLink to="/topRated" exact activeClassName="selected">
          TOP RATED
        </NavLink>
        {movieFav.length > 0 ? (
          <NavLink to="/favorite" exact activeClassName="selected">
            Favories...
          </NavLink>
        ) : (
          <NavLink to="/favorite" exact ClassName="not-selected">
            Favories...
          </NavLink>
        )}
      </div>
    </div>
  );
}

export default Header;
