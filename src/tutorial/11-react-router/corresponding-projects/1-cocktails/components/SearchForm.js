import React from "react";
//looking for setSearchTerm function from context.js
import { useGlobalContext } from "../context";

// VII.+ X. //see VIII. CocktailList.js
//see XI in SingleCocktail.js
//every time we're going to type, we are going to
//invoke the function setSearchTerm and pass in
//the value that is coming from rthe form.

const SearchForm = () => {
  //1. destructuring 'setSearchTerm' from global context
  const { setSearchTerm } = useGlobalContext();
  //X.1.
  // useRef is great for uncontrolled inputs
  const searchValue = React.useRef("");

  //X.4.
  React.useEffect(() => {
    //set focus to the input field
    searchValue.current.focus();
  }, []);

  //X.3. every time user types into input,
  //setSearchTerm will be invoked
  //which in term invoke useEffect with
  //2.3.fetchDrinks() in AppProvider context.js
  function searchCocktail() {
    //set searchTerm to what a user typed in
    console.log(searchValue.current.value);
    setSearchTerm(searchValue.current.value);
  }

  //X.5. prevent submit
  // for not refreshing the APP if press 'enter'
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    //X.2
    <section className="section search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">search your favorite cocktail</label>
          {/**uncontrolled input */}
          <input
            type="text"
            name="name"
            id="name"
            //for useRef hook is good gor uncontrolled input
            ref={searchValue}
            //X.3.
            onChange={searchCocktail}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
