import React from "react";
import ReactDOM from "react-dom";
import "./addMovies.css";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
//import { saveMovie } from "./addMovie.js";

class Select extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "coconut" };

    // this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //  handleChange(event) {
  //    this.setState({value: event.target.value});
  // }

  handleSubmit(event) {
    alert("" + this.state.value);
    event.preventDefault();
  }
  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    return (
      <React.Fragment>
        <li>
          <Link to="/">Home</Link>
        </li>
        <h1>Add a new movie or series</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Title:</label>
          <input
            type="text"
            className="title"
            placeholder="Write the title of the movie"
          ></input>
          <br></br>
          <label className="labelOne">
            Category:
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="movie">Movie</option>
              <option value="series">Series</option>
            </select>
          </label>
          <br></br>
          <label className="labelTwo">
            Genre:
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="Action">Action</option>
              <option value="Comedy">Comedy</option>
              <option value="Documentary">Documentary</option>
              <option value="Drama">Drama</option>
              <option value="Romance">Romance</option>
              <option value="Horror">Horror</option>
            </select>
          </label>
          <br></br>
          <label>Director</label>
          <input
            type="text"
            className="director"
            placeholder="Write the name of the director"
          ></input>
          <br></br>
          <label>Duration:</label>
          <input
            type="number"
            className="durationHour"
            placeholder="Hours"
            name="hours"
          ></input>
          <input
            type="number"
            className="durationMinutes"
            placeholder="Minutes"
            name="minutes"
            min="0"
            max="59"
          ></input>
          <input
            type="number"
            className="durationSeconds"
            placeholder="Seconds"
            name="seconds"
            min="0"
            max="59"
          ></input>
          <br></br>
          <label>Description</label>
          <input
            type="text"
            className="description"
            placeholder="Write a description"
            name="description"
          ></input>
          <br></br>
          <label className="labelThree">
            Score:
            <select value={this.state.value} onChange={this.handleChange}>
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
          <br></br>
          <label>Image URL:</label>
          <input
            type="text"
            className="imgUrl"
            placeholder="Paste Url"
            name="Url"
          ></input>
          <br></br>
          <label>Releasedate</label>
          <input
            type="date"
            className="releaseDate"
            placeholder="Select releasedate"
            name="releaseDate"
          ></input>
          <br></br>
          <input type="submit" className="buttonTwo" value="Submit" />
        </form>
      </React.Fragment>
    );
  }
}

export default Select;
