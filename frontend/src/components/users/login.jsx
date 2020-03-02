import React, { Component } from "react";
import $ from "jquery";
import { getuser } from "./getuser";
import { Redirect } from "react-router";
import "./landingpage.css";
import Logo from "./watchlistlogo.png";
import Popup from "reactjs-popup";
import MoviesDisplay from "../movies/moviesDisplay";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Profile from "./createUser/profile";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      redirect: "",
      loggedin: "Guest",
      hideloggedin: true,
      isadmin: false
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSignout = this.handleSignout.bind(this);
  }
  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  handleloggedin() {
    var logdetails = localStorage.getItem("logdetails");
    var admindetails = localStorage.getItem("admindetails");
    if (logdetails !== null) {
      this.setState({ loggedin: logdetails });
      this.setState({ hideloggedin: false });
      if (admindetails !== null) {
        this.setState({ isadmin: true });
        console.log(this.state.isadmin);
      }
    }
  }
  componentDidMount() {
    this.handleloggedin();
  }

  handleSubmit = event => {
    event.preventDefault();
    this.fetchUsers();
  };
  handleSignout() {
    localStorage.removeItem("logdetails");
    localStorage.removeItem("admindetails");
    this.setState({ loggedin: "Guest" });
    this.setState({ hideloggedin: true });
    this.setState({ isadmin: false });
  }
  fetchUsers = async () => {
    let response = await getuser();
    var result = Object.keys(response).map(function(key) {
      return [response[key]];
    });
    result.map((result, index) => {
      if (
        result[0].username === this.state.username &&
        result[0].password === this.state.password
      ) {
        this.setState({ loggedin: result[0].username });
        localStorage.setItem("logdetails", result[0].username);
        if (result[0].admin == "1") {
          this.setState({ isadmin: true });
          localStorage.setItem("admindetails", true);
          this.handleloggedin();
        } else {
          this.setState({ isadmin: false });
          this.handleloggedin();
        }
      }
    });
  };
  render() {
    return (
      <div>
        <div>
          <div className="app-container">
            <div className="nav">
              <div className="nav-left">
                <h1>Welcome {this.state.loggedin}! </h1>
                <input className="nav-search-input" placeholder="Search" />
                <button className="nav-search-button">Search</button>
              </div>
              {this.state.isadmin ? (
                <li>
                  <Link to="/addMovies">Add movies and series</Link>
                </li>
              ) : null}
              <div className="nav-center">
                <div className="nav-logo">
                  <div>
                    {" "}
                    <img width="300px" height="100px" src={Logo} />
                  </div>
                </div>
              </div>

              <div className="nav-right">
                <Profile></Profile>
                {this.state.hideloggedin ? (
                  <Popup
                    className="nav-button"
                    trigger={<button> Log in</button>}
                    position="left top"
                    contentStyle={{ width: "250px" }}
                  >
                    <div className="Popup-holder">
                      <form onSubmit={this.handleSubmit}>
                        <div className="form-row">
                          <div className="col">
                            Username:
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Your username"
                              value={this.state.username}
                              onChange={this.handleInputChange}
                              name="username"
                            />
                          </div>
                          <div className="col">
                            Password:
                            <input
                              type="password"
                              className="form-control"
                              placeholder="Your password"
                              value={this.state.password}
                              onChange={this.handleInputChange}
                              name="password"
                            />
                          </div>
                        </div>

                        <button type="submit" className="btn btn-warning">
                          {" "}
                          Login{" "}
                        </button>
                      </form>
                    </div>
                  </Popup>
                ) : (
                  <button
                    type="submit"
                    className="btn btn-warning"
                    onClick={this.handleSignout}
                  >
                    {" "}
                    Sign out{" "}
                  </button>
                )}
              </div>
            </div>

            <div className="movies">
              <div className="movies-right"> </div>
            </div>
          </div>

          <div></div>
        </div>
        <MoviesDisplay dataFromParent={this.state.isadmin}></MoviesDisplay>
      </div>
    );
  }
}

export default Login;

//https://react-popup.elazizi.com/introduction/
