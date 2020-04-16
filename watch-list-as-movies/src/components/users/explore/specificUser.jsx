import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import { Link, useLocation } from "react-router-dom";
var users;
var mywatchlist;
function SpecificUser() {
  const location = useLocation();
  const myHookValue = location.state.username;

  return <MyDiv myHookValue={myHookValue} />;
}
class MyDiv extends React.Component {
  constructor(myHookValue) {
    super(myHookValue);
    this.state = {
      username: myHookValue.myHookValue,
      firstName: "",
      lastName: "",
      imageUrl: ""
    };
  }

  fetchData = async () => {
    var result;
    var settings = {
      url:
        "https://watchlistas.firebaseio.com/users/" +
        this.state.username +
        ".json?auth=qWIkHwOFG3EpS9gYCNP50tndNOFBS57ta41Rcy1f",
      method: "GET",
      timeout: 0,
      headers: {
        "Access-Control-Allow-Credentials": "true"
      }
    };
    const fetchedData = $.ajax(settings)
      .then(function(response) {
        result = Object.keys(response).map(function(key) {
          return [response[key]];
        });
      })
      .then(() => {
        var result1 = Object.keys(result[0][0]).map(function(key) {
          return [key];
        });
        var watchlist = Object.keys(result[7][0]).map(function(key) {
        return [(key), result[6][key]];
        });


        this.setState({ list1: watchlist });
    mywatchlist = this.state.list1.map((review, index) => (
  <h3>{review[0]}</h3>
    ));


        this.setState({ list: result1 });
        this.setState({
          firstName: result[2],
          lastName: result[4],
          imageUrl: result[3]
        });


      });
  };
  componentDidMount() {
    this.fetchData();
  }
  render() {
    return (
      <div>
        <li>
          <Link to="/">Home</Link>
        </li>
              <h1>Welcome to {this.state.username}'s profile!</h1>
        <img
          width="200"
          alt={`User name: ${this.state.username}`}
          src={this.state.imageUrl}
        />

        <h1>{this.state.firstName}</h1>
        <h1>{this.state.lastName}</h1>
        <button
          className="btn btn-primary"
          onClick={() => alert("To be developed")}
        >
          Send Message
        </button>
        <br></br>
        <br></br>
        <button
          className="btn btn-primary"
          onClick={() => alert("To be developed")}
        >
          Follow
        </button>
        <h3>My WatchList: </h3>
        <div>
        {mywatchlist}
        </div>
      </div>
    );
  }
}
export default SpecificUser;
