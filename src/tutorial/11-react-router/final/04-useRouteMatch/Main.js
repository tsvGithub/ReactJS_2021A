import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Profile from "./pages/profile/Profile";

import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from "react-router-dom";

import "./styles.css";

//The useRouteMatch hook helps us to dynamically add {MIDDLE} parts
//of links to minimise the maintenance which would be
//involved with hardcoding them.
// const { path, url } = useRouteMatch();
//see Profile Component
//I
function App() {
  return (
    <Router>
      <div>
        <Header />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
