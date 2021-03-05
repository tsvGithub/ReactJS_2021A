import React from "react";
import { Link } from "react-router-dom";

// IV.  // see V. Home.js
const Error = () => {
  return (
    <section className="error-page section">
      <div className="error-container">
        <h1>Sorry, there is a problem!</h1>
        <Link to="/" className="btn btn-primary">
          back home
        </Link>
      </div>
    </section>
  );
};

export default Error;
