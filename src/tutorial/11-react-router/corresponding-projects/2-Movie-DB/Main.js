import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//pages
import Home from "./Home";
import Movie from "./SingleMovie";
//context
import { AppProps } from "/context";
//css
import "./styles.css";

const Main = () => {
  return (
    <AppProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            Home
          </Route>
          <Route path="/movies/:id" children={<Movie />} />
        </Switch>
      </Router>
    </AppProvider>
  );
};

export default Main;
