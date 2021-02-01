import React from "react";
import Modal from "./Modal";
import Sidebar from "./Sidebar";
import Home from "./Home";
//
import { AppProvider } from "./context";
import "./styles.css";

// I
function Main() {
  return (
    //wrap all app into Provider
    <AppProvider>
      <div>
        <Home />
        <Modal />
        <Sidebar />
      </div>
    </AppProvider>
  );
}

export default Main;
