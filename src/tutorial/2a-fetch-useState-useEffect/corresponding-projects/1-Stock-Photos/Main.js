import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import Photo from "./Photo";
import "./styles.css";

//EnvVar
const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`;
//first part of url for default images
const mainUrl = `https://api.unsplash.com/photos/`;
//first part of url for searched images
const searchUrl = `https://api.unsplash.com/search/photos/`;

const Main = () => {
  //state
  const [loading, setLoading] = useState(false);
  //list of photos (empty array)
  const [photos, setPhotos] = useState([]);
  //
  const [page, setPage] = useState(0);
  const [query, setQuery] = useState("");

  //--------------------
  //fetch data
  const fetchImages = async () => {
    setLoading(true);
    //default images or searched images
    let url;

    const urlPage = `&page=${page}`;
    const urlQuery = `&query=${query}`;

    if (query) {
      //searched images:
      //searchUrl=first part of url
      //clientID=
      //urlPage=
      //urlQuery=
      url = `${searchUrl}${clientID}${urlPage}${urlQuery}`;
    } else {
      //default images
      //mainUrl = first part of url
      //clientID=
      //urlPage=
      url = `${mainUrl}${clientID}${urlPage}`;
    }

    try {
      //fetch
      const response = await fetch(url);
      const data = await response.json();

      setPhotos((oldPhotos) => {
        if (query && page === 1) {
          return data.results;
        } else if (query) {
          return [...oldPhotos, ...data.results];
        } else {
          return [...oldPhotos, ...data];
        }
      });
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  //--------------------
  //run when app is loading or 'page' is changed
  useEffect(() => {
    fetchImages();
  }, [page]);
  //--------------------
  useEffect(() => {
    const event = window.addEventListener("scroll", () => {
      if ((!loading && window.innerHeight + window.scroll) >= document.body.scrollHeight - 2) {
        setPage((oldPage) => {
          return oldPage + 1;
        });
      }
    });
    return () => window.removeEventListener("scroll", event);
  }, []);
  //----------------------------------------
  const handleSubmit = (e) => {
    e.preventDefault();
    setPage(1);
  };
  //===============================
  return (
    <main>
      <section className="search">
        <form className="search-form">
          <input
            type="text"
            placeholder="search"
            //
            placeholdervalue={query}
            //change state
            onChange={(e) => setQuery(e.target.value)}
            className="form-input"
          />
          <button
            type="submit"
            className="submit-btn"
            //
            onClick={handleSubmit}
          >
            <FaSearch />
          </button>
        </form>
      </section>

      <section className="photos">
        <div className="photos-center">
          {photos.map((image, index) => {
            return <Photo key={index} {...image} />;
          })}
        </div>
        {loading && <h2 className="loading">Loading...</h2>}
      </section>
    </main>
  );
};

export default Main;
