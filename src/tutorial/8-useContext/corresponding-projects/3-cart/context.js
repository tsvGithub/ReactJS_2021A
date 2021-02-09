import React, { useState, useContext, useReducer, useEffect } from "react";
//data
import cartItems from "./data";
//
import reducer from "./reducer";
//URL
const url = "https://course-api.com/react-useReducer-cart-project";
//Context
//1.1.create a Context object by using React.CreateContext
const AppContext = React.createContext();
// This AppContext object is what should be passed
//as an argument into the useContext Hook.
//1.2. see below =>
// export const useGlobalContext = () => {
//   return useContext(AppContext);
// };

//state
const initialState = {
  loading: false,
  cart: cartItems,
  total: 0,
  amount: 0,
};

const AppProvider = ({ children }) => {
  // const [cart, setCart] = useState(cartItems);
  const [state, dispatch] = useReducer(reducer, initialState);
  //-----------
  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };
  const remove = (id) => {
    dispatch({ type: "REMOVE", payload: id });
  };
  const increase = (id) => {
    dispatch({ type: "INCREASE", payload: id });
  };
  const decrease = (id) => {
    dispatch({ type: "DECREASE", payload: id });
  };
  const fetchData = async () => {
    dispatch({ type: "LOADING" });
    const response = await fetch(url);
    const cart = await response.json();
    dispatch({ type: "DISPLAY_ITEMS", payload: cart });
  };
  const toggleAmount = (id, type) => {
    dispatch({ type: "TOGGLE_AMOUNT", payload: { id, type } });
  };
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    dispatch({ type: "GET_TOTALS" });
  }, [state.cart]);

  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        remove,
        increase,
        decrease,
        toggleAmount,
      }}
    >
      {/* Components*/}
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
