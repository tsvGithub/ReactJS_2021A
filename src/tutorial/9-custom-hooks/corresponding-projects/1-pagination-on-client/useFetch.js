import { useState, useEffect } from "react";

import paginate from "./utils";
//api for fetching data
const url = "https://api.github.com/users/john-smilga/followers?per_page=100";

//Create custom hook and use it any Component
//for reusability => pass in 'url' argument
export const useFetch = () => {
  //1.1. state for fetch data:
  // loading=>true
  const [loading, setLoading] = useState(true);
  //empty array for fetch data
  const [data, setData] = useState([]);
  //--------------------------
  //1.2. fetch
  const getProducts = async () => {
    const response = await fetch(url);
    const data = await response.json();
    //set state
    //1.2.1.
    //function paginate() from utils.js
    //split up array of 'data' from server
    //into multiple arrays => one for page
    // => set state 'data' to an array of
    //multiple arrays with fetched data

    setData(paginate(data));
    setLoading(false);
  };
  //--------------------------
  //1.3. run useEffect only when app renders:
  useEffect(() => {
    getProducts();
  }, []);
  //--------------------------------

  return {
    //return state values object
    loading,
    data,
  };
};
