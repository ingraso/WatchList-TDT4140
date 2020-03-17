import React, { Component } from "react";
import $ from "jquery";
import { Link } from "react-router-dom";

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
          <tr key={index + user[0].username}>
            <td className="row" id="row">
              <img src={user[0].imageUrl} width="50" alt="Profile img" />
            </td>
            <td>
              <Link
                to={{
                  pathname: "/users/" + user[0].username,
                  state: {
                    username: user[0].username
                  }
                }}
              >
                user
              </Link>
            </td>
            <td>{user[0].firstName}</td>
            <td>{user[0].lastName}</td>
          </tr>
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
        <li>
          <Link to="/">Home</Link>
        </li>
        <table className="table table-striped table-dark">
          <caption>List of users</caption>
          <thead>
            <tr>
              <th>Profile picture</th>
              <th>Username</th>
              <th>First name</th>
              <th>Last name</th>
            </tr>
          </thead>
          <tbody>{displayUsers}</tbody>
        </table>
      </div>
    );
  }
}
export default DisplayUsers;
