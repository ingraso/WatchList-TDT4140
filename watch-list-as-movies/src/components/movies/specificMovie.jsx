import React, { Component } from "react";
import $ from "jquery";
import "./movie.css";
import {  Link, useLocation } from "react-router-dom";
var reviews
function SpecificMovie(){
  const location = useLocation();
  const myHookValue = location.state.title
      return <MyDiv myHookValue={myHookValue} />;

}
class MyDiv extends React.Component {
  constructor(myHookValue) {
    super(myHookValue);
    this.state = {
      title: myHookValue.myHookValue,
      director: "a",
      duration: "",
      image: "",
    };
  }

fetchData = async () => {
  var result;
     var settings = {
       url:
         "https://watchlistas.firebaseio.com/entertainment/movie/"+this.state.title+".json?auth=qWIkHwOFG3EpS9gYCNP50tndNOFBS57ta41Rcy1f",
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



  this.setState({ list:result1});
reviews = this.state.list.map((review, index) => (

 <div>{review} </div>

));
              this.setState({
                director: result[2],
                duration: result[3],
                image: result[4],
              });
   })
}
componentDidMount(){
    this.fetchData();
}
  render(){
    return(<div>
                <li><Link to="/">Home</Link></li>
<h1>{this.state.director}</h1>
<h1>{this.state.duration}</h1>
<img
  width="200"
  alt={`The movie titled: ${this.state.title}`}
  src={this.state.image}
/>

<h1>Reviews </h1>
<li>{reviews} </li>




</div>


    )
  }
}



export default SpecificMovie;
