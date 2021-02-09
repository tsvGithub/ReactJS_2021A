import React from "react";
//Context---------------
import { AppProvider } from "./context";
import { useGlobalContext } from "./context";
//Components----------------
import Navbar from "./Navbar";
import CartContainer from "./CartContainer";
//CSS-----------------
import "./styles.css";

function Main() {
  // const { loading } = useGlobalContext();
  // if (loading) {
  //   return (
  //     <div className="loading">
  //       <h1>Loading...</h1>
  //     </div>
  //   );
  // }
  return (
    <AppProvider>
      <main>
        <Navbar />
        <CartContainer />
      </main>
    </AppProvider>
  );
}

export default Main;
