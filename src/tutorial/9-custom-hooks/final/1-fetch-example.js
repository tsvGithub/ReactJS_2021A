import React, { useState, useEffect } from "react";
//CUSTOM HOOK see in 2-useFetch.js
import { useFetch } from "./2-useFetch";

//api for fetching data
const url = "https://course-api.com/javascript-store-products";

//use custom hook in any Component
const Example = () => {
  //============================
  //1 BEFORE CUSTOM HOOKS
  // //1.1. state for fetch data:
  //// loading=>true
  // const [loading, setLoading] = useState(true);
  // //empty array for fetch data
  // const [products, setProducts] = useState([]);
  //--------------------------
  //1.2. Fetch:
  ////fetch data:
  // const getProducts = async () => {
  //   const response = await fetch(url);
  //   const products = await response.json();
  ////set state:
  //   setProducts(products);
  //   setLoading(false);
  // };
  //--------------------------
  //// run useEffect only when app renders:
  // useEffect(() => {
  //   getProducts();
  // }, []);
  // console.log(products);
  //================================

  //2 WITH CUSTOM HOOKS
  //CUSTOM HOOK see in 2-useFetch.js
  //2.1. destructuring an object that is getting
  //from custom hook
  const { loading, products } = useFetch(url);
  // console.log(products);

  return (
    <div>
      <h2>{loading ? "loading..." : "data"}</h2>
    </div>
  );
};

export default Example;
