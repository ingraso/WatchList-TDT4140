import React, { Component } from "react";
import $ from 'jquery';
import {getuser} from "./getuser";
import { Redirect } from 'react-router';
import createHistory from 'history/createBrowserHistory'


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
this.fetchUsers();

};
fetchUsers = async () => {
let response = await getuser();
console.log(this.state.username + "  " + this.state.password)
console.log(response)
var result = Object.keys(response).map(function(key) {
  return [response[key]];
})
result.map((result, index) => {
console.log(result[0].username)
console.log(result[0].password)
console.log(this.state.username)
if (result[0].username == this.state.username  && result[0].password == this.state.password) {
  console.log("logged in")
  const history = createHistory()
  history.push('/movies')
  window.location.reload();
}
})
}
  render() {

    return (
      <React.Fragment>
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

          <button type="submit" className="btn btn-warning">
            {" "}
            Loggin{" "}
          </button>
        </form>

      </React.Fragment>

    );
  }



}

export default Login;
