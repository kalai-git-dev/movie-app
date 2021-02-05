import React from "react";
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
    </div>
  );
}

export default Header;
