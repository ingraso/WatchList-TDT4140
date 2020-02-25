import React, { Component } from "react";
import $ from 'jquery';
import {getuser} from "./getuser";
import { Redirect } from 'react-router';
import createHistory from 'history/createBrowserHistory'
import "./landingpage.css"; 


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
    <div>
          <div> 

<div className="app-container">

<div className="nav">

<div className="nav-left">
  <input
    className="nav-search-input"
    placeholder="Search"
  />
  <button className="nav-search-button">Search</button>
</div>

<div className="nav-center"> 
    <div className="nav-logo"><h2> WatchList</h2></div>
      </div>

<div className="nav-right">
  <div className="nav-button">Sign up</div>
  <div className="nav-button">Log in</div>
</div>

</div>


<div className="movies">

<div className="movies-right"> <h5>This weeks: </h5></div>

</div>   

</div>


<div>


</div>
</div>
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

    </div>

    );
  }



}

export default Login;
