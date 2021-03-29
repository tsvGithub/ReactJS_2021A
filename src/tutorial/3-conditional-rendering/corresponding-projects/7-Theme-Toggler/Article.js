import React from "react";
import moment from "moment";
console.log(moment.locale());
//II
//destructuring props
const Article = ({ title, snippet, date, length }) => {
  console.log(date);
  return (
    <article className="post">
      <h2>{title}</h2>
      <div className="post-info">
        {/*moment.js for date */}
        <span>{moment(date).format("dddd Do MMMM, YYYY")}</span>
        <span>{length} min read</span>
      </div>
      <p>{snippet}</p>
    </article>
  );
};

export default Article;
