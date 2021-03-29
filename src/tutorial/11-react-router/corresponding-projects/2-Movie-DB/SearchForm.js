import React from "react";
import { useGlobalContext } from "./context";

const SearchForm = () => {
  const { query, setQuery, error } = useGlobalContext();
  return (
    <form action="" onSubmit={(e) => e.preventDefault()} className="search-form">
      <h2>search movies</h2>
      <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} className="form-input" />
      {error.show && <div className="error">{error}</div>}
    </form>
  );
};

export default SearchForm;
