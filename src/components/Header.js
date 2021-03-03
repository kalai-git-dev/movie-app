import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom";
import ReorderIcon from "@material-ui/icons/Reorder";
import CancelIcon from "@material-ui/icons/Cancel";

import axios from "axios";

function Header({ setSearch, search, setMovies }) {
  const [showMenu, setShowMenu] = useState(false);
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
      <div className="header-left">
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
            className="input-search"
            value={search}
            type="text"
            placeholder="Search"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
          <button
            className="button-search"
            onClick={() => {
              history.push("/search");
            }}
          >
            search
          </button>
        </form>
      </div>

      <div className={showMenu ? "navigation active" : "navigation"}>
        <NavLink
          to="/movies"
          exact
          activeClassName="selected"
          onClick={() => {
            setShowMenu(false);
          }}
        >
          MOVIES
        </NavLink>
        <NavLink
          to="/topRated"
          exact
          activeClassName="selected"
          onClick={() => {
            setShowMenu(false);
          }}
        >
          TOP RATED
        </NavLink>

        <NavLink
          to="/favorite"
          exact
          activeClassName="selected"
          onClick={() => {
            setShowMenu(false);
          }}
        >
          FAVORIS...
        </NavLink>
      </div>
      <div
        className="burger-icon"
        onClick={() => {
          setShowMenu(!showMenu);
        }}
      >
        {showMenu ? (
          <CancelIcon style={{ fontSize: 40, color: "white" }} />
        ) : (
          <ReorderIcon style={{ fontSize: 40, color: "white" }} />
        )}
      </div>
    </div>
  );
}

export default Header;
