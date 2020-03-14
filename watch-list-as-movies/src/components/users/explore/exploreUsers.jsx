import React, { Component } from "react";
import $ from "jquery";

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
            <div>
              <h4>{user[0].username}</h4>
            </div>
            <div>
              <h6></h6>
            </div>
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
