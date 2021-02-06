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
          history.push("/");
        }}
      >
        APP MOVIES
      </p>
      <div className="navigation">
        <NavLink to="/" exact activeClassName="selected">
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
