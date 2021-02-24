import React from "react";
// react router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import People from "./People";
import Error from "./Error";
import Person from "./Person";
import Navbar from "./Navbar";
// I
const ReactRouterSetup = () => {
  return (
    <Router>
      {/*2 Navbar for every pages */}
      <Navbar />

      {/*1 Switch the first route that match */}
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/people">
          <People />
        </Route>
        {/*dinamic route: :/... */}
        <Route
          path="/person/:id"
          //childer with Person component
          children={<Person />}
        ></Route>
        {/*for all (*) routes which don't match the routes above */}
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
};

export default ReactRouterSetup;
