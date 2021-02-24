import React from "react";
import productsData from "./productsData";
//for dinamic route
import { useParams } from "react-router-dom";

function ProductDetail(props) {
  //grab product Id
  const { productId } = useParams();
  // console.log(productId)

  const productDetailItem =
    //return only one if item.id is the same as productId
    productsData.find((item) => item.id == productId);
  //path => string;
  //id=number;
  //don't use '===' to compare item.id vs productId!!!
  return (
    <div>
      <h1>Product Detail Page</h1>
      <h3>{productDetailItem.name}</h3>
      <h3>{productDetailItem.price}</h3>
      <p>{productDetailItem.description}</p>
    </div>
  );
}

export default ProductDetail;
