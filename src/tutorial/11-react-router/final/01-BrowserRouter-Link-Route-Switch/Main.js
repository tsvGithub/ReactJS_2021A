import React from "react";
//1.
//To use React Router, add the react-router-dom dependancy.
//Set up the browser router around app.
//Router is a Component and Context Provider:
import { BrowserRouter as Router } from "react-router-dom";
//2. Link is like 'a' in HTML for moving to any route into SPA
//3. Switch is like 'switch' in JS to switch between Routes
//4. Route to render
import { Link, Route, Switch } from "react-router-dom";

import About from "./About";
import Home from "./Home";
import Contact from "./Contact";

// I
function App() {
  return (
    //1.2.Router is a Component and Context Provider:
    //   return (
    //   <RouterContext.Provider
    //     children={this.props.children || null}
    //     value={{
    //       history: this.props.history,
    //       location: this.state.location,
    //       match: Router.computeRootMatch(this.state.location.pathname),
    //       staticContext: this.props.staticContext
    //     }}
    //   />
    // );

    <Router>
      <div>
        <nav>
          <li>
            {/*2.1 Link is like 'a'(HTML) to move to any route into SPA is used Link Component*/}
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </nav>

        {/* 3.1. switch between Routes to render */}
        <Switch>
          {/*4.1. Route rendered Route path===Link to*/}
          <Route exact path="/home">
            <Home />
          </Route>
          {/*or:
           <Route path="/" render={() => <h1>Home Page!</h1>} /> 
           or:
           <Route exact path="/" component={Home} />
           */}

          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
