import React from "react";
import { useGlobalContext } from "./context";

// V
const SearchForm = () => {
  //destructuring context
  const { query, handleSearch } = useGlobalContext();

  return (
    <form
      //prevent from default reaload
      onSubmit={(e) => e.preventDefault()}
      className="serch-form"
    >
      <h2>search hacker news</h2>
      <input //controlled input
        type="text"
        className="form-input"
        //search value
        value={query}
        //(4) when typing in form => invoke handleSearch
        onChange={(e) => handleSearch(e.target.value)}
      />
    </form>
  );
};

export default SearchForm;
