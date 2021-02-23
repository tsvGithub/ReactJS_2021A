import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Profile from "./pages/profile/Profile";
//1
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from "react-router-dom";

import "./styles.css";

//Nested routes are a way of organizing your application's code by storing routes inside other routes, for example when you have two different components which you may want to render inside another component.
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
          {/*2. go to  the Profile: nested route is there*/}
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
