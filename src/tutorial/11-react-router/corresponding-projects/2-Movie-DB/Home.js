import React from "react";
import Form from "./SearchForm";
import Movies from "./Movies";

//Form+Movie will use context.js
//so no need in prop drilling :-)
// IV
//III Error.js, V=>context.js
const Home = () => {
  return (
    <main>
      {/*Search form for movie */}
      <Form />
      {/*display movies for search */}
      <Movies />
    </main>
  );
};

export default Home;
