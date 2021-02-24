import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Link, Switch, Route, Redirect } from "react-router-dom";
//The <Redirect> component changes the route automatically.
//This can be useful when dealing with authentication,
//for example by sending a user back to the login page
//if they fail to provide accurate login credentials:
// Note: If you are simply trying to go to another location,
//use the <Link> element. Similarly, you can use the <History>
//object to push a new location if you need to programmatically
//push someone to a new <Route>.

// https://reacttraining.com/react-router/web/example/auth-workflow

// Should I use Redirect component to create a 404 page?
//Or should I use a Link without a "to" property?

// I think common practice is to add a Route at the end of the
//Switch that handles the 404 page. Then you can decide if you want
//to keep the wrong path in the URL or redirect to another page.
//This Stackoverflow Post seems to answer it well.
//stackoverflow.com/questions/32128978/react-router-no-not-found-route

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <Router>
      <div className="container">
        <Link to="/">Home</Link>
        <Link to="/private">Private</Link>

        <Switch>
          <Route exact path="/">
            <h1>Home page, anyone is allowed here</h1>
          </Route>
          <Route path="/private">
            {isLoggedIn ? (
              //
              <h1>Protected page</h1>
            ) : (
              //Redirect
              <Redirect to="/login" />
            )}
          </Route>
          <Route path="/login">
            <button className="btn" onClick={() => setIsLoggedIn(true)}>
              Log in
            </button>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
