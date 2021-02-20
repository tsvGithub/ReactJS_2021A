import React from "react";
import Product from "./Product";
//useFetch see in 'Custom Hook' tutorial!
import { useFetch } from "../../9-custom-hooks/final/2-useFetch";

//url for useFetch
const url = "https://course-api.com/react-prop-types-example";

// I
const Index = () => {
  //get back 'loading' and 'products'
  //pull out only 'products'.No need loading!
  const { products } = useFetch(url);
  return (
    <div>
      <h2>products</h2>
      {/* <img src={defaultImage} /> */}
      <section className="products">
        {/*map over products array */}
        {products.map((product) => {
          //for each 'product'
          //return Product component
          return (
            <Product
              key={product.id}
              //spread all properties from product
              //and pass into the Product component
              {...product}
            />
          );
        })}
      </section>
    </div>
  );
};

export default Index;
