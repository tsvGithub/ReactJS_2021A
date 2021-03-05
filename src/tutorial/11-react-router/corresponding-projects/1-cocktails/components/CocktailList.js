import React from "react";
import Cocktail from "./Cocktail";
import Loading from "./Loading";
import { useGlobalContext } from "../context";

// VIII. // see IX Cocktail.js
const CocktailList = () => {
  //1. state
  //destructuring cocktails array & loading from global context
  const { cocktails, loading } = useGlobalContext();

  //2.
  //if loading
  if (loading) {
    return <Loading />;
  }
  //3.
  //if the 'cocktails' is empty array:
  if (cocktails.length < 1) {
    return <h2 className="section-title">no cocktails matched your search criteria</h2>;
  }
  //4.
  return (
    <section className="section">
      <h2 className="section-title">cocktails</h2>
      <div className="cocktails-center">
        {/*iterate over cocktails array */}
        {cocktails.map((item) => {
          //return single Cocktail
          return (
            <Cocktail
              key={item.id}
              //spread out all properties
              {...item}
            />
          );
        })}
      </div>
    </section>
  );
};

export default CocktailList;
