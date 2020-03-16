import React, { Component } from "react";
import $ from "jquery";
import "./movie.css";
import {  Link, useLocation } from "react-router-dom";
import { saveReview } from "./addReview.js";
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
      review: "",
      reviewer: "",
      score: "1",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit = event => {
    event.preventDefault();
    saveReview(
      this.state.title,
      this.state.review,
      this.state.reviewer,
      this.state.score,
    );
  };
  handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value });
  };
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

         this.setState({
           director: result[2],
           duration: result[3],
           image: result[4],
         });
         var revi = Object.keys(result[0][0]).map(function(key) {
           return [(key), result[0][0][key]];
         });

console.log(revi)
    this.setState({ list: revi });
reviews = this.state.list.map((review, index) => (
<div>
<h1>Reviewed by: {review[1].reviewer}</h1>
<p>{review[1].review}</p>
<p>Score: {review[1].score}</p>
</div>


));


console.log("Finished")
  this.setState({ list: revi });
   })
}
componentDidMount(){
    this.fetchData();
        var logdetails = localStorage.getItem("logdetails");
        console.log(logdetails)
      this.setState({ reviewer: logdetails });
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

<h1>Reviews:</h1>
<div>{reviews} </div>



<div>
<form onSubmit={this.handleSubmit}>
  <div className="form-row">
    <div className="col">
      <label>Skriv din egen anmeldelse</label>
      <input
        type="text"
        className="form-control"
        placeholder="Write the title of the movie"
        onChange={this.handleChange}
        name="review"
        value={this.state.review}
      />
    </div>
  </div>
  <div className="form-row">
    <div className="col">
      <label className="labelThree">
        Score:
        <select
          type="text"
          name="score"
          value={this.state.score}
          onChange={this.handleChange}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </label>
    </div>
  </div>


  <input type="submit" className="btn btn-warning" value="Submit" />
</form>
</div>

</div>


    )
  }
}



export default SpecificMovie;
