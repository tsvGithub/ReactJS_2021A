import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import Photo from "./Photo";
import "./styles.css";

//https://unsplash.com/documentation
//https://unsplash.com/oauth/applications/217507

//https://create-react-app.dev/docs/adding-custom-environment-variables/
//EnvVar
const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`;
//first part of url for default images
const mainUrl = `https://api.unsplash.com/photos/`;
//first part of url for searched images
//API => GET /search/photos
const searchUrl = `https://api.unsplash.com/search/photos/`;

//I => II .env => III Photos.js
const Main = () => {
  //state
  const [loading, setLoading] = useState(false);
  //list of photos (empty array)
  //by default (API) are 10 photos per page
  const [photos, setPhotos] = useState([]);
  //'page' =>  for scrolling
  //'1' is by default from API
  //default 'page' won't change, it
  //always will be '1'
  const [page, setPage] = useState(0);
  //'query'=> is 'search term' from API
  //get value from input
  const [query, setQuery] = useState("");

  //--------------------
  //fetch data
  const fetchImages = async () => {
    setLoading(true);
    //default images or searched images
    let url;

    //dynamically changed page number for 'url'
    const urlPage = `&page=${page}`;
    //search
    const urlQuery = `&query=${query}`;

    //if search =>
    if (query) {
      //searched images:
      //searchUrl=first part of url
      //clientID=env var
      //urlPage= number of current page
      //urlQuery= search term
      url = `${searchUrl}${clientID}${urlPage}${urlQuery}`;
    } else {
      //default images
      //mainUrl = first part of url
      //clientID=env var
      //urlPage=number of current page
      url = `${mainUrl}${clientID}${urlPage}`;
    }

    try {
      //fetch
      const response = await fetch(url);
      const data = await response.json();

      //by default (API) are 10 photos per page
      //currentPhotos => array of 'photos' (10)
      //that are displayed now =>
      setPhotos((currentPhotos) => {
        //if 'search' & at the first page
        if (query && page === 1) {
          //wipe out (уничтожить) old page
          //don't save old 'results'
          return data.results;
          //if searching:
        } else if (query) {
          //spread out all 'photos'
          //if seraching => getting back the 'data'
          //Object with array 'results'
          return [...currentPhotos, ...data.results];
          //if not searching => getting default photos:
        } else {
          //spread out all 'photos'
          //get all 'data'
          return [...currentPhotos, ...data];
        }
      });
      //
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  //--------------------
  //re-fetch images when app is loading or
  //'page' is changed (scrolled)
  useEffect(() => {
    fetchImages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);
  //--------------------
  //run when scroll event is fired
  useEffect(() => {
    //set & remove event listeners:
    const event = window.addEventListener("scroll", () => {
      //before all check 3 values:
      //check inner hight of the window?
      //window.innerHeight — static, the height of the user’s browser window.
      console.log(`innerHeight ${window.innerHeight} `);
      //innerHeight 1174

      //how much we have scrolled?
      //window.scrollY — dynamic property, current scroll position.
      console.log(`scrollY ${window.scrollY} `);
      //scrollY 470.6666564941406

      //what is hight of the document?
      //how big is the body?
      //document.body is the element that contains the content for the document.
      //Returns the height of the document object. In most cases, this is equal
      //to the <body> element of the current document.
      console.log(`body height ${document.body.scrollHeight} `);
      //body height body height 1565

      //if not loading +
      //if (innerHeight + scrollY) is equal to the body.height  =>
      //all content is scrolled (at the end of the document) =>
      //fetch new portion of images &
      if ((!loading && window.innerHeight + window.scrollY) >= document.body.scrollHeight - 10) {
        //set new state for 'page' to the next page
        setPage((currentPage) => {
          // the next page

          if (currentPage === 0) {
            return 2;
          } else {
            return currentPage + 1;
          }
        });
      }
    });
    //when exit => remove event listeners:
    //event 'scroll' and const'event'
    return () => window.removeEventListener("scroll", event);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //----------------------------------------
  const handleSubmit = (e) => {
    e.preventDefault();
    //'1'is default param from API
    //'0' is state value
    //when submit 'query' change '0' to '1'
    setPage(1); //=> invoke useEffect & rerendering
  };
  //===============================
  return (
    <main>
      {/*SEARCH*/}
      <section className="search">
        <form onSubmit={handleSubmit} className="search-form">
          <input
            type="text"
            placeholder="search"
            //state 'query'=> search term
            value={query}
            //change state with new value
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
          {/*iterate over photo list*/}
          {photos.map((image, index) => {
            //spread out all properties of the image
            return <Photo key={index} {...image} />;
          })}
        </div>
        {/*if loading => h2 */}
        {loading && <h2 className="loading">Loading...</h2>}
      </section>
    </main>
  );
};

export default Main;
