import { useState, useEffect } from "react";
//restart the server
const API_ENDPOINT = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;

//Create custom hook and use it any Component
//for reusability => pass in 'url' argument

//'urlParams' is `&s=${query}` (search query) => query==='alice' from context.js
const useFetch = (urlParams) => {
  //2.2.state for fetch data:
  //state for "loading" => 'true'
  const [isLoading, setIsLoading] = useState(true);
  //'error' is an Object with different properties
  const [error, setError] = useState({ show: false, msg: "" });
  //empty array for fetch data
  const [data, setData] = useState(null);

  //-----------------
  //fetching 'data' when searching
  //pass in 'url'that combined from
  //1)API_ENDPOINT=>`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`
  //2)+ urlParams=> search 'query'in state from forms
  //'alice' for default
  const fetchMovies = async (url) => {
    //before fetching set loading to true
    setIsLoading(true);
    //--------------
    //fetch data
    try {
      const response = await fetch(url);
      //saving response to 'data'
      //it will bw array of data or null`
      const data = await response.json();
      console.log(data); //array

      //------IF OK------------
      //in API key/value are capitalized!!!
      //Response, True, Search etc.
      if (data.Response === "True") {
        //update  state 'data' to searched data
        //or default
        setData(data.Search || data);

        //error false
        setError({ show: false, msg: "" });
      }
      //IF response not 'true' ---------------
      else {
        //in API data has 'Error'
        //set Error in state to 'Error from API
        setError({ show: true, msg: data.Error });
      }
      //set loading to false to display Component
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  //
  useEffect(() => {
    //'url'===`${API_ENDPOINT}${urlParams}`:
    //API_ENDPOINT=>`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`
    //+ urlParams => search 'query' in state ===
    //'alice' for default
    fetchMovies(`${API_ENDPOINT}${urlParams}`);
  }, [urlParams]);
  //run useEffect when loading & searching form
  // input is changed
  //----------------------------------------------------------------
  //return state values object
  return { isLoading, error, data };
};

export default useFetch;
