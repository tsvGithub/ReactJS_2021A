import React from "react";
import { Link } from "react-router-dom";
// III
const Error = () => {
  return (
    <div>
      <h1>Error Page</h1>
      {/*link to 'home' */}
      <Link to="/" className="btn">
        Back Home
      </Link>
    </div>
  );
};

export default Error;
