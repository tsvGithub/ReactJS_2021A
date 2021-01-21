import React, { useEffect } from "react";

//props from state alert===type+msg;
const Alert = ({ type, msg, removeAlert, list }) => {
  //remove Alert
  useEffect(
    () => {
      //timeout before remove Alert
      const timeout = setTimeout(() => {
        //call func-prop from Main.js
        removeAlert();
      }, 3000);
      return () => {
        //
        clearTimeout(timeout);
      };
    },
    //update when list is changed
    [list]
  );
  return (
    <p
      //type==danger/success
      className={`alert alert-${type}`}
    >
      {msg}
    </p>
  );
};

export default Alert;
