import React from "react";
import Profile from "../users/create/profile";
import Login from "../users/login/login";
import Select from "./../movies/addMovieForm.jsx";
import MoviesDisplay from "./../movies/moviesDisplay";
import SpecificMovie from "./../movies/specificMovie";
import "./app.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/showMovies">
              <MoviesDisplay></MoviesDisplay>
            </Route>
            <Route path="/movies/:movie">
            <SpecificMovie></SpecificMovie>
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
