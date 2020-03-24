  import React, { Component } from "react";
import $ from "jquery";
import "./movie.css";
import { confirmDeletion } from "./deleteMovie.js";
import { addWatchlist } from "./addwatchlist.js";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
var displaymovies;
  var logdetails = localStorage.getItem("logdetails");
class MoviesDisplay extends Component {
  constructor(dataFromParent) {
    super(dataFromParent);
    this.state = {
      list: "",
      displaydelete: dataFromParent
    };
  }

  fetchData = async () => {
    var result;
    var settings = {
      url:
        "https://watchlistas.firebaseio.com/entertainment/movie.json?auth=qWIkHwOFG3EpS9gYCNP50tndNOFBS57ta41Rcy1f",
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
        this.setState({ list: result });
        displaymovies = this.state.list.map((movie, index) => (
          <div className="movie" key={index + movie[0].title}>
            <div className="movieHeader">
            <button
              className="watchlist"
              onClick={() => addWatchlist(logdetails, movie[0].title)}
            >
              Add to my watchlist
            </button>
              <h1 className="title">{movie[0].title}</h1>
              {this.props.dataFromParent ? (
                <button
                  className="deleteButton"
                  onClick={() => confirmDeletion(movie[0].title)}
                >
                  DELETE
                </button>
              ) : null}
            </div>
            <div className="movieInfoContainer">
              <div className="movieImage">
                <img
                  width="200"
                  alt={`The movie titled: ${movie[0].title}`}
                  src={movie[0].imageUrl}
                />
              </div>
              <li>

              </li>
              <div className="movieInformation">
                <p>
                  <b>Directed by:</b> {movie[0].director} <br></br>
                  <b>Duration:</b> {movie[0].duration} <br></br>
                  <b>Score:</b> {Math.round(movie[0].score/movie[0].numberofscorers)} <br></br>
                  <p>
                    <b>Description placeholder text:</b>{" "}
                    {movie[0].description
                      ? movie[0].description
                      : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but "}
                  </p>
                </p>
              </div>
            </div>
            <Link to={{
              pathname: '/movies/'+movie[0].title,
              state: {
                title: movie[0].title,
              }

            }}>Review</Link>
          </div>
        ));

        this.setState({ list: result });
      });
  };
  componentDidMount() {
    //console.log(this.props.dataFromParent);
    this.fetchData();
  }

  render() {
    return (
      <div>
        <div className="moviesContainer">{displaymovies}</div>
      </div>
    );
  }
}

export default MoviesDisplay;
