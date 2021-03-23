import React, { useState, useEffect } from "react";
//CUSTOM HOOK see in useFetch.js
import { useFetch } from "./useFetch";
//one follower
import Follower from "./Follower";

import "./styles.css";

// I => II Follower.js
const Main = () => {
  //1
  //destructuring an object that is getting
  //from custom hook
  const { loading, data } = useFetch();
  //   console.log(data);
  //-----------------
  //state
  //current 'page'
  //initial state for 'page' is 0, because it is a first page
  const [page, setPage] = useState(0);
  //'followers' for current 'page' (initially is
  //empty array for fetched data)
  const [followers, setFollowers] = useState([]);

  //------------------
  useEffect(
    () => {
      //if loading & there is no data => do nothing;
      if (loading) return;
      //when app is loaded => grab a certain page out
      //of the whole list. Whole list is 'data',
      //first 'page' is 0 by default, =>
      // set 'followers' to 'data[0]' or
      //'data[dynamically]'
      setFollowers(data[page]);
    },
    //run useEffect when loading or 'page' changed
    [loading, page]
  );
  //--------------
  //
  const nextPage = () => {
    //set 'page' state:
    //'currentPage' is current 'page' value
    //by default currentPage = page[0]
    setPage((currentPage) => {
      //current 'page' value + 1 => 0+1=1
      let nextPage = currentPage + 1;
      //check if 'nextPage' is bigger than
      //'data'.length -1 (it is last index) =>
      //than set nextPage to '0' <= first of array.
      if (nextPage > data.length - 1) {
        nextPage = 0;
      }
      //set 'page' to 'nextPage'
      return nextPage;
    });
  };

  const prevPage = () => {
    //set 'page' state:
    //'currentPage' is current 'page' value
    //by default currentPage = page[0]
    setPage((currentPage) => {
      //current 'page' value - 1 => 12-1=11
      let prevPage = currentPage - 1;
      //if 'prevPage' is less than 0
      //than set 'prevPage' to last item in the array
      if (prevPage < 0) {
        prevPage = data.length - 1;
      }
      //set 'page' to 'prevPage'
      return prevPage;
    });
  };
  //-----------------
  //controls which page is showing:
  //'index' is from the button (0,1,2...12)
  //click on the btn, grab the 'index'
  //and pass it to set 'page' state
  const handlePage = (index) => {
    //set 'page'['index'] => default is
    //page[0]
    setPage(index);
  };

  //========================
  //2
  return (
    <main>
      <div className="section-title">
        {/*dinamic ttile */}
        <h1>{loading ? "loading..." : "pagination"}</h1>
        <div className="underline"></div>
      </div>

      <section className="followers">
        <div className="container">
          {/*display single item for every follower */}
          {followers.map((follower) => {
            return (
              <Follower
                key={follower.id}
                //spread out all data
                {...follower}
              />
            );
          })}
        </div>
        {/*only if no 'loading' => 
        display buttons Next & Previous*/}
        {!loading && (
          <div className="btn-container">
            <button
              className="prev-btn"
              //previous page
              onClick={prevPage}
            >
              prev
            </button>
            {/*
            Array of 'page' buttons 1-2-3-...-12
            Amount of btns depends on how many 'pages' are.
            
            Iterate over 'data'list = array of arrays and
            each array represents one 'page'.
            -'items' is 'array of arrays' & not needed here;
            -'index' is index of that 'array of arrays'
            and is needed to show index of which 'page' is 
            actually rendering.
            */}
            {data.map((item, index) => {
              return (
                <button
                  key={index}
                  //if 'index' matches current 'page' value
                  // => 'active' class for css
                  className={`page-btn ${index === page ? "active-btn" : null}`}
                  //controlls which page is showing
                  //on click grabs 'index' from the btn
                  onClick={() => handlePage(index)}
                >
                  {/*because array starts from '0' => 
                  index+1=0+1=1 => now starts from '1'
                  */}
                  {index + 1}
                </button>
              );
            })}
            <button
              className="next-btn"
              //next page
              onClick={nextPage}
            >
              next
            </button>
          </div>
        )}
      </section>
    </main>
  );
};

export default Main;
