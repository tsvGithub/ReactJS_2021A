import React from "react";
//router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//pages
import Home from "./Home";
import SingleMovie from "./SingleMovie";
import Error from "./Error";

//context
import { AppProvider } from "./context";
//css
import "./styles.css";

// I -> context.js
// II //III Error.js
const Main = () => {
  return (
    //wrap whole app in AppProvider
    <AppProvider>
      {/*wrap all app in Router */}
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          {/*Route for current movie:
        Oncle click on the movie => get placeholder page SingleMovie and display all data for that specific movie
        */}
          <Route
            //dynamic route with ':id' for current movie
            path="/movies/:id"
            //to display single Movie Component
            children={<SingleMovie />}
          />
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </Router>
    </AppProvider>
  );
};

export default Main;
