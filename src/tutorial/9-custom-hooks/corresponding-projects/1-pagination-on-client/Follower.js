import React from "react";

//II =>  III urils.js
//1. destructuring props from fetched data
//avartar_url=> img
//html_url => github
//login=> nickname/username
const Follower = ({ avatar_url, html_url, login }) => {
  return (
    <article className="card">
      {/*props avatar_url & login */}
      <img src={avatar_url} alt={login} />
      {/*props  login */}
      <h4>${login}</h4>
      {/*props githyb */}
      <a href={html_url} className="btn">
        view profile
      </a>
    </article>
  );
};

export default Follower;
