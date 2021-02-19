import React from "react";
import { useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Header() {
  const history = useHistory();
  return (
    <div className="header">
      <p
        className="logo"
        onClick={() => {
          history.push("/acceuil");
        }}
      >
        APP <span>MOVIES</span>
      </p>
      <div className="navigation">
        <NavLink to="/movies" exact activeClassName="selected">
          MOVIES
        </NavLink>
        <NavLink to="/topRated" exact activeClassName="selected">
          TOP RATED
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
