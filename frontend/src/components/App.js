import React from "react";
//import NavBar from "./navbar";
import Profile from "./profile";
import MoviesDisplay from "./movies/moviesDisplay";

function App() {
  return <React.Fragment>
    <Profile></Profile>
    <MoviesDisplay></MoviesDisplay>
  </React.Fragment>;
}

export default App;
