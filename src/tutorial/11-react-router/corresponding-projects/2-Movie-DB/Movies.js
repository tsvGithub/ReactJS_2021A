import React from "react";
import { useGlobalContext } from "./context";
import { Link } from "react-router-dom";
const url = "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";

//VI
const Movies = () => {
  //movies array & loading from context
  const { movies, isLoading } = useGlobalContext();

  //loading
  if (isLoading) {
    return <div className="loading"></div>;
  }

  //when got movies back:
  return (
    <section className="movies">
      {/* iterate over movies*/}
      {movies.map((movie) => {
        //destructuring movie from OMBDAPI fetched data
        const { imdbID: id, Poster: poster, Title: title, Year: year } = movie;
        //for each 'movie' return Link to SingleMovie page
        //with info about movie
        return (
          //dynamic Link for Route (Main.js)
          //<Route path="/movies/:id" />}
          <Link to={`/movies/${id}`} key={id} className="movie">
            <article>
              {/* if there is no 'poster' =>
                display default poster (url)
                */}
              <img src={poster === "N/A" ? url : poster} alt={title} />
              <div className="movie-info">
                <h4 className="title">{title}</h4>
                <p>{year}</p>
              </div>
            </article>
          </Link>
        );
      })}
    </section>
  );
};

export default Movies;
