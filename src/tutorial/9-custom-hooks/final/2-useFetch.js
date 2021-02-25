import { useState, useEffect, useCallback } from "react";

//CUSTOM HOOK for 1-fetch-example.js

//Create custom hook and use it any Component
//for reusability => pass in 'url' argument
export const useFetch = (url) => {
  //1.1. state for fetch data:
  // loading=>true
  const [loading, setLoading] = useState(true);
  //empty array for fetch data
  const [products, setProducts] = useState([]);

  //1.2. fetch
  // const getProducts = async () => {
  //   const response = await fetch(url);
  //   const products = await response.json();
  //   //set state
  //   setProducts(products);
  //   setLoading(false);
  // };
  //===========USE CALLBACK=============
  //useCallback for functions
  //if the value of the function changed =>
  //recreate this function and rerender component!
  //If it doesn't changed => no need
  // recreate this function from the
  //scratch and rerender component

  //with useCallback:
  const getProducts = useCallback(
    async () => {
      const response = await fetch(url);
      const products = await response.json();
      //set state
      setProducts(products);
      setLoading(false);
    },
    //when url changes:
    [url]
  );
  //--------------------------
  //1.3. run useEffect only when 'url' is changed
  useEffect(() => {
    getProducts();
  }, [url, getProducts]);

  return {
    //return state values object
    loading,
    products,
  };
};
