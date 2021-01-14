import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      selectCountry: "",
      dietaryRestrictions: {
        isVegan: false,
        isKosher: false,
        isLactoseFree: false,
      },
    };
    this.handleChange = this.handleChange.bind(this);
  }
  // handleChange(event){
  //     const {name, value, type, checked} = event.target
  //     type === 'checkbox' ? this.setState({[name]: checked}) : this.setState({[name]: value})
  // }

  handleChange(event) {
    const { name, value, type, checked } = event.target;
    type === "checkbox"
      ? // this.setState({
        //     // [name]: checked
        //                  dietaryRestrictions: {
        //         [name]: checked
        //     }
        // })
        this.setState((prevState) => {
          return {
            dietaryRestrictions: {
              ...prevState.dietaryRestrictions,
              [name]: checked,
            },
          };
        })
      : this.setState({
          [name]: value,
        });
  }

  render() {
    console.log(this.state.gender);
    console.log(this.state.selectCountry);
    console.log(this.state.dietaryRestrictions);
    return (
      <main>
        <form>
          <label>
            <h3>Please enter your Name:</h3>
          </label>
          <input
            type="text"
            name="firstName"
            value={this.state.firstName}
            placeholder="First Name"
            onChange={this.handleChange}
          />
          <br />
          <input
            type="text"
            name="lastName"
            value={this.state.lastName}
            placeholder="Last Name"
            onChange={this.handleChange}
          />
          <br />
          <input type="text" name="age" value={this.state.age} placeholder="Age" onChange={this.handleChange} />
          <br />

          {/* Create radio buttons for gender here */}
          <label>
            <h3>Gender:</h3>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={this.state.gender === "female"}
              onChange={this.handleChange}
            />{" "}
            Female
            <br />
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

          {/* Create select box for location here */}
          <label>
            <h3>Select your location:</h3>
          </label>
          <select type="text" name="selectCountry" value={this.state.selectCountry} onChange={this.handleChange}>
            <option value="Spain">Spain</option>
            <option value="Italia">Italia</option>
            <option value="France">France</option>
          </select>
          <br />

          {/* Create check boxes for dietary restrictions here */}
          <label>
            <h3>Your dietary restrictions here:</h3>
          </label>
          {/*} <input type='checkbox' name='diet' value='isVegan' checked={this.state.diet.isVegan} onChange={this.handleChange}/> Is Vegan?
                    <br /> */}
          <label>
            <input
              type="checkbox"
              name="isVegan"
              onChange={this.handleChange}
              checked={this.state.dietaryRestrictions.isVegan}
            />{" "}
            Vegan?
          </label>
          <br />

          <label>
            <input
              type="checkbox"
              name="isKosher"
              onChange={this.handleChange}
              checked={this.state.dietaryRestrictions.isKosher}
            />{" "}
            Kosher?
          </label>
          <br />

          <label>
            <input
              type="checkbox"
              name="isLactoseFree"
              onChange={this.handleChange}
              checked={this.state.dietaryRestrictions.isLactoseFree}
            />{" "}
            Lactose Free?
          </label>
          <br />

          <button>Submit</button>
        </form>
        <hr />
        <h2>Entered information:</h2>
        <p>
          Your name: {this.state.firstName} {this.state.lastName}
        </p>
        <p>Your age: {this.state.age}</p>
        <p>Your gender: {this.state.gender}</p>
        <p>Your destination: {this.state.selectCountry}</p>
        <p>
          Your dietary restrictions:
          {/* Dietary restrictions here, comma separated */}
          {this.state.dietaryRestrictions.isVegan ? " You are a Vegan person." : ""}
          {this.state.dietaryRestrictions.isKosher ? "You are a Kosher person." : ""}
          {this.state.dietaryRestrictions.isLactoseFree ? "You are a Lactose Free person." : ""}
        </p>
      </main>
    );
  }
}

export default App;
