import React from "react";
//Components
import CartItem from "./CartItem";
//Context
import { useGlobalContext } from "./context";

const CartContainer = () => {
  //grab state cart, total & clearCart func from Context
  const {
    //state: loading, cart & total
    loading,
    cart,
    total,
    //func removes all items from the Cart
    //3.1. context.js
    clearCart,
  } = useGlobalContext();
  //=============================
  //When loading
  if (loading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }
  //=================
  //If there is no CartItem in the 'bag'(is empty):
  if (cart.length === 0) {
    return (
      <section className="cart">
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }
  //==================================
  //If there is/are item(s)
  return (
    <section className="cart">
      <header>
        <h2>your bag</h2>
      </header>
      <div>
        {/*iterate over items & dispaly each item */}
        {cart.map((item) => {
          return (
            <CartItem
              //cartItem id
              key={item.id}
              //spread out {id, title, price, img, amount} data.js
              {...item}
            />
          );
        })}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            {/*total (for all items in the cart) price: */}
            total <span>€{total}</span>
          </h4>
        </div>
        <button
          //clearCart() from context.js 3.1
          //remove all items from the Cart
          onClick={clearCart}
          className="btn clear-cart"
        >
          clear cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
