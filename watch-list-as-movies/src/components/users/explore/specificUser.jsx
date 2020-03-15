import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import {  Link, useLocation } from "react-router-dom";
var users
function SpecificUser(){
  const location = useLocation();
  const myHookValue = location.state.username
      return <MyDiv myHookValue={myHookValue} />;

}
class MyDiv extends React.Component {
  constructor(myHookValue) {
    super(myHookValue);
    this.state = {
      username: myHookValue.myHookValue,
      firstName: "a",
      lastName: "",
      imageUrl: "",
    };
  }

fetchData = async () => {
  var result;
     var settings = {
       url:
         "https://watchlistas.firebaseio.com/users/"+this.state.username+".json?auth=qWIkHwOFG3EpS9gYCNP50tndNOFBS57ta41Rcy1f",
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
         console.log(result[0][0])
  var result1 = Object.keys(result[0][0]).map(function(key) {
    return [(key)];
  });
console.log(result1[0][0])
users = this.state.list.map((user,index)=>(
<div>
    {user}
</div>

));
this.setState({ list:result1});
              this.setState({
                firstName: result[2],
                lastName: result[3],
                imageUrl: result[4],
              });
   })
}
componentDidMount(){
    this.fetchData();
    console.log("Hello:)");
}
  render(){
    return(<div>
                <li><Link to="/">Home</Link></li>
<h1>{this.state.firstName}</h1>
<h1>{this.state.lastName}</h1>
<img
  width="200"
  alt={`User name: ${this.state.username}`}
  src={this.state.imageUrl}
/>

<h1>User</h1>
<li>{users} </li>




</div>


    )
  }
}



export default SpecificUser;
