import React from "react";
import { useGlobalContext } from "./context";

//VII
const SearchForm = () => {
  //setQuery =>onChange in controlled input
  const { query, setQuery, error } = useGlobalContext();
  return (
    <form
      className="search-form"
      //just prevents default behavior
      //from refreshing page
      onSubmit={(e) => e.preventDefault()}
    >
      <h2>search movies</h2>
      <input
        type="text "
        className="form-input"
        //typed in value
        value={query}
        //controlled input: set 'query' in state
        //with typed in value
        onChange={(e) => setQuery(e.target.value)}
      />
      {/*error is an object with properties 'show' and 'msg'
      if error.show is true (from API) => 
      display div 'error' and error 'msg'
      */}
      {error.show && <div className="error">{error.msg}</div>}
    </form>
  );
};

export default SearchForm;
