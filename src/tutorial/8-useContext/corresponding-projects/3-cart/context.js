import React, { useState, useContext, useReducer, useEffect } from "react";
//data for initial state
import cartItems from "./data";
//reducer
import reducer from "./reducer";
//URL for fetching 3.4.
const url = "https://course-api.com/react-useReducer-cart-project";
//--------------------
//Context
//1.1.create a Context object by using React.CreateContext
const AppContext = React.createContext();
// This AppContext object is what should be passed
//as an argument into the useContext Hook.
//1.2. see below =>
// export const useGlobalContext = () => {
//   return useContext(AppContext);
// };
//-------------------------

// 1a Initial state Object for useReducer
const initialState = {
  loading: false,
  //------------
  //cartItems object if no fetching:
  //{id, title, price, img, amount} from data.js
  cart: cartItems,
  //OR for fetching:
  //cart: [],
  //-----------
  //total price
  total: 0,
  //items amount for bag/cart
  amount: 0,
};

//=========================
//2
//create Provider
//provides {children} for whole App
const AppProvider = ({ children }) => {
  //useReducer is looking for:
  //reducer function from reducer.js &
  //initial state (1a)
  const [state, dispatch] = useReducer(reducer, initialState);
  //==========================
  //3 FUNCTIONALITY:
  //functions dispatch ACTIONS =>
  //funcs provide to App.Provider =>
  //deal with ACTION in reducer.js
  //-----------------------
  //3.1 clear all items from the Cart
  //clearCart btn
  const clearCart = () => {
    //dispatch action object
    dispatch({ type: "CLEAR_CART" });
  }; //3.1.1. AppProvider value => reducer.js
  //-----------------------------
  //3.2 remove single item from the cart
  //id = which item remove
  const remove = (id) => {
    //dispatch action object
    //payload: item id
    dispatch({ type: "REMOVE", payload: id });
  }; //3.2.1. AppProvider value => reducer.js
  //------------------------
  //3.3 +/- amount in the Cart
  //id = which item to increase
  const increase = (id) => {
    //dispatch action object
    //payload: item id
    dispatch({ type: "INCREASE", payload: id });
  }; //3.3.1. AppProvider value => reducer.js
  const decrease = (id) => {
    dispatch({ type: "DECREASE", payload: id });
  };
  //OR toggle amount
  //id===item id
  //type===> incerasing/decreasing
  const toggleAmount = (id, type) => {
    //dispatch action object
    dispatch({
      type: "TOGGLE_AMOUNT",
      //item id + increasing/decreasing
      payload: { id, type },
    }); //3.3.1. AppProvider value => reducer.js
  };

  //================================
  // 3.4 fetching data
  const fetchData = async () => {
    //dispatch for loading
    dispatch({ type: "LOADING" });
    //fetch data
    const response = await fetch(url);
    const cart = await response.json();
    //dispatch for dispaying the items
    dispatch({
      type: "DISPLAY_ITEMS",
      //cart===data
      payload: cart,
    });
  };
  // 4.2. call fetchData() only when app renders
  useEffect(() => {
    fetchData();
  }, []);
  //==============================
  // 4.1
  //when increase/decrease amount, remove item
  //or clear cart => call this useEffect
  useEffect(() => {
    //dispatch action object
    dispatch({ type: "GET_TOTALS" });
    //state.cart==={id, title, price, amount, img}
  }, [state.cart]); //4.1.1. AppProvider '...state' value => reducer.js

  //=======================================
  //2.1.
  //return AppContext.Provider & children
  //Any updates on the Provider will trigger a
  //rerender with the updated context value.
  return (
    <AppContext.Provider
      //pass value to children (for whole App)
      value={{
        //spread out all state =>{loading, cart, total, amount}
        ...state,
        //functions
        //3.1. clear Cart from all Items CartContainer Component
        clearCart,
        //3.2. remove one Item CartItem Component
        remove,
        // 3.3. +/- amount in the cart CartItem Component
        increase,
        decrease,
        // CartItem Component
        toggleAmount,
      }}
    >
      {/* All Components*/}
      {children}
    </AppContext.Provider>
  );
};
//----------------------
//1.2. custom Hook:
//useGlobalContext provides both a consumer and
//a provider. When using the useContext Hook,
//you have to pass in the whole context object,
//not just the consumer or provider.
export const useGlobalContext = () => {
  //AppContext Object from createContext()
  // is what should be passed as
  //an argument into the useContext Hook.
  return useContext(AppContext);
};

export { AppContext, AppProvider };
