import React from "react";
import { useGlobalContext } from "./context";

// IV
const Stories = () => {
  //pass context
  const { isLoading, hits, removeStory } = useGlobalContext();

  //if loading
  if (isLoading) {
    return <div className="loading"></div>;
  }
  //if not loading
  return (
    <section className="stories">
      {/*display every story*/}
      {hits.map((story) => {
        //destructuring properties from the response 'story'
        const { objectID, title, num_comments, url, points, author } = story;
        return (
          <article key={objectID} className="story">
            <h4 className="title">{title}</h4>
            <p className="info">
              {points} points by <span>{author} | </span>
              {num_comments}
              comments
            </p>
            <div>
              {/*'url' from response*/}
              <a href={url} className="read-link" target="_blank" rel="noopener noreferrer">
                read more
              </a>
              <button
                //'removeStory' from (3)context
                //pass in an id==='objectID'
                //3c
                onClick={() => removeStory(objectID)}
                className="remove-btn"
              >
                remove
              </button>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default Stories;
