import React from "react";

//The useRouteMatch hook helps us to dynamically add {MIDDLE} parts
//of links to minimise the maintenance which would be
//involved with hardcoding them.

import { Link, Switch, Route, useRouteMatch } from "react-router-dom";

import Settings from "./Settings";
import Info from "./Info";

// https://reacttraining.com/blog/react-router-v5-1/#useroutematch

function Profile() {
  //grab parh & url from Switch <Route path="/profile"> in Main.js
  const { path, url } = useRouteMatch();
  //useRouteMatch() contains:
  // {
  //     path: "/profile",
  //     url: "/profile",
  //     isExact: true,
  //     params: {}
  // }
  return (
    <div>
      <h1>Profile Page</h1>
      <ul>
        <li>
          {/*useRouteMatch() url: "/profile", */}
          <Link to={`${url}/info`}>Profile Info</Link>
        </li>
        <li>
          {/*useRouteMatch() url: "/profile", */}
          <Link to={`${url}/settings`}>Profile Settings</Link>
        </li>
      </ul>

      <Switch>
        {/*useRouteMatch() path: "/profile" */}
        <Route path={`${path}/info`}>
          <Info />
        </Route>
        {/*useRouteMatch() path: "/profile" */}
        <Route path={`${path}/settings`}>
          <Settings />
        </Route>
      </Switch>
    </div>
  );
}

export default Profile;
