import React, { Component } from "react";
// import Toggler from "./Toggler"
import useToggler from "./useToggler";

// II
function Favorite(props) {
  //set state from custom hook useToggler.js
  //destructure the array [isToggledOn, toggle]
  //from custom hook to use another names
  const [isFavorited, toggle] = useToggler(false);

  return (
    <div>
      <h3>Click heart to favorite</h3>
      <h1>
        <span onClick={toggle}>{isFavorited ? "❤️" : "♡"}</span>
      </h1>
    </div>
  );
}

export default Favorite;
