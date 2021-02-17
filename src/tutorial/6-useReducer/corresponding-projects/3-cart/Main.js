import React from "react";
//Context---------------
import { AppProvider } from "./context";
//Components----------------
import Navbar from "./Navbar";
import CartContainer from "./CartContainer";
//CSS-----------------
import "./styles.css";

function Main() {
  return (
    //wrap whole App in Provider
    <AppProvider>
      <main>
        <Navbar />
        <CartContainer />
      </main>
    </AppProvider>
  );
}

export default Main;
