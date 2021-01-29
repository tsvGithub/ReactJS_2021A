import React, { Component } from "react";
import Header from "./Header";
import { UserContextProvider } from "./userContext";
import { UserContextConsumer } from "./userContext";
class Main extends Component {
  state = {
    newUsername: "",
  };
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <UserContextProvider>
        <div>
          <Header />
          <UserContextConsumer>
            {/*render props *recieves obj & returns element */}
            {({ username, changeUsername }) => (
              <main>
                <p className="main">No new notifications, {username}! 🎉</p>
                <input
                  type="text"
                  name="newUsername"
                  placeholder="New username"
                  value={this.state.newUsername}
                  onChange={this.handleChange}
                />
                <button onClick={() => changeUsername(this.state.newUsername)}>Change Username</button>
              </main>
            )}
          </UserContextConsumer>
        </div>
      </UserContextProvider>
    );
  }
}
export default Main;
