import React from "react";
//custom hook
import useToggler from "./useToggler";

//III
function Menu(props) {
  //destructuring the array from custom hook
  const [on, toggle] = useToggler(true);
  return (
    <div>
      <button className="btn" onClick={toggle}>
        {on ? "Hide" : "Show"} Menu{" "}
      </button>
      <nav style={{ display: on ? "block" : "none" }}>
        <h6>Signed in as Coder123</h6>
        <p>
          <a>Your Profile</a>
        </p>
        <p>
          <a>Your Repositories</a>
        </p>
        <p>
          <a>Your Stars</a>
        </p>
        <p>
          <a>Your Gists</a>
        </p>
      </nav>
    </div>
  );
}

export default Menu;
