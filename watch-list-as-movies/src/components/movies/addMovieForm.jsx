import React from "react";
import ReactDOM from "react-dom";
import "./addMovies.css";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { saveMovie } from "./addMovie.js";

class Select extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      director: "",
      duration: "",
      description: "",
      score: "1",
      imageUrl: "",
      releaseDate: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = event => {
    event.preventDefault();
    alert(this.state.title + " was successfully added!");
    console.log(
      this.state.title,
      this.state.director,
      this.state.duration,
      this.state.description,
      this.state.score,
      this.state.imageUrl,
      this.state.releaseDate
    );
    saveMovie(
      this.state.title,
      this.state.director,
      this.state.duration,
      this.state.description,
      this.state.score,
      this.state.imageUrl,
      this.state.releaseDate
    );
  };

  handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <React.Fragment>
        <li>
          <Link to="/">Home</Link>
        </li>
        <h1 className="h1AddMovies">Add a new movie or series</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-row">
            <div className="col">
              <label>Title:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Write the title of the movie"
                onChange={this.handleChange}
                name="title"
                value={this.state.title}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="col">
              <label>Director</label>
              <input
                type="text"
                className="form-control"
                placeholder="Write the name of the director"
                name="director"
                value={this.state.director}
                onChange={this.handleChange}
              ></input>
            </div>
          </div>
          <div className="form-row">
            <div className="col">
              <label>Duration:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Time"
                onChange={this.handleChange}
                name="duration"
                value={this.state.duration}
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
          <div className="form-row">
            <div className="col">
              <label>Description</label>
              <input
                type="text"
                className="form-control"
                placeholder="Write a description"
                name="description"
                value={this.state.description}
                onChange={this.handleChange}
              ></input>
            </div>
          </div>
          <div className="form-row">
            <div className="col">
              <label>Image URL:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Paste Url"
                onChange={this.handleChange}
                name="imageUrl"
                value={this.state.imageUrl}
              ></input>
            </div>
          </div>
          <div className="form-row">
            <div className="col">
              <label>Releasedate</label>
              <input
                type="date"
                className="form-control"
                placeholder="Select releasedate"
                name="releaseDate"
                value={this.state.releaseDate}
                onChange={this.handleChange}
              ></input>
            </div>
          </div>

          <input type="submit" className="btn btn-warning" value="Submit" />
        </form>
      </React.Fragment>
    );
  }
}

export default Select;
