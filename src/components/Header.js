import React from "react";
import { useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Header({ setSearch, handlesubmit, search }) {
  const history = useHistory();
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
            history.push("/movies/search");
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
        <NavLink to="/favorite" exact activeClassName="selected">
          Favories...
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
