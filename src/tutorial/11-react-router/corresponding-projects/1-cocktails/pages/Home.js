import React from "react";
import CocktailList from "../components/CocktailList";
import SearchForm from "../components/SearchForm";

// V.  // see VI. context.jx
function Home() {
  return (
    <main>
      <SearchForm />
      <CocktailList />
    </main>
  );
}

export default Home;
