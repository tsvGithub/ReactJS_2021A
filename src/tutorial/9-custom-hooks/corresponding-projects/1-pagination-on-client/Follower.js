import React from "react";

//II =>  III utils.js
//1. destructuring props from fetched data
//avartar_url=> img
//html_url => github
//login=> nickname/username
const Follower = ({ avatar_url, html_url, login }) => {
  //2
  return (
    <article className="card">
      {/*image with props avatar_url & login */}
      <img src={avatar_url} alt={login} />
      {/* name with props login */}
      <h4>${login}</h4>
      {/*link with props github */}
      <a href={html_url} className="btn">
        view profile
      </a>
    </article>
  );
};

export default Follower;
