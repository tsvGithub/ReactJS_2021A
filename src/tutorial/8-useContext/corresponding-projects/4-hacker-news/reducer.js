import { SET_LOADING, SET_STORIES, REMOVE_STORY, HANDLE_PAGE, HANDLE_SEARCH } from "./actions";

// III + I (context)

//state before update + action
const reducer = (state, action) => {
  switch (action.type) {
    // (from 2a_context) if loading:
    case SET_LOADING:
      //previous value of state; set isLoading to 'true'
      return { ...state, isLoading: true };

    //(from 2b_context) got fetched data
    case SET_STORIES:
      //change state:
      return {
        //return whole revious state
        ...state,
        //set loading to false
        isLoading: false,
        //(from 2b1_context):
        //populate empty 'hits' array with fetched data
        hits: action.payload.hits,
        //set total number of pages
        //for Buttons component
        nbPages: action.payload.nbPages,
      };

    //(from 3_context)
    //3b
    case REMOVE_STORY:
      return {
        //spread out all old state
        ...state,
        //and update 'hits':
        //filter out story with current ID (payload)
        //If objectID===id from data not matches
        //to 'action payload'===current id =>>>
        //pnly than return that story!
        hits: state.hits.filter((story) => story.objectID !== action.payload),
      };

    //(from 4_context)
    case HANDLE_SEARCH:
      return {
        //spread out state
        ...state,
        //query is an action pay;load
        query: action.payload,
        //for new search
        page: 0,
      };

    //(from 5_context)
    case HANDLE_PAGE:
      //if 'inc'
      if (action.payload === "inc") {
        //set next page state, increasing by 1
        let nextPage = state.page + 1;
        //if current page > then total number
        if (nextPage > state.nbPages - 1) {
          //set back to 0
          nextPage = 0;
        }
        return {
          //spread out all state
          ...state,
          //update 'page' state to 'nextPage'
          page: nextPage,
        };
      }
      if (action.payload === "dec") {
        let prevPage = state.page - 1;
        if (prevPage < 0) {
          //set current page to last page
          prevPage = state.nbPages - 1;
        }
        return { ...state, page: prevPage };
      }

    //if none of cases matches to action.type:
    default:
      //error:
      throw new Error(`no matching "${action.type}" action type`);
  }
};
export default reducer;
