import React from "react";
//Context
import { useGlobalContext } from "./context";

const Controllers = () => {
  const {} = useGlobalContext();
  return (
    <div>
      <h2>Controllers Component</h2>
    </div>
  );
};

export default Controllers;
