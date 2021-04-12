import React from "react";
import SearchForm from "./SearchForm";
import Stories from "./Stories";
import Buttons from "./Buttons";

import "./styles.css";
//
import { AppProvider } from "./context";

const Main = () => {
  return (
    <>
      <AppProvider>
        <SearchForm />
        <Buttons />
        <Stories />
      </AppProvider>
    </>
  );
};

export default Main;
