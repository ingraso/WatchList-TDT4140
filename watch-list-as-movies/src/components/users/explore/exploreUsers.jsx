import React, { Component } from "react";
import $ from "jquery";
import "./explore.css";

var displayUsers;

class DisplayUsers extends Component {
  constructor() {
    super();
    this.state = {
      listOfUsers: ""
    };
  }

  fetchUsers = async () => {
    var users;
    var settings = {
      url:
        "https://watchlistas.firebaseio.com/users.json?auth=qWIkHwOFG3EpS9gYCNP50tndNOFBS57ta41Rcy1f",
      method: "GET",
      timeout: 0,
      headers: {
        "Access-Control-Allow-Credentials": "true"
      }
    };

    const fetchedUsers = $.ajax(settings)
      .then(function(response) {
        users = Object.keys(response).map(function(key) {
          return [response[key]];
        });
      })
      .then(() => {
        this.setState({ listOfUsers: users });
        displayUsers = this.state.listOfUsers.map((user, index) => (
          <div className="user" key={index + user[0].username}>
            <table className = "userTable"> 
              <tr>
              <td>
                  <img src={user[0].imageUrl} width="50">
                  </img>
                </td>
                <td>
                Username: {user[0].username}
                </td>
                <td>
                First name:{user[0].firstName}
                </td>
                <td>
                Last Name:{user[0].lastName}
                </td>
              </tr>
            </table>
          </div>
        ));
        this.setState({ listOfUsers: users });
      });
  };
  componentDidMount() {
    this.fetchUsers();
  }

  render() {
    return (
      <div>
        <div className="usersContainer">{displayUsers}</div>
      </div>
    );
  }
}
export default DisplayUsers;
