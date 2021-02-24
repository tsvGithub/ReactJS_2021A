import React from "react";

import { BrowserRouter as Router } from "react-router-dom";
import { Link, Switch, Route } from "react-router-dom";

import Home from "./Home";
import Products from "./Products";
import ProductDetail from "./ProductDetail";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
        </nav>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/products">
            <Products />
          </Route>
          <Route path="/products/:productId">
            <ProductDetail />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
