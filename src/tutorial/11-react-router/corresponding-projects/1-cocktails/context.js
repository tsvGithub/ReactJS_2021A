import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";

//URL for fetching
const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

//1 Global context
//1.1.create a Context object by using React.CreateContext
const AppContext = React.createContext();
// This AppContext object is what should be passed
//as an argument into the useContext Hook.
//1.2. see below =>
// export const useGlobalContext = () => {
//   return useContext(AppContext);
// };

//=========================

// VI. // see VII. SearchForm.js
//2
//create Provider
//{children} for whole App
const AppProvider = ({ children }) => {
  //2.2.STATE
  //state for "loading" => 'true'
  const [loading, setLoading] = useState(true);
  //form & fetch
  const [searchTerm, setSearchTerm] = useState("a");
  //state for 'cocktaiils' => empty array for fetch data
  const [cocktails, setCocktails] = useState([]);

  //-----------------
  //2.3.fetching data
  //===========USE CALLBACK=============
  //useCallback for functions
  //if the value of the function changed =>
  //recreate this function and rerender component!
  //If it doesn't changed => no need
  // recreate this function from the
  //scratch and rerender component

  //with useCallback:to avoid infinite loop
  //if the value of the function changed =>
  //ONLY if a'searchTerm' (ID in fetch) changes
  //[see dependencies array],
  //then run this function
  const fetchDrinks = useCallback(
    async () => {
      //every time we type into input
      //setLoading is false, so we need to set it to true
      setLoading(true);

      //fetch data
      try {
        //fetching: url+serchTerm("a" by default)
        const response = await fetch(`${url}${searchTerm}`);
        //saving response to 'data'
        //it will bw array of data or null`
        const data = await response.json();

        console.log(data); //array

        //destructuring 'drinks' from fetched data
        const { drinks } = data;
        //------IF OK------------
        if (drinks) {
          //map over 'drinks' array
          const newCocktails = drinks.map((item) => {
            //destructure properties from 'drink'object
            const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } = item;
            //return new object:
            return {
              id: idDrink,
              name: strDrink,
              image: strDrinkThumb,
              info: strAlcoholic,
              glass: strGlass,
            };
          });
          // and update 'cocktails' state to newCocktails
          setCocktails(newCocktails);
        }
        //------IF NULL-------------------
        else {
          //if there is no data (null)
          //set state to empty array
          setCocktails([]);
        }
        //--------------------------
        //set loading to false to display Component
        setLoading(false);
      } catch (error) {
        //======IF ERROR==================
        //ERROR
        console.log(error);
        //set Loading to false to display Error Component
        setLoading(false);
      }
    },
    //=========================
    //only if searchTerm changes, run this function
    [searchTerm]
  );

  //2.4. call fetchDrinks() only when app renders,
  //searchTerm updates or fetchDrinks called
  useEffect(
    () => {
      //2.3
      fetchDrinks();
    }, //every time something is changed
    //in a SearchTerm => invoke fetchDrinks()
    //when SearchTerm changes, it also changes fetchDrinks
    [searchTerm, fetchDrinks]
  );
  //=======================================
  return (
    //2.1.
    //return AppContext.Provider & children
    //Any updates on the Provider will trigger a
    //rerender with the updated context value.
    <AppContext.Provider
      //2.5. pass value to children (for whole App)
      value={{
        //spread out state =>{loading, cocktails, searchTerm, setSearchTerm}
        loading,
        cocktails,
        setSearchTerm,
      }}
    >
      {/* Components*/}
      {children}
    </AppContext.Provider>
  );
};

//1.2. custom Hook:
//useGlobalContext provides both a consumer and
//a provider. When using the useContext Hook,
//you have to pass in the whole context object,
//not just the consumer or provider.
export const useGlobalContext = () => {
  //AppContext Object from createContext()
  // is what should be passed as
  //an argument into the useContext Hook.
  return useContext(AppContext);
  //With useContext we consume our context object.
  //Any updates on the Provider will trigger a rerender
  // with the updated context value.
};
//
export { AppContext, AppProvider };
