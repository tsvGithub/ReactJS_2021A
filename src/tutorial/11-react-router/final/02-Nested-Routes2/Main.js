import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Profile from "./pages/profile/Profile";
import Info from "./pages/profile/Info";
import Settings from "./pages/profile/Settings";

// 1
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from "react-router-dom";

import "./styles.css";

//Nested routes are a way of organizing your application's code by storing routes inside other routes, for example when you have two different components which you may want to render inside another component.
// I
function App() {
  return (
    <Router>
      <div>
        <Header />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          {/*2. nested routes are here*/}
          <Route exact path="/profile">
            <Profile />
          </Route>
          <Route path="/profile/info">
            <Info />
          </Route>
          <Route path="/profile/settings">
            <Settings />
          </Route>
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
