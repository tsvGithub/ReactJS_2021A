import React, { useState, useContext, useEffect } from "react";
// make sure to use https
import useFetch from "./useFetch";

//OMDB API fetching
//export for search SingleMovie.js
export const API_ENDPOINT = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;

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

//I, V
//II => Main.js; IV Movies.js

//2
//create Provider
//{children} for whole App
const AppProvider = ({ children }) => {
  //1.
  //'query' is for search Form with default value
  const [query, setQuery] = useState("alice");
  //'urlParams' is (search query) `&s=${query}` => query==='alice'
  //for useFetch.js
  const { isLoading, error, data: movies } = useFetch(`&s=${query}`);

  return (
    // V.
    //2.1.
    //return AppContext.Provider & children
    //Any updates on the Provider will trigger a
    //rerender with the updated context value.
    <AppContext.Provider
      //with 'value' pass data
      //pass value to children (for whole App)
      value={{
        isLoading,
        error,
        movies,
        query,
        setQuery,
      }}
    >
      {/* Components*/}
      {/*get children as props & pass childern down */}
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

export { AppContext, AppProvider };
