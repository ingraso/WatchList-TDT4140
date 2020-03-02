import React from "react";
//import NavBar from "./navbar";
import Profile from "./users/createUser/profile";
import Login from "./users/login";
//import Select from "./movies/index.js";
import Select from "./movies/addMovieForm.jsx";
import MoviesDisplay from "./movies/moviesDisplay";
import "./app.css";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/showMovies">
              <MoviesDisplay></MoviesDisplay>
            </Route>
            <Route path="/addMovies">
              <Select></Select>
            </Route>
            <Route path="/create">
              <Profile></Profile>
            </Route>
            <Route path="/">
              <Login></Login>
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
