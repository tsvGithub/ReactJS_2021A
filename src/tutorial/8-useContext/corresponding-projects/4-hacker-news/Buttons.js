import React from "react";
import { useGlobalContext } from "./context";

// VI
const Buttons = () => {
  //destructuring context: page===currrent page;
  //nbPages===total number of pages
  const { isLoading, page, nbPages, handlePage } = useGlobalContext();
  return (
    <div className="btn-container">
      <button
        //disable on loading => while loaging is true can't press button again
        disabled={isLoading}
        //invoke handlePage
        onClick={() => handlePage("dec")}
      >
        prev
      </button>
      <p>
        {/* first page is  (0 + 1)*/}
        {page + 1} of {nbPages}
      </p>
      <button
        //disable on loading => while loaging is true can't press button again
        disabled={isLoading}
        //invoke handlePage
        onClick={() => handlePage("inc")}
      >
        next
      </button>
    </div>
  );
};

export default Buttons;
