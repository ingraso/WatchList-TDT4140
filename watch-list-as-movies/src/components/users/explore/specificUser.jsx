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
  console.log(result[6])
        var result1 = Object.keys(result[0][0]).map(function(key) {
          return [key];
        });
        var watchlist = Object.keys(result[6][0]).map(function(key) {
        return [(key), result[6][key]];
        });


        this.setState({ list1: watchlist });
    mywatchlist = this.state.list1.map((review, index) => (
<h3>{review[0]}</h3>
    ));
    console.log(mywatchlist)

        this.setState({ list: result1 });
        this.setState({
          firstName: result[2],
          lastName: result[3],
          imageUrl: result[4]
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
        <img
          width="200"
          alt={`User name: ${this.state.username}`}
          src={this.state.imageUrl}
        />
        <h1>{this.state.username}</h1>
        <h1>firstName</h1>
        <h1>lastName</h1>
        <button
          className="btn btn-primary"
          onClick={() => alert("Not developed yet :/")}
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
        <div>
        {mywatchlist} + test
        </div>
      </div>
    );
  }
}
export default SpecificUser;
