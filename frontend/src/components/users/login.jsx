import React, { Component } from "react";
import $ from "jquery";
import { getuser } from "./getuser";
import { Redirect } from "react-router";
import "./landingpage.css";
import Popup from "reactjs-popup";
import MoviesDisplay from "../movies/moviesDisplay";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      redirect:"",
      loggedin:"Guest",
      hideloggedin:true,
      isadmin:false
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
      var logdetails =  localStorage.getItem('logdetails');
      var admindetails =  localStorage.getItem('admindetails');
        console.log(logdetails)
        console.log(admindetails)
    if (logdetails !== null) {
      console.log("WORKS")
        this.setState({loggedin: logdetails});
        this.setState({hideloggedin: false});
        if (admindetails !== null) {
          this.setState({isadmin: admindetails});
        }
    }
  }
  componentDidMount(){
    this.handleloggedin()
  }

  handleSubmit = event => {
    event.preventDefault();
    this.fetchUsers();
  };
  handleSignout() {
  localStorage.removeItem('logdetails');
  localStorage.removeItem('admindetails');
      console.log("WORKS")
      this.setState({loggedin: "Guest"});
      this.setState({hideloggedin: false});
        this.setState({isadmin: false});
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
        console.log("logged in");
              console.log(result[0].admin);
          this.setState({loggedin: result[0].username});
            localStorage.setItem('logdetails', result[0].username);
          if (result[0].admin == "1") {
            console.log("ADMIN")
            this.setState({isadmin: true});
            localStorage.setItem('admindetails', true);
          }
          else {
              this.setState({isadmin: false });
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
 {this.state.isadmin ?   <li>
     <Link to="/addMovies">Add movies and series</Link>
   </li>: null }
              <div className="nav-center">
                <div className="nav-logo">
                  <h2> WatchList</h2>
                </div>
              </div>

              <div className="nav-right">
                  <Link className="nav-button" to="/create">Create</Link>
                  {this.state.hideloggedin ?
                    <Popup  className="nav-button" trigger={<button> Log in</button>} position="right center">
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
                  :       <button type="submit" className="btn btn-warning" onClick={this.handleSignout}>
                          {" "}
                          Sign out{" "}
                        </button> }

              </div>
            </div>

            <div className="movies">
              <div className="movies-right">
                {" "}
                <h5>This weeks: </h5>
              </div>
            </div>
          </div>

          <div></div>
        </div>
    <MoviesDisplay></MoviesDisplay>
      </div>
    );
  }
}

export default Login;


//https://react-popup.elazizi.com/introduction/
