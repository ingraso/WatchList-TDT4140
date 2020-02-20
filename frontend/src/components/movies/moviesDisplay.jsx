import React, { Component } from "react";
import { data } from '../../Backend/getMovies.js';
import $ from 'jquery';
 var displaymovies
class MoviesDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list:"a",
    };
  }

    fetchData = async () => {
      var result
      var settings = {
        url:
          "https://watchlistas.firebaseio.com/entertainment/movie.json?auth=qWIkHwOFG3EpS9gYCNP50tndNOFBS57ta41Rcy1f",
        method: "GET",
        timeout: 0,
        headers: {
          "Access-Control-Allow-Credentials": "true"
        }
      };
       const fetchedData =  $.ajax(settings).then(function(response) {
     result = Object.keys(response).map(function(key) {
      return [response[key]];
    });

}).then(() => {
    this.setState({ list: result });
  displaymovies = this.state.list.map((movie, index) =>  (
    <div>
    <p>{movie[0].title}</p>
    <div className="movie">
  <h2>{movie[0].title}</h2>
  <div>
    <img
      width="200"
      alt={`The movie titled: ${movie[0].title}`}
      src={movie[0].image}
    />
  </div>
  <p>({movie.Year})</p>
</div>
    </div>
))
    this.setState({ list: result });
})
}



    componentDidMount(){
        this.fetchData();

    }
  render() {

    return (
<div>
      <h1>Hey </h1>
      <div>
      {displaymovies}
          </div>

      </div>


    );
  }



}

export default MoviesDisplay;
