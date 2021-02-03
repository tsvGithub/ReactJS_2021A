import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Hero from "./Hero";
import Submenu from "./Submenu";
//context
import { AppProvider } from "./context";

import "./styles.css";

function Main() {
  return (
    //wrap whole App in Provider
    <AppProvider>
      <>
        <Navbar />
        <Sidebar />
        <Hero />
        <Submenu />
      </>
    </AppProvider>
  );
}

export default Main;
