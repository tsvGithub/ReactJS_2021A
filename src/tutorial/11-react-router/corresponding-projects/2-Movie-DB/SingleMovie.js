import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { API_ENDPOINT } from "./context";
import useFetch from "./useFetch";

// VIII
const SingleMovie = () => {
  //react router provides useParams hook to
  //get value that is passed in. Once click on
  //the movie => we pass in the 'id' in 'url'
  //grab the 'id' from the useParams
  const { id } = useParams();
  console.log(id); //tt1014759
  //set state:
  const { isLoading, error, data: movie } = useFetch(`&i=${id}`);

  //-------------------
  if (isLoading) {
    return <div className="loading"></div>;
  }
  //----------------
  if (error.show) {
    return (
      <div className="page-error">
        <h1>{error.msg}</h1>
        <Link to="/" className="btn">
          back to movies
        </Link>
      </div>
    );
  }
  //
  const { Poster: poster, Title: title, Plot: plot, Year: year } = movie;
  //-----------------------
  return (
    <section className="single-movie">
      <img src={poster} alt={title} />
      <div className="single-movie-info">
        <h2>{title}</h2>
        <p>{plot}</p>
        <h4>{year}</h4>
        <Link to="/" className="btn">
          back to movies
        </Link>
      </div>
    </section>
  );
};

export default SingleMovie;
