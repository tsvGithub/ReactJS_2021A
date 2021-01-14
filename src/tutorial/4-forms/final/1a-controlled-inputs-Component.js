import React, { Component } from "react";

class ControlledInputsComponent extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      //    [event.target.name]: event.target.value
      [name]: value,
    });
  }
  render() {
    return (
      <div>
        <input
          type="text"
          name="firstName"
          value={this.state.firstName}
          placeholder="Your Name"
          onChange={this.handleChange}
        />
        <br />
        <br />
        <input
          type="text"
          name="lastName"
          value={this.state.lastName}
          placeholder="Your Last Name"
          onChange={this.handleChange}
        />
        <h3>
          {this.state.firstName} {this.state.lastName}
        </h3>
      </div>
    );
  }
}

export default ControlledInputsComponent;
