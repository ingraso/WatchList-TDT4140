import React, { Component } from "react";
import NavBar from "./navbar";
import {saveUser} from "./addUser";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      username: "",
      password: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    saveUser(this.state.username, this.state.password, this.state.firstName, this.state.lastName)
  };

  render() {
    return (
      <React.Fragment>
        <NavBar></NavBar>
        <form onSubmit={this.handleSubmit}>
          <div className="form-row">
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="username"
                value={this.state.username}
                onChange={this.handleInputChange}
                name="username"
              />
            </div>
            <div className="col">
              <input
                type="password"
                className="form-control"
                placeholder="password"
                value={this.state.password}
                onChange={this.handleInputChange}
                name="password"
              />
            </div>
          </div>
          <div className="form-row">
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="First name"
                value={this.state.firstName}
                onChange={this.handleInputChange}
                name="firstName"
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Last name"
                value={this.state.lastName}
                onChange={this.handleInputChange}
                name="lastName"
              />
            </div>
          </div>
          <button type="submit" className="btn btn-warning">
            {" "}
            submit{" "}
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default Profile;
