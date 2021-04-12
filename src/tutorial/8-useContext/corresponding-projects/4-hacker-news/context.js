import React, { useContext, useEffect, useReducer } from "react";

import { SET_LOADING, SET_STORIES, REMOVE_STORY, HANDLE_PAGE, HANDLE_SEARCH } from "./actions";
import reducer from "./reducer";

const API_ENDPOINT = "https://hn.algolia.com/api/v1/search?";

const initialState = {};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  return (
    <AppContext.Provider
      //
      value="hello"
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppProvider);
};

export { AppContext, AppProvider };
