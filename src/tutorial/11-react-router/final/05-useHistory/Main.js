import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import ServicesList from "./pages/services/ServicesList";
import ServiceDetail from "./pages/services/ServiceDetail";

import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import "./styles.css";

// The useHistory hook allows us to programmatically go back
// and forward and jump to different spots within in the
// history of our application.
// Note: If you want to just click a button or a link and
// go to another location, use the Link tag.
// However, if you need to perform an operation such as
// running some JS before redirecting to another page, e.g.
// in a login page, then useHistory is the way to go.
// const history = useHistory();

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
