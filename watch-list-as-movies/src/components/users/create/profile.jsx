import React, { Component } from "react";
import { saveUser } from "./../../../Backend/user/addUser";
import Popup from "reactjs-popup";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      username: "",
      password: "",
      imageUrl: "",
      birthday: ""
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
    alert("You created a user!");
    saveUser(
      this.state.username,
      this.state.password,
      this.state.firstName,
      this.state.lastName,
      this.state.imageUrl,
      this.state.birthday
    );
  };

  render() {
    return (
      <React.Fragment>
        <Popup
          className="nav-button"
          trigger={<button> Create</button>}
          position="left top"
          contentStyle={{ width: "500px" }}
        >
          <form onSubmit={this.handleSubmit}>
            <div className="form-row">
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  value={this.state.username}
                  onChange={this.handleInputChange}
                  name="username"
                />
              </div>
              <div className="col">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
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
            <div className="form-row">
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Paste image URL"
                onChange={this.handleInputChange}
                name="imageUrl"
                value={this.state.imageUrl}
              ></input>
            </div>
          </div>
            <div className="form-row">
              <label className="ml-2">Date</label>
              <div className="col">
                <input
                  type="date"
                  name="birthday"
                  value="2000-01-01"
                  min="1900-01-01"
                  max="2020-01-01"
                  className="form-control"
                  value={this.state.birthday}
                  onChange={this.handleInputChange}
                />
              </div>
            </div>
            <button type="submit" className="btn btn-warning">
              {" "}
              Submit{" "}
            </button>
          </form>
        </Popup>
      </React.Fragment>
    );
  }
}

export default Profile;
