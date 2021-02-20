import React from "react";
//2
import PropTypes from "prop-types";
//3
//default img
//if there is no img in the API
// import defaultImage from "../../../assets/default-image.jpeg";
import defaultImage from "../../../assets/default-image.jpeg";

//II
//destructure props
//1
const Product = ({ image, name, price }) => {
  //only if the image is in the API =>
  //(it means that the image has property 'url'),
  //get back an 'URL'
  const URL = image && image.url;
  return (
    <article className="product">
      {/*use "URL" OR default image from asset */}
      <img
        src={URL || defaultImage}
        //
        alt={name || "default name"}
      />
      <h4>{name}</h4>
      {/*price OR default price */}
      <p>${price || 3.99}</p>
      <p>${price}</p>
    </article>
  );
};

//2.1.
//name of component + property of component(propTypes)
Product.propTypes = {
  //PropTypes=imported from react prop-types
  //img=object; isRequired=true => in console will be warning
  //Warning: Failed prop type
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

//3.1. defaultProps I
Product.defaultProps = {
  //if name/price or img is missing in the API =>
  //use for default:
  name: "default name",
  price: 3.99,
  image: defaultImage,
};

export default Product;
