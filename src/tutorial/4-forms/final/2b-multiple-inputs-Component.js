import React, { Component } from "react";
class MultipleControlledInputsComponent extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      isChecked: false,
      textarea: "",
      radioBtn: "",
      selectOpt: "Monday",
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    const { name, value, checked, type } = e.target;
    type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value });
  }
  render() {
    return (
      <form>
        <input
          type="text"
          name="firstName"
          value={this.state.firstName}
          placeholder="First Name"
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="lastName"
          value={this.state.lastName}
          placeholder="Last Name"
          onChange={this.handleChange}
        />
        <hr />
        <label>
          <input type="checkbox" checked={this.state.isChecked} name="isChecked" onChange={this.handleChange} /> Is
          checked?
        </label>
        <hr />
        <textarea name="textarea" value={this.state.textarea} onChange={this.handleChange}></textarea>
        <hr />
        <label>
          {" "}
          Yes/No
          <input
            type="radio"
            name="radioBtn"
            value="yes"
            checked={this.state.radioBtn === "yes"}
            onChange={this.handleChange}
          />
          <input
            type="radio"
            name="radioBtn"
            value="no"
            checked={this.state.radioBtn === "no"}
            onChange={this.handleChange}
          />
        </label>
        <hr />
        <select name="selectOpt" value={this.state.selectOpt} onChange={this.handleChange}>
          <option value="monday">Monday</option>
          <option value="saturday">Saturday</option>
          <option value="sunday">Sunday</option>
        </select>
        <h2>Resume:</h2>
        <p>
          {this.state.firstName} {this.state.lastName}
        </p>
        <p>{this.state.isChecked ? "Checked" : "Unchecked"}</p>
        <p>{this.state.textarea}</p>
        <p>{this.state.radioBtn}</p>
        <p>{this.state.selectOpt}</p>
      </form>
    );
  }
}

export default MultipleControlledInputsComponent;
// class App extends Component {
//     constructor() {
//         super()
//         this.state = {
//             firstName: "",
//             lastName: "",
//             isFriendly: false,
//             gender: "",
//             favColor: "blue"
//         }
//         this.handleChange = this.handleChange.bind(this)
//     }

//     handleChange(event) {
//         const {name, value, type, checked} = event.target
//         type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
//     }

//     render() {
//         return (
//             <form onSubmit={this.handleSubmit}>
//                 <input
//                     // type="text"
//                     value={this.state.firstName}
//                     name="firstName"
//                     placeholder="First Name"
//                     onChange={this.handleChange}
//                 />
//                 <br />
//                 <input
//                     // type="text"
//                     value={this.state.lastName}
//                     name="lastName"
//                     placeholder="Last Name"
//                     onChange={this.handleChange}
//                 />

//                 <textarea
//                     value={"Some default value"}
//                     onChange={this.handleChange}
//                 />

//                 <br />

//                 <label>
//                     <input
//                         type="checkbox"
//                         name="isFriendly"
//                         checked={this.state.isFriendly}
//                         onChange={this.handleChange}
//                     /> Is friendly?
//                 </label>
//                 <br />
//                 <label>
//                     <input
//                         type="radio"
//                         name="gender"
//                         value="male"
//                         checked={this.state.gender === "male"}
//                         onChange={this.handleChange}
//                     /> Male
//                 </label>
//                 <br />
//                 <label>
//                     <input
//                         type="radio"
//                         name="gender"
//                         value="female"
//                         checked={this.state.gender === "female"}
//                         onChange={this.handleChange}
//                     /> Female
//                 </label>
//                 {/* Formik */}
//                 <br />

//                 <label>Favorite Color:</label>
//                 <select
//                     value={this.state.favColor}
//                     onChange={this.handleChange}
//                     name="favColor"
//                 >
//                     <option value="blue">Blue</option>
//                     <option value="green">Green</option>
//                     <option value="red">Red</option>
//                     <option value="orange">Orange</option>
//                     <option value="yellow">Yellow</option>
//                 </select>

//                 <h1>{this.state.firstName} {this.state.lastName}</h1>
//                 <h2>You are a {this.state.gender}</h2>
//                 <h2>Your favorite color is {this.state.favColor}</h2>
//                 <button>Submit</button>
//             </form>
//         )
//     }
// }

// export default App
