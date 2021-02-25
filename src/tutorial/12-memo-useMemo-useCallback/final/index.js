import React, { useState, useCallback, useMemo } from "react";
import { useEffect } from "react";
//-------------------
//data fetch custom hook + API (url)
import { useFetch } from "../../9-custom-hooks/final/2-useFetch";
const url = "https://course-api.com/javascript-store-products";
//------------------------

//!!!NB!!!
// every time props or state changes,
//component re-renders

//find out what is the most expensive item:
const calculateMostExpensive = (data) => {
  return (
    //check highest value of the price:
    data.reduce((total, item) => {
      const price = item.fields.price;
      if (price >= total) {
        total = price;
      }
      return total;
    }, 0) / 100
  );
};

// I
//INDEX COMPONENT
const Index = () => {
  //1.get back products from fetch with loading
  const { products } = useFetch(url);
  //1.set Count state
  const [count, setCount] = useState(0);
  //1. set Cart state
  const [cart, setCart] = useState(0);

  //===========USE CALLBACK=============
  //useCallback for functions
  //if the value of the function changed =>
  //recreate this function and rerender component!
  //If it doesn't changed => no need
  // recreate this function from the
  //scratch and rerender component
  const addToCart = useCallback(
    () => {
      //update state
      setCart(cart + 1);
    },
    //create this function when cart state changes
    [cart]
  );

  //============================
  //===========USEMEMO===============
  //useMemo memorizes the value of function
  const mostExpensive =
    //useMemo deals with the value
    useMemo(
      () =>
        //callback func
        calculateMostExpensive(products),
      //when products (data) changed call this function
      [products]
    );

  //======================
  //=======================
  //2.
  return (
    <>
      <h1>Count : {count}</h1>
      <button
        className="btn"
        //2.1.
        onClick={() => setCount(count + 1)}
      >
        click me
      </button>

      <h1 style={{ marginTop: "3rem" }}>
        {/* cart from state*/}
        cart : {cart}
      </h1>

      {/* */}
      <h1>Most Expensive : ${mostExpensive}</h1>
      {/*BIGLIST Component */}
      <BigList
        //products === fetched data in the state
        products={products}
        //
        addToCart={addToCart}
      />
    </>
  );
};
//====================================
//------------------------------------------
//======================

// II  BIGLIST COMPONENT
//===================REACT.MEMO===============
//React.memo for state value (props):
//REACT.MEMO memorizes state value: if PROPS value is
//not changed, then doesn't trigger re-render!
//and SingleProduct component is also not affected
const BigList =
  //wpap whole component in "memo" function
  React.memo(
    ({
      //state
      products,
      //changes products
      addToCart,
    }) =>
      //
      {
        // useEffect(() => {
        //   console.count('hello from big list');
        // });

        return (
          <section className="products">
            {/*iterate over products array
            and return for each product SingleProduct component 
            */}
            {products.map((product) => {
              return (
                <SingleProduct
                  //key
                  key={product.id}
                  //spread out all state values of product
                  {...product}
                  //
                  addToCart={addToCart}
                ></SingleProduct>
              );
            })}
          </section>
        );
      }
  );

//=============================
//III SINGLEPRODUCT COMPONENT
//
const SingleProduct = ({ fields, addToCart }) => {
  //destructuring from fields
  let { name, price } = fields;
  //
  price = price / 100;
  //
  const image = fields.image[0].url;
  //
  // useEffect(() => {
  //   console.count('hello from product');
  // });
  return (
    <article className="product">
      {/* */}
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>${price}</p>
      <button
        //
        onClick={addToCart}
      >
        add to cart
      </button>
    </article>
  );
};

export default Index;
