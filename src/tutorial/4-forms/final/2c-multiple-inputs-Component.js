import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      yourNote: "",
      isFriendly: false,
      gender: "",
      favColor: "blue",
    };
    this.handleChange = this.handleChange.bind(this);
  }
  // {/*===handleChange for input text, textarea, checkbox, radio & select =======*/}
  handleChange(event) {
    const { name, value, type, checked } = event.target;
    type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {/*============input text ====================*/}
        <input
          type="text"
          value={this.state.firstName}
          name="firstName"
          placeholder="First Name"
          onChange={this.handleChange}
        />
        <br />
        <input
          type="text"
          value={this.state.lastName}
          name="lastName"
          placeholder="Last Name"
          onChange={this.handleChange}
        />

        {/*=============textarea =======================*/}
        <textarea value={this.state.yourNote} name="yourNote" placeholder="Hello!" onChange={this.handleChange} />

        <br />
        {/*=============checkbox =======================*/}
        <label>
          <input type="checkbox" name="isFriendly" checked={this.state.isFriendly} onChange={this.handleChange} /> Is
          friendly?
        </label>
        <br />
        {/*=============radio =======================*/}
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={this.state.gender === "male"}
            onChange={this.handleChange}
          />{" "}
          Male
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={this.state.gender === "female"}
            onChange={this.handleChange}
          />{" "}
          Female
        </label>
        {/* Formik */}
        <br />
        {/*=============select =======================*/}
        <label>Favorite Color:</label>
        <select value={this.state.favColor} onChange={this.handleChange} name="favColor">
          <option value="blue">Blue</option>
          <option value="green">Green</option>
          <option value="red">Red</option>
          <option value="orange">Orange</option>
          <option value="yellow">Yellow</option>
        </select>

        <h1>
          {this.state.firstName} {this.state.lastName}
        </h1>
        <h2>You are currently writing: {this.state.yourNote}</h2>
        <h2>You are a {this.state.gender}</h2>
        <h2>Your favorite color is {this.state.favColor}</h2>
        <button>Submit</button>
      </form>
    );
  }
}

export default App;
