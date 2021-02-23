import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import ServicesList from "./pages/services/ServicesList";
import ServiceDetail from "./pages/services/ServiceDetail";

//A Route which dynamically allows for anything to be put in
//a certain part of the URL by adding a variable into path.
// A variable inside of a Route is known as a route param and
//allows to have one Route which handles any nested routes down the line.

//Dinamic Nested Routes
// 1
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/services">
            <ServicesList />
          </Route>

          {/* Dinamic Nested Routes is ":" */}
          <Route path="/services/:serviceId">
            <ServiceDetail />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default App;
