import React from "react";
import Profile from "./users/createUser/profile";
import Login from "./users/login";
import MoviesDisplay from "./movies/moviesDisplay";
import "./app.css";
import { BrowserRouter,Switch, Route,Link } from "react-router-dom";

function App() {
  return <React.Fragment>
  <BrowserRouter>
    <div>
        <ul>
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/movies">Movies</Link>
          </li>
        </ul>
      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/movies">
        <MoviesDisplay></MoviesDisplay>
        </Route>
        <Route path="/create">
      <Profile></Profile>
        </Route>
        <Route path="/">
      <Login></Login>
        <Link to="/create">Create</Link>
        </Route>
      </Switch>
    </div>
  </BrowserRouter>
    </React.Fragment>;
}

export default App;
