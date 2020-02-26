import React, { Component } from "react";
import { data } from "../../Backend/getMovies.js";
import $ from "jquery";
import "./movie.css";

var displaymovies;

class MoviesDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: "a"
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
          <div>
            <div className="movie" key={index + movie[0].title}>
              <h1 className="title">{movie[0].title}</h1>
              <div>
                <img
                  width="200"
                  alt={`The movie titled: ${movie[0].title}`}
                  src={movie[0].image}
                />

                <p>Regisert av: {movie[0].director}</p>
                <p>
                  Description placeholder text: Lorem Ipsum is simply dummy text
                  of the printing and typesetting industry. Lorem Ipsum has been
                  the industry's standard dummy text ever since the 1500s, when
                  an unknown printer took a galley of type and scrambled it to
                  make a type specimen book. It has survived not only five
                  centuries, but also the leap into electronic typesetting,
                  remaining essentially unchanged. It was popularised in the
                  1960s with the release of Letraset sheets containing Lorem
                  Ipsum passages, and more recently with desktop publishing
                  software like Aldus PageMaker including versions of Lorem
                  Ipsum{" "}
                </p>
              </div>
            </div>
            <div className="movieInformation">
              <p>
                <b>Directed by:</b> {movie[0].director} <br></br>
                <b>Duration:</b> {movie[0].duration} <br></br>
                <b>Score:</b> {movie[0].score} <br></br>
                <p>
                  <b>Description placeholder text:</b> Lorem Ipsum is simply
                  dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard dummy text ever since
                  the 1500s, when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book. It has survived not
                  only five centuries, but also the leap into electronic
                  typesetting, remaining essentially unchanged. It was
                  popularised in the 1960s with the{" "}
                </p>
              </p>
            </div>
          </div>
        ));

        this.setState({ list: result });
        console.log(this.state.list);
      });
  };
  componentDidMount() {
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
