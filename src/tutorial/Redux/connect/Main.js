import React from "react";
//-------------------
import { Provider } from "react-redux";
import store from "./redux";
//------------------
import { connect } from "react-redux";
import { increment, decrement } from "./redux";

function App(props) {
  return (
    <Provider store={store}>
      <div>
        <h1>{props.count}</h1>
        <button onClick={props.decrement}>-</button>
        <button onClick={props.increment}>+</button>
      </div>
    </Provider>
  );
}

function mapStateToProps(state) {
  return {
    count: state,
  };
}

const mapDispatchToProps = {
  increment: increment,
  decrement: decrement,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
