import React from "react";
//import NavBar from "./navbar";
import Profile from "./users/profile";
import Login from "./users/login";
import MoviesDisplay from "./movies/moviesDisplay";
import "./app.css";
import { BrowserRouter,Switch, Route,Link } from "react-router-dom";

function App() {
  return <React.Fragment>
  <BrowserRouter>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/movies">Movies</Link>
          </li>
        </ul>
      </nav>
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
