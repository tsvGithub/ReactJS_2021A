import React, { useContext, useEffect, useReducer } from "react";

//in 'actions' live all actions and here use variables
import { SET_LOADING, SET_STORIES, REMOVE_STORY, HANDLE_PAGE, HANDLE_SEARCH } from "./actions";
import reducer from "./reducer";

// I + III (reducer)

//search endpoint
const API_ENDPOINT = "https://hn.algolia.com/api/v1/search?";

const initialState = {
  isLoading: true,
  //'hits' === getting back results array with objects from API
  hits: [],
  //'query'=== search; default query is 'react'
  query: "react",
  //page number from API for pagination;
  //default is 0
  page: 0,
  //numberOfPages => default is 0
  nbPages: 0,
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  //1)
  const [state, dispatch] = useReducer(reducer, initialState);

  //2)
  //fetch data with 'url' parameter &
  //'url' will construct in 'useEffect' (3)
  const fetchStories = async (url) => {
    //2a) +2a)reducer
    //to reducer dispatch action set loading:
    //set isLoading to true
    dispatch({ type: SET_LOADING });

    //2b) + 2b)reducer: fetch
    try {
      //fetching
      const response = await fetch(url);
      const data = await response.json();
      //when got data, dispatch another action:
      dispatch({
        //send to reducer dispatch action: set stories
        type: SET_STORIES,
        //2b1) pass in payload with data for reducer
        payload: {
          //fetched array with data
          hits: data.hits,
          //number of pages
          nbPages: data.nbPages,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  //(for 3_reducer)
  //3a
  const removeStory = (id) => {
    dispatch({
      //object type: variable name
      type: REMOVE_STORY,
      //payload => id for remove
      payload: id,
    });
  };

  //(for 4_reducer)
  const handleSearch = (query) => {
    //console.log
    dispatch({
      //dispatch action for reducer
      type: HANDLE_SEARCH,
      //payload is search
      payload: query,
    });
  };

  //(for 5_reducer)
  const handlePage = (value) => {
    dispatch({
      //name of action
      type: HANDLE_PAGE,
      //value = 'inc' or 'dec'
      payload: value,
    });
  };

  //03) construct 'url' for 'fetchStories" (2)
  useEffect(
    () => {
      //https://hn.algolia.com/api/v1/search?
      //+ 'query'(serach) state value (default is 'react')
      //+ 'page' (first page in state by default is 0)
      fetchStories(`
      ${API_ENDPOINT}query=${state.query}&page=${state.page}`);
    },
    //update when value in query is changed or
    //when page value is changed
    [state.query, state.page]
  );

  //
  return (
    <AppContext.Provider value={{ ...state, removeStory, handleSearch, handlePage }}>{children}</AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

//
export { AppContext, AppProvider };
