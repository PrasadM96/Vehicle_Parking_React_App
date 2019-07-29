import React, { Component } from "react";
import fbConfig from "../../config/fbConfig";

class SignUp extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    email: "",
    password: "",
    firstName: "",
    lastName: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    fbConfig
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(u => {})
      .catch(error => {
        console.log(error);
      });
  };
  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-d arken-3">SignUp</h5>
          <div className="input-field">
            <label htmlFor="firstName">FirstName</label>
            <input type="text" id="firstName" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="lastName">LastName</label>
            <input type="text" id="lasttName" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0"> SignUp</button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUp;
