import React from "react";
//Context
import { useGlobalContext } from "./context";

//props from data.js
const CartItem = ({ id, img, title, price, amount }) => {
  //destructuring items from AppProvider value context.js:
  const {
    //3.2 context.js remove single item from the cart
    remove,
    // 3.3 +/- amount (not used) context.js
    increase,
    decrease,
    //or toggle amount
    toggleAmount,
  } = useGlobalContext();
  return (
    <article className="cart-item">
      <img
        //props
        src={img}
        alt={title}
      />
      <div>
        <h4>
          {/* props*/}
          {title}
        </h4>
        <h4 className="item-price">
          {/*props */}€{price}
        </h4>
        <button
          //remove item (AppProvider value) from 3.2. context.js
          onClick={() => remove(id)}
          className="remove-btn"
        >
          remove
        </button>
      </div>

      <div>
        {/*increase amount */}
        <button
          //3.3. increase amount context.js
          // onClick={() => increase(id)}
          //3.3. toggleAmount context.js
          //id = item id
          //'inc' = 'type' increase context.js
          onClick={() => toggleAmount(id, "inc")}
          className="amount-btn"
        >
          {/* ">"svg */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z" />
          </svg>
        </button>
        <p className="amount">
          {/*props data.js */}
          {amount}
        </p>
        {/*decrease amount */}
        <button
          //3.3. decrease amount context.js
          // onClick={() => decrease(id)}
          //3.3. toggleAmount context.js
          //id= item id
          //'dec'= 'type' decrease context.js
          onClick={() => toggleAmount(id, "dec")}
          className="amount-btn"
        >
          {/* "<"svg  */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </button>
      </div>
    </article>
  );
};

export default CartItem;
