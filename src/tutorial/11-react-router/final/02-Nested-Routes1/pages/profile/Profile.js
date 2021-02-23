import React from "react";
//1
import { Link, Switch, Route } from "react-router-dom";

import Settings from "./Settings";
import Info from "./Info";

// II
function Profile() {
  return (
    <div>
      <h1>Profile Page</h1>
      <ul>
        {/*2 */}
        <li>
          <Link to="/profile/info">Profile Info</Link>
        </li>
        <li>
          <Link to="/profile/settings">Profile Settings</Link>
        </li>
      </ul>

      <Switch>
        {/*3 */}
        <Route path="/profile/info">
          <Info />
        </Route>
        <Route path="/profile/settings">
          <Settings />
        </Route>
      </Switch>
    </div>
  );
}

export default Profile;
