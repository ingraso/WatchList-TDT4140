import React, { Component } from "react";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: ""
    };
  }
  handleInputChange = (event) => {
    this.setState({
      name: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state.firstName);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-row">
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="First name"
              value={this.state.firstName}
              onChange={this.handleInputChange}
              id ="firstNameInput"
            />
          </div>
        </div>
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="Last name"
            id ="lastNameInput"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          {" "}
          submit{" "}
        </button>
      </form>
    );
  }
}

export default Profile;