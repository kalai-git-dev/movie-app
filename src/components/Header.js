import React from "react";
<<<<<<< HEAD
import { useHistory } from "react-router-dom";

function Header() {
  const history = useHistory();
  return (
    <div>
      <p
        onClick={() => {
          history.push("/");
        }}
      >
        APP MOVIES
      </p>
      <p
        onClick={() => {
          history.push("/topRated");
        }}
      >
        top Rated
      </p>
=======

function Header() {
  return (
    <div>
      <p>APP MOVIES</p>
      <input type="text" />
>>>>>>> aa70b9baa22a13cf0ce30ab6e18dcb686a62242f
    </div>
  );
}

export default Header;
