import React, { Component } from "react";
const { Provider, Consumer } = React.createContext();
class UserContextProvider extends Component {
  state = {
    username: "Ksju",
  };
  changeUsername = (username) => {
    this.setState({ username });
  };

  render() {
    //destructuring state
    const { username } = this.state;
    return (
      <Provider
        //value provides to Provider: state & func
        value={{ username, changeUsername: this.changeUsername }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export { UserContextProvider, Consumer as UserContextConsumer };
