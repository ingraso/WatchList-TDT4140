import React, { Component } from "react";
import { data } from '../../Backend/getMovies.js';
import $ from 'jquery';
var   result = "AAAAAa"
class MoviesDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list:"a",
    };
  }
handleform() {
  this.setState({
    list: result
  });
}

  tick() {
    var settings = {
      url:
        "https://watchlistas.firebaseio.com/entertainment/movie.json?auth=qWIkHwOFG3EpS9gYCNP50tndNOFBS57ta41Rcy1f",
      method: "GET",
      timeout: 0,
      headers: {
        "Access-Control-Allow-Credentials": "true"
      }
    };
     const fetchedData =  $.ajax(settings).done(function(response) {
   result = Object.keys(response).map(function(key) {
    return [response[key]];
  });
  console.log(result[0][0].director);
    });
this.handleform()

    }
    componentDidMount(){

    }
  render() {


    return (
<div>
      <h1>Hey </h1>



      </div>


    );
  }



}

export default MoviesDisplay;
