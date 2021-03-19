import React, { useState, useEffect } from "react";
import { useFetch } from "./useFetch";
import Follower from "./Follower";

import "./styles.css";

// I => II Follower.js
const Main = () => {
  //1
  //loading & data from custom hook
  const { loading, data } = useFetch();
  //state
  //
  const [page, setPage] = useState(0);
  //empty array for fetched data
  const [followers, setFollowers] = useState([]);

  //------------------
  //
  useEffect(
    () => {
      if (loading) return;
      //
      setFollowers(data[page]);
    },
    //invoke useEffect when
    //loading or page changed
    [loading, page]
  );

  //
  const nextPage = () => {
    //
    setPage((oldPage) => {
      let nextPage = oldPage + 1;
      //check if index >0 & <arr.length-1
      if (nextPage > data.length - 1) {
        nextPage = 0;
      }
      return nextPage;
    });
  };

  const prevPage = () => {
    //
    setPage((oldPage) => {
      let prevPage = oldPage - 1;
      //
      if (prevPage < 0) {
        prevPage = data.length - 1;
      }
      return prevPage;
    });
  };

  //
  const handlePage = (index) => {
    //
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
          {/*display single item */}
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
        {/*if no 'loading' => return buttons Next & Previous*/}
        {!loading && (
          <div className="btn-container">
            <button
              className="prev-btn"
              //
              onClick={prevPage}
            >
              prev
            </button>
            {/* */}

            {data.map((item, index) => {
              return (
                <button
                  key={index}
                  //
                  className={`page-btn ${index === page ? "active-btn" : null}`}
                  onClick={() => handlePage(index)}
                >
                  {index + 1}
                </button>
              );
            })}
            <button
              className="next-btn"
              //
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
