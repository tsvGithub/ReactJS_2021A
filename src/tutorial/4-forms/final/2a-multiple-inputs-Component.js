import React, { Component } from "react";

class MultipleControlledInputsComponent extends Component {
  constructor() {
    super();
    this.state = {
      firstForm: true,
      colorTheme: "Light",
      textArea: "",
      firstName: "",
      lastName: "",
      selectBox: "red",
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    const { name, value, checked, type } = event.target;
    type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value });
  }
  render() {
    return (
      <div className="form">
        <form>
          <label>
            <h3>Do you know React forms? {this.state.firstForm ? "Yes" : "No"}</h3>
          </label>
          <input type="checkbox" name="firstForm" checked={this.state.firstForm} onChange={this.handleChange} />
          <hr />
          <label>
            <h3>
              Radio Buttons
              <br /> Select Color Theme: {this.state.colorTheme}
            </h3>
          </label>
          <input
            type="radio"
            name="colorTheme"
            value="Dark"
            checked={this.state.colorTheme === "Dark"}
            onChange={this.handleChange}
          />{" "}
          Dark
          <br />
          <input
            type="radio"
            name="colorTheme"
            value="Light"
            checked={(this.state.colorTheme = "Light")}
            onChange={this.handleChange}
          />{" "}
          Light
          <br /> <hr />
          <label>
            <h3>Text Area: {this.state.textArea} </h3>
            <textarea
              type="text"
              placeholder="What do you think about it?"
              value={this.state.textArea}
              name="textArea"
              onChange={this.handleChange}
            />
          </label>
          <br /> <hr />
          <label>
            <h3>
              Your name: {this.state.firstName} {this.state.lastName}{" "}
            </h3>
          </label>
          <input
            type="text"
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleChange}
            placeholder="Your First Name"
          />
          <br />
          <br />
          <input
            type="text"
            name="lastName"
            value={this.state.lastName}
            onChange={this.handleChange}
            placeholder="Your Last Name"
          />
          <br /> <hr />
          <label>
            <h3>Selected {this.state.selectBox} color</h3>
          </label>
          <br />
          <select name="selectBox" value={this.state.selectBox} onChange={this.handleChange}>
            <option value="red">red</option>
            <option value="yellow">yellow</option>
            <option value="green">green</option>
          </select>
        </form>
      </div>
    );
  }
}

export default MultipleControlledInputsComponent;
