import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import ServicesList from "./pages/services/ServicesList";
import ServiceDetail from "./pages/services/ServiceDetail";

import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import "./styles.css";

// useLocation gives us easy access to information about
//the location in your app, i.e. the path that you are
//currently at.
// see ServicesList.js

function App() {
  return (
    <Router>
      <div>
        <Header />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/services" component={ServicesList} />
          <Route path="/services/:serviceId" component={ServiceDetail} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
